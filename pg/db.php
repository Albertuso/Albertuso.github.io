<?php
//controlador de la base de datos
class Conectar{
    public static function conexion(){
        $conexion=new mysqli("localhost", "root", "", "a");
		return $conexion;
    }
}
?>