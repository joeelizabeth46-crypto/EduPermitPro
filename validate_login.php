<?php
include "connect.php";

$data = json_decode(file_get_contents("php://input"), true);

$username = $data['username'];
$password = $data['password'];

$result = $conn->query("SELECT * FROM students 
WHERE username='$username' AND password='$password'");

if ($result->num_rows > 0) {
    echo json_encode($result->fetch_assoc());
} else {
    echo json_encode(["status" => "invalid"]);
}
?>