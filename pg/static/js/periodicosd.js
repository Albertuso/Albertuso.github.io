 var contador1=0,contador2=0,contador3=0,contador4=0,contador5=0,contador6=0,contador7=0,contador8=0,contador9=0;
    // * Array con las imagenes y enlaces que se iran mostrando en la web
       var imagenes1=new Array(
        ['../../static/images/periodicos/nacional/1.jpg','http://www.rtve.es/noticias/', 'RTVE'],
        ['../../static/images/periodicos/nacional/2.jpg','https://www.efe.com/efe/espana/1', 'EFE'],
        ['../../static/images/periodicos/nacional/3.jpg','https://www.antena3.com/noticias/espana/', 'Antena 3'],
        ['../../static/images/periodicos/nacional/4.jpg','https://www.cuatro.com/noticias/', 'Cuatro'],
        ['../../static/images/periodicos/nacional/5.jpg','https://www.telecinco.es/informativos/', 'Telecinco'],
        ['../../static/images/periodicos/nacional/6.jpg','https://www.lasexta.com/noticias/', 'La sexta'],
        ['../../static/images/periodicos/nacional/7.jpg','https://www.cope.es/', 'COPE'],
        ['../../static/images/periodicos/nacional/8.jpg','http://cadenaser.com/', 'SER']
    );
    var imagenes2=new Array(
        ['../../static/images/periodicos/religion/1.jpg','https://www.religionenlibertad.com/', 'Religion en libertad'],
        ['../../static/images/periodicos/religion/2.jpg','https://www.webislam.com/', 'Web Islam'],
        ['../../static/images/periodicos/religion/3.jpg','https://www.ciudadredonda.org/', 'Ciudad Redonda'],
        ['../../static/images/periodicos/religion/4.jpg','https://www.verislam.com/', 'Ver Islam'],
        ['../../static/images/periodicos/religion/5.jpg','http://www.infocatolica.com/', 'Info Catolica'],
        ['../../static/images/periodicos/religion/6.jpg','https://www.aciprensa.com/', 'Aci prensa'],
        ['../../static/images/periodicos/religion/7.jpg','http://www.redescristianas.net/', 'Redes Cristianas'],
        ['../../static/images/periodicos/religion/8.jpg','http://www.atrio.org/', 'Atrio'],
        ['../../static/images/periodicos/religion/9.jpg','https://radialistas.net/', 'Radialistas'],
        ['../../static/images/periodicos/religion/10.jpg','http://servicioskoinonia.org/', 'Koinonia']
     );
    var imagenes3=new Array(
        ['../../static/images/periodicos/autonomicos/1.jpg','https://www.granadahoy.com/', 'Granada hoy'],
        ['../../static/images/periodicos/autonomicos/2.jpg','http://www.diariogranada.com/', 'Diario Granada'],
        ['../../static/images/periodicos/autonomicos/3.jpg','https://www.ideal.es/', 'Ideal'],
        ['../../static/images/periodicos/autonomicos/4.jpg','http://www.granadadigital.es/', 'Granada Digital'],
        ['../../static/images/periodicos/autonomicos/5.jpg','http://www.elindependientedegranada.es/', 'El independiente'],
        ['../../static/images/periodicos/autonomicos/6.jpg','http://granadatimes.com/', 'Granada Times'],
        ['../../static/images/periodicos/autonomicos/7.jpg','http://cadenaser.com/emisora/radio_granada/', 'Ser Radio Granada'],
        ['../../static/images/periodicos/autonomicos/8.jpg','https://andaluciainformacion.es/granada/', 'Viva Granada']
    );
    var imagenes4=new Array(
        ['../../static/images/periodicos/nacional2/1.jpg','https://prnoticias.com/', 'PR Noticias'],
        ['../../static/images/periodicos/nacional2/2.jpg','https://www.ondacero.es/', 'Onda cero'],
        ['../../static/images/periodicos/nacional2/3.jpg','https://www.abc.es/', 'ABC'],
        ['../../static/images/periodicos/nacional2/4.jpg','https://www.20minutos.es/', '20 minutos'],
        ['../../static/images/periodicos/nacional2/5.jpg','https://www.publico.es/', 'Publico'],
        ['../../static/images/periodicos/nacional2/6.jpg','https://www.lavanguardia.com/', 'La vanguardia'],
        ['../../static/images/periodicos/nacional2/7.jpg','https://elpais.com/', 'El pais'],
        ['../../static/images/periodicos/nacional2/8.jpg','http://www.elmundo.es/', 'El mundo']
    );
    var imagenes5=new Array(
        ['../../static/images/periodicos/deporte/1.jpg','http://www.marca.com/', 'Marca'],
        ['../../static/images/periodicos/deporte/2.jpg','https://www.mundodeportivo.com/', 'Mundo deportivo'],
        ['../../static/images/periodicos/deporte/3.jpg','https://as.com/', 'AS'],
        ['../../static/images/periodicos/deporte/4.jpg','https://www.sport.es/es/', 'Sport'],
        ['../../static/images/periodicos/deporte/5.jpg','http://espndeportes.espn.com/', 'ESPN'],
        ['../../static/images/periodicos/deporte/6.jpg','https://www.superdeporte.es/', 'Super Deporte'],
        ['../../static/images/periodicos/deporte/7.jpg','http://www.estadiodeportivo.com/', 'Estadio deportivo'],
        ['../../static/images/periodicos/deporte/8.jpg','https://www.diariogol.com/', 'Diario gol'],
        ['../../static/images/periodicos/deporte/9.jpg','http://www.acb.com/', 'ACB'],
        ['../../static/images/periodicos/deporte/10.jpg','http://www.nba.com/#/', 'NBA'],
        ['../../static/images/periodicos/deporte/11.jpg','http://www.motogp.com/', 'Moto GP'],
        ['../../static/images/periodicos/deporte/12.jpg','https://rincondelmotor.com/', 'Rincon del motor'],
        ['../../static/images/periodicos/deporte/13.jpg','https://www.motociclismo.es/', 'Motociclismo'] 
        );
    var imagenes6=new Array(
        ['../../static/images/periodicos/locales/1.jpg','http://www.granadadeporte.es/', 'Granada deporte'],
        ['../../static/images/periodicos/locales/2.jpg','http://www.andaluciadeportiva.com/', 'Andalucia deporte'],
        ['../../static/images/periodicos/locales/3.jpg','http://www.alboloteinformacion.com/', 'Albolote informacion'],
        ['../../static/images/periodicos/locales/4.jpg','https://andaluciainformacion.es/baza/', 'Andalucia informacion'],
        ['../../static/images/periodicos/locales/5.jpg','http://www.infocostatropical.com/', 'infocosta tropical'],
        ['../../static/images/periodicos/locales/6.jpg','http://www.motrildigital.com/', 'Motril digital'],
        ['../../static/images/periodicos/locales/7.jpg','https://almunecardigital.com/', 'Almunecar digital'],
        ['../../static/images/periodicos/locales/8.jpg','http://diarioalmunecar.com/', 'Diario Almunecar']
    );
    var imagenes7=new Array(
        ['../../static/images/periodicos/nacional3/1.jpg','https://www.elperiodico.com/es/', 'El periodico'],
        ['../../static/images/periodicos/nacional3/2.jpg','https://www.elconfidencial.com/', 'El confidencial'],
        ['../../static/images/periodicos/nacional3/3.jpg','https://okdiario.com/', 'OK Diario'],
        ['../../static/images/periodicos/nacional3/4.jpg','http://diario16.com/', 'Diario 16'],
        ['../../static/images/periodicos/nacional3/5.jpg','http://www.periodistadigital.com/', 'Periodista digital'],
        ['../../static/images/periodicos/nacional3/6.jpg','http://www.diariosigloxxi.com/', 'Diario siglo XVI'],
        ['../../static/images/periodicos/nacional3/7.jpg','https://www.huffingtonpost.es/', 'El Huffington Post'],
        ['../../static/images/periodicos/nacional3/8.jpg','https://www.larazon.es/', 'La razon']
    );
    var imagenes8=new Array(
        ['../../static/images/periodicos/economia/1.jpg','http://www.eleconomista.es/', 'El conomista'],
        ['../../static/images/periodicos/economia/2.jpg','https://intereconomia.com/', 'Intereconomia'],
        ['../../static/images/periodicos/economia/3.jpg','https://www.economiadigital.es/', 'Economia digital'],
        ['../../static/images/periodicos/economia/4.jpg','https://www.forbes.com/', 'Forbes'],
        ['../../static/images/periodicos/economia/5.jpg','https://www.libremercado.com/', 'Libre mercado'],
        ['../../static/images/periodicos/economia/6.jpg','https://es.fundspeople.com/', 'Funds people'],
        ['../../static/images/periodicos/economia/7.jpg','http://www.expansion.com/', 'Expansion'],
        ['../../static/images/periodicos/economia/8.jpg','https://www.diarioabierto.es/', 'Diario abierto'],
        ['../../static/images/periodicos/economia/9.jpg','http://financialred.com/', 'Financial red'],
        ['../../static/images/periodicos/economia/10.jpg','https://www.elblogsalmon.com/', 'El blog salmon'],
        ['../../static/images/periodicos/economia/11.jpg','https://www.estrategiasdeinversion.com/', 'Estrategias de inversion'],
        ['../../static/images/periodicos/economia/12.jpg','http://www.elreferente.es/', 'El referente'],
        ['../../static/images/periodicos/economia/13.jpg','http://www.bolsamania.com/', 'Bolsamania'],
        ['../../static/images/periodicos/economia/14.jpg','http://www.megabolsa.com/', 'Megabolsa'],
        ['../../static/images/periodicos/economia/15.jpg','https://www.capitalmadrid.com/', 'Capital Madrid']
    );
    var imagenes9=new Array(
        ['../../static/images/periodicos/internacional/1.jpg','http://www.europapress.es/', 'Europa press'],
        ['../../static/images/periodicos/internacional/2.jpg','https://www.hispantv.com/', 'Hispan TV'],
        ['../../static/images/periodicos/internacional/3.jpg','https://actualidad.rt.com/todas_las_noticias', 'RT'],
        ['../../static/images/periodicos/internacional/4.jpg','http://es.euronews.com/', 'Euronews'],
        ['../../static/images/periodicos/internacional/5.jpg','https://www.bbc.com/mundo', 'BBC news'],
        ['../../static/images/periodicos/internacional/6.jpg','https://cnnespanol.cnn.com/', 'CNN'],
        ['../../static/images/periodicos/internacional/7.jpg','https://www.bloomberg.com/europe', 'Bloomberg'],
        ['../../static/images/periodicos/internacional/8.jpg','https://news.sky.com/', 'Sky news']
    );                 

   function c1(x){
        switch(x){
            case 0:
                if(contador1>0){
                    contador1--;
                }
            break;
            case 1:
                if(contador1<imagenes1.length-1){
                    contador1++;
                }
            break;
        }
        rotarImagen1();
    }  
    function c2(x){
        switch(x){
            case 0:
                if(contador2>0){
                    contador2--;
                }
            break;
            case 1:
                if(contador2<imagenes2.length-1){
                    contador2++;
                }
            break;
        }
        rotarImagen2();
    }  
    function c3(x){
        switch(x){
            case 0:
                if(contador3>0){
                    contador3--;
                }
            break;
            case 1:
                if(contador3<imagenes3.length-1){
                    contador3++;
                }
            break;
        }
        rotarImagen3();
    }  
    function c4(x){
        switch(x){
            case 0:
                if(contador4>0){
                    contador4--;
                }
            break;
            case 1:
                if(contador4<imagenes4.length-1){
                    contador4++;
                }
            break;
        }
        rotarImagen4();
    }  
    function c5(x){
        switch(x){
            case 0:
                if(contador5>0){
                    contador5--;
                }
            break;
            case 1:
                if(contador5<imagenes5.length-1){
                    contador5++;
                }
            break;
        }
        rotarImagen5();
    }  
    function c6(x){
        switch(x){
            case 0:
                if(contador6>0){
                    contador6--;
                }
            break;
            case 1:
                if(contador6<imagenes6.length-1){
                    contador6++;
                }
            break;
        }
        rotarImagen6();
    }  
    function c7(x){
        switch(x){
            case 0:
                if(contador7>0){
                    contador7--;
                }
            break;
            case 1:
                if(contador7<imagenes7.length-1){
                    contador7++;
                }
            break;
        }
        rotarImagen7();
    }  
    function c8(x){
        switch(x){
            case 0:
                if(contador8>0){
                    contador8--;
                }
            break;
            case 1:
                if(contador8<imagenes8.length-1){
                    contador8++;
                }
            break;
        }
        rotarImagen8();
    }  
    function c9(x){
        switch(x){
            case 0:
                if(contador9>0){
                    contador9--;
                }
            break;
            case 1:
                if(contador9<imagenes9.length-1){
                    contador9++;
                }
            break;
        }
        rotarImagen9();
    }  
    // * Funcion para cambiar la imagen y link y el nombre
function rotarImagen1(){
    document.getElementById("imagen1").src=imagenes1[contador1%imagenes1.length][0];
    document.getElementById("link1").href=imagenes1[contador1%imagenes1.length][1];
    document.getElementById("t1").textContent=imagenes1[contador1%imagenes1.length][2];
    document.getElementById("st1").textContent=(contador1+1)+"/"+imagenes1.length;
}
function rotarImagen2(){
    document.getElementById("imagen2").src=imagenes2[contador2%imagenes2.length][0];
    document.getElementById("link2").href=imagenes2[contador2%imagenes2.length][1];
    document.getElementById("t2").textContent=imagenes2[contador2%imagenes2.length][2];
    document.getElementById("st2").textContent=(contador2+1)+"/"+imagenes2.length;
}
function rotarImagen3(){
    document.getElementById("imagen3").src=imagenes3[contador3%imagenes3.length][0];
    document.getElementById("link3").href=imagenes3[contador3%imagenes3.length][1];
    document.getElementById("t3").textContent=imagenes3[contador3%imagenes3.length][2];
    document.getElementById("st3").textContent=(contador3+1)+"/"+imagenes3.length;
}
function rotarImagen4(){
    document.getElementById("imagen4").src=imagenes4[contador4%imagenes4.length][0];
    document.getElementById("link4").href=imagenes4[contador4%imagenes4.length][1];
    document.getElementById("t4").textContent=imagenes4[contador4%imagenes4.length][2];
    document.getElementById("st4").textContent=(contador4+1)+"/"+imagenes4.length;
}
function rotarImagen5(){
    document.getElementById("imagen5").src=imagenes5[contador5%imagenes5.length][0];
    document.getElementById("link5").href=imagenes5[contador5%imagenes5.length][1];
    document.getElementById("t5").textContent=imagenes5[contador5%imagenes5.length][2];
    document.getElementById("st5").textContent=(contador5+1)+"/"+imagenes5.length;
}
function rotarImagen6(){
    document.getElementById("imagen6").src=imagenes6[contador6%imagenes6.length][0];
    document.getElementById("link6").href=imagenes6[contador6%imagenes6.length][1];
    document.getElementById("t6").textContent=imagenes6[contador6%imagenes6.length][2];
    document.getElementById("st6").textContent=(contador6+1)+"/"+imagenes6.length;
}
function rotarImagen7(){
    document.getElementById("imagen7").src=imagenes7[contador7%imagenes7.length][0];
    document.getElementById("link7").href=imagenes7[contador7%imagenes7.length][1];
    document.getElementById("t7").textContent=imagenes7[contador7%imagenes7.length][2];
    document.getElementById("st7").textContent=(contador7+1)+"/"+imagenes7.length;
}
function rotarImagen8(){
    document.getElementById("imagen8").src=imagenes8[contador8%imagenes8.length][0];
    document.getElementById("link8").href=imagenes8[contador8%imagenes8.length][1];
    document.getElementById("t8").textContent=imagenes8[contador8%imagenes8.length][2];
    document.getElementById("st8").textContent=(contador8+1)+"/"+imagenes8.length;
}
function rotarImagen9(){
    document.getElementById("imagen9").src=imagenes9[contador9%imagenes9.length][0];
    document.getElementById("link9").href=imagenes9[contador9%imagenes9.length][1];
    document.getElementById("t9").textContent=imagenes9[contador9%imagenes9.length][2];
    document.getElementById("st9").textContent=(contador9+1)+"/"+imagenes9.length;
}
    // * Función que se ejecuta una vez cargada la página
function rotarImagen(){
    rotarImagen9();
    rotarImagen8();
    rotarImagen7();    
    rotarImagen6();
    rotarImagen5();
    rotarImagen4();    
    rotarImagen3();
    rotarImagen2();
    rotarImagen1();
    if(contador9<imagenes9.length-1){
                    contador9++;
    }else{
        contador9=0;
    }
    if(contador8<imagenes8.length-1){
        contador8++;
    }else{
        contador8=0;
    }
    if(contador7<imagenes7.length-1){
        contador7++;
    }else{
        contador7=0;
    }
    if(contador6<imagenes6.length-1){
                    contador6++;
    }else{
        contador6=0;
    }
    if(contador5<imagenes5.length-1){
        contador5++;
    }else{
        contador5=0;
    }
    if(contador4<imagenes4.length-1){
        contador4++;
    }else{
        contador4=0;
    }
    if(contador3<imagenes3.length-1){
        contador3++;
    }else{
        contador3=0;
    }
    if(contador2<imagenes2.length-1){
        contador2++;
    }else{
        contador2=0;
    }
    if(contador1<imagenes1.length-1){
        contador1++;
    }else{
        contador1=0;
    }
}
onload=function(){
    rotarImagen();
    setInterval(rotarImagen,2500);
}