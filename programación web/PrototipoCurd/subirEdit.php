<?php
    include('connection.php');
    $con = connection();

    $id = $_POST['id'];
    $dato1 = $_POST['dato1'];
    $dato2 = $_POST['dato2'];
    $dato3 = $_POST['dato3'];
    $dato4 = $_POST['dato4'];

    $sql = "UPDATE tablas SET dato1='$dato1', dato2='$dato2', dato3='$dato3', dato4='$dato4' WHERE id='$id'";
    $query = mysqli_query($con, $sql);

    if ($query){
        Header ("Location: index.php");
    }
    

    
?>
    