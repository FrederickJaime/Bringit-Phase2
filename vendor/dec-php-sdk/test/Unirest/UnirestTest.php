<?php

class TmTestConfig extends UnitTestCase{

  public function testConfig(){

    //checks here show in detail things to expect
    $response = TM::get("https://demoapi.thismoment.com/v4.1/api/config", array());

    //check the HTTP status code and the API response codes
    $this->assertEqual(200, $response->code);
    $this->assertEqual(1000, $response->body->status);

    //ensure the returned API object matches what is being called
    $this->assertEqual('config', $response->body->object);

    //there should always be config variables returned
    $properties = get_object_vars($response->body->results);
    $this->assertTrue(array_key_exists("environments", $properties));
    $this->assertTrue(array_key_exists("sites", $properties));
    $this->assertTrue(array_key_exists("sorts", $properties));
    $this->assertTrue(array_key_exists("tracking", $properties));
    $this->assertTrue(array_key_exists("status_codes", $properties));
    $this->assertTrue(array_key_exists("active_status", $properties));

    //there is no user info bound to curl style requests, so the "user" block will not exist here
    $this->assertFalse($response->body->user);

    //every response contains a requested time
    $this->assertTrue(is_numeric($response->body->requested));

  }
}


class TmTestContent extends UnitTestCase{

  private static $content_id = 0;

  public function testContentGet(){

    $response = TM::get("https://demoapi.thismoment.com/v4.1/api/content", array());

    TmTestGlobal::checkStatus($response, true);
    TmTestGlobal::checkStandards($response);

    //where there's content, there's info about counts in the paging block
    $this->assertTrue(isset($response->body->paging->total_results));

    //grab the first one, for testing
    $this->content_id = $response->body->results[0]->content_id;
  }

  public function testContentGetSingle(){

    $response = TM::get("https://demoapi.thismoment.com/v4.1/api/content", array("content_id" => $this->content_id));

    TmTestGlobal::checkStatus($response, true);
    TmTestGlobal::checkStandards($response);

  }

  public function testContentPost(){

    //add a new piece of content, with minimum reqs. will go in as pending.
    $response = TM::post("https://demoapi.thismoment.com/v4.1/api/content", array("title" => "Unit test ".time(), "gallery_id" => 4));

    TmTestGlobal::checkStatus($response, true);
    TmTestGlobal::checkStandards($response, $results = true, $paging = false);

    //capture the new id for update and teardown
    $this->content_id = $response->body->results[0]->content_id;

    //attempt to get the new piece of content in pending mode
    $response_new = TM::get("https://demoapi.thismoment.com/v4.1/api/content", array("content_id" => $this->content_id));

    TmTestGlobal::checkStatus($response, true);
    TmTestGlobal::checkStandards($response, $results = false, $paging = false);

    //will not be returned
    $this->assertEqual(0,count($response_new->body->results));

  }

  public function testContentPostUser(){

    //add a new piece of content, with minimum reqs. will go in as pending.
    $user = '{"name":"Robin Park","user_id":"robinistesting","avatar_url":"https://si0.twimg.com/profile_images/1464291581/robin_normal.jpg","user_url":"https://www.twitter.com/robinistesting","site":"twitter"}';
    $response = TM::post("https://demoapi.thismoment.com/v4.1/api/content", array("user" => $user, "title" => "Unit test user ".time(), "gallery_id" => 4));

    TmTestGlobal::checkStatus($response, true);
    TmTestGlobal::checkStandards($response, $results = true, $paging = false);

    //teardown
    $response = TM::delete("https://demoapi.thismoment.com/v4.1/api/content", array("content_id" => $response->body->results[0]->content_id));


  }

  public function testContentPut(){

    //update and assert the update was comitted
    $response = TM::put("https://demoapi.thismoment.com/v4.1/api/content", array("title" => "UPDATED", "active_status" => "active", "content_id" => $this->content_id));

    TmTestGlobal::checkStatus($response, true);
    TmTestGlobal::checkStandards($response, $results = true, $paging = false);

    $this->assertEqual("UPDATED",$response->body->results[0]->title);

  }

  public function testContentDelete(){

    //teardown
    $response = TM::delete("https://demoapi.thismoment.com/v4.1/api/content", array("content_id" => $this->content_id));

    TmTestGlobal::checkStatus($response, true);
    TmTestGlobal::checkStandards($response, $results = true, $paging = false);

    $this->assertEqual("Success, content id ".$this->content_id." has been removed.",$response->body->results);

  }
}


class TmTestMedia extends UnitTestCase{

  private static $media_id = 0;

  public function testMediaPost(){

    $response = TM::post("https://demoapi.thismoment.com/v4.1/api/media/photo", array("media"=>"@".dirname(__FILE__) . "/../tmyk.jpg"));

    TmTestGlobal::checkStatus($response, true);
    TmTestGlobal::checkStandards($response, $results = true, $paging = false);

    //we will get a media_id
    $this->assertTrue(is_numeric($response->body->results->media_id));

    $this->media_id = $response->body->results->media_id;

  }

  public function testMediaContentPost(){

    $response = TM::post("https://demoapi.thismoment.com/v4.1/api/content", array("title" => "Unit test media ".time(), "gallery_id" => 4, "media_id" => $this->media_id ));

    TmTestGlobal::checkStatus($response, true);
    TmTestGlobal::checkStandards($response, $results = true, $paging = false);

    //media_id will be bound to this piece of content
    $this->assertTrue(is_numeric($response->body->results[0]->media[0]->media_id));

    //teardown
    TM::delete("https://demoapi.thismoment.com/v4.1/api/content", array("content_id" => $response->body->results[0]->content_id));

  }

  public function testMediaLinkYouTubeContentPost(){

    $response = TM::post("https://demoapi.thismoment.com/v4.1/api/content", array("title" => "Unit test media ".time(), "gallery_id" => 4, "media" => "http://www.youtube.com/watch?v=C0DPdy98e4c")); 

    TmTestGlobal::checkStatus($response, true);
    TmTestGlobal::checkStandards($response, $results = true, $paging = false);

    //media_id will be bound to this piece of content
    $this->assertTrue(is_numeric($response->body->results[0]->media[0]->media_id));

    //teardown
    TM::delete("https://demoapi.thismoment.com/v4.1/api/content", array("content_id" => $response->body->results[0]->content_id));

  }


  public function testMediaJsonYouTubeContentPost(){

    $response = TM::post("https://demoapi.thismoment.com/v4.1/api/content", array("title" => "Unit test media ".time(), "gallery_id" => 4, "media" => '{"site":"youtube","site_media_id":"C0DPdy98e4c","type":"video"}'));

    TmTestGlobal::checkStatus($response, true);
    TmTestGlobal::checkStandards($response, $results = true, $paging = false);

    //media_id will be bound to this piece of content
    $this->assertTrue(is_numeric($response->body->results[0]->media[0]->media_id));

    //teardown
    TM::delete("https://demoapi.thismoment.com/v4.1/api/content", array("content_id" => $response->body->results[0]->content_id));

  }


}




//some standards/sanity checking to ensure all is well with the world
class TmTestGlobal {

  //check the HTTP status code and the API response codes
  function checkStatus($response, $api = true){
    $this->assertEqual(200, $response->code);

    if($api)
      $this->assertEqual(1000, $response->body->status);

  }
  //check the standards (results, paging, user, requested)
  function checkStandards($response, $results = true, $paging = true, $user = true, $requested = true){

    if($results)
      $this->assertNotEqual(0,count($response->body->results));
    if($paging)
      $this->assertTrue(isset($response->body->paging));
    if($user)
      $this->assertFalse($response->body->user);
    if($requested)
      $this->assertTrue(is_numeric($response->body->requested));

  }
}
