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
      duration: 1500, // Duration of our animation
      render: function ($container) {
        // Add your CSS animation reversing class
        if ($('#homeCont').length) {
          $('#name').addClass('animated fadeOut');
          $('.button-top').addClass('animated fadeOutUp');
          $('.button-bottom').addClass('animated fadeOutDown');
        }  else {
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

        $('.twitter').addClass('animated fadeOutLeft twitterOut');
        $('.facebook').addClass('animated fadeOut facebookOut');
        $('.linkedin').addClass('animated FadeOutRight linkedinOut');

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
        }  else {
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

        $('.twitter').addClass('animated FadeInLeftFooter');
        $('.facebook').addClass('animated fadeIn');
        $('.linkedin').addClass('animated FadeInRightFooter');

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

  $('.twitter').addClass('animated FadeInLeftFooter');
  $('.facebook').addClass('animated fadeIn');
  $('.linkedin').addClass('animated FadeInRightFooter');

  }
);