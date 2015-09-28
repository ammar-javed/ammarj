$( function() {
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
});