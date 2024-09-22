var contador1=0,contador2=0,contador3=0,contador4=0,contador5=0,contador6=0,contador7=0,contador8=0,contador9=0;
    // * Array con las imagenes y enlaces que se iran mostrando en la web
    var imagenes1=new Array(
        ['../../static/images/revistas/nacional/1.jpg','https://cnnespanol.cnn.com/', 'CNN'],
        ['../../static/images/revistas/nacional/2.jpg','https://www.muyinteresante.es/', 'Muy Interesante'],
        ['../../static/images/revistas/nacional/3.jpg','http://www.quo.es/', 'Quo'],
        ['../../static/images/revistas/nacional/4.jpg','https://www.semana.com/', 'Semana'],
        ['../../static/images/revistas/nacional/5.jpg','https://www.animalpolitico.com/', 'Animal Politico'],
        ['../../static/images/revistas/nacional/6.jpg','http://capital.es/', 'Capital'],
        ['../../static/images/revistas/nacional/7.jpg','https://www.masactual.com/', 'Mas actual'],
        ['../../static/images/revistas/nacional/8.jpg','https://www.revistagq.com/', ' GQ']
    );
    var imagenes2=new Array(
        ['../../static/images/revistas/moda/1.jpg','https://www.clara.es/', 'Clara'],
        ['../../static/images/revistas/moda/2.jpg','https://www.cosmopolitan.com/es/', 'Cosmopolitan'],
        ['../../static/images/revistas/moda/3.jpg','https://www.elle.com/es/', 'Elle'],
        ['../../static/images/revistas/moda/4.jpg','https://www.enfemenino.com/', 'En femenino'],
        ['../../static/images/revistas/moda/5.jpg','http://www.fashionclick.com/', 'Fashion click'],
        ['../../static/images/revistas/moda/6.jpg','https://www.glamour.es/', 'Glamour'],
        ['../../static/images/revistas/moda/7.jpg','http://www.grazia.es/', 'Grazia'],
        ['../../static/images/revistas/moda/8.jpg','https://www.harpersbazaar.com/es/', 'Harpers bazaar'],
        ['../../static/images/revistas/moda/9.jpg','https://www.marie-claire.es/', 'Marie Claire'],
        ['../../static/images/revistas/moda/10.jpg','https://www.mujerdeelite.com/', 'Mujer de elite'],
        ['../../static/images/revistas/moda/11.jpg','https://www.mujerhoy.com/', 'Mujer hoy'],
        ['../../static/images/revistas/moda/12.jpg','http://www.paula.cl/', 'Paula'],
        ['../../static/images/revistas/moda/13.jpg','http://siempremujer.com/', 'Siempre mujer'],
        ['../../static/images/revistas/moda/14.jpg','http://www.telva.com/', 'Telva'],
        ['../../static/images/revistas/moda/15.jpg','https://www.vogue.es/', 'Vogue'],
        ['../../static/images/revistas/moda/16.jpg','https://www.revistavanityfair.es/', 'Vanity fair']
     );
    var imagenes3=new Array(
        ['../../static/images/revistas/cocina/1.jpg','https://www.revistacocina.com/', 'Revista cocina'],
        ['../../static/images/revistas/cocina/2.jpg','https://www.miarevista.es/', 'Mia'],
        ['../../static/images/revistas/cocina/3.jpg','https://gastronomiaycia.republica.com/', 'Gastronomia & cia'],
        ['../../static/images/revistas/cocina/4.jpg','http://www.cocineando.com/', 'Cocineando'],
        ['../../static/images/revistas/cocina/5.jpg','http://www.afuegolento.com/', 'A fuego lento'],
        ['../../static/images/revistas/cocina/6.jpg','https://micocinavegetariana.com/', 'Mi cocina vegetariana'],
        ['../../static/images/revistas/cocina/7.jpg','https://elcomidista.elpais.com/', 'El comidista'],
        ['../../static/images/revistas/cocina/8.jpg','https://www.mundorecetas.com/', 'Mundo recetas']
    );
    var imagenes4=new Array(
        ['../../static/images/revistas/deporte/1.jpg','https://www.fourfourtwo.es/', 'Four Four Two'],
        ['../../static/images/revistas/deporte/2.jpg','http://www.elenganche.es/', 'El enganche'],
        ['../../static/images/revistas/deporte/3.jpg','https://www.motor16.com/', 'Motor 16'],
        ['../../static/images/revistas/deporte/4.jpg','https://www.formulamoto.es/', 'Formula Moto'],
        ['../../static/images/revistas/deporte/5.jpg','http://www.desnivel.com/', 'Desnivel'],
        ['../../static/images/revistas/deporte/6.jpg','https://universobeisbol.mlblogs.com/', 'Universo Beisbol'],
        ['../../static/images/revistas/deporte/7.jpg','https://www.revistaoxigeno.es/', 'Oxigeno'],
        ['../../static/images/revistas/deporte/8.jpg','https://www.sportlife.es/', 'Sport life']
    );
    var imagenes5=new Array(
        ['../../static/images/revistas/musica/1.jpg','https://www.dsalud.com/', 'Discovery Salud'],
        ['../../static/images/revistas/musica/2.jpg','https://dietamediterranea.com/', 'Fundacion dieta mediterranea'],
        ['../../static/images/revistas/musica/3.jpg','https://www.hogarmania.com/', 'Hogar mania'],
        ['../../static/images/revistas/musica/4.jpg','https://www.micasarevista.com/', 'Mi casa'],
        ['../../static/images/revistas/musica/5.jpg','http://www.recetasdeladietadelospuntos.com/', 'La dieta de los puntos'],
        ['../../static/images/revistas/musica/6.jpg','https://www.sabervivir.es/', 'Saber vivir'],
        ['../../static/images/revistas/musica/7.jpg','https://muzikalia.com/', 'Muzicalia']
        );
    var imagenes6=new Array(
        ['../../static/images/revistas/corazon/1.jpg','https://www.cotilleo.es/', 'Cotilleo.es'],
        ['../../static/images/revistas/corazon/2.jpg','https://www.revistacuore.com/', 'Cuore'],
        ['../../static/images/revistas/corazon/3.jpg','https://www.diezminutos.es/', 'Diez minutos'],
        ['../../static/images/revistas/corazon/4.jpg','https://www.hola.com/', 'Hola'],
        ['../../static/images/revistas/corazon/5.jpg','https://www.lecturas.com/', 'Lecturas'],
        ['../../static/images/revistas/corazon/6.jpg','https://www.revistalove.es/', 'Love'],
        ['../../static/images/revistas/corazon/7.jpg','https://www.semana.es/', 'Semana'],
        ['../../static/images/revistas/corazon/8.jpg','https://www.telecinco.es/salvame/', 'Salvame']
    );
    var imagenes7=new Array(
        ['../../static/images/revistas/humor/1.jpg','http://www.chistemania.com/', 'Chiste mania'],
        ['../../static/images/revistas/humor/2.jpg','https://www.eljueves.es/', 'El jueves'],
        ['../../static/images/revistas/humor/3.jpg','https://www.elmundotoday.com/', 'El mundo today'],
        ['../../static/images/revistas/humor/4.jpg','https://www.elrellano.com/', 'El rellano'],
        ['../../static/images/revistas/humor/5.jpg','http://www.lapaginadefinitiva.com/', 'La pagina definitiva'],
        ['../../static/images/revistas/humor/6.jpg','http://lavozpopular.com/', 'La voz popular'],
        ['../../static/images/revistas/humor/7.jpg','https://haynoticia.es/', 'Hay noticia'],
        ['../../static/images/revistas/humor/8.jpg','https://www.revistamongolia.com/', 'Mongolia']
    );
    var imagenes8=new Array(
        ['../../static/images/revistas/tecnologia/1.jpg','https://www.android-magazine.es/', 'Android magazine'],
        ['../../static/images/revistas/tecnologia/2.jpg','http://www.iphoneworld.com.es/', 'Iphone world'],
        ['../../static/images/revistas/tecnologia/3.jpg','https://www.applesfera.com/', 'Applesfera'],
        ['../../static/images/revistas/tecnologia/4.jpg','https://www.xataka.com/', 'Xataka'],
        ['../../static/images/revistas/tecnologia/5.jpg','https://computerhoy.com/', 'Computer hoy'],
        ['../../static/images/revistas/tecnologia/6.jpg','https://www.pcworld.es/', 'PC World'],
        ['../../static/images/revistas/tecnologia/7.jpg','https://delitosinformaticos.com/', 'Delitos Informaticos'],
        ['../../static/images/revistas/tecnologia/8.jpg','https://www.revistabyte.es/', 'Byte'],
        ['../../static/images/revistas/tecnologia/9.jpg','http://www.ciospain.es/home', 'CIO'],
        ['../../static/images/revistas/tecnologia/10.jpg','http://www.computerworld.es/home', 'Computer World'],
        ['../../static/images/revistas/tecnologia/11.jpg','https://www.microsiervos.com/', 'Microsiervos'],
        ['../../static/images/revistas/tecnologia/12.jpg','https://www.baquia.com/', 'Baquia'],
        ['../../static/images/revistas/tecnologia/13.jpg','https://diarioti.com/', 'Diario TI'],
        ['../../static/images/revistas/tecnologia/14.jpg','https://www.internautas.org/', 'Asociacion de internautas'],
        ['../../static/images/revistas/tecnologia/15.jpg','https://www.puromarketing.com/', 'Puro marketing']
    );
    var imagenes9=new Array(
        ['../../static/images/revistas/internacional/1.jpg','https://www.mirror.co.uk/', 'Mirror'],
        ['../../static/images/revistas/internacional/2.jpg','https://www.newsweek.com/', 'Newsweek'],
        ['../../static/images/revistas/internacional/3.jpg','https://www.thesun.co.uk/', 'The sun'],
        ['../../static/images/revistas/internacional/4.jpg','http://time.com/', 'Time'],
        ['../../static/images/revistas/internacional/5.jpg','https://www.nytimes.com/', 'The New York Times'],
        ['../../static/images/revistas/internacional/6.jpg','https://www.wsj.com/europe', 'The Wall Street Journal'],
        ['../../static/images/revistas/internacional/7.jpg','https://japantoday.com/', 'Japan today'],
        ['../../static/images/revistas/internacional/8.jpg','http://japantimes.co.jp', 'The Japan times']
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