<?php
require_once 'Connect.php';
$table = 'brew_contacts';
$conn = new Connect();
$db = $conn->conn();
if(!$db->isConnected()){
	echo $db->errorMsg();
}
$wheres = ' where 1=1 ';
if(isset($_REQUEST['clubID'])) {
	$wheres .= ' and clubID = ' . intval($_REQUEST['clubID']);
}
if(isset($_REQUEST['priority'])){
	$wheres .= ' and priority =  ' . intval($_REQUEST['priority']);
}
$sql = "select * from $table $wheres;";
$response = $db->getAll($sql);
if($response){
	echo json_encode($response);
}else{
	echo json_encode(array());
}
$db->close();
?>
