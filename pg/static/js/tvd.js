var contador1=0,contador2=0,contador3=0,contador4=0,contador5=0,contador6=0,contador7=0,contador8=0,contador9=0;
    // * Array con las imagenes y enlaces que se iran mostrando en la web
     var imagenes1=new Array(
        ['../../static/images/tv/nacional/1.jpg','http://www.rtve.es/directo/la-1', 'La 1'],
        ['../../static/images/tv/nacional/2.jpg','http://www.rtve.es/directo/la-2', 'La 2'],
        ['../../static/images/tv/nacional/3.jpg','https://www.atresplayer.com/directos/antena3/', 'Antena 3'],
        ['../../static/images/tv/nacional/4.jpg','https://www.mitele.es/directo/cuatro', 'Cuatro'],
        ['../../static/images/tv/nacional/5.jpg','https://www.telecinco.es/endirecto/', 'Telecinco'],
        ['../../static/images/tv/nacional/6.jpg','https://www.atresplayer.com/directos/lasexta/', 'La secta'],
        ['../../static/images/tv/nacional/7.jpg','https://www.paramountnetwork.es/en-directo/4ypes1/paramount', 'Paramount Channel'],
        ['../../static/images/tv/nacional/8.jpg','https://www.goltelevision.com/live', 'Gol']
    );
    var imagenes2=new Array(
        ['../../static/images/tv/carta/1.jpg','https://telealacarta.es/canales-de-television/la-1', 'La 1 a la carta'],
        ['../../static/images/tv/carta/2.jpg','https://telealacarta.es/canales-de-television/la-2', 'La 2 a la carta'],
        ['../../static/images/tv/carta/3.jpg','https://telealacarta.es/canales-de-television/antena-3', 'Antena 3 a la carta'],
        ['../../static/images/tv/carta/4.jpg','https://www.mitele.es/series-online', 'Series a la carta'],
        ['../../static/images/tv/carta/5.jpg','http://www.rtve.es/alacarta/', 'RTVE a la carta']
    );
    var imagenes3=new Array(
        ['../../static/images/tv/autonomicos/1.jpg','http://www.canalsur.es/portada-adirecto-722225.html', 'Canal Sur'],     
        ['../../static/images/tv/autonomicos/2.jpg','http://www.telemadrid.es/emision-en-directo', 'Telemadrid'],
        ['../../static/images/tv/autonomicos/3.jpg','http://www.rtpa.es/television', 'RTPA Asturias'],
        ['../../static/images/tv/autonomicos/4.jpg','http://www.cmmedia.es/en-directo/tv/', 'Castilla la Mancha'],
        ['../../static/images/tv/autonomicos/5.jpg','http://populartvcantabria.com/livetv/', 'Popular Cantabria'],
        ['../../static/images/tv/autonomicos/6.jpg','http://www.natv.es/Directo', 'Navarra TV']
    );
    var imagenes4=new Array(
        ['../../static/images/tv/series/1.jpg','https://www.bemad.es/endirecto/', 'Be Mad'],
        ['../../static/images/tv/series/2.jpg','https://www.atresplayer.com/directos/atreseries/', 'A3Series'],
        ['../../static/images/tv/series/3.jpg','https://www.atresplayer.com/neox/', 'Neox'],
        ['../../static/images/tv/series/4.jpg','https://www.atresplayer.com/directos/mega/', 'Mega'],
        ['../../static/images/tv/series/5.jpg','https://www.energytv.es/en-directo/', 'Energy'],
        ['../../static/images/tv/series/6.jpg','https://www.factoriadeficcion.com/endirecto/', 'FDF'],
        ['../../static/images/tv/series/7.jpg','https://www.divinity.es/endirecto/', 'Divinity'],
        ['../../static/images/tv/series/8.jpg','https://www.atresplayer.com/directos/nova/', 'Nova']
    );
    var imagenes5=new Array(
        ['../../static/images/tv/ocio/1.jpg','http://los40.com/webcam/', 'Los 40 principales'],
        ['../../static/images/tv/ocio/2.jpg','http://www.rtve.es/directo/teledeporte/', 'Teledeporte'],
        ['../../static/images/tv/ocio/3.jpg','http://www.mtv.es/videos', 'MTV'],
        ['../../static/images/tv/ocio/4.jpg','http://solmusica.com/videos', 'Sol Musica'],
        ['../../static/images/tv/ocio/5.jpg','http://www.rtve.es/deportes/mas-tdp/directo/', '+Teledeporte'],
        ['../../static/images/tv/ocio/6.jpg','http://www.movistarplus.es/formula1', 'F1'],
        ['../../static/images/tv/ocio/7.jpg','https://www.mitele.es/momentazos/motogp-2016-momentazos/0000000002386', 'Moto GP'],
        ['../../static/images/tv/ocio/8.jpg','https://www.realmadrid.com/real-madrid-tv', 'Real Madrid TV']
    );
    var imagenes6=new Array(
        ['../../static/images/tv/locales/1.jpg','http://www.dieztv.es/p/directo.html', 'Diez TV'],
        ['../../static/images/tv/locales/2.jpg','http://www.ondajerez.com/television/television-en-directo/', 'Onda Jerez'],
        ['../../static/images/tv/locales/3.jpg','http://huelvatv.com/directo/', 'Huelva TV']
    );
    var imagenes7=new Array(
        ['../../static/images/tv/infantil/1.jpg','http://www.rtve.es/infantil/series/#/videos/clan/todos/', 'Clan'],
        ['../../static/images/tv/infantil/2.jpg','https://tv.disney.es/disney-channel', 'Disney'],
        ['../../static/images/tv/infantil/3.jpg','http://www.nickelodeon.es/videos', 'Nickelodeon'],
        ['../../static/images/tv/infantil/4.jpg','https://www.cartoonnetwork.es/videos', 'Cartoon Network'],
        ['../../static/images/tv/infantil/5.jpg','https://www.mitele.es/directo/boing', 'Boing'],
        ['../../static/images/tv/infantil/6.jpg','https://www.atresplayer.com/series-infantiles/', 'Series infantiles'],
        ['../../static/images/tv/infantil/7.jpg','http://www.atresplayer.com/directos/television/neox-kidz/', 'Neox kidz']
    );
    var imagenes8=new Array(
        ['../../static/images/tv/econo-religion/1.jpg','http://www.trecetv.es/', 'Trece TV'],
        ['../../static/images/tv/econo-religion/2.jpg','http://www.rtve.es/directo/canal-24h', '24 H'],
        ['../../static/images/tv/econo-religion/3.jpg','https://www.intereconomia.tv/', 'Intereconomia'],
        ['../../static/images/tv/econo-religion/4.jpg','http://www.rtve.es/noticias/mas-24/', '+24 H']
    );
    var imagenes9=new Array(
        ['../../static/images/tv/internacional/1.jpg','http://www.rtve.es/directo/canal-24h', '24 H'],
        ['../../static/images/tv/internacional/2.jpg','https://www.hispantv.com/directo', 'Hispan TV'],
        ['../../static/images/tv/internacional/3.jpg','https://tn.com.ar/envivo/24hs', 'TN - Argentina'],
        ['../../static/images/tv/internacional/4.jpg','https://www.telesurtv.net/#.', 'Telesur - Peru'],
        ['../../static/images/tv/internacional/5.jpg','https://actualidad.rt.com/en_vivo', 'RT en vivo'],
        ['../../static/images/tv/internacional/6.jpg','http://www.euronews.com/live', 'Euronews'],
        ['../../static/images/tv/internacional/7.jpg','https://www.bbc.com/news/av/10462520/one-minute-world-news', 'BBC World'],
        ['../../static/images/tv/internacional/8.jpg','http://edition.cnn.com/video/flashLive/live.html?stream=stream1', 'CNN'],
        ['../../static/images/tv/internacional/9.jpg','https://www.bloomberg.com/live/europe', 'Bloomberg'],
        ['../../static/images/tv/internacional/10.jpg','https://news.sky.com/watch-live', 'Sky news']
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