<?php
require_once 'Connect.php';
$conn = new Connect();
$db = $conn->conn();
$sql = "select * from contactTypes where active = 'Y';";
$response = $db->getAll($sql);
if($response){
	echo json_encode($response);
}else{
	echo $db->errorMsg();
}
?>
