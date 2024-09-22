var contador1=0,contador3=0,contador4=0,contador6=0,contador7=0,contador=0,contador9=0;
    // * Array con las imagenes y enlaces que se iran mostrando en la web
     var imagenes1=new Array(
        ['../static/images/radios/nacional/1.jpg','http://www.rtve.es/radios//', 'RNE'],
        ['../static/images/radios/nacional/2.jpg','https://www.ondacero.es/directo/', 'Onda Cero'],
        ['../static/images/radios/nacional/3.jpg','http://radios/espana.blogspot.com/2015/05/efe-radios/-en-directo.html', 'EFE'],
        ['../static/images/radios/nacional/4.jpg','https://play.cadenadial.com/', 'Cadena Dial'],
        ['../static/images/radios/nacional/5.jpg','http://play.cadenaser.com/?autoplay=true', 'Cadena Ser'],
        ['../static/images/radios/nacional/6.jpg','https://www.cope.es/directos/net1', 'Cadena Cope'],
        ['../static/images/radios/nacional/7.jpg','http://radios/espana.blogspot.com/2015/05/esradios/.html', 'Es radio'],
        ['../static/images/radios/nacional/8.jpg','http://radios/espana.blogspot.com/2015/05/intereconomia.html', 'Intereconomia']
    );
    var imagenes2=new Array(
        ['../static/images/ong/medicos.png','https://www.msf.es/','MSF'],
        ['../static/images/ong/greenpeace.png','https://www.wwf.es', 'GreenPeace'],
        ['../static/images/ong/wwf.png','https://www.wwf.es', 'WWF']
    );
    var imagenes3=new Array(
        ['../static/images/radios/autonomicos/1.jpg','http://www.canalsur.es/radio/directos/portada-directoradio-1160300.html?directo=player_rai', 'RAI'],
        ['../static/images/radios/autonomicos/2.jpg','http://www.canalsur.es/radio/directos/portada-directoradio-1160300.html?directo=player_csr', 'Canal Sur'],
        ['../static/images/radios/autonomicos/3.jpg','http://www.canalsur.es/radio/directos/portada-directoradio-1160300.html?directo=player_flamenco', 'Flamenco'],
        ['../static/images/radios/autonomicos/4.jpg','http://www.canalsur.es/radio/directos/portada-directoradio-1160300.html?directo=player_fiesta', 'Fiesta'],
        ['../static/images/radios/autonomicos/5.jpg','http://radioespana.blogspot.com/2015/05/emartv.html', 'Onda Local Andalucia'],
        ['../static/images/radios/autonomicos/6.jpg','http://radioespana.blogspot.com/2015/05/radiole.html', 'Radiole'],
        ['../static/images/radios/autonomicos/7.jpg','http://cartujaradio.radio.es/', 'Cartuja radio'],
        ['../static/images/radios/autonomicos/8.jpg','http://sierranevadafm.radio.es/', 'Sierra Nevada']
    );
    var imagenes4=new Array(
        ['../static/images/radios/pop-rock/1.jpg','http://www.radio4g.com/', 'R4G'],
        ['../static/images/radios/pop-rock/2.jpg','https://play.los40.com/', 'Los 40'],
        ['../static/images/radios/pop-rock/3.jpg','https://www.europafm.com/directo/', 'Europa'],
        ['../static/images/radios/pop-rock/4.jpg','https://play.m80radio.com/', 'M80 Radio'],
        ['../static/images/radios/pop-rock/5.jpg','http://kissfm.es/player/', 'Kiss'],
        ['../static/images/radios/pop-rock/6.jpg','http://www.cadena100.es/', 'Cadena 100'],
        ['../static/images/radios/pop-rock/7.jpg','http://radioespana.blogspot.com/2015/05/melodia.html', 'Melodia'],
        ['../static/images/radios/pop-rock/8.jpg','http://player.rockfm.fm/', 'Rock']
    );
    var imagenes5=new Array(
        ['../static/images/ong/wwf.png','https://www.msf.es/','WWF'],
        ['../static/images/ong/medicos.png','https://www.wwf.es', 'MSF'],
        ['../static/images/ong/greenpeace.png','https://www.wwf.es', 'GreenPeace']
      );
    var imagenes6=new Array(
        ['../static/images/radios/locales/1.jpg','http://play.cadenaser.com/emisora/radio_granada/?autoplay=true', 'Ser Granada'],
        ['../static/images/radios/locales/2.jpg','http://guadixcadena.radio.es/', 'Ser Guadix'],
        ['../static/images/radios/locales/3.jpg','https://www.cope.es/directos/granada', 'COPE'],
        ['../static/images/radios/locales/4.jpg','http://www.emisora.org.es/cadena-dial-andalucia-este/', 'DIAL'],
        ['../static/images/radios/locales/5.jpg','http://divasound.radio.es/', 'Diva sound Granada'],
        ['../static/images/radios/locales/6.jpg','http://vivapop.radio.es/', 'Viva pop Granada'],
        ['../static/images/radios/locales/7.jpg','http://ondalojaradio.radio.es/', 'Onda Loja radio'],
        ['../static/images/radios/locales/8.jpg','http://padulsp.radio.es/', 'Radio Padul']
    );
    var imagenes7=new Array(
        ['../static/images/radios/fiesta/1.jpg','http://www.hitfm.es/', 'Hit'],
        ['../static/images/radios/fiesta/2.jpg','http://www.viveradio.es/ReproductorLive.aspx', 'Vive'],
        ['../static/images/radios/fiesta/3.jpg','http://www.orm.es/directo/or-musica/', 'ORM'],
        ['../static/images/radios/fiesta/4.jpg','https://play.maxima.fm/', 'Maxima'],
        ['../static/images/radios/fiesta/5.jpg','http://radiofusion.itnor.es/', 'Radio fusion'],
        ['../static/images/radios/fiesta/6.jpg','http://www.megastar.fm/', 'Mega star'],
        ['../static/images/radios/fiesta/7.jpg','https://onda4.org/', 'Onda 4'],
        ['../static/images/radios/fiesta/8.jpg','http://radioespana.blogspot.com/2015/05/radiomaria.html', 'Maria']
    );
    var imagenes8=new Array(
        ['../static/images/ong/greenpeace.png','https://www.msf.es/','GreenPeace'],
        ['../static/images/ong/wwf.png','https://www.wwf.es', 'WWF'],
        ['../static/images/ong/medicos.png','https://www.wwf.es', 'MSF']
    );
    var imagenes9=new Array(
        ['../static/images/radios/internacional/1.jpg','http://elcafedelmundo.com/site/', 'El cafe del mundo'],
        ['../static/images/radios/internacional/2.jpg','http://www.toplatino.net/', 'Top latino'],
        ['../static/images/radios/internacional/3.jpg','https://sandungaradio.com/', 'Sandunga'],
        ['../static/images/radios/internacional/4.jpg','http://elhuecodelasalsa.com/', 'El hueco de la salsa'],
        ['../static/images/radios/internacional/5.jpg','http://www.radios.com.co/la-x-estereo-new-york/', 'La X estereo'],
        ['../static/images/radios/internacional/6.jpg','http://306radio.com/', '306'],
        ['../static/images/radios/internacional/7.jpg','http://www.radioritmo60stereo.net/index.html', 'Ritmo 60'],
        ['../static/images/radios/internacional/8.jpg','https://tunein.com/radio/North-America-r101218/', 'Norteamerica']
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
    onload=function(){
    // document.getElementsByName("1p")[0].addEventListener("click",c1p(),false);
    rotarImagen9();
    rotarImagen7();
    rotarImagen6();
    rotarImagen4();
    rotarImagen3();
    rotarImagen1();
    rotarBanner();
    setInterval(rotarBanner,5000);
    }