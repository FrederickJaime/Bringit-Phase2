<?php

namespace DecPhpSdk\lib;

use Unirest\HttpMethod;
use Unirest\HttpResponse;

/** extender with TM specific items */
class TM extends Unirest{


	/** Thismoment specific */
	private static $public_key = "";
	private static $private_key = "";

		/**
		 * Set the public API key
		 * @param string $public_key value
		 */
		public static function set_publickey($public_key) {
				TM::$public_key = $public_key;
		}

		/**
		 * Set the private API key
		 * @param string $private_key value
		 */
		public static function set_privatekey($private_key) {
				TM::$private_key = $private_key;
		}

		/**
		 * ADAPTER to only use TM req. fields
		 * Send a GET request to an object
		 * @param string $object object to send the GET request to
		 * @param mixed $parameters parameters to send in the querystring
		 * @return string|stdObj response string or stdObj if response is json-decodable
		 */
		public static function get($url, $parameters = NULL, $headers = NULL, $username = NULL, $password = NULL)
		{
			// return parent::get($url, $headers = array(), $parameters, $username = NULL, $password = NULL);
			return TM::request(HttpMethod::GET, $url, $parameters, $headers = NULL, $username = NULL, $password = NULL);
		}
		
		/**
		 * ADAPTER to only use TM req. fields
		 * Send POST request to a URL
		 * @param string $url object to send the POST request to
		 * @param mixed $body POST body data
		 * @return string|stdObj response string or stdObj if response is json-decodable
		 */
		public static function post($url, $body = NULL, $headers = NULL, $username = NULL, $password = NULL)
		{
				return TM::request(HttpMethod::POST, $url, $body, $headers, $username, $password);
		}
		
		/**
		 * ADAPTER to only use TM req. fields
		 * Send DELETE request to a object
		 * @param string $url object to send the DELETE request to
		 * @param mixed $body DELETE body data
		 * @return string|stdObj response string or stdObj if response is json-decodable
		 */
		public static function delete($url, $body = NULL, $headers = NULL, $username = NULL, $password = NULL)
		{
				return TM::request(HttpMethod::DELETE, $url, $body, $headers, $username, $password);
		}

		/**
		 * ADAPTER to only use TM req. fields
		 * Send PUT request to a object
		 * @param string $url object to send the PUT request to
		 * @param mixed $body PUT body data
		 * @return string|stdObj response string or stdObj if response is json-decodable
		 */
		public static function put($url, $body = NULL, $headers = NULL, $username = NULL, $password = NULL)
		{
				return TM::request(HttpMethod::PUT, $url, $body, $headers, $username, $password);
		}




        /**
         * Send a cURL request
         * @param string $httpMethod HTTP method to use (based off \Unirest\HttpMethod constants)
         * @param string $url URL to send the request to
         * @param mixed $body request body
         * @param array $headers additional headers to send
         * @param string $username  Basic Authentication username
         * @param string $password  Basic Authentication password
         * @throws Exception if a cURL error occurs
         * @return HttpResponse
         */
        public static function request($httpMethod, $url, $body = NULL, $headers = array(), $username = NULL, $password = NULL)
        {

        	if($httpMethod !== HttpMethod::GET){
	        	$body['site_key'] = TM::$public_key;
	        	$body['signature'] = TM::generate_signature($body);        		
        	}

        	return parent::request($httpMethod, $url, $body, $headers, $username, $password);

        }		


		private static function generate_signature($params) {
	        foreach(array("object", "action", "response", "version", "signature", "site_key", "tm-token","pretty","media_file","media") as $undo) {
	            if(($undo == "media") && ($params['media'][0] != "@")){
        		continue;
        	    }
	            unset($params[$undo]);
	        }

	        // work with sorted data
	        if(is_array($params))
	            ksort($params);

	        // generate the base string
	        $base_string = '';
	        if(is_array($params)) {
	            $base_string = http_build_query($params, false, '&');
	        }
	        $base_string = TM::$private_key . $base_string;

	        return md5($base_string);
	    }



}
