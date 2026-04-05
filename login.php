<?php
include "connect.php";

$data = json_decode(file_get_contents("php://input"), true);

$name = $data['name'];
$regno = $data['regno'];
$department = $data['department'];
$semester = $data['semester'];
$phone = $data['phone'];
$username = $data['username'];
$password = $data['password'];

$sql = "INSERT INTO students 
(name, regno, department, semester, phone, username, password)
VALUES 
('$name', '$regno', '$department', '$semester', '$phone', '$username', '$password')";

if ($conn->query($sql)) {
    echo json_encode(["status" => "success"]);
} else {
    echo json_encode(["status" => "error"]);
}
?>