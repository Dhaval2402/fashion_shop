<?php

// db_connect.php
// This file connects your PHP API to the MySQL database

$host = "localhost";
$username = "root";       // Default local password
$password = "";           // Default local username
$database = "sword_db";   // The database created by create_database.php

try {
    // Create connection
    $conn = new PDO("mysql:host=$host;dbname=$database;charset=utf8mb4", $username, $password);
    
    // Set PDO error mode to exception so errors show clearly
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Optional: Only output this when testing if it works
    // echo "Database connected successfully";
} catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
    die();
}

?>
