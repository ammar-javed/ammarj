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

      if ($('.projects').length) {

        $("#lightgallery").lightGallery();

      }

    }
  },
  smoothState = $('#main').smoothState(options).data('smoothState');

  $("#lightgallery").lightGallery({
    mode: 'lg-fade',
  });

  }
);