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
        if ($('.gallery').length) {

          var pswpElement = document.querySelectorAll('.pswp')[0];

          // build items array
          var items = [
              {
                  src: '/static/kbbq/kbbq5.jpg',
                  w: 820,
                  h: 615
              },
              {
                  src: '/static/kbbq/kbbq1.jpg',
                  w: 758,
                  h: 1010
              },
              {
                  src: '/static/kbbq/kbbq2.jpg',
                  w: 473,
                  h: 841
              },
              {
                  src: '/static/kbbq/kbbq3.jpg',
                  w: 635,
                  h: 1129
              },
              {
                  src: '/static/kbbq/kbbq4.jpg',
                  w: 532,
                  h: 946
              },
              {
                  src: '/static/kbbq/kbbq6.jpg',
                  w: 532,
                  h: 946
              },
              {
                  src: '/static/kbbq/kbbq7.jpg',
                  w: 532,
                  h: 946
              }
          ];

          // define options (if needed)
          var options = {
              // optionName: 'option value'
              // for example:
              index: 0 // start at first slide
          };

          // Initializes and opens PhotoSwipe
          var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);

          gallery.init();
        }
      }
  },
  smoothState = $('#main').smoothState(options).data('smoothState');

  if ($('.gallery').length) {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: '/static/kbbq/kbbq5.jpg',
            w: 500,
            h: 500
        },
        {
            src: '/static/kbbq/kbbq1.jpg',
            w: 500,
            h: 500
        },
        {
            src: '/static/kbbq/kbbq2.jpg',
            w: 500,
            h: 900
        },
        {
            src: '/static/kbbq/kbbq3.jpg',
            w: 500,
            h: 900
        },
        {
            src: '/static/kbbq/kbbq4.jpg',
            w: 500,
            h: 900
        }
    ];

    // define options (if needed)
    var options = {
        // optionName: 'option value'
        // for example:
        index: 0 // start at first slide
    };

    // Initializes and opens PhotoSwipe
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);

    gallery.init();
  }

}

);