/*////////// JQuery to intialise smoothstate //////////*/

$(function(){
  'use strict';
  var $page = $('#main'),
      options = {
        debug: true,
        prefetch: true,
        cacheLength: 2,
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
        }
      },
      smoothState = $page.smoothState(options).data('smoothState');
});


/*////////// OVERLAY NAV JS //////////*/

var menuButton = $('#menuButton'), Nav = $('#myNav'), closeButton = $('#closeButton'), projectButton = $('.project-button');

menuButton.click(function () { 
    Nav.addClass('overlay-open');
});

closeButton.click(function () { 
    Nav.addClass('overlay-closing');
    Nav.removeClass('overlay-open');
    Nav.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',   
        function(e) {
        Nav.removeClass('overlay-closing');
    });
});

projectButton.click(function () { 
    Nav.addClass('overlay-closing');
    Nav.removeClass('overlay-open');
    Nav.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',   
        function(e) {
        Nav.removeClass('overlay-closing');
    });
});

