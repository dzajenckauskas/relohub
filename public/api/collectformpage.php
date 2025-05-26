<?php

header("Content-Type: application/json");

$data = @file_get_contents("php://input");

$timestamp = date('Y-m-d H:i:s');
$content = "$timestamp : " . __FILE__ . " : ". print_r($data, true) . "\n";
file_put_contents(__DIR__.'/apilog.txt', $content, FILE_APPEND);

/* Pass data to CMS STARTS */
$ch = curl_init("https://delivercms.binarika.com/createNewLeadOffer_iwvAerG5NKxmV68y7dcS3LuHBkXjDMRP8rWdhxnA.php");

curl_setopt($ch, CURLOPT_REFERER, 'r8QstXVySLDcCPbgHmx4xbPTgdMFNfjVD9a4pzRuTrjDMQyUpR7oJWNqA9ac');
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));

$result = curl_exec($ch);

curl_close($ch);

$result_decoded       = json_decode($result);

if ($result_decoded) {
	$price                = $result_decoded->price;
	$orderReferenceNumber = $result_decoded->orderReferenceNumber;
	$uuid                 = $result_decoded->uuid;

	setcookie("orderReferenceNumber", $orderReferenceNumber, 0, '/', ".Relohub.co.uk");
	echo $orderReferenceNumber . " " . $uuid;
} else {
	echo 'empty';
}

/* Pass data to CMS ENDS */

// echo $orderReferenceNumber . " " . $uuid;
