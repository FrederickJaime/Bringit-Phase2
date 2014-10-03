<?php

echo "Running the Unirest-PHP bindings test suite.\n".
     "If you're trying to use the Unirest-PHP bindings you'll probably want ".
     "to require('lib/Unirest.php'); instead of this file\n";

$ok = @include_once(dirname(__FILE__).'/simpletest/autorun.php');
if (!$ok) {
  $ok = @include_once(dirname(__FILE__).'/../vendor/vierbergenlars/simpletest/autorun.php');
}
if (!$ok) {
  echo "MISSING DEPENDENCY: The Unirest-PHP test cases depend on SimpleTest. ".
       "Download it at <http://www.simpletest.org/>, and either install it ".
       "in your PHP include_path or put it in the test/ directory.\n";
  exit(1);
}

error_reporting(E_ALL & ~(E_STRICT|E_NOTICE));

require_once(dirname(__FILE__) . '/../lib/Unirest.php');

//set keys for demoapi (ephemeral data)
TM::set_publickey('13a267b877f4ca2017fd05cc88ceb519');
TM::set_privatekey('4aabce20f1da7c9ca5a746bcee606b91');

require_once(dirname(__FILE__) . '/Unirest/UnirestTest.php');

?>