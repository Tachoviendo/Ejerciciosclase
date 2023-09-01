<?php
    include('connection.php');
    $con = connection();

    $id = $_GET['identificador'];
    $sql = "DELETE FROM tablas WHERE id ='$id'";
    $query = mysqli_query($con, $sql);
    if ($query){
        header("Location: index.php");
    }
?>