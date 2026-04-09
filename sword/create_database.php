<?php

// Database configuration
$host = "localhost";
$username = "root";       // Default XAMPP/WAMP username
$password = "";           // Default XAMPP/WAMP password (usually empty)
$database = "sword_db";   // Name of the database to be created

try {
    // 1. Connect to MySQL server (without specifying a database yet)
    $pdo = new PDO("mysql:host=$host", $username, $password);
    // Set the PDO error mode to exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    echo "Connected to MySQL successfully.<br>";

    // 2. Create the database if it does not exist
    $sql = "CREATE DATABASE IF NOT EXISTS `$database` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci";
    $pdo->exec($sql);
    echo "Database `$database` created or already exists.<br>";

    // 3. Connect specifically to the newly created database
    $pdo->exec("USE `$database`");

    // 4. Create Tables based on your frontend (script.js) structure

    // Table: Users
    $sqlUsers = "CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(150) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )";
    $pdo->exec($sqlUsers);
    echo "Table `users` created successfully.<br>";

    // Table: Cart
    $sqlCart = "CREATE TABLE IF NOT EXISTS cart (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        product_id INT NOT NULL,
        size VARCHAR(10) NOT NULL,
        qty INT NOT NULL DEFAULT 1,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    )";
    $pdo->exec($sqlCart);
    echo "Table `cart` created successfully.<br>";

    // Table: Wishlist
    $sqlWishlist = "CREATE TABLE IF NOT EXISTS wishlist (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        product_id INT NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
        UNIQUE(user_id, product_id)
    )";
    $pdo->exec($sqlWishlist);
    echo "Table `wishlist` created successfully.<br>";

    // Table: Orders
    $sqlOrders = "CREATE TABLE IF NOT EXISTS orders (
        id INT AUTO_INCREMENT PRIMARY KEY,
        order_number VARCHAR(50) NOT NULL UNIQUE, /* e.g., AMZ-SWORD-1234567 */
        user_id INT NOT NULL,
        order_date VARCHAR(50) NOT NULL,
        total_amount DECIMAL(10,2) NOT NULL,
        payment_method VARCHAR(50) NOT NULL,
        shipping_address TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    )";
    $pdo->exec($sqlOrders);
    echo "Table `orders` created successfully.<br>";

    // Table: Order Items (Products inside an order)
    $sqlOrderItems = "CREATE TABLE IF NOT EXISTS order_items (
        id INT AUTO_INCREMENT PRIMARY KEY,
        order_id INT NOT NULL,
        product_name VARCHAR(255) NOT NULL,
        product_price DECIMAL(10,2) NOT NULL,
        qty INT NOT NULL,
        size VARCHAR(10) NOT NULL,
        image_url TEXT NOT NULL,
        FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE
    )";
    $pdo->exec($sqlOrderItems);
    echo "Table `order_items` created successfully.<br>";

    echo "<br><b>All tables have been initialized! The SWORD database is ready.</b>";

} catch (PDOException $e) {
    echo "<h2>Error Setup Failed!</h2>";
    echo "Connection or Initialization failed: " . $e->getMessage();
}

// ---------------------------------------------------------
// Example Connection File (db_connect.php)
// You can copy this part into a separate file to use in your API
// ---------------------------------------------------------
/*
<?php
$host = "localhost";
$username = "root";
$password = "";
$database = "sword_db";

try {
    $conn = new PDO("mysql:host=$host;dbname=$database;charset=utf8mb4", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>
*/
?>
