<?php

$connect = mysqli_connect("localhost", "phpmyadmin", "Salehin.1245", "StudentDB");

$data = json_decode(file_get_contents("php://input"));

if(count($data)>0){
    
    $test = mysqli_real_escape_string($connect, $data->test);
    $qurey = "INSERT INTO test(test) VALUES ('$test')";
    if(mysqli_query($connect, $qurey)){
        echo "Data Inserted..........!";
    }
    else{
        echo "Data Not Inserted";
    }
}














// $my_data = json_decode(file_get_contents("php://input"));
// $test = mysql_real_escape_string($data->test);
// mysql_connect("localhost", "phpmyadmin", "Salehin.1245");
// mysql_select_db("StudentDB");
// mysql_query("INSERT INTO test('test')VALUES('".$test."')");

?>