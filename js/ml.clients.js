var clients = ["Gloria Boateng",
"DJED",
"FÄR",
"HIGH HI",
"THE GIRL WHO CRIED WOLF",
"IF ANYTHING HAPPENS TO THE CAT",
"MONKEY JUICE",
"CANDLE BAGS",
"BRUTUS",
"SLOTH PRINCE",
"RUN RUN RUN",
"BARST",
"TREHA SEKTORI",
"RM74",
"30,000 MONKIES",
"SINEWS",
"GHOSTLING",
"THE HOMELESS",
"COLDSORE",
"EVERY STRANGER LOOKS LIKE YOU",
"ELEANORA",
"COMETA",
"STEFFIE VAN CAUTER",
"POPCORNCULT",
"THE STRZEBONSKY NOISESCENE",
"ASHES",
"GOLDEN NOO$E",
"GROUPIES",
"ELABORATE",
"UGLY PEOPLE",
"FRONT:PARADOX",
"WITE NITE",
"ONO IDIOT",
"MIDNIGHT SOULS",
"CLEAR SKIES",
"THE BUTTPLUGS",
"ABRACADAVRE",
"THE MISANTROPHIC DANCEBAND",
"GööDHEAD",
"HEXA MERA",
"ATTICS",
"DANDY DRUNK DISTORTION",
"COLOUR ME BLIND",
"A POINT OF PROTEST",
"THE HIRED",
"DEEP INSIDERS",
"GODOT",
"HEARTBEAT:ZERO",
"ANNELORE & WILLEM",
"ICBM",
"KINO (b) FILMS",
"AEGIS",
"SOFA",
"FAT, FAST & SHORT"];

var addClients = function(){

  var p = toP(clients.join("<br>"));
  $("#clientlist").html(p);

}



var toP = function(txt){
  return "<p style='color: white;'>" + txt + "</p>";
}



window.onload = function() {
  var innerhtml="";
  innerhtml += "<p>Anything in here will be replaced on browsers that support the canvas element<\/p>";
  innerhtml += " <ul>";
  innerhtml += " <li>";
  innerhtml += " <li><a href=\"https:\/\/www.facebook.com\/MuchLuvStudio\" data-weight=\"14\" style=\"color: white;\" target=\"_blank\">Fat, Fast & Short<\/a><\/li>";
  innerhtml += " <li><a href=\"https:\/\/www.facebook.com\/thegoldennoose\/\" data-weight=\"25\" style=\"color: #f300ff;\" target=\"_blank\">Golden Noo$e<\/a><\/li>";
  innerhtml += " <li><a href=\"https:\/\/www.facebook.com\/Sinewsmusic\" data-weight=\"23\" style=\"color: white;\" target=\"_blank\">Sinews<\/a><\/li>";
  innerhtml += " <li><a href=\"https:\/\/www.facebook.com\/ClearSkiesBe\" data-weight=\"20\" style=\"color: white;\" target=\"_blank\">Clear Skies<\/a><\/li>";
  innerhtml += " <li><a href=\"http:\/\/lmgtfy.com\/?q=the+buttplugs\" data-weight=\"14\" style=\"color: white;\" target=\"_blank\">The Buttplugs<\/a><\/li>";
  innerhtml += " <li><a href=\"http:\/\/lmgtfy.com\/?q=Elaborate\" data-weight=\"16\" style=\"color: white;\" target=\"_blank\">Elaborate<\/a><\/li>";
  innerhtml += " <li><a href=\"https:\/\/www.facebook.com\/Thegirlwhocriedwolfmusic\" class=\"bandlink\" data-weight=\"26\"style=\"color: #f300ff;\" target=\"_blank\">The Girl Who Cried Wolf<\/a><\/li>";
  innerhtml += " <li><a href=\"https:\/\/www.facebook.com\/midnightsouls\" data-weight=\"40\"style=\"color: #fefb00;\" target=\"_blank\">Midnight Souls<\/a><\/li>";
  innerhtml += " <li><a href=\"https:\/\/www.facebook.com\/MuchLuvStudio\" data-weight=\"14\" style=\"color: white;\" target=\"_blank\">KINO (b) FILMS<\/a><\/li>";
  innerhtml += " <li><a href=\"https:\/\/www.facebook.com\/overfar\" class=\"bandlink\" data-weight=\"38\" style=\"color: #f300ff;\"target=\"_blank\">FÄR<\/a><\/li>";
  innerhtml += " <li><a href=\"https:\/\/www.facebook.com\/Colour.me.blind.music\" data-weight=\"24\" style=\"color: white;\" target=\"_blank\">Colour Me Blind<\/a><\/li>";
  innerhtml += " <li><a href=\"http:\/\/lmgtfy.com\/?q=ICBM\" data-weight=\"14\" style=\"color: white;\" target=\"_blank\">ICBM<\/a><\/li>";
  innerhtml += " <li><a href=\"http:\/\/lmgtfy.com\/?q=Godot\" data-weight=\"14\" style=\"color: white;\" target=\"_blank\">Godot<\/a><\/li>";
  innerhtml += " <li><a href=\"https:\/\/www.facebook.com\/groupiesgroupies\" data-weight=\"18\" style=\"color: white;\" target=\"_blank\">Groupies<\/a><\/li>";
  innerhtml += " <li><a href=\"https:\/\/www.facebook.com\/runrunrunband\" data-weight=\"35\"style=\"color: white;\" target=\"_blank\">RUN RUN RUN<\/a><\/li>";
  innerhtml += " <li><a href=\"https:\/\/www.facebook.com\/rrmm7744\" data-weight=\"23\" style=\"color: white;\" target=\"_blank\">RM74<\/a><\/li>";
  innerhtml += " <li><a href=\"https:\/\/www.facebook.com\/30000monkies\" data-weight=\"30\" style=\"color: #f300ff;\" target=\"_blank\">30,000 Monkies<\/a><\/li>";
  innerhtml += " <li><a href=\"https:\/\/www.facebook.com\/HighHiBand\" class=\"bandlink\" data-weight=\"40\" style=\"color: #fefb00;\" target=\"_blank\">High Hi<\/a><\/li>";
  innerhtml += " <li><a href=\"https:\/\/www.facebook.com\/Ono-Idiot-177119905633184\" data-weight=\"20\"style=\"color: white;\" target=\"_blank\">Ono Idiot<\/a><\/li>";
  innerhtml += " <li><a href=\"https:\/\/www.facebook.com\/hexameraofficial\" data-weight=\"35\" style=\"color: #fefb00;\" target=\"_blank\">HEXA MERA<\/a><\/li>";
  innerhtml += " <li><a href=\"http:\/\/lmgtfy.com\/?q=Deep+Insiders\" data-weight=\"14\" style=\"color: white;\" target=\"_blank\">Deep Insiders<\/a><\/li>";
  innerhtml += " <li><a href=\"https:\/\/www.facebook.com\/EveryStrangerLooksLikeYou\" data-weight=\"30\" style=\"color: #fefb00;\" target=\"_blank\">Every Stranger Looks Like You<\/a><\/li>";
  innerhtml += " <li><a href=\"https:\/\/www.facebook.com\/PopcornCult&ref=br_tf\" data-weight=\"18\" style=\"color: white;\" target=\"_blank\">PopcornCult<\/a><\/li>";
  innerhtml += " <li><a href=\"http:\/\/lmgtfy.com\/?q=ATTICS\" data-weight=\"20\" style=\"color: white;\" target=\"_blank\">Attics<\/a><\/li>";
  innerhtml += " <li><a href=\"https:\/\/www.facebook.com\/AbracadaverMusic\" data-weight=\"14\" style=\"color: white;\" target=\"_blank\">Abracadaver<\/a><\/li>";
  innerhtml += " <li><a href=\"https:\/\/www.youtube.com\/watch?v=9QiT5z_bHeU\" data-weight=\"18\" style=\"color: white;\" target=\"_blank\">Annelore & Willem<\/a><\/li>";
  innerhtml += " <li><a href=\"https:\/\/www.facebook.com\/FrontParadox-141069669172\" data-weight=\"20\" style=\"color: white;\" target=\"_blank\">Front:Paradox<\/a><\/li>";
  innerhtml += " <li><a href=\"https:\/\/www.facebook.com\/Eleanoramusic\" data-weight=\"25\" style=\"color: #fefb00;\" target=\"_blank\">Eleanora<\/a><\/li>";
  innerhtml += " <li><a href=\"https:\/\/www.facebook.com\/thestrzebonskynoizescene\/\"data-weight=\"25\" style=\"color: white;\" target=\"_blank\">The Strzebonsky Noizescene<\/a><\/li>";
  innerhtml += " <li><a href=\"https:\/\/www.facebook.com\/trehasektori\/\" data-weight=\"50\" style=\"color: #fefb00;\" target=\"_blank\">Treha Sektori<\/a><\/li>";
  innerhtml += " <li><a href=\"https:\/\/www.facebook.com\/MuchLuvStudio\" data-weight=\"14\" style=\"color: white;\" target=\"_blank\">SOFA<\/a><\/li>";
  innerhtml += " <li><a href=\"https:\/\/www.facebook.com\/Candlebagsmusic\" class=\"bandlink\" data-weight=\"23\" style=\"color: white;\" target=\"_blank\">Candle.Bags<\/a><\/li>";
  innerhtml += " <li><a href=\"https:\/\/www.facebook.com\/The-Hired-161127337258977\" data-weight=\"14\" style=\"color: white;\" target=\"_blank\">The Hired<\/a><\/li>";
  innerhtml += " <li><a href=\"https:\/\/www.facebook.com\/coldsorebe\" data-weight=\"27\" style=\"color: white;\" target=\"_blank\">Coldsore<\/a><\/li>";
  innerhtml += " <li><a href=\"https:\/\/www.facebook.com\/Goodhead.band\" data-weight=\"18\" style=\"color: white;\" target=\"_blank\">GööDHEAD<\/a><\/li>";
  innerhtml += " <li><a href=\"https:\/\/www.facebook.com\/Asheshcband\" data-weight=\"35\"style=\"color: #fefb00;\" target=\"_blank\">Ashes<\/a><\/li>";
  innerhtml += " <li><a href=\"https:\/\/www.facebook.com\/myslothprince\" data-weight=\"35\"style=\"color: #f300ff;\" target=\"_blank\">Sloth Prince<\/a><\/li>";
  innerhtml += " <li><a href=\"https:\/\/www.facebook.com\/ghostlingmusic\" data-weight=\"25\" style=\"color: white;\" target=\"_blank\">Ghostling<\/a><\/li>";
  innerhtml += " <li><a href=\"https:\/\/www.facebook.com\/MuchLuvStudio\" data-weight=\"14\" style=\"color: white;\" target=\"_blank\">AEGIS<\/a><\/li>";
  innerhtml += " <li><a href=\"https:\/\/soundcloud.com\/heartbeat-zero\" data-weight=\"18\" style=\"color: white;\" target=\"_blank\">HEARTBEAT:ZERO<\/a><\/li>";
  innerhtml += " <li><a href=\"http:\/\/lmgtfy.com\/?q=WITE+NITE\" data-weight=\"14\" style=\"color: white;\" target=\"_blank\">Wite Nite<\/a><\/li>";
  innerhtml += " <li><a href=\"https:\/\/www.facebook.com\/uglypeoplebxl\" data-weight=\"22\" style=\"color: white;\" target=\"_blank\">Ugly People<\/a><\/li>";
  innerhtml += " <li><a href=\"https:\/\/www.facebook.com\/thehomelesshc\" data-weight=\"30\" style=\"color: #f300ff;\" target=\"_blank\">The Homeless<\/a><\/li>";
  innerhtml += " <li><a href=\"https:\/\/www.facebook.com\/monkeyjuicemusic\" class=\"bandlink\" data-weight=\"23\" style=\"color: white;\" target=\"_blank\">Monkey Juice<\/a><\/li>";
  innerhtml += " <li><a href=\"https:\/\/www.facebook.com\/Dandy-Drunk-Distortion-131937280172088\" data-weight=\"24\" style=\"color: white;\" target=\"_blank\">Dandy Drunk Distortion<\/a><\/li>";
  innerhtml += " <li><a href=\"http:\/\/lmgtfy.com\/?q=THE+MISANTROPHIC+DANCEBAND&l=1\" data-weight=\"18\"style=\"color: white;\" target=\"_blank\">The Misantrophic Danceband<\/a><\/li>";
  innerhtml += " <li><a href=\"https:\/\/www.facebook.com\/BARSTmaker\" data-weight=\"25\"style=\"color: white;\" target=\"_blank\">Barst<\/a><\/li>";
  innerhtml += " <li><a href=\"https:\/\/www.facebook.com\/wearebrutus\" data-weight=\"40\" style=\"color: #fefb00;\" target=\"_blank\">BRUTUS<\/a><\/li>";
  innerhtml += " <a href=\"https:\/\/www.facebook.com\/ifanythinghappenstothecat\/\" class=\"bandlink\" data-weight=\"28\" style=\"color: #f300ff;\" target=\"_blank\">If Anything Happens To The Cat<\/a><\/li>";
  innerhtml += " <li><a href=\"http:\/\/www.steffievancauter.be\/\" data-weight=\"20\" style=\"color: white;\" target=\"_blank\">Steffie Van Cauter<\/a><\/li>";
  innerhtml += " <li><a href=\"https:\/\/www.facebook.com\/apointofprotest\" data-weight=\"22\" style=\"color: white;\" target=\"_blank\">A Point Of Protest<\/a><\/li>";
  innerhtml += " <li><a href=\"https:\/\/www.facebook.com\/djedisaband\" data-weight=\"21\" style=\"color: white;\" target=\"_blank\">DJED<\/a><\/li>";
  innerhtml += " <li><a href=\"https:\/\/www.facebook.com\/GloriaBoatengg\" data-weight=\"32\" style=\"color: #fefb00;\" target=\"_blank\">Gloria Boateng<\/a><\/li>";
  innerhtml += "  <\/ul>";

  $("#bandcloud").html(innerhtml);
  try {
    TagCanvas.textFont = '"Open Sans Condensed",sans-serif';
    TagCanvas.textColour = null;
    TagCanvas.textHeight = 25;
    TagCanvas.outlineThickness = 0;
    TagCanvas.outlineOffset = 1;
    TagCanvas.outlineMethod = 'block';
    TagCanvas.maxSpeed = 0.05;
    TagCanvas.minBrightness = 0.1;
    TagCanvas.depth = 1.05;
    TagCanvas.pulsateTo = 0.2;
    TagCanvas.pulsateTime = 0.75;
    TagCanvas.decel = 0.9;
    TagCanvas.reverse = true;
    TagCanvas.hideTags = false;
    TagCanvas.shadow = '#ccf';
    TagCanvas.shadowBlur = 2;
    TagCanvas.wheelZoom = false;
    TagCanvas.fadeIn = 800;
    TagCanvas.weight = true;
    TagCanvas.weightFrom = 'data-weight';

    TagCanvas.Start('bandcloud');
  } catch(e) {
    // something went wrong, hide the canvas container
    document.getElementById('bandcloudcontainer').style.display = 'none';
  }
};
