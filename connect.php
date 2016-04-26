<?php
$connect = @mysql_connect('localhost','root','');

if ( !$connect ) {
    die('Could not connect:' . mysql_error());
}

$db_selected = mysql_select_db("students",$connect);
mysql_query("set names utf8");

if ( !$db_selected ) {
    die("Cannot use table :" . mysql_error());
}












