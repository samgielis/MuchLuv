// Cache selectors
var lastId,
topMenu = $("#top-menu"),
topMenuHeight = topMenu.outerHeight()+15,
// All list items
menuItems = topMenu.find("a"),
// Anchors corresponding to menu items
scrollItems = menuItems.map(function(){
  var item = $($(this).attr("href"));
  if (item.length) { return item; }
});


// Bind to scroll
$(window).scroll(onScroll);

var prev_id = "home"
function onScroll(event){

  //sticky nav stuff
  if( $(this).scrollTop() > $('header').height()-60 ) {
    $(".main-nav").addClass("main-nav-scrolled");
  } else {
    $(".main-nav").removeClass("main-nav-scrolled");
  }

  var scrollPos = $(document).scrollTop();
  $('.top-menu a').each(function () {
    var currLink = $(this);
    var id = $(currLink.attr("href")).attr("id");
    var refElement = $("#"+id);

    if(id != prev_id){
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        $('.top-menu li a').removeClass("active");
        currLink.addClass("active");
        prev_id = refElement.attr("id");
      }

    }
  });
}
