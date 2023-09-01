<?php
    function connection(){
        
        
        try{

            $host = "localhost";
            $user = "root";
            $pass = "Nacho324";
            $bd = "vehiculos";
    
            $connect = mysqli_connect($host, $user, $pass);
            mysqli_select_db($connect, $bd);
            return $connect;
    

        }catch(\Throwable $th){
            die("FALLO LA CONEXION PIBE: ".$th->getMessage());
        }
        
    }
?>