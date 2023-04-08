<?php

namespace App;
use \PDO;

/**
 * 
 */
class Database
{
	private $host = 'localhost';
	private $dbname = 'hxqtthdq_application_edvo';
	private $username = 'hxqtthdq_tmpHzwe8';
	private $password = 'NaJdmb69AFDvtY'; 
	public $conn;


	public function connect() { 

		$conn = null;

		try { 

		$conn = new PDO('mysql:host=localhost;dbname=hxqtthdq_application_edvo', 'hxqtthdq_tmpHzwe8', 'NaJdmb69AFDvtY');

		} catch(PDOException $e) {
			echo " Connection error: ".$e->getMessage();
		} 
		return $conn;
	}

}