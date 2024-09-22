var contador1=0,contador4=0,contador7=0;
// * Array con las imagenes y enlaces que se iran mostrando en la web
var imagenes1=new Array(
    ['../../static/images/cine/1.jpg','https://www.snagfilms.com/', 'Snagfilms'],
    ['../../static/images/cine/2.jpg','http://www.classiccinemaonline.com/','Clasic cinema online'],
    ['../../static/images/cine/3.jpg','http://www.bigfiveglories.com/', 'Big 5 glories'],
);
var imagenes2=new Array(
    ['../../static/images/cine/2.jpg','http://www.classiccinemaonline.com/','Clasic cinema online'],
    ['../../static/images/cine/3.jpg','http://www.bigfiveglories.com/', 'Big 5 glories'],
    ['../../static/images/cine/1.jpg','https://www.snagfilms.com/', 'Snagfilms']
);
var imagenes3=new Array(
    ['../../static/images/cine/3.jpg','http://www.bigfiveglories.com/', 'Big 5 glories'],
    ['../../static/images/cine/1.jpg','https://www.snagfilms.com/', 'Snagfilms'],
    ['../../static/images/cine/2.jpg','http://www.classiccinemaonline.com/','Clasic cinema online']
);
var imagenes4=new Array(
    ['../../static/images/cine/4.jpg','http://moviesfoundonline.com/','Movies found online'],
    ['../../static/images/cine/5.jpg','https://archive.org/', 'Internet Archive'],
    ['../../static/images/cine/6.jpg','https://www.popcornflix.com/','Popcornflix']
);
var imagenes5=new Array(
    ['../../static/images/cine/5.jpg','https://archive.org/','Internet Archive'],
    ['../../static/images/cine/6.jpg','https://www.popcornflix.com/','Popcornflix'],
    ['../../static/images/cine/4.jpg','http://moviesfoundonline.com/','Movies found online']
);
var imagenes6=new Array(
    ['../../static/images/cine/6.jpg','https://www.popcornflix.com/', 'Popcornflix'],
    ['../../static/images/cine/4.jpg','http://moviesfoundonline.com/', 'Movies found online'],
    ['../../static/images/cine/5.jpg','https://archive.org/', 'Internet Archive']
);
var imagenes7=new Array(
    ['../../static/images/cine/7.jpg','https://www.viewster.com/', 'Viewster'],
    ['../../static/images/cine/8.jpg','http://legalmentegratis.com/', 'Legalmente gratis'],
    ['../../static/images/cine/9.jpg','http://www.openculture.com/','Open culture']
);
var imagenes8=new Array(
    ['../../static/images/cine/8.jpg','http://legalmentegratis.com/', 'Legalmente gratis'],
    ['../../static/images/cine/9.jpg','http://www.openculture.com/','Open culture'],
    ['../../static/images/cine/7.jpg','https://www.viewster.com/', 'Viewster']
);
var imagenes9=new Array(
    ['../../static/images/cine/9.jpg','http://www.openculture.com/','Open culture'],
    ['../../static/images/cine/7.jpg','https://www.viewster.com/', 'Viewster'],
    ['../../static/images/cine/8.jpg','http://legalmentegratis.com/', 'Legalmente gratis']
);                        
function c123(x){
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
    rotarImagen123();
}  
function c456(x){
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
    rotarImagen456();
}  
function c789(x){
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
    rotarImagen789();
}  
// * Funcion para cambiar la imagen y link y el nombre
function rotarImagen123(){
	document.getElementById("imagen1").src=imagenes1[contador1%imagenes1.length][0];
	document.getElementById("link1").href=imagenes1[contador1%imagenes1.length][1];
	document.getElementById("t1").textContent=imagenes1[contador1%imagenes1.length][2];
	document.getElementById("imagen2").src=imagenes2[contador1%imagenes2.length][0];
	document.getElementById("link2").href=imagenes2[contador1%imagenes2.length][1];
	document.getElementById("t2").textContent=imagenes2[contador1%imagenes2.length][2];
	document.getElementById("imagen3").src=imagenes3[contador1%imagenes3.length][0];
	document.getElementById("link3").href=imagenes3[contador1%imagenes3.length][1];
	document.getElementById("t3").textContent=imagenes3[contador1%imagenes3.length][2];
}
function rotarImagen456(){
	document.getElementById("imagen4").src=imagenes4[contador4%imagenes4.length][0];
	document.getElementById("link4").href=imagenes4[contador4%imagenes4.length][1];
	document.getElementById("t4").textContent=imagenes4[contador4%imagenes4.length][2];
	document.getElementById("imagen5").src=imagenes5[contador4%imagenes5.length][0];
	document.getElementById("link5").href=imagenes5[contador4%imagenes5.length][1];
	document.getElementById("t5").textContent=imagenes5[contador4%imagenes5.length][2];
	document.getElementById("imagen6").src=imagenes6[contador4%imagenes6.length][0];
	document.getElementById("link6").href=imagenes6[contador4%imagenes6.length][1];
	document.getElementById("t6").textContent=imagenes6[contador4%imagenes6.length][2];
}
function rotarImagen789(){
	document.getElementById("imagen7").src=imagenes7[contador7%imagenes7.length][0];
	document.getElementById("link7").href=imagenes7[contador7%imagenes7.length][1];
	document.getElementById("t7").textContent=imagenes7[contador7%imagenes7.length][2];
	document.getElementById("imagen8").src=imagenes8[contador7%imagenes8.length][0];
	document.getElementById("link8").href=imagenes8[contador7%imagenes8.length][1];
	document.getElementById("t8").textContent=imagenes8[contador7%imagenes8.length][2];
	document.getElementById("imagen9").src=imagenes9[contador7%imagenes9.length][0];
	document.getElementById("link9").href=imagenes9[contador7%imagenes9.length][1];
	document.getElementById("t9").textContent=imagenes9[contador7%imagenes9.length][2];
}
// * Función que se ejecuta una vez cargada la página
function rotarImagen(){
    rotarImagen789();
    rotarImagen456();
    rotarImagen123();
    contador1++;
    contador4++;
    contador7++;
}
onload=function(){
    rotarImagen();
    setInterval(rotarImagen,2500);
}