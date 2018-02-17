<!DOCTYPE html>
<html>
<body>
<head>
<title>Tasks</title>
<link rel="stylesheet" type"text/css" href="../lib/reporter.css">
</head>
<body>
<?php
$html = '';
require_once('../lib/Reporter.php');
$params['bind'] = array();
$params['ini_file'] = '../lib/server.ini';
$params['show_total'] = true;
$params['title'] = 'Library Books';
$params['sql'] = "select
trim(concat(ifnull(series,''), ' ', title)) as name,
author,
copyright,
abstract
from library_books
order by
trim(concat(ifnull(series,''), ' ', title));";
$lclass = New Reporter();
$html .= $lclass->init($params);
echo $html;
?>
</body>
</html>
