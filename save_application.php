<?php
include "connect.php";

$data = json_decode(file_get_contents("php://input"), true);

$regno = $data['regno'];
$attendance = $data['attendance'];
$leave_type = $data['leaveType'];
$days = $data['days'];
$from_date = $data['fromDate'];
$to_date = $data['toDate'];
$status = $data['status'];

$sql = "INSERT INTO applications 
(regno, attendance, leave_type, days, from_date, to_date, status)
VALUES 
('$regno', '$attendance', '$leave_type', '$days', '$from_date', '$to_date', '$status')";

if ($conn->query($sql)) {
    echo json_encode(["status" => "saved"]);
} else {
    echo json_encode(["status" => "error"]);
}
?>
$conn->query("UPDATE students SET check_count = check_count + 1 WHERE regno='$regno'");