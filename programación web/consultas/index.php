
<?php
    include('connection.php')
?>  

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
</head>

<body>
    <div>
        <h1>Ingrese datos</h1>
        <form action="index.php" method="POST">
            <input type="text" name="nombre" id="name"><br>
            <input type="text" name="apellido" id="ap"><br>
            <input type="date" name="fdn" id="fdn"><br>
            <input type="submit" value="MANDALE">


            </form>
    </div>
    <div>
        <h1>Mostar datos</h1>
        <table>
            <tr>
                <th>id</th>
                <th>fecha de nacimiento</th>
                <th>nombre</th>
                <th>apellido</th>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </table>
    </div>



</body>

</html>