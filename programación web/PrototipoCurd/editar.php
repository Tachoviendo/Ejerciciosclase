<?php
    include('connection.php');
    $con = connection();

    $id = $_GET['identificador'];

    $sql = "SELECT * FROM tablas WHERE id='$id'";
    $query = mysqli_query($con, $sql);
    $row = mysqli_fetch_array($query);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="css/cssCrud.css">
</head>
<body>
    <div class ="campos">
        <form action="editar.php" method="POST">
            
            <h1>Editar fila</h1>
            
            <input type="hidden" name="id" value="<?=$row['id']?>" >
            <input type="text" name="dato1" value="<?=$row['dato1']?>" >
            <input type="text" name="dato2" value="<?=$row['dato2']?>">
            <input type="text" name="dato3" value="<?=$row['dato3']?>">
            <input type="text" name="dato4" value="<?=$row['dato4']?>">

            <input class="sumbit" type="submit" value="Agregar tabla">

        </form>
    </div>
    
</body>
</html>
