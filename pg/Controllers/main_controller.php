<?php

if(isset($_GET['logout'])){
	session_destroy();//unset sesion?
	header('location:index.php');
}
//Inicio app
$db=Conectar::conexion();
require("Views/index.html");
//Funciones de DB.-
	if (isset($_GET['pack1'])){
	repoUsuario::updateData($_GET['pack1'],1);
}
else if(isset($_GET['pack2'])){
	repoUsuario::updateData($_GET['pack2'],2);
}
else if(isset($_GET['pack3'])){
	repoUsuario::updateData($_GET['pack3'],3);
}
else if(isset($_GET['pack4'])){
	repoUsuario::updateData($_GET['pack4'],4);
}
else if(isset($_GET['pack5'])){
	repoUsuario::updateData($_GET['pack5'],5);
}
else if(isset($_GET['pack6'])){
	repoUsuario::updateData($_GET['pack6'],6);
}else{
	echo'<script>console.log("Welcome Programmer")</script>';
}
//menu de enlaces.
if(isset($_GET['opcion'])){
	switch ($_GET['opcion']){
		case '1':
			require("Views/form_loginView.phtml");
			break;
		case '2':
			require("Views/form_newPersona.phtml");
			break;
		case '3':
			$misPacks=repoUsuario::getData();
			require("Views/myView.phtml");
			break;
		case '4':
			require("Views/add.html");
			break;	
	}
}
//alta usuario
if(isset($_POST['registerP'])){
	repoUsuario::addUser($_POST['userName'],$_POST['password']);
}
// login usuario y redireccionamiento REVISAR.
if(isset($_POST['userName']) && isset($_POST['password'])){
	$_SESSION['user']=new Persona($_POST['userName'], $_POST['password']);
	if(!$_SESSION['log']==0){
		header('location:index.php?opcion=3');
	}else{
		header('location:index.php?opcion=1');
	}
}
?>