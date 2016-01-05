$(document).ready(function() {
        function filterPath(string) {
        return string
          .replace(/^\//,'')
          .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
          .replace(/\/$/,'');
        }
        $('a[href*=#]').each(function() {
        if ( filterPath(location.pathname) == filterPath(this.pathname)
        && location.hostname == this.hostname
        && this.hash.replace(/#/,'') ) {
          var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
          var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
           if ($target) {
             var targetOffset = $target.offset().top;
             $(this).click(function() {
               $("li a").removeClass("active")
               $(this).addClass("active");

               var href = $(this).attr("href")
               var offsetTop = 0;
               if($(this).attr("href").indexOf("home") > -1)
                   offsetTop = -1*($(href).offset().top-topMenuHeight+1);
               else
                offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;

               $('html, body').stop().animate({
                   scrollTop: offsetTop
               }, 400+0.2*offsetTop);

               });
          }
        }
        });
        });
