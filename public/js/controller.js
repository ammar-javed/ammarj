////////////////////////////////////////////
//
//  Calculate viewport
//  Source: https://andylangton.co.uk/blog/development/get-viewportwindow-size-width-and-height-javascript
//
////////////////////////////////////////////
function viewport() {
    var e = window, a = 'inner';
    if (!('innerWidth' in window )) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
}

////////////////////////////////////////////
//
//  Changes colour of navbar on scrolling
//  Also hides the menu if navigating with
//  the menu drawer open in mobile mode.
//
////////////////////////////////////////////
$(document).ready(function() {       
   var scroll_start = 0;
   $(document).scroll(function() { 
    if ( $(window).width() < 1024)  {
      $('.header').css('display', 'none');
      $('.header li').removeClass('mobile-trans');
    } else {
      $('.header').css('display', 'block');
    }
    scroll_start = $(this).scrollTop()+50; // Adding some offset to change color when the bottom of the navbar hits the elements, not the top.
    if(scroll_start > 80 && $(window).width() > 1024) {
        $('.navbar').css('background-color', 'rgba(47, 48, 51, 0.8)');
     } else {
        $('.navbar').css('background-color', 'transparent');
     }
   });
});


////////////////////////////////////////////
//
//  Toggle mobile menu
//
////////////////////////////////////////////
$(document).ready(function() {
  $('.res-menu').click( function(e) {
    e.preventDefault();
    if ($('.header').css('display') === 'block') {
      $('.header').css('display', 'none');
      $('.header li').removeClass('mobile-trans');
    } else {
      $('.header').css('display', 'block');
      $('.header li').addClass('mobile-trans');
    }
  });
});

////////////////////////////////////////////
//
//  Helper function, checking to see if 
//  Plugin as already been loaded, if not
//  then set a callback to check again in
//  50 MS. If loaded, then init the plugin.
//
////////////////////////////////////////////
var isoCheck = function () {
  if (jQuery().isotope) {
    $('.gal-grid').isotope({
      itemSelector: '.gal-item',
      layoutMode: 'masonry',
      masonry: {
        columnWidth: 5,
      }
    });
  } else {
    setTimeout(isoCheck,50);
  }
}

////////////////////////////////////////////
//
//  Main smoothState Driver
//
////////////////////////////////////////////

$(
  function(){
  'use strict';

  var options = {
    anchors: 'a',
    prefetch: true,
    cacheLength: 0,
    debug: true,
    blacklist: 'form, .gal-item',
    ////////////////////////////////////////////
    //
    //  Page Exiting Animations
    //
    ////////////////////////////////////////////
    onStart: {
      duration: 1500, // Duration of our animation
      render: function ($container) {
        // Add your CSS animation reversing class
        if ($('#homeCont').length) {

          $('table #name').addClass('animated fadeOut');

          if ( $(window).width() < 1024 ) {
            $('.button-top, .button-bottom').addClass('animated fadeOutDown');
          } else {
            $('.button-top').addClass('animated fadeOutUp');
            $('.button-bottom').addClass('animated fadeOutDown');
          }

        }  else {
          // Navbar
          $('li.name').addClass('animated nameOut fadeOutUp');
          $('li.about').addClass('animated aboutOut fadeOutUp');
          $('li.projects').addClass('animated projectsOut fadeOutUp');
          $('li.exp').addClass('animated expOut fadeOutUp');
          $('li.contact').addClass('animated contactOut fadeOutUp');
          $('li.blog').addClass('animated blogOut fadeOutUp');
        }

        if ($("#aboutCont").length) {
          $('.contentcontainer').addClass('animated fadeOut');
          $('.me').addClass('animated zoomOut');
          $('.quote').addClass('animated fadeOut');
          $('.quoter').addClass('animated fadeOut');
          $('.blurb').addClass('animated fadeOut');
        }

        if ($('#projectsCont').length) {
          var delay = 0.3;
          $('.panel').each( function (i) {
            $(this).addClass('animated zoomOut');
            $(this).css("-webkit-animation-delay", String(delay)+"s");
            $(this).css("-webkit-animation-duration", "2s");
          });

          delay+=0.2;
        }

        if ($('#experiences').length) {
          var delay = 0.3;
          $('.xp').each( function (a) {
            $(this).addClass('animated zoomOut');
            $(this).css("-webkit-animation-delay", String(delay)+"s");
            $(this).css("-webkit-animation-duration", "2s");

            delay+=0.2;
          });
        }

        if ($('#contactform').length) {
          $('.contactContent').addClass('animated fadeOutUp15');
        }

        if ($('#blogshome').length) {
          $('.blogscontainer').addClass('animated zoomOut');
        }
        
        //Giving a nice transition to [colored] navbar
        $('.navbar').css('background-color', 'transparent');

        $('.twitter').addClass('animated fadeOutRight twitterOut');
        $('.facebook').addClass('animated fadeOutRight facebookOut');
        $('.linkedin').addClass('animated fadeOutRight linkedinOut');

        $container.addClass('is-exiting');

        // Restart your animation
        smoothState.restartCSSAnimations();
      }
    },
    ////////////////////////////////////////////
    //
    //  Page Loaded Animations
    //
    ////////////////////////////////////////////
    onReady: {
      duration: 1000,
      render: function ($container, $newContent) {
        // Remove your CSS animation reversing class
        $container.removeClass('is-exiting');

        // Inject the new content
        $container.html($newContent);

        $('.res-menu').click( function(e) {
          e.preventDefault();
          if ($('.header').css('display') === 'block') {
            $('.header').css('display', 'none');
          } else {
            $('.header').css('display', 'block');
          }
        });

        if ($('#homeCont').length) {

          $('#name h1').addClass('animated fadeIn');

          if ($(window).width() < 1024) {
            $('.button-top, .button-bottom, #name').addClass('animated fadeInUp');
          } else {
            $('table #name').addClass('animated fadeInRight');
            $('.button-top').addClass('animated fadeInDown');
            $('.button-bottom').addClass('animated fadeInUp');
          }

        }  else {
          // Navbar
          $('li.name').addClass('animated fadeInDown');
          $('li.about').addClass('animated fadeInDown');
          $('li.projects').addClass('animated fadeInDown');
          $('li.exp').addClass('animated fadeInDown');
          $('li.contact').addClass('animated fadeInDown');
          $('li.blog').addClass('animated fadeInDown');
        }

        if ($("#aboutCont").length) {
          $('.contentcontainer').addClass('animated fadeIn');
          $('.me').addClass('animated flipInX');
          $('.quote').addClass('animated fadeInLeftFooter');
          $('.quoter').addClass('animated fadeInRight');
          $('.blurb').addClass('animated fadeIn');
        }

        if ($('#projectsCont').length) {
          var delay = 0.3;
          $('.panel').each( function (i) {
            $(this).addClass('animated fadeIn');
            $(this).css("-webkit-animation-delay", String(delay)+"s");
            $(this).css("-webkit-animation-duration", "2s");

            var spacer = $(this).find(".or-spacer");
            $(spacer).addClass('animated zoomIn');
            $(spacer).css("-webkit-animation-delay", String(delay+0.2)+"s");
            $(spacer).css("-webkit-animation-duration", "2s");

            var title = $(this).find("h1");
            $(title).addClass('animated fadeInDown');
            $(title).css("-webkit-animation-delay", String(delay+0.4)+"s");
            $(title).css("-webkit-animation-duration", "2s");

            var info = $(this).find(".info");
            $(info).addClass('animated fadeInDown');
            $(info).css("-webkit-animation-delay", String(delay+0.6)+"s");
            $(info).css("-webkit-animation-duration", "2s");

            var picDelay = delay;
            $('.gal-item img').each( function (e) {
              $(this).addClass('animated fadeInUp');
              $(this).css("-webkit-animation-delay", String(picDelay+1)+"s");
              $(this).css("-webkit-animation-duration", "2s");
              picDelay+=0.2;
            });

            delay+=0.5;
          });
        }

        if ($('#experiences').length) {
          var delay = 0.3;
          $('.xp').each( function (a) {
            $(this).addClass('animated fadeIn');
            $(this).css("-webkit-animation-delay", String(delay)+"s");
            $(this).css("-webkit-animation-duration", "2s");

            var spacer = $(this).find(".or-spacer");
            $(spacer).addClass('animated zoomIn');
            $(spacer).css("-webkit-animation-delay", String(delay+0.2)+"s");
            $(spacer).css("-webkit-animation-duration", "2s");

            var title = $(this).find("h1");
            $(title).addClass('animated fadeInDown');
            $(title).css("-webkit-animation-delay", String(delay+0.4)+"s");
            $(title).css("-webkit-animation-duration", "2s");

            var info = $(this).find(".info");
            $(info).addClass('animated fadeInDown');
            $(info).css("-webkit-animation-delay", String(delay+0.6)+"s");
            $(info).css("-webkit-animation-duration", "2s");

            var logo = $(this).find(".logo");
            $(logo).addClass('animated flipInY');
            $(logo).css("-webkit-animation-delay", String(delay+0.6)+"s");
            $(logo).css("-webkit-animation-duration", "2s");

            var desc = $(this).find(".desc");
            $(desc).addClass('animated fadeInUpDesc');
            $(desc).css("-webkit-animation-delay", String(delay+0.6)+"s");
            $(desc).css("-webkit-animation-duration", "3s");

            delay+=0.4;
          });
        }

        if ($('#contactform').length) {
          $('.contactContent').addClass('animated fadeInDown');
        }

        if ($('#blogshome').length) {
          $('.blogscontainer').addClass('animated fadeIn');
          $('.gifContainer').addClass('animated fadeInUp');
        }

        $('.twitter, .facebook, .linkedin').addClass('animated fadeInLeftFooter');

      }
    },
    ////////////////////////////////////////////
    //
    //  Load/Init Page Plugins
    //
    ////////////////////////////////////////////
    onAfter: function ($container, $newContent) {

      if ($('#projectsCont').length) {

        $("#lightgallery").lightGallery({
          mode: 'lg-fade',
          addClass: 'fixed-size'
        });

        isoCheck();

      }

    }
  },
  smoothState = $('#main').smoothState(options).data('smoothState');

  ////////////////////////////////////////////
  //
  //  Direct Page Load Plugin init
  //
  ////////////////////////////////////////////
  if ($('#projectsCont').length) {

    $("#lightgallery").lightGallery({
      mode: 'lg-fade',
      addClass: 'fixed-size'
    });

    $('.gal-grid').isotope({
      itemSelector: '.gal-item',
      layoutMode: 'masonry',
      masonry: {
        columnWidth: 5,
      }
    });

  }

  ////////////////////////////////////////////
  //
  //  Direct Page Loaded Animations
  //
  ////////////////////////////////////////////

  if ($('#homeCont').length) {
    $('#name h1').addClass('animated fadeIn');
    if ($(window).width() < 1024) {
      $('.button-top, .button-bottom, #name').addClass('animated fadeInUp');
    } else {
      $('table #name').addClass('animated fadeInRight');
      $('.button-top').addClass('animated fadeInDown');
      $('.button-bottom').addClass('animated fadeInUp');
    }
  } else {
    $('li.name').addClass('animated fadeInDown');
    $('li.about').addClass('animated fadeInDown');
    $('li.projects').addClass('animated fadeInDown');
    $('li.exp').addClass('animated fadeInDown');
    $('li.contact').addClass('animated fadeInDown');
    $('li.blog').addClass('animated fadeInDown');
  }

  if ($("#aboutCont").length) {
    $('.contentcontainer').addClass('animated fadeIn');
    $('.me').addClass('animated flipInX');
    $('.quote').addClass('animated fadeInLeftFooter');
    $('.quoter').addClass('animated fadeInRight');
    $('.blurb').addClass('animated fadeIn');
  }

  if ($('#projectsCont').length) {
    var delay = 0.3;
    $('.panel').each( function (i) {
      $(this).addClass('animated fadeIn');
      $(this).css("-webkit-animation-delay", String(delay)+"s");
      $(this).css("-webkit-animation-duration", "2s");

      var spacer = $(this).find(".or-spacer");
      $(spacer).addClass('animated zoomIn');
      $(spacer).css("-webkit-animation-delay", String(delay+0.2)+"s");
      $(spacer).css("-webkit-animation-duration", "2s");

      var title = $(this).find("h1");
      $(title).addClass('animated fadeInDown');
      $(title).css("-webkit-animation-delay", String(delay+0.4)+"s");
      $(title).css("-webkit-animation-duration", "2s");

      var info = $(this).find(".info");
      $(info).addClass('animated fadeInDown');
      $(info).css("-webkit-animation-delay", String(delay+0.6)+"s");
      $(info).css("-webkit-animation-duration", "2s");

      var picDelay = delay;
      $('.gal-item img').each( function (e) {
        $(this).addClass('animated fadeInUp');
        $(this).css("-webkit-animation-delay", String(picDelay+1)+"s");
        $(this).css("-webkit-animation-duration", "2s");
        picDelay+=0.2;
      });

      delay+=0.5;
    });
  }

  if ($('#experiences').length) {
    var delay = 0.3;
    $('.xp').each( function (a) {
      $(this).addClass('animated fadeIn');
      $(this).css("-webkit-animation-delay", String(delay)+"s");
      $(this).css("-webkit-animation-duration", "2s");

      var spacer = $(this).find(".or-spacer");
      $(spacer).addClass('animated zoomIn');
      $(spacer).css("-webkit-animation-delay", String(delay+0.2)+"s");
      $(spacer).css("-webkit-animation-duration", "2s");

      var title = $(this).find("h1");
      $(title).addClass('animated fadeInDown');
      $(title).css("-webkit-animation-delay", String(delay+0.4)+"s");
      $(title).css("-webkit-animation-duration", "2s");

      var info = $(this).find(".info");
      $(info).addClass('animated fadeInDown');
      $(info).css("-webkit-animation-delay", String(delay+0.6)+"s");
      $(info).css("-webkit-animation-duration", "2s");

      var logo = $(this).find(".logo");
      $(logo).addClass('animated flipInY');
      $(logo).css("-webkit-animation-delay", String(delay+0.6)+"s");
      $(logo).css("-webkit-animation-duration", "2s");

      var desc = $(this).find(".desc");
      $(desc).addClass('animated fadeInUpDesc');
      $(desc).css("-webkit-animation-delay", String(delay+0.6)+"s");
      $(desc).css("-webkit-animation-duration", "2s");

      delay+=0.4;
    });
  }

  if ($('#contactform').length) {
    $('.contactContent').addClass('animated fadeInDown');
  }

  if ($('#blogshome').length) {
    $('.blogscontainer').addClass('animated fadeIn');
    $('.gifContainer').addClass('animated fadeInUp');
  }

  $('.twitter, .facebook, .linkedin').addClass('animated fadeInLeftFooter');

  }
);