<?php
include "connect.php";

$regno = $_GET['regno'];

$result = $conn->query("SELECT * FROM students WHERE regno='$regno'");

echo json_encode($result->fetch_assoc());
?>