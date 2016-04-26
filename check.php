<?php
session_start();
include_once('connect.php');

$num = trim($_REQUEST['num']);

switch($num) {

    case 1: // 登录页第一步验证

        $name = trim($_REQUEST['name']);
//        $major = trim($_REQUEST['major']);

//        $sql = "SELECT * FROM students WHERE name='". $name ."' AND major='". $major ."'";
        $sql = "SELECT * FROM students WHERE name='". $name ."'";
        $result = mysql_query( $sql );
        $studentOk = mysql_num_rows( $result );

        $_SESSION['student'] = array();

        if( $studentOk ) {

            $_SESSION['student'] = mysql_fetch_array( $result );
            $_SESSION['student']['ok'] = 1;

        }
        else {

            $_SESSION['student']['ok'] = 0;
            $_SESSION['student']['name'] = $name;

        }

        echo json_encode($_SESSION['student']); // 如果是数组 必须用 json_encode

        //两种方法
        /*$student = '{
            "name":"'.$name.'",
            "schoolId":"'.$_SESSION['student_id'].'"
        }';
        echo $student; // 如果是 json 直接返回*/

        exit;
        break;

    case 2: // 表单提交

        $value = trim($_REQUEST['value']);
        $value = explode("*",$value);

        $_SESSION['student']['student_id'] = 14302010221;

        //$sql = "INSERT INTO results VALUE('',".$_SESSION['student']['student_id'].",$value[0],$value[1],$value[2],$value[3],$value[4],$value[5],$value[6],$value[7],$value[8],$value[9],$value[10],$value[11],$value[12],$value[13],$value[14])";
        //$sql = "INSERT INTO results VALUE (''," . $_SESSION['student']['student_id'] .",".$value[0].",".$value[1].",".$value[2].",".$value[3].",".$value[4].",".$value[5].",".$value[6].",".$value[7].",".$value[8].",".$value[9].",".$value[10].",".$value[11].",".$value[12].",".$value[13].",".$value[14].")";
        $sql = "INSERT INTO results(id,student_id) VALUE('',". $_SESSION['student']['student_id'] .")";
        $result = mysql_query( $sql );

        for($i = 0; $i < count($value); $i++) {
            $val = $value[$i];
            $column = "re_".($i+1);
            $sql = "INSERT INTO results($column) VALUE (". $val .")";
            $result = mysql_query( $sql );
        }

        if( mysql_affected_rows() > 0 ) {
            echo "Hello";
        }
        else {
            echo mysql_error() ."\n".$value[2] ;
        }

        exit;
        break;
}





































