<?php

$connect = mysqli_connect("localhost", "phpmyadmin", "Salehin.1245", "StudentDB");

$output = array();

$query = "SELECT * FROM Product";

$result = mysqli_query($connect, $query);

if(mysqli_num_rows($result) > 0){
    while($row = mysqli_fetch_array($result)){
        $output[] =$row;
    }
    echo json_encode($output);
}

?>