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

$(
  function(){
  'use strict';

  var options = {
    anchors: 'a',
    prefetch: false,
    cacheLength: 2,
    debug: true,
    onStart: {
      duration: 250, // Duration of our animation
      render: function ($container) {
        // Add your CSS animation reversing class
        $container.addClass('is-exiting');

        // Restart your animation
        smoothState.restartCSSAnimations();
      }
    },
    onReady: {
      duration: 0,
      render: function ($container, $newContent) {
        // Remove your CSS animation reversing class
        $container.removeClass('is-exiting');

        // Inject the new content
        $container.html($newContent);

      }
    },
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

  }
);