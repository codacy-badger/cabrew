<?php
// https://mattstauffer.co/blog/sublime-text-3-for-php-developers
$cabrew_array  = parse_ini_file('cabrew.ini', true);
$skin = $cabrew_array['application']['skin'];;
$title = $cabrew_array['application']['title'];
$client_path = 'client/';
$server_path = 'server/';
$source_path = '../../../';
$classes = array();
$classes[] = "ClassDefaults.js";
$classes[] = "library.js";
$classes[] = "Desktop.js";
$classes[] = "Navigation.js";
$classes[] = "ContextMenu.js";
$classes[] = "Shared.js";
$classes[] = "AddEvent.js";
$classes[] = "AddMember.js";
$classes[] = "BrewAttendence.js";
$classes[] = "BrewClubs.js";
$classes[] = "BrewContactPoints.js";
$classes[] = "BrewContacts.js";
$classes[] = "BrewMedia.js";
$classes[] = "Corporations.js";
$classes[] = "EditMember.js";
$classes[] = "MemberChairs.js";
$classes[] = "MemberContacts.js";
$classes[] = "MemberDates.js";
$classes[] = "MemberNotes.js";
$classes[] = "MemberPoints.js";
$classes[] = "MemberStatus.js";
$classes[] = "SendMessage.js";
$classes[] = "ShowInfo.js";
echo "<html>
<head>
<script type='text/javascript'>var application.server_path = '$server_path';</script>
<script>var isomorphicDir='{$source_path}SmartClient_v110p_2017-05-12_LGPL/smartclientRuntime/isomorphic/';</script>
<script src='{$source_path}SmartClient_v110p_2017-05-12_LGPL/smartclientRuntime/isomorphic/system/modules/ISC_Core.js'></script>
<script src='{$source_path}SmartClient_v110p_2017-05-12_LGPL/smartclientRuntime/isomorphic/system/modules/ISC_Foundation.js'></script>
<script src='{$source_path}SmartClient_v110p_2017-05-12_LGPL/smartclientRuntime/isomorphic/system/modules/ISC_Containers.js'></script>
<script src='{$source_path}SmartClient_v110p_2017-05-12_LGPL/smartclientRuntime/isomorphic/system/modules/ISC_Grids.js'></script>
<script src='{$source_path}SmartClient_v110p_2017-05-12_LGPL/smartclientRuntime/isomorphic/system/modules/ISC_Forms.js'></script>
<script src='{$source_path}SmartClient_v110p_2017-05-12_LGPL/smartclientRuntime/isomorphic/system/modules/ISC_DataBinding.js'></script>
<script src='{$source_path}SmartClient_v110p_2017-05-12_LGPL/smartclientRuntime/isomorphic/skins/{$skin}/load_skin.js'></script>
<meta http-equiv='Content-Type' content='text/html; charset=utf-8'>
<title>$title</title>
</head>
<body>
<script>
";
$content = '';
foreach($classes as $class) {
	if(file_exists($class)){
		echo $client_path . $class . PHP_EOF;
		$content .= file_get_contents($client_path . $class);
	}
}
echo $content;
$cmdret = '';
exec("git status --short --branch", $cmdret);
$str='';
foreach ($cmdret as $key) {
	$str .= $key . '<br/>';
}
echo 'isc.Desktop.create({gitInfo: "'. $str .'"});
</script>';
echo '
</body>
</html>';
?>
