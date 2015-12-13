////////////////////////////////////////////
//
//  Changes colour of navbar on scrolling
//
////////////////////////////////////////////
$(document).ready(function() {       
   var scroll_start = 0;
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop()+50; // Adding some offset to change color when the bottom of the navbar hits the elements, not the top.
      if(scroll_start > 100) {
          $('.navbar').css('background-color', 'rgba(47, 48, 51, 0.8)');
       } else {
          $('.navbar').css('background-color', 'transparent');
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

  $('.twitter, .facebook, .linkedin').addClass('animated fadeInLeftFooter');

  }
);