(function ($) {
    "use strict";

    jQuery(window).load(function () {

        // Activate isotope in container
        $(".isotope-items").isotope({
            itemSelector: '.isotope-item',
            masonry: {
              columnWidth: 0
            }
        });

        // Add isotope click function
        $(".isotope-button").click(function () {
            $(".isotope-button").removeClass("active");
            $(this).addClass("active");

            var selector = $(this).attr('data-filter');
            $(".isotope-items").isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });
            return false;
        });

    });


}(jQuery));