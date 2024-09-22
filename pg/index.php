<?php
	 //carga de clases
  	 require_once("db.php"); 
  	 require_once("Models/persona_model.php");
	   require_once("Models/repoUsuario.php");
  	//iniciar-cerrar sesion y control de seguridad en el que en funcion de los recursos disponibles redirige a un sitio u a otro del sitio web.   
  	if(session_start()&&repoUsuario::testDB()){
  	 require_once("Controllers/main_controller.php");
  	}else{
      header("location:html/index.html?db"); 
    }
?>