<?php
include('connection.php');
$con = connection();
$sql = "SELECT * FROM tablas";
$query = mysqli_query($con, $sql)

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
        <form action="insertarTabla.php" method="POST">
            
            <h1>Crear fila</h1>
            
            <input type="text" name="dato1">
            <input type="text" name="dato2">
            <input type="text" name="dato3">
            <input type="text" name="dato4">

            <input class="sumbit" type="submit" value="Agregar tabla">

        </form>
    </div>
    <div class="tablas">
        
    <h2>filas creadas</h2>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Dato 1</th>
                    <th>Dato 2</th>
                    <th>Dato 3</th>
                    <th>Dato 4</th>
                    <th></th>
                    <th></th>

                    
                </tr>
            </thead>
            <tbody>
            <?php while($row = mysqli_fetch_array($query) ): ?>
                <tr>
                
                    <td><?=$row['id'] ?>   </td>
                    <td><?=$row['dato1'] ?></th>
                    <td><?=$row['dato2'] ?></td>
                    <td><?=$row['dato3'] ?></td>
                    <td><?=$row['dato4'] ?></td>
                    <td><a href="editar.php?identificador=<?=$row['id']?>">Editar</a></td>
                    <td><a href="eliminar.php?id=<?=$row['id'] ?>">Eliminar</a></td>
                
            </tbody>
            <?php endwhile; ?>
        </table>
        
    </div>
                    
</body>
</html>

