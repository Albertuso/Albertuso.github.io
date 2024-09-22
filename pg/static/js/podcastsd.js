var contador1=0,contador3=0,contador4=0,contador6=0,contador7=0,contador9=0,contador=0;
    // * Array con las imagenes y enlaces que se iran mostrando en la web
   var imagenes1=new Array(
        ['../../static/images/podcast/nacional/1.jpg','http://capitalradio.es/programas/a-tu-ritmo/?doing_wp_cron=1487663508.4343099594116210937500', 'Capital Radio'],
        ['../../static/images/podcast/nacional/2.jpg','https://ohhhtv.com/', 'Ohhh! Tv postal'],
        ['../../static/images/podcast/nacional/3.jpg','https://www.ivoox.com/podcast-coffee-break-senal-ruido_sq_f1172891_1.html', 'Coffe break'],
        ['../../static/images/podcast/nacional/4.jpg','https://www.ivoox.com/podcast-cine-loqueyotediga_sq_f18010_1.html', 'lo que yo te diga'],
        ['../../static/images/podcast/nacional/5.jpg','https://www.spreaker.com/show/tedtalks-negocios', 'Ted talks negocios'],
        ['../../static/images/podcast/nacional/6.jpg','https://www.spreaker.com/show/nadiecomomama-com', 'Nadie como mama'],
        ['../../static/images/podcast/nacional/7.jpg','https://www.ivoox.com/podcast-era-magazine_sq_f1414152_1.html', 'Era magazine'],
        ['../../static/images/podcast/nacional/8.jpg','https://www.ivoox.com/podcast-podcast-cristina-mitre_sq_f1501371_1.html', 'Cristina Mitre']
    );
    var imagenes2=new Array(
        ['../../static/images/ong/medicos.png','https://www.msf.es/','MSF'],
        ['../../static/images/ong/greenpeace.png','https://www.wwf.es', 'GreenPeace'],
        ['../../static/images/ong/wwf.png','https://www.wwf.es', 'WWF']
    );
    var imagenes3=new Array(
        ['../../static/images/podcast/deporte/1.jpg','https://www.ivoox.com/podcast-caras-radio_sq_f1475118_1.html', 'Caras de radio'],
        ['../../static/images/podcast/deporte/2.jpg','https://www.ivoox.com/podcast-larguero_sq_f1189_1.html', 'El larguero'],
        ['../../static/images/podcast/deporte/3.jpg','https://www.ivoox.com/podcast-podcast-marketing-online_sq_f1133401_1.html', 'Marketing online'],
        ['../../static/images/podcast/deporte/4.jpg','https://www.ivoox.com/podcast-contracronica_sq_f1267769_1.html', 'La contra cronica'],
        ['../../static/images/podcast/deporte/5.jpg','https://www.ivoox.com/podcast-negra-criminal_sq_f1274027_1.html', 'Negra y criminal'],
        ['../../static/images/podcast/deporte/6.jpg','https://www.ivoox.com/podcast-oh-my-lol-la-vida-moderna_sq_f1160064_1.html', 'Oh my lol'],
        ['../../static/images/podcast/deporte/7.jpg','https://www.ivoox.com/podcast-qwerty-historias-ciencia_sq_f1311470_1.html', 'QWERTY'],
        ['../../static/images/podcast/deporte/8.jpg','https://www.ivoox.com/podcast-ser-historia_sq_f13652_1.html', 'Ser Historia']
    );
    var imagenes4=new Array(
        ['../../static/images/podcast/nacional2/1.jpg','http://cadenaser.com/programa/cualquier_tiempo_pasado_fue_anterior/', 'Tiempo pasado'],
        ['../../static/images/podcast/nacional2/2.jpg','http://play.cadenaser.com/audio/001RD010000004464397/', 'Nadie sabe nada'],
        ['../../static/images/podcast/nacional2/3.jpg','https://gladyspalmera.com/programas/diego-manrique-el-mapa-secreto/', 'El mapa secreto'],
        ['../../static/images/podcast/nacional2/4.jpg','https://podcastsenespanol.com/podcast/cadena-ser/acento-robinson', 'Acento Robinson'],
        ['../../static/images/podcast/nacional2/5.jpg','https://www.ivoox.com/podcast-lo-tu-digas_sq_f1424550_1.html', 'Lo que tu digas'],
        ['../../static/images/podcast/nacional2/6.jpg','https://podcastsenespanol.com/podcast/espn-deportes/uefa-champions-league-al-minuto', 'Champions al minuto'],
        ['../../static/images/podcast/nacional2/7.jpg','https://podcastsenespanol.com/podcast/violetacast/moda-street', 'Moda street'],
        ['../../static/images/podcast/nacional2/8.jpg','https://podcastsenespanol.com/podcast/npr/radio-ambulante', 'Radio ambulante']
    );
    var imagenes5=new Array(
        ['../../static/images/ong/wwf.png','https://www.msf.es/','WWF'],
        ['../../static/images/ong/medicos.png','https://www.wwf.es', 'MSF'],
        ['../../static/images/ong/greenpeace.png','https://www.wwf.es', 'GreenPeace']
      );
    var imagenes6=new Array(
        ['../../static/images/podcast/personales/1.jpg','https://cuonda.com/', 'Cuonda'],
        ['../../static/images/podcast/personales/2.jpg','https://www.podiumpodcast.com/', 'Podium podcast'],
        ['../../static/images/podcast/personales/3.jpg','https://noticiacorta.com/', 'Noticia corta'],
        ['../../static/images/podcast/personales/4.jpg','https://www.lalibretadevangaal.com/', 'La libreta de Van Gaal'],
        ['../../static/images/podcast/personales/5.jpg','https://emilcar.fm/category/granangular/', 'Gran angular'],
        ['../../static/images/podcast/personales/6.jpg','http://catastrofeultravioleta.com/', 'Catastrofe ultravioleta'],
        ['../../static/images/podcast/personales/7.jpg','https://www.ivoox.com/podcast-transforma-tu-energia-para-exito_sq_f1452391_1.html', 'Transforma tu energia en exito'],
        ['../../static/images/podcast/personales/8.jpg','https://entiendetumente.info/', 'Extiende tu mente']
    );
    var imagenes7=new Array(
        ['../../static/images/podcast/infantil/1.jpg','https://babyradio.es/podcasts-babyradio', 'Baby radio'],
        ['../../static/images/podcast/infantil/2.jpg','https://www.ivoox.com/podcast-trabalenguas_sq_f1134314_1.html', 'Ivoox'],
        ['../../static/images/podcast/infantil/3.jpg','http://www.rtve.es/alacarta/audios/contando-cuentos-en-radio-5/', 'Contando cuentos'],
        ['../../static/images/podcast/infantil/4.jpg','http://www.rtve.es/alacarta/audios/la-estacion-azul-de-los-ninos/', 'La estacion azul'],
        ['../../static/images/podcast/infantil/5.jpg','http://www.radioline.co/podcast-podcast-cuentos-infantiles-y-para-toda-la-familia', 'Radio Line'],
        ['../../static/images/podcast/infantil/6.jpg','https://tunein.com/podcasts/Current-Affairs/Podcast-Cuentos-infantiles-y-para-toda-la-familia-p438570/', 'Tune IN'],
        ['../../static/images/podcast/infantil/7.jpg','https://itunes.apple.com/us/podcast/tedtalks-kids-and-family/id470623175?mt=2', 'Tedtalks kids'],
        ['../../static/images/podcast/infantil/8.jpg','https://www.bbc.co.uk/programmes/p02pnn9d/episodes/downloads', 'Cbeebies']
    );
    var imagenes8=new Array(
        ['../../static/images/ong/greenpeace.png','https://www.msf.es/','GreenPeace'],
        ['../../static/images/ong/wwf.png','https://www.wwf.es', 'WWF'],
        ['../../static/images/ong/medicos.png','https://www.wwf.es', 'MSF']
    );
    var imagenes9=new Array(
        ['../../static/images/podcast/internacional/1.jpg','https://learnenglish.britishcouncil.org/en/learnenglish-podcasts/', 'British council'],
        ['../../static/images/podcast/internacional/2.jpg','https://www.podcastsinenglish.com/index.shtml', 'Podcasts in english'],
        ['../../static/images/podcast/internacional/3.jpg','https://player.fm/series/6-minute-grammar-1301610', '6 minute grammar'],
        ['../../static/images/podcast/internacional/4.jpg','https://player.fm/series/all-ears-english-podcast-real-english-vocabulary-conversation-american-culture', 'All ears english'],
        ['../../static/images/podcast/internacional/5.jpg','https://www.bbc.co.uk/programmes/p02pc9zn/episodes/downloads', 'The english we speak'],
        ['../../static/images/podcast/internacional/6.jpg','https://podcastsenespanol.com/podcast/tu-ingles/tu-ingles', 'Tu ingles'],
        ['../../static/images/podcast/internacional/7.jpg','https://learningenglish.voanews.com/', 'Learning english'],
        ['../../static/images/podcast/internacional/8.jpg','https://www.betteratenglish.com/be-episode-archives', 'Better english']
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
function rotarImagen9(){
    document.getElementById("imagen9").src=imagenes9[contador9%imagenes9.length][0];
    document.getElementById("link9").href=imagenes9[contador9%imagenes9.length][1];
    document.getElementById("t9").textContent=imagenes9[contador9%imagenes9.length][2];
    document.getElementById("st9").textContent=(contador9+1)+"/"+imagenes9.length;
}
function rotarBanner(){
	contador++
	document.getElementById("imagen2").src=imagenes2[contador%imagenes2.length][0];
	document.getElementById("link2").href=imagenes2[contador%imagenes2.length][1];
    document.getElementById("t2").textContent=imagenes2[contador%imagenes2.length][2];
	document.getElementById("imagen5").src=imagenes5[contador%imagenes5.length][0];
	document.getElementById("link5").href=imagenes5[contador%imagenes5.length][1];
    document.getElementById("t5").textContent=imagenes5[contador%imagenes5.length][2];
    document.getElementById("imagen8").src=imagenes8[contador%imagenes8.length][0];
	document.getElementById("link8").href=imagenes8[contador%imagenes8.length][1];
    document.getElementById("t8").textContent=imagenes8[contador%imagenes8.length][2];       
}
    // * Función que se ejecuta una vez cargada la página
function rotarImagen(){
    rotarImagen9();
    rotarImagen7();    
    rotarImagen6();
    rotarImagen4();    
    rotarImagen3();
    rotarImagen1();
    if(contador9<imagenes9.length-1){
        contador9++;
    }else{
        contador9=0;
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
    if(contador1<imagenes1.length-1){
        contador1++;
    }else{
        contador1=0;
    }
}
onload=function(){
    rotarImagen();
    setInterval(rotarImagen,5000);
    rotarBanner();   
    setInterval(rotarBanner,2500);
}