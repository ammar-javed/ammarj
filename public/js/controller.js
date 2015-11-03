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
    blacklist: 'form',
    ////////////////////////////////////////////
    //
    //  Page Exiting Animations
    //
    ////////////////////////////////////////////
    onStart: {
      duration: 1200, // Duration of our animation
      render: function ($container) {
        // Add your CSS animation reversing class
        if ($('#homeCont').length) {
          $('#name h1').addClass('animated fadeOut');
          $('.button-top').addClass('animated fadeOutUp');
          $('.button-bottom').addClass('animated fadeOutDown');

          $('.twitter').addClass('animated fadeOut');
          $('.facebook').addClass('animated fadeOut');
          $('.linkedin').addClass('animated FadeOutRight');
        }
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

        if ($('#homeCont').length) {
          $('#name h1').addClass('animated fadeIn');
          $('#name').addClass('animated fadeInRight');
          $('.button-top').addClass('animated fadeInDown');
          $('.button-bottom').addClass('animated fadeInUp');

          $('.twitter').addClass('animated FadeInLeftFooter');
          $('.facebook').addClass('animated fadeIn');
          $('.linkedin').addClass('animated FadeInRightFooter');
        }

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
    $('#name').addClass('animated fadeInRight');
    $('.button-top').addClass('animated fadeInDown');
    $('.button-bottom').addClass('animated fadeInUp');

    $('.twitter').addClass('animated FadeInLeftFooter');
    $('.facebook').addClass('animated fadeIn');
    $('.linkedin').addClass('animated FadeInRightFooter');
  }

  }
);