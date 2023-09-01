<?php
    include('connection.php');
    $con = connection();

    $id=null;
    $dato1 = $_POST['dato1'];
    $dato2 = $_POST['dato2'];
    $dato3 = $_POST['dato3'];
    $dato4 = $_POST['dato4'];

    $sql = "INSERT INTO tablas VALUES('$id', '$dato1', '$dato2', '$dato3', '$dato4')";
    $query = mysqli_query($con, $sql);

    if ($query){
        Header ("Location: index.php");
    }


    
?>
    
    