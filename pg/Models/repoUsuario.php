<?php
class repoUsuario{

	public static function addUser($n,$p){
		$db=Conectar::conexion();
		$consulta="INSERT INTO usuario(nombre,clave) VALUES ('".$n."', '".$p."')";
		$result=$db->query($consulta);
	}

	public static function updateData($data,$p){
		$db=Conectar::conexion();
		$result=$db->query('SELECT card'.$p." FROM guia where usuario='".$_SESSION['user']->getNombre()."'");
		if($row=$result->fetch_assoc()){
			$con="UPDATE guia SET card".$p."='".$data."' WHERE usuario='".$_SESSION['user']->getNombre()."'";
			$result=$db->query($con);
		}else{
			$consulta="INSERT INTO guia(usuario, card".$p.") VALUES ('".$_SESSION['user']->getNombre()."','".$data."')";
			$result=$db->query($consulta);
			}
		echo'<script>alert("Cambios guardados.-")</script>';	
	}
	
	public static function getData(){
		$db=Conectar::conexion();
		$pack=array();			//La fila 0 es para que coincida luego el 1 con el 1 y guardar user en 0
		array_push($pack, "Fila 0: cabecera personalizada del usuario: ".$_SESSION['user']->getNombre());
		for($i=1;$i<=6;$i++){
			$result=$db->query('SELECT card'.$i." FROM guia where usuario='".$_SESSION['user']->getNombre()."'");
			$row=$result->fetch_assoc();
			if(strlen($row['card'.$i])>0){
				array_push($pack, $row['card'.$i]);
			}
			else{
				array_push($pack, "Lista ".$i." Vacia.-");			}
		}
		return $pack;
	}

	public static function testDB(){
		$db=Conectar::conexion();
		if($result=$db->query('Show databases')){
			return 1;
		}else{
			return 0;
		}
	}
}	

?>



