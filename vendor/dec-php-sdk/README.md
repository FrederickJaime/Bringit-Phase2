# Thismoment DEC | PHP SDK [![Build Status](https://api.travis-ci.org/thismoment/dec-php-sdk.png)](https://travis-ci.org/thismoment/dec-php-sdk)

__Thismoment__ :heart:'s [Unirest](http://unirest.io/)

We area adapting the wonderful work by the team contributors of Unirest to our API spec. Some highlights of this PHP Package:

* Make `GET`, `POST`, `PUT`, `DELETE` requests
* It supports form parameters and file uploads
* Supports gzip
* Customizable timeout
* Automatic JSON parsing into a native object for JSON responses
* Automatic signed requests

# Get started
To make things as easy as possible, follow the below notes to get running quickly.

### Install source from GitHub
We require PHP `v5.3+`. Download the PHP library from Github, and require in your script like so:

To install the source code:

```bash
$ git clone git@github.com:Thismoment/dec-php-sdk.git 
```

And include it in your scripts:

```bash
require_once '/path/to/dec-php-sdk/lib/Unirest.php';
```
or
```bash
require_once(dirname(__FILE__) . '/lib/Unirest.php');
```

### Set your Public and Private keys

For every DEC, there are two keys needed in order for requests to properly be signed and sent, a `public` site key, and a `private` signing key. These can be found in the [Developer Platform](https://developers.thismoment.com), under the Tools section when selecting your DEC from the dropdown.

```php
TM::set_publickey('13a267b877f4ca2017fd05cc88ceb519');
TM::set_privatekey('4aabce20f1da7c9ca5a746bcee606b91');
```

# Working with Requests

Here's a sample request to get content from `demoapi`, passing `gallery_id` with a value of `1`:

```php
$response = TM::get("https://demoapi.thismoment.com/v4.1/api/content", 
  array(
    "gallery_id" => 1
  )
);

$response->code; // HTTP Status code
$response->headers; // Headers
$response->body; // Parsed body
$response->raw_body; // Unparsed body
```

### File Uploads

To upload files in a multipart form representation simply place an `@` symbol before the path:

```php
$response = TM::post("https://demoapi.thismoment.com/v4.1/api/media/photo",
  array(
    "media" => "@".dirname(__FILE__) . "/../photo.jpg"
  )
);
 ```


### Types of Requests
```php
TM::get($url, $parameters = NULL)
TM::post($url, $body = NULL)
TM::put($url, $body = NULL)
TM::delete($url, $body = NULL)
```
  
- `url` - Endpoint, address, or uri to be acted upon and requested information from.
- `parameters` - an array of key/value pairs to be sent in
- `body` - Request Body as associative array or object

### Response
Upon recieving a response the SDK returns the result in the form of an Object.

- `code` - HTTP Response Status Code (Example `200`)
- `headers` - HTTP Response Headers
- `body` - Parsed response body where applicable, for example JSON responses are parsed to Objects / Associative Arrays.
- `raw_body` - Un-parsed response body

### Timeout

You can set a custom timeout value (in **seconds**):

```php
TM::timeout(5); // 5s timeout
```

# Unit tests

If it's not testing, it's not shipping.  To get unit tests running, follow the below steps to kick things off with composer. 

### Install Composer

In the SDK basepath, install composer to get things preped to build.

`curl -sS https://getcomposer.org/installer | php`

Response will be something like:
```bash
#!/usr/bin/env php
All settings correct for using Composer
Downloading...

Composer successfully installed to: path/to/dec-php-sdk/composer.phar
```

### Run Composer Installer

Running composer to install will get the required packages, check dependencies and bring down whatever is needed to start the testing package. 

`php composer.phar install`

Response will be something like:
```bash
Loading composer repositories with package information
Installing dependencies (including require-dev)
  - Installing simpletest/simpletest (v1.1.6)
    Downloading: 100%         

  - Installing vierbergenlars/simpletest (v1.1.6)
    Downloading: 100%         

Writing lock file
Generating autoload files
```

### Run Tests

Move into the `tests` directory and you can run either by command line or in a browser. `cd test/ && php Unirest.php` 

You'll get something back such as:
```bash
Unirest.php
OK
Test cases run: 3/3, Passes: 50, Failures: 0, Exceptions: 0
```

# Contributing

Notice anything wacky?  Let us know by opening an issue here, submitting a pull, or opening a discussion at http://developers.thismoment.com

