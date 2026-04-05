<?php
$conn = new mysqli("localhost", "root", "", "edupermitpro");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>