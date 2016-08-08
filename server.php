<?php

$fileName = "data.xml";
$rootTagName = "Top10";
$entryTagName = "Entry";
$nameAttribute = "name";
$pointsAttribute = "points";

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
  case 'GET':
    // Load the content and return it to the client
	$xml = new DOMDocument();
	$xml->load($fileName);
	foreach($xml->getElementsByTagName($entryTagName) as $entry) {
        echo $entry->getAttribute($nameAttribute).",".$entry->getAttribute($pointsAttribute).";";
    }
	break;
  case 'PUT':
    echo 'PUT ... is unused'; break;
  case 'POST':
  	// In case the file does not exist yet, we will create one
    if (file_exists ( $fileName ) == FALSE) {
		$xml = new DOMDocument();
		$xml_top = $xml->createElement($rootTagName);
		$xml->appendChild( $xml_top );
		$xml->save($fileName);
	}
	
	// Save one entry
	$name = $_REQUEST[$nameAttribute];
	$points = $_REQUEST[$pointsAttribute];
	
	// load xml
	$xml = new DOMDocument();
	$xml->load($fileName);
	
	// new entry
	$xml_entry = $xml->createElement($entryTagName);
	$xml_entry->setAttribute($nameAttribute, $name);
	$xml_entry->setAttribute($pointsAttribute, $points);
	
	// get the root element
	$xml_top = $xml->documentElement;
	$xml_top->appendChild( $xml_entry );
	
	// and finally save it
	$xml->save($fileName);
	
	break;
  case 'DELETE':
    echo 'DELETE is unused ... instead delete the entire xml file if you wish!'; break;
}




?>