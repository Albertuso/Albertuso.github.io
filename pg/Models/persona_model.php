<?php
class Persona {
	private $nombre;
	function __construct($nombre,$pass){
		$db=Conectar::conexion();
			if($result=$db->query("SELECT * FROM usuario WHERE nombre ='".$nombre."' AND clave='".$pass."'")){
					if($datos=$result->fetch_assoc()){
						$this->nombre=$datos['nombre'];
						$_SESSION['log']=1;
					}
					else{
						$_SESSION['log']=0;
						$this->nombre="Anonymous";
					}
			}
	}
	function getNombre(){
		return $this->nombre;
	}
}
?>