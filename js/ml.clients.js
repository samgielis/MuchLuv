var clients = ["FÄR",
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
  try {
    TagCanvas.textFont = '"Open Sans Condensed",sans-serif';
    TagCanvas.textColour = 'white';
    TagCanvas.textHeight = 25;
    TagCanvas.outlineThickness = 5;
    TagCanvas.outlineOffset = 1;
    TagCanvas.outlineMethod = 'block';
    TagCanvas.maxSpeed = 0.05;
    TagCanvas.minBrightness = 0.1;
    TagCanvas.depth = 0.95;
    TagCanvas.pulsateTo = 0.2;
    TagCanvas.pulsateTime = 0.75;
    TagCanvas.decel = 0.9;
    TagCanvas.reverse = true;
    TagCanvas.hideTags = false;
    TagCanvas.shadow = '#ccf';
    TagCanvas.shadowBlur = 3;
    TagCanvas.wheelZoom = false;
    TagCanvas.fadeIn = 800;
    TagCanvas.weight = true;
    TagCanvas.weightFrom = 'data-weight';

    TagCanvas.Start('myCanvas');
  } catch(e) {
    // something went wrong, hide the canvas container
    document.getElementById('myCanvasContainer').style.display = 'none';
  }
};
