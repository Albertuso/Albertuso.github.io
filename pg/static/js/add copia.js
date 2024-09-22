var contador1=0,contador2=0,contador3=0,contador4=0,contador5=0,contador6=0,contador7=0,contador8=0,contador9=0;
    // * Array con las imagenes y enlaces que se iran mostrando en la web
    var imagenes1=new Array(
        ['../static/images/radios/nacional/1.jpg','http://www.rtve.es/radios//', 'RNE'],
        ['../static/images/radios/nacional/2.jpg','https://www.ondacero.es/directo/', 'Onda Cero'],
        ['../static/images/radios/nacional/3.jpg','http://radios/espana.blogspot.com/2015/05/efe-radios/-en-directo.html', 'EFE'],
        ['../static/images/radios/nacional/4.jpg','https://play.cadenadial.com/', 'Cadena Dial'],
        ['../static/images/radios/nacional/5.jpg','http://play.cadenaser.com/?autoplay=true', 'Cadena Ser'],
        ['../static/images/radios/nacional/6.jpg','https://www.cope.es/directos/net1', 'Cadena Cope'],
        ['../static/images/radios/nacional/7.jpg','http://radios/espana.blogspot.com/2015/05/esradios/.html', 'Es radio'],
        ['../static/images/radios/nacional/8.jpg','http://radios/espana.blogspot.com/2015/05/intereconomia.html', 'Intereconomia'],
        ['../static/images/radios/autonomicos/1.jpg','http://www.canalsur.es/radio/directos/portada-directoradio-1160300.html?directo=player_rai', 'RAI'],
        ['../static/images/radios/autonomicos/2.jpg','http://www.canalsur.es/radio/directos/portada-directoradio-1160300.html?directo=player_csr', 'Canal Sur'],
        ['../static/images/radios/autonomicos/3.jpg','http://www.canalsur.es/radio/directos/portada-directoradio-1160300.html?directo=player_flamenco', 'Flamenco'],
        ['../static/images/radios/autonomicos/4.jpg','http://www.canalsur.es/radio/directos/portada-directoradio-1160300.html?directo=player_fiesta', 'Fiesta'],
        ['../static/images/radios/autonomicos/5.jpg','http://radioespana.blogspot.com/2015/05/emartv.html', 'Onda Local Andalucia'],
        ['../static/images/radios/autonomicos/6.jpg','http://radioespana.blogspot.com/2015/05/radiole.html', 'Radiole'],
        ['../static/images/radios/autonomicos/7.jpg','http://cartujaradio.radio.es/', 'Cartuja radio'],
        ['../static/images/radios/autonomicos/8.jpg','http://sierranevadafm.radio.es/', 'Sierra Nevada'],
        ['../static/images/radios/pop-rock/1.jpg','http://www.radio4g.com/', 'R4G'],
        ['../static/images/radios/pop-rock/2.jpg','https://play.los40.com/', 'Los 40'],
        ['../static/images/radios/pop-rock/3.jpg','https://www.europafm.com/directo/', 'Europa'],
        ['../static/images/radios/pop-rock/4.jpg','https://play.m80radio.com/', 'M80 Radio'],
        ['../static/images/radios/pop-rock/5.jpg','http://kissfm.es/player/', 'Kiss'],
        ['../static/images/radios/pop-rock/6.jpg','http://www.cadena100.es/', 'Cadena 100'],
        ['../static/images/radios/pop-rock/7.jpg','http://radioespana.blogspot.com/2015/05/melodia.html', 'Melodia'],
        ['../static/images/radios/pop-rock/8.jpg','http://player.rockfm.fm/', 'Rock'],
        ['../static/images/radios/locales/1.jpg','http://play.cadenaser.com/emisora/radio_granada/?autoplay=true', 'Ser Granada'],
        ['../static/images/radios/locales/2.jpg','http://guadixcadena.radio.es/', 'Ser Guadix'],
        ['../static/images/radios/locales/3.jpg','https://www.cope.es/directos/granada', 'COPE'],
        ['../static/images/radios/locales/4.jpg','http://www.emisora.org.es/cadena-dial-andalucia-este/', 'DIAL'],
        ['../static/images/radios/locales/5.jpg','http://divasound.radio.es/', 'Diva sound Granada'],
        ['../static/images/radios/locales/6.jpg','http://vivapop.radio.es/', 'Viva pop Granada'],
        ['../static/images/radios/locales/7.jpg','http://ondalojaradio.radio.es/', 'Onda Loja radio'],
        ['../static/images/radios/locales/8.jpg','http://padulsp.radio.es/', 'Radio Padul'],
        ['../static/images/radios/fiesta/1.jpg','http://www.hitfm.es/', 'Hit'],
        ['../static/images/radios/fiesta/2.jpg','http://www.viveradio.es/ReproductorLive.aspx', 'Vive'],
        ['../static/images/radios/fiesta/3.jpg','http://www.orm.es/directo/or-musica/', 'ORM'],
        ['../static/images/radios/fiesta/4.jpg','https://play.maxima.fm/', 'Maxima'],
        ['../static/images/radios/fiesta/5.jpg','http://radiofusion.itnor.es/', 'Radio fusion'],
        ['../static/images/radios/fiesta/6.jpg','http://www.megastar.fm/', 'Mega star'],
        ['../static/images/radios/fiesta/7.jpg','https://onda4.org/', 'Onda 4'],
        ['../static/images/radios/fiesta/8.jpg','http://radioespana.blogspot.com/2015/05/radiomaria.html', 'Maria'],
        ['../static/images/radios/internacional/1.jpg','http://elcafedelmundo.com/site/', 'El cafe del mundo'],
        ['../static/images/radios/internacional/2.jpg','http://www.toplatino.net/', 'Top latino'],
        ['../static/images/radios/internacional/3.jpg','https://sandungaradio.com/', 'Sandunga'],
        ['../static/images/radios/internacional/4.jpg','http://elhuecodelasalsa.com/', 'El hueco de la salsa'],
        ['../static/images/radios/internacional/5.jpg','http://www.radios.com.co/la-x-estereo-new-york/', 'La X estereo'],
        ['../static/images/radios/internacional/6.jpg','http://306radio.com/', '306'],
        ['../static/images/radios/internacional/7.jpg','http://www.radioritmo60stereo.net/index.html', 'Ritmo 60'],
        ['../static/images/radios/internacional/8.jpg','https://tunein.com/radio/North-America-r101218/', 'Norteamerica']
    );                
    var imagenes2=new Array(
        ['../static/images/periodicos/nacional/1.jpg','http://www.rtve.es/noticias/', 'RTVE'],
        ['../static/images/periodicos/nacional/2.jpg','https://www.efe.com/efe/espana/1', 'EFE'],
        ['../static/images/periodicos/nacional/3.jpg','https://www.antena3.com/noticias/espana/', 'Antena 3'],
        ['../static/images/periodicos/nacional/4.jpg','https://www.cuatro.com/noticias/', 'Cuatro'],
        ['../static/images/periodicos/nacional/5.jpg','https://www.telecinco.es/informativos/', 'Telecinco'],
        ['../static/images/periodicos/nacional/6.jpg','https://www.lasexta.com/noticias/', 'La sexta'],
        ['../static/images/periodicos/nacional/7.jpg','https://www.cope.es/', 'COPE'],
        ['../static/images/periodicos/nacional/8.jpg','http://cadenaser.com/', 'SER'],
        ['../static/images/periodicos/religion/1.jpg','https://www.religionenlibertad.com/', 'Religion en libertad'],
        ['../static/images/periodicos/religion/2.jpg','https://www.webislam.com/', 'Web Islam'],
        ['../static/images/periodicos/religion/3.jpg','https://www.ciudadredonda.org/', 'Ciudad Redonda'],
        ['../static/images/periodicos/religion/4.jpg','https://www.verislam.com/', 'Ver Islam'],
        ['../static/images/periodicos/religion/5.jpg','http://www.infocatolica.com/', 'Info Catolica'],
        ['../static/images/periodicos/religion/6.jpg','https://www.aciprensa.com/', 'Aci prensa'],
        ['../static/images/periodicos/religion/7.jpg','http://www.redescristianas.net/', 'Redes Cristianas'],
        ['../static/images/periodicos/religion/8.jpg','http://www.atrio.org/', 'Atrio'],
        ['../static/images/periodicos/religion/9.jpg','https://radialistas.net/', 'Radialistas'],
        ['../static/images/periodicos/religion/10.jpg','http://servicioskoinonia.org/', 'Koinonia'],
        ['../static/images/periodicos/autonomicos/1.jpg','https://www.granadahoy.com/', 'Granada hoy'],
        ['../static/images/periodicos/autonomicos/2.jpg','http://www.diariogranada.com/', 'Diario Granada'],
        ['../static/images/periodicos/autonomicos/3.jpg','https://www.ideal.es/', 'Ideal'],
        ['../static/images/periodicos/autonomicos/4.jpg','http://www.granadadigital.es/', 'Granada Digital'],
        ['../static/images/periodicos/autonomicos/5.jpg','http://www.elindependientedegranada.es/', 'El independiente'],
        ['../static/images/periodicos/autonomicos/6.jpg','http://granadatimes.com/', 'Granada Times'],
        ['../static/images/periodicos/autonomicos/7.jpg','http://cadenaser.com/emisora/radio_granada/', 'Ser Radio Granada'],
        ['../static/images/periodicos/autonomicos/8.jpg','https://andaluciainformacion.es/granada/', 'Viva Granada'],
        ['../static/images/periodicos/nacional2/1.jpg','https://prnoticias.com/', 'PR Noticias'],
        ['../static/images/periodicos/nacional2/2.jpg','https://www.ondacero.es/', 'Onda cero'],
        ['../static/images/periodicos/nacional2/3.jpg','https://www.abc.es/', 'ABC'],
        ['../static/images/periodicos/nacional2/4.jpg','https://www.20minutos.es/', '20 minutos'],
        ['../static/images/periodicos/nacional2/5.jpg','https://www.publico.es/', 'Publico'],
        ['../static/images/periodicos/nacional2/6.jpg','https://www.lavanguardia.com/', 'La vanguardia'],
        ['../static/images/periodicos/nacional2/7.jpg','https://elpais.com/', 'El pais'],
        ['../static/images/periodicos/nacional2/8.jpg','http://www.elmundo.es/', 'El mundo'],
        ['../static/images/periodicos/deporte/1.jpg','http://www.marca.com/', 'Marca'],
        ['../static/images/periodicos/deporte/2.jpg','https://www.mundodeportivo.com/', 'Mundo deportivo'],
        ['../static/images/periodicos/deporte/3.jpg','https://as.com/', 'AS'],
        ['../static/images/periodicos/deporte/4.jpg','https://www.sport.es/es/', 'Sport'],
        ['../static/images/periodicos/deporte/5.jpg','http://espndeportes.espn.com/', 'ESPN'],
        ['../static/images/periodicos/deporte/6.jpg','https://www.superdeporte.es/', 'Super Deporte'],
        ['../static/images/periodicos/deporte/7.jpg','http://www.estadiodeportivo.com/', 'Estadio deportivo'],
        ['../static/images/periodicos/deporte/8.jpg','https://www.diariogol.com/', 'Diario gol'],
        ['../static/images/periodicos/deporte/9.jpg','http://www.acb.com/', 'ACB'],
        ['../static/images/periodicos/deporte/10.jpg','http://www.nba.com/#/', 'NBA'],
        ['../static/images/periodicos/deporte/11.jpg','http://www.motogp.com/', 'Moto GP'],
        ['../static/images/periodicos/deporte/12.jpg','https://rincondelmotor.com/', 'Rincon del motor'],
        ['../static/images/periodicos/deporte/13.jpg','https://www.motociclismo.es/', 'Motociclismo'],
        ['../static/images/periodicos/locales/1.jpg','http://www.granadadeporte.es/', 'Granada deporte'],
        ['../static/images/periodicos/locales/2.jpg','http://www.andaluciadeportiva.com/', 'Andalucia deporte'],
        ['../static/images/periodicos/locales/3.jpg','http://www.alboloteinformacion.com/', 'Albolote informacion'],
        ['../static/images/periodicos/locales/4.jpg','https://andaluciainformacion.es/baza/', 'Andalucia informacion'],
        ['../static/images/periodicos/locales/5.jpg','http://www.infocostatropical.com/', 'infocosta tropical'],
        ['../static/images/periodicos/locales/6.jpg','http://www.motrildigital.com/', 'Motril digital'],
        ['../static/images/periodicos/locales/7.jpg','https://almunecardigital.com/', 'Almunecar digital'],
        ['../static/images/periodicos/locales/8.jpg','http://diarioalmunecar.com/', 'Diario Almunecar'],
        ['../static/images/periodicos/nacional3/1.jpg','https://www.elperiodico.com/es/', 'El periodico'],
        ['../static/images/periodicos/nacional3/2.jpg','https://www.elconfidencial.com/', 'El confidencial'],
        ['../static/images/periodicos/nacional3/3.jpg','https://okdiario.com/', 'OK Diario'],
        ['../static/images/periodicos/nacional3/4.jpg','http://diario16.com/', 'Diario 16'],
        ['../static/images/periodicos/nacional3/5.jpg','http://www.periodistadigital.com/', 'Periodista digital'],
        ['../static/images/periodicos/nacional3/6.jpg','http://www.diariosigloxxi.com/', 'Diario siglo XVI'],
        ['../static/images/periodicos/nacional3/7.jpg','https://www.huffingtonpost.es/', 'El Huffington Post'],
        ['../static/images/periodicos/nacional3/8.jpg','https://www.larazon.es/', 'La razon'],
        ['../static/images/periodicos/economia/1.jpg','http://www.eleconomista.es/', 'El conomista'],
        ['../static/images/periodicos/economia/2.jpg','https://intereconomia.com/', 'Intereconomia'],
        ['../static/images/periodicos/economia/3.jpg','https://www.economiadigital.es/', 'Economia digital'],
        ['../static/images/periodicos/economia/4.jpg','https://www.forbes.com/', 'Forbes'],
        ['../static/images/periodicos/economia/5.jpg','https://www.libremercado.com/', 'Libre mercado'],
        ['../static/images/periodicos/economia/6.jpg','https://es.fundspeople.com/', 'Funds people'],
        ['../static/images/periodicos/economia/7.jpg','http://www.expansion.com/', 'Expansion'],
        ['../static/images/periodicos/economia/8.jpg','https://www.diarioabierto.es/', 'Diario abierto'],
        ['../static/images/periodicos/economia/9.jpg','http://financialred.com/', 'Financial red'],
        ['../static/images/periodicos/economia/10.jpg','https://www.elblogsalmon.com/', 'El blog salmon'],
        ['../static/images/periodicos/economia/11.jpg','https://www.estrategiasdeinversion.com/', 'Estrategias de inversion'],
        ['../static/images/periodicos/economia/12.jpg','http://www.elreferente.es/', 'El referente'],
        ['../static/images/periodicos/economia/13.jpg','http://www.bolsamania.com/', 'Bolsamania'],
        ['../static/images/periodicos/economia/14.jpg','http://www.megabolsa.com/', 'Megabolsa'],
        ['../static/images/periodicos/economia/15.jpg','https://www.capitalmadrid.com/', 'Capital Madrid'],
        ['../static/images/periodicos/internacional/1.jpg','http://www.europapress.es/', 'Europa press'],
        ['../static/images/periodicos/internacional/2.jpg','https://www.hispantv.com/', 'Hispan TV'],
        ['../static/images/periodicos/internacional/3.jpg','https://actualidad.rt.com/todas_las_noticias', 'RT'],
        ['../static/images/periodicos/internacional/4.jpg','http://es.euronews.com/', 'Euronews'],
        ['../static/images/periodicos/internacional/5.jpg','https://www.bbc.com/mundo', 'BBC news'],
        ['../static/images/periodicos/internacional/6.jpg','https://cnnespanol.cnn.com/', 'CNN'],
        ['../static/images/periodicos/internacional/7.jpg','https://www.bloomberg.com/europe', 'Bloomberg'],
        ['../static/images/periodicos/internacional/8.jpg','https://news.sky.com/', 'Sky news']
    );        
    var imagenes3=new Array(
        ['../static/images/tv/nacional/1.jpg','http://www.rtve.es/directo/la-1', 'La 1'],
        ['../static/images/tv/nacional/2.jpg','http://www.rtve.es/directo/la-2', 'La 2'],
        ['../static/images/tv/nacional/3.jpg','https://www.atresplayer.com/directos/antena3/', 'Antena 3'],
        ['../static/images/tv/nacional/4.jpg','https://www.mitele.es/directo/cuatro', 'Cuatro'],
        ['../static/images/tv/nacional/5.jpg','https://www.telecinco.es/endirecto/', 'Telecinco'],
        ['../static/images/tv/nacional/6.jpg','https://www.atresplayer.com/directos/lasexta/', 'La secta'],
        ['../static/images/tv/nacional/7.jpg','https://www.paramountnetwork.es/en-directo/4ypes1/paramount', 'Paramount Channel'],
        ['../static/images/tv/nacional/8.jpg','https://www.goltelevision.com/live', 'Gol'],
        ['../static/images/tv/carta/1.jpg','https://telealacarta.es/canales-de-television/la-1', 'La 1 a la carta'],
        ['../static/images/tv/carta/2.jpg','https://telealacarta.es/canales-de-television/la-2', 'La 2 a la carta'],
        ['../static/images/tv/carta/3.jpg','https://telealacarta.es/canales-de-television/antena-3', 'Antena 3 a la carta'],
        ['../static/images/tv/carta/4.jpg','https://www.mitele.es/series-online', 'Series a la carta'],
        ['../static/images/tv/carta/5.jpg','http://www.rtve.es/alacarta/', 'RTVE a la carta'],
        ['../static/images/tv/autonomicos/1.jpg','http://www.canalsur.es/portada-adirecto-722225.html', 'Canal Sur'],     
        ['../static/images/tv/autonomicos/2.jpg','http://www.telemadrid.es/emision-en-directo', 'Telemadrid'],
        ['../static/images/tv/autonomicos/3.jpg','http://www.rtpa.es/television', 'RTPA Asturias'],
        ['../static/images/tv/autonomicos/4.jpg','http://www.cmmedia.es/en-directo/tv/', 'Castilla la Mancha'],
        ['../static/images/tv/autonomicos/5.jpg','http://populartvcantabria.com/livetv/', 'Popular Cantabria'],
        ['../static/images/tv/autonomicos/6.jpg','http://www.natv.es/Directo', 'Navarra TV'],
        ['../static/images/tv/series/1.jpg','https://www.bemad.es/endirecto/', 'Be Mad'],
        ['../static/images/tv/series/2.jpg','https://www.atresplayer.com/directos/atreseries/', 'A3Series'],
        ['../static/images/tv/series/3.jpg','https://www.atresplayer.com/neox/', 'Neox'],
        ['../static/images/tv/series/4.jpg','https://www.atresplayer.com/directos/mega/', 'Mega'],
        ['../static/images/tv/series/5.jpg','https://www.energytv.es/en-directo/', 'Energy'],
        ['../static/images/tv/series/6.jpg','https://www.factoriadeficcion.com/endirecto/', 'FDF'],
        ['../static/images/tv/series/7.jpg','https://www.divinity.es/endirecto/', 'Divinity'],
        ['../static/images/tv/series/8.jpg','https://www.atresplayer.com/directos/nova/', 'Nova'],
        ['../static/images/tv/ocio/1.jpg','http://los40.com/webcam/', 'Los 40 principales'],
        ['../static/images/tv/ocio/2.jpg','http://www.rtve.es/directo/teledeporte/', 'Teledeporte'],
        ['../static/images/tv/ocio/3.jpg','http://www.mtv.es/videos', 'MTV'],
        ['../static/images/tv/ocio/4.jpg','http://solmusica.com/videos', 'Sol Musica'],
        ['../static/images/tv/ocio/5.jpg','http://www.rtve.es/deportes/mas-tdp/directo/', '+Teledeporte'],
        ['../static/images/tv/ocio/6.jpg','http://www.movistarplus.es/formula1', 'F1'],
        ['../static/images/tv/ocio/7.jpg','https://www.mitele.es/momentazos/motogp-2016-momentazos/0000000002386', 'Moto GP'],
        ['../static/images/tv/ocio/8.jpg','https://www.realmadrid.com/real-madrid-tv', 'Real Madrid TV'],
        ['../static/images/tv/locales/1.jpg','http://www.dieztv.es/p/directo.html', 'Diez TV'],
        ['../static/images/tv/locales/2.jpg','http://www.ondajerez.com/television/television-en-directo/', 'Onda Jerez'],
        ['../static/images/tv/locales/3.jpg','http://huelvatv.com/directo/', 'Huelva TV'],
        ['../static/images/tv/infantil/1.jpg','http://www.rtve.es/infantil/series/#/videos/clan/todos/', 'Clan'],
        ['../static/images/tv/infantil/2.jpg','https://tv.disney.es/disney-channel', 'Disney'],
        ['../static/images/tv/infantil/3.jpg','http://www.nickelodeon.es/videos', 'Nickelodeon'],
        ['../static/images/tv/infantil/4.jpg','https://www.cartoonnetwork.es/videos', 'Cartoon Network'],
        ['../static/images/tv/infantil/5.jpg','https://www.mitele.es/directo/boing', 'Boing'],
        ['../static/images/tv/infantil/6.jpg','https://www.atresplayer.com/series-infantiles/', 'Series infantiles'],
        ['../static/images/tv/infantil/7.jpg','http://www.atresplayer.com/directos/television/neox-kidz/', 'Neox kidz'],
        ['../static/images/tv/econo-religion/1.jpg','http://www.trecetv.es/', 'Trece TV'],
        ['../static/images/tv/econo-religion/2.jpg','http://www.rtve.es/directo/canal-24h', '24 H'],
        ['../static/images/tv/econo-religion/3.jpg','https://www.intereconomia.tv/', 'Intereconomia'],
        ['../static/images/tv/econo-religion/4.jpg','http://www.rtve.es/noticias/mas-24/', '+24 H'],
        ['../static/images/tv/internacional/1.jpg','http://www.rtve.es/directo/canal-24h', '24 H'],
        ['../static/images/tv/internacional/2.jpg','https://www.hispantv.com/directo', 'Hispan TV'],
        ['../static/images/tv/internacional/3.jpg','https://tn.com.ar/envivo/24hs', 'TN - Argentina'],
        ['../static/images/tv/internacional/4.jpg','https://www.telesurtv.net/#.', 'Telesur - Peru'],
        ['../static/images/tv/internacional/5.jpg','https://actualidad.rt.com/en_vivo', 'RT en vivo'],
        ['../static/images/tv/internacional/6.jpg','http://www.euronews.com/live', 'Euronews'],
        ['../static/images/tv/internacional/7.jpg','https://www.bbc.com/news/av/10462520/one-minute-world-news', 'BBC World'],
        ['../static/images/tv/internacional/8.jpg','http://edition.cnn.com/video/flashLive/live.html?stream=stream1', 'CNN'],
        ['../static/images/tv/internacional/9.jpg','https://www.bloomberg.com/live/europe', 'Bloomberg'],
        ['../static/images/tv/internacional/10.jpg','https://news.sky.com/watch-live', 'Sky news']
    );              
    var imagenes4=new Array(
        ['../static/images/podcast/nacional/1.jpg','http://capitalradio.es/programas/a-tu-ritmo/?doing_wp_cron=1487663508.4343099594116210937500', 'Capital Radio'],
        ['../static/images/podcast/nacional/2.jpg','https://ohhhtv.com/', 'Ohhh! Tv postal'],
        ['../static/images/podcast/nacional/3.jpg','https://www.ivoox.com/podcast-coffee-break-senal-ruido_sq_f1172891_1.html', 'Coffe break'],
        ['../static/images/podcast/nacional/4.jpg','https://www.ivoox.com/podcast-cine-loqueyotediga_sq_f18010_1.html', 'lo que yo te diga'],
        ['../static/images/podcast/nacional/5.jpg','https://www.spreaker.com/show/tedtalks-negocios', 'Ted talks negocios'],
        ['../static/images/podcast/nacional/6.jpg','https://www.spreaker.com/show/nadiecomomama-com', 'Nadie como mama'],
        ['../static/images/podcast/nacional/7.jpg','https://www.ivoox.com/podcast-era-magazine_sq_f1414152_1.html', 'Era magazine'],
        ['../static/images/podcast/nacional/8.jpg','https://www.ivoox.com/podcast-podcast-cristina-mitre_sq_f1501371_1.html', 'Cristina Mitre'],
        ['../static/images/podcast/deporte/1.jpg','https://www.ivoox.com/podcast-caras-radio_sq_f1475118_1.html', 'Caras de radio'],
        ['../static/images/podcast/deporte/2.jpg','https://www.ivoox.com/podcast-larguero_sq_f1189_1.html', 'El larguero'],
        ['../static/images/podcast/deporte/3.jpg','https://www.ivoox.com/podcast-podcast-marketing-online_sq_f1133401_1.html', 'Marketing online'],
        ['../static/images/podcast/deporte/4.jpg','https://www.ivoox.com/podcast-contracronica_sq_f1267769_1.html', 'La contra cronica'],
        ['../static/images/podcast/deporte/5.jpg','https://www.ivoox.com/podcast-negra-criminal_sq_f1274027_1.html', 'Negra y criminal'],
        ['../static/images/podcast/deporte/6.jpg','https://www.ivoox.com/podcast-oh-my-lol-la-vida-moderna_sq_f1160064_1.html', 'Oh my lol'],
        ['../static/images/podcast/deporte/7.jpg','https://www.ivoox.com/podcast-qwerty-historias-ciencia_sq_f1311470_1.html', 'QWERTY'],
        ['../static/images/podcast/deporte/8.jpg','https://www.ivoox.com/podcast-ser-historia_sq_f13652_1.html', 'Ser Historia'],
        ['../static/images/podcast/nacional2/1.jpg','http://cadenaser.com/programa/cualquier_tiempo_pasado_fue_anterior/', 'Tiempo pasado'],
        ['../static/images/podcast/nacional2/2.jpg','http://play.cadenaser.com/audio/001RD010000004464397/', 'Nadie sabe nada'],
        ['../static/images/podcast/nacional2/3.jpg','https://gladyspalmera.com/programas/diego-manrique-el-mapa-secreto/', 'El mapa secreto'],
        ['../static/images/podcast/nacional2/4.jpg','https://podcastsenespanol.com/podcast/cadena-ser/acento-robinson', 'Acento Robinson'],
        ['../static/images/podcast/nacional2/5.jpg','https://www.ivoox.com/podcast-lo-tu-digas_sq_f1424550_1.html', 'Lo que tu digas'],
        ['../static/images/podcast/nacional2/6.jpg','https://podcastsenespanol.com/podcast/espn-deportes/uefa-champions-league-al-minuto', 'Champions al minuto'],
        ['../static/images/podcast/nacional2/7.jpg','https://podcastsenespanol.com/podcast/violetacast/moda-street', 'Moda street'],
        ['../static/images/podcast/nacional2/8.jpg','https://podcastsenespanol.com/podcast/npr/radio-ambulante', 'Radio ambulante'],
        ['../static/images/podcast/personales/1.jpg','https://cuonda.com/', 'Cuonda'],
        ['../static/images/podcast/personales/2.jpg','https://www.podiumpodcast.com/', 'Podium podcast'],
        ['../static/images/podcast/personales/3.jpg','https://noticiacorta.com/', 'Noticia corta'],
        ['../static/images/podcast/personales/4.jpg','https://www.lalibretadevangaal.com/', 'La libreta de Van Gaal'],
        ['../static/images/podcast/personales/5.jpg','https://emilcar.fm/category/granangular/', 'Gran angular'],
        ['../static/images/podcast/personales/6.jpg','http://catastrofeultravioleta.com/', 'Catastrofe ultravioleta'],
        ['../static/images/podcast/personales/7.jpg','https://www.ivoox.com/podcast-transforma-tu-energia-para-exito_sq_f1452391_1.html', 'Transforma tu energia en exito'],
        ['../static/images/podcast/personales/8.jpg','https://entiendetumente.info/', 'Extiende tu mente'],
        ['../static/images/podcast/infantil/1.jpg','https://babyradio.es/podcasts-babyradio', 'Baby radio'],
        ['../static/images/podcast/infantil/2.jpg','https://www.ivoox.com/podcast-trabalenguas_sq_f1134314_1.html', 'Ivoox'],
        ['../static/images/podcast/infantil/3.jpg','http://www.rtve.es/alacarta/audios/contando-cuentos-en-radio-5/', 'Contando cuentos'],
        ['../static/images/podcast/infantil/4.jpg','http://www.rtve.es/alacarta/audios/la-estacion-azul-de-los-ninos/', 'La estacion azul'],
        ['../static/images/podcast/infantil/5.jpg','http://www.radioline.co/podcast-podcast-cuentos-infantiles-y-para-toda-la-familia', 'Radio Line'],
        ['../static/images/podcast/infantil/6.jpg','https://tunein.com/podcasts/Current-Affairs/Podcast-Cuentos-infantiles-y-para-toda-la-familia-p438570/', 'Tune IN'],
        ['../static/images/podcast/infantil/7.jpg','https://itunes.apple.com/us/podcast/tedtalks-kids-and-family/id470623175?mt=2', 'Tedtalks kids'],
        ['../static/images/podcast/infantil/8.jpg','https://www.bbc.co.uk/programmes/p02pnn9d/episodes/downloads', 'Cbeebies'],
        ['../static/images/podcast/internacional/1.jpg','https://learnenglish.britishcouncil.org/en/learnenglish-podcasts/', 'British council'],
        ['../static/images/podcast/internacional/2.jpg','https://www.podcastsinenglish.com/index.shtml', 'Podcasts in english'],
        ['../static/images/podcast/internacional/3.jpg','https://player.fm/series/6-minute-grammar-1301610', '6 minute grammar'],
        ['../static/images/podcast/internacional/4.jpg','https://player.fm/series/all-ears-english-podcast-real-english-vocabulary-conversation-american-culture', 'All ears english'],
        ['../static/images/podcast/internacional/5.jpg','https://www.bbc.co.uk/programmes/p02pc9zn/episodes/downloads', 'The english we speak'],
        ['../static/images/podcast/internacional/6.jpg','https://podcastsenespanol.com/podcast/tu-ingles/tu-ingles', 'Tu ingles'],
        ['../static/images/podcast/internacional/7.jpg','https://learningenglish.voanews.com/', 'Learning english'],
        ['../static/images/podcast/internacional/8.jpg','https://www.betteratenglish.com/be-episode-archives', 'Better english']
    );                      
    var imagenes5=new Array(
        ['../static/images/revistas/nacional/1.jpg','https://cnnespanol.cnn.com/', 'CNN'],
        ['../static/images/revistas/nacional/2.jpg','https://www.muyinteresante.es/', 'Muy Interesante'],
        ['../static/images/revistas/nacional/3.jpg','http://www.quo.es/', 'Quo'],
        ['../static/images/revistas/nacional/4.jpg','https://www.semana.com/', 'Semana'],
        ['.,/static/images/revistas/nacional/5.jpg','https://www.animalpolitico.com/', 'Animal Politico'],
        ['../static/images/revistas/nacional/6.jpg','http://capital.es/', 'Capital'],
        ['../static/images/revistas/nacional/7.jpg','https://www.masactual.com/', 'Mas actual'],
        ['../static/images/revistas/nacional/8.jpg','https://www.revistagq.com/', ' GQ'],
        ['../static/images/revistas/moda/1.jpg','https://www.clara.es/', 'Clara'],
        ['../static/images/revistas/moda/2.jpg','https://www.cosmopolitan.com/es/', 'Cosmopolitan'],
        ['../static/images/revistas/moda/3.jpg','https://www.elle.com/es/', 'Elle'],
        ['../static/images/revistas/moda/4.jpg','https://www.enfemenino.com/', 'En femenino'],
        ['../static/images/revistas/moda/5.jpg','http://www.fashionclick.com/', 'Fashion click'],
        ['../static/images/revistas/moda/6.jpg','https://www.glamour.es/', 'Glamour'],
        ['../static/images/revistas/moda/7.jpg','http://www.grazia.es/', 'Grazia'],
        ['../static/images/revistas/moda/8.jpg','https://www.harpersbazaar.com/es/', 'Harpers bazaar'],
        ['../static/images/revistas/moda/9.jpg','https://www.marie-claire.es/', 'Marie Claire'],
        ['../static/images/revistas/moda/10.jpg','https://www.mujerdeelite.com/', 'Mujer de elite'],
        ['../static/images/revistas/moda/11.jpg','https://www.mujerhoy.com/', 'Mujer hoy'],
        ['../static/images/revistas/moda/12.jpg','http://www.paula.cl/', 'Paula'],
        ['../static/images/revistas/moda/13.jpg','http://siempremujer.com/', 'Siempre mujer'],
        ['../static/images/revistas/moda/14.jpg','http://www.telva.com/', 'Telva'],
        ['../static/images/revistas/moda/15.jpg','https://www.vogue.es/', 'Vogue'],
        ['../static/images/revistas/moda/16.jpg','https://www.revistavanityfair.es/', 'Vanity fair'],
        ['../static/images/revistas/cocina/1.jpg','https://www.revistacocina.com/', 'Revista cocina'],
        ['../static/images/revistas/cocina/2.jpg','https://www.miarevista.es/', 'Mia'],
        ['../static/images/revistas/cocina/3.jpg','https://gastronomiaycia.republica.com/', 'Gastronomia & cia'],
        ['../static/images/revistas/cocina/4.jpg','http://www.cocineando.com/', 'Cocineando'],
        ['../static/images/revistas/cocina/5.jpg','http://www.afuegolento.com/', 'A fuego lento'],
        ['../static/images/revistas/cocina/6.jpg','https://micocinavegetariana.com/', 'Mi cocina vegetariana'],
        ['../static/images/revistas/cocina/7.jpg','https://elcomidista.elpais.com/', 'El comidista'],
        ['../static/images/revistas/cocina/8.jpg','https://www.mundorecetas.com/', 'Mundo recetas'],
        ['../static/images/revistas/deporte/1.jpg','https://www.fourfourtwo.es/', 'Four Four Two'],
        ['../static/images/revistas/deporte/2.jpg','http://www.elenganche.es/', 'El enganche'],
        ['../static/images/revistas/deporte/3.jpg','https://www.motor16.com/', 'Motor 16'],
        ['../static/images/revistas/deporte/4.jpg','https://www.formulamoto.es/', 'Formula Moto'],
        ['../static/images/revistas/deporte/5.jpg','http://www.desnivel.com/', 'Desnivel'],
        ['../static/images/revistas/deporte/6.jpg','https://universobeisbol.mlblogs.com/', 'Universo Beisbol'],
        ['../static/images/revistas/deporte/7.jpg','https://www.revistaoxigeno.es/', 'Oxigeno'],
        ['../static/images/revistas/deporte/8.jpg','https://www.sportlife.es/', 'Sport life'],
        ['../static/images/revistas/musica/1.jpg','https://www.dsalud.com/', 'Discovery Salud'],
        ['../static/images/revistas/musica/2.jpg','https://dietamediterranea.com/', 'Fundacion dieta mediterranea'],
        ['../static/images/revistas/musica/3.jpg','https://www.hogarmania.com/', 'Hogar mania'],
        ['../static/images/revistas/musica/4.jpg','https://www.micasarevista.com/', 'Mi casa'],
        ['../static/images/revistas/musica/5.jpg','http://www.recetasdeladietadelospuntos.com/', 'La dieta de los puntos'],
        ['../static/images/revistas/musica/6.jpg','https://www.sabervivir.es/', 'Saber vivir'],
        ['../static/images/revistas/musica/7.jpg','https://muzikalia.com/', 'Muzicalia'],
        ['../static/images/revistas/corazon/1.jpg','https://www.cotilleo.es/', 'Cotilleo.es'],
        ['../static/images/revistas/corazon/2.jpg','https://www.revistacuore.com/', 'Cuore'],
        ['../static/images/revistas/corazon/3.jpg','https://www.diezminutos.es/', 'Diez minutos'],
        ['../static/images/revistas/corazon/4.jpg','https://www.hola.com/', 'Hola'],
        ['../static/images/revistas/corazon/5.jpg','https://www.lecturas.com/', 'Lecturas'],
        ['../static/images/revistas/corazon/6.jpg','https://www.revistalove.es/', 'Love'],
        ['../static/images/revistas/corazon/7.jpg','https://www.semana.es/', 'Semana'],
        ['../static/images/revistas/corazon/8.jpg','https://www.telecinco.es/salvame/', 'Salvame'],
        ['../static/images/revistas/humor/1.jpg','http://www.chistemania.com/', 'Chiste mania'],
        ['../static/images/revistas/humor/2.jpg','https://www.eljueves.es/', 'El jueves'],
        ['../static/images/revistas/humor/3.jpg','https://www.elmundotoday.com/', 'El mundo today'],
        ['../static/images/revistas/humor/4.jpg','https://www.elrellano.com/', 'El rellano'],
        ['../static/images/revistas/humor/5.jpg','http://www.lapaginadefinitiva.com/', 'La pagina definitiva'],
        ['../static/images/revistas/humor/6.jpg','http://lavozpopular.com/', 'La voz popular'],
        ['../static/images/revistas/humor/7.jpg','https://haynoticia.es/', 'Hay noticia'],
        ['../static/images/revistas/humor/8.jpg','https://www.revistamongolia.com/', 'Mongolia'],
        ['../static/images/revistas/tecnologia/1.jpg','https://www.android-magazine.es/', 'Android magazine'],
        ['../static/images/revistas/tecnologia/2.jpg','http://www.iphoneworld.com.es/', 'Iphone world'],
        ['../static/images/revistas/tecnologia/3.jpg','https://www.applesfera.com/', 'Applesfera'],
        ['../static/images/revistas/tecnologia/4.jpg','https://www.xataka.com/', 'Xataka'],
        ['../static/images/revistas/tecnologia/5.jpg','https://computerhoy.com/', 'Computer hoy'],
        ['../static/images/revistas/tecnologia/6.jpg','https://www.pcworld.es/', 'PC World'],
        ['../static/images/revistas/tecnologia/7.jpg','https://delitosinformaticos.com/', 'Delitos Informaticos'],
        ['../static/images/revistas/tecnologia/8.jpg','https://www.revistabyte.es/', 'Byte'],
        ['../static/images/revistas/tecnologia/9.jpg','http://www.ciospain.es/home', 'CIO'],
        ['../static/images/revistas/tecnologia/10.jpg','http://www.computerworld.es/home', 'Computer World'],
        ['../static/images/revistas/tecnologia/11.jpg','https://www.microsiervos.com/', 'Microsiervos'],
        ['../static/images/revistas/tecnologia/12.jpg','https://www.baquia.com/', 'Baquia'],
        ['../static/images/revistas/tecnologia/13.jpg','https://diarioti.com/', 'Diario TI'],
        ['../static/images/revistas/tecnologia/14.jpg','https://www.internautas.org/', 'Asociacion de internautas'],
        ['../static/images/revistas/tecnologia/15.jpg','https://www.puromarketing.com/', 'Puro marketing'],
        ['../static/images/revistas/internacional/1.jpg','https://www.mirror.co.uk/', 'Mirror'],
        ['../static/images/revistas/internacional/2.jpg','https://www.newsweek.com/', 'Newsweek'],
        ['../static/images/revistas/internacional/3.jpg','https://www.thesun.co.uk/', 'The sun'],
        ['../static/images/revistas/internacional/4.jpg','http://time.com/', 'Time'],
        ['../static/images/revistas/internacional/5.jpg','https://www.nytimes.com/', 'The New York Times'],
        ['../static/images/revistas/internacional/6.jpg','https://www.wsj.com/europe', 'The Wall Street Journal'],
        ['../static/images/revistas/internacional/7.jpg','https://japantoday.com/', 'Japan today'],
        ['../static/images/revistas/internacional/8.jpg','http://japantimes.co.jp', 'The Japan times']
    );          
    var imagenes6=new Array(
        ['../static/images/cine/3.jpg','http://www.bigfiveglories.com/', 'Big 5 glories'],
        ['../static/images/cine/1.jpg','https://www.snagfilms.com/', 'Snagfilms'],
        ['../static/images/cine/2.jpg','http://www.classiccinemaonline.com/','Clasic cinema online'],
        ['../static/images/cine/4.jpg','http://moviesfoundonline.com/','Movies found online'],
        ['../static/images/cine/5.jpg','https://archive.org/', 'Internet Archive'],
        ['../static/images/cine/6.jpg','https://www.popcornflix.com/','Popcornflix'],
        ['../static/images/cine/9.jpg','http://www.openculture.com/','Open culture'],
        ['../static/images/cine/7.jpg','https://www.viewster.com/', 'Viewster'],
        ['../static/images/cine/8.jpg','http://legalmentegratis.com/', 'Legalmente gratis']
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
// * Función que se ejecuta una vez cargada la página
onload=function(){
// document.getElementsByName("1p")[0].addEventListener("click",c1p(),false);
    rotarImagen6();
    rotarImagen5();
    rotarImagen4();
    rotarImagen3();
    rotarImagen2();
    rotarImagen1();
}
    var pack1=new Array();
    var pack2=new Array();
    var pack3=new Array();
    var pack4=new Array();
    var pack5=new Array();
    var pack6=new Array();
    var pos1=1,pos2=1,pos3=1,pos4=1,pos5=1,pos6=1;
function agregarCanal1(){
    if(confirm("Agregar en la posicion: "+pos1+". \nSeguro?")){
        pack1.push(imagenes1[contador1]);
        pos1++;
        document.getElementById("posicion1").innerHTML=pos1;
    }
}
function agregarCanal2(){
    if(confirm("Agregar en la posicion: "+pos2+". \nSeguro?")){
        pack2.push(imagenes2[contador2]);
        pos2++;
        document.getElementById("posicion2").innerHTML=pos2;
    }
}
function agregarCanal3(){
    if(confirm("Agregar en la posicion: "+pos3+". \nSeguro?")){
        pack3.push(imagenes3[contador3]);
        pos3++;
        document.getElementById("posicion3").innerHTML=pos3;
    }
}
function agregarCanal4(){
    if(confirm("Agregar en la posicion: "+pos4+". \nSeguro?")){
        pack4.push(imagenes4[contador4]);
        pos4++;
        document.getElementById("posicion4").innerHTML=pos4;
    }
}
function agregarCanal5(){
    if(confirm("Agregar en la posicion: "+pos5+". \nSeguro?")){
        pack5.push(imagenes5[contador5]);
        pos5++;
        document.getElementById("posicion5").innerHTML=pos5;
    }
}
function agregarCanal6(){
    if(confirm("Agregar en la posicion: "+pos6+". \nSeguro?")){
        pack6.push(imagenes6[contador6]);
        pos6++;
        document.getElementById("posicion6").innerHTML=pos6;
    }
}
function guardarCanal1(){
    if(confirm(canal(pack1)=="vacia.\n"?"Su lista es:\n"+canal(pack1):"Esta operacion sobrescribira su configuracion actual.\nEstas seguro?")){
            // location.href="https://www.w3schools.com&dato="+pack1;
            //movida, aqui se supone que con ajax puedo configurar para pasar al servidor php el array pack1
            // ya que intentando con javascript, solo en formato url consigo adjutar los datos en el get y queda feo
            /*
            $.ajax({
                data:  pack1, //datos que se envian a traves de ajax
                url:   '../index.phtml', //archivo que recibe la peticion
                type:  'post', //método de envio
                beforeSend: function () {
                        $("#resultado").html("Procesando, espere por favor...");
                },
                success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                        $("#resultado").html(response);
                }
        });
Con esto lo que se pretende es guardar el texto del array en la db en view sera al reves recuperar y enviar a javascript*/
//window.location.replace("../index.phtml");
        
        location.href="http://localhost:8080/Proyecto/index.php?opcion=1&pack1="+pack1;
        pack1=new Array();
    }
    else{
        if(canal(pack1)!="vacia.\n"){
            if(confirm("Su lista es:\n"+canal(pack1)+"\nPuede: \n-Cancelar y seguir agregando\n-Aceptar para empezar desde 0?")){
                pack1=new Array();
            }
        }    
    }
}
function guardarCanal2(){
}
function guardarCanal3(){
}
function guardarCanal4(){
}
function guardarCanal5(){
}
function guardarCanal6(){
}
function canal($arr){
    var titulo=new Array();
    for(i=0;i<$arr.length;i++){
        titulo.push((i+1)+":"+$arr[i][2]);
    }if(titulo.length<=0){
        titulo="vacia.\n";
    }
 return titulo;
}