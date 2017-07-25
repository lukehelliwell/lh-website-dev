/*////////// JQuery to intialise smoothstate //////////*/

(function($) {
  'use strict';

  /*////////// OVERLAY NAV JS //////////*/
  function initNav($container) {
    var menuButton = $container.find('#menuButton'),
        Nav = $container.find('#myNav'),
        closeButton = $container.find('#closeButton'),
        projectButton = $container.find('.project-button');

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
        Nav.removeClass('overlay-open'); console.log ('hello');
        Nav.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',   
            function(e) {
            Nav.removeClass('overlay-closing');
        });
    }); 
  }
  
  function initPlugins($container) {
    initNav($container);
    // Put any other plugins acting on html rendered by smoothscroll here.
  }

  $(function() {
    var $page = $('#main');

    // Initialize plugins on initial html
    initPlugins($page);

    /*////////// JQuery to intialise smoothstate //////////*/
    var options = {
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
          },
          onAfter: function($container) {
            // Reinitialize plugins on newly rendered html
            initPlugins($container);
          }
        },
        smoothState = $page.smoothState(options).data('smoothState');  
  });

})(jQuery);