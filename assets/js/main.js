(function ($) {
    "use strict";

    jQuery(window).load(function () {

        // Activate isotope in container
        var $grid = $(".isotope-items");
        $grid.isotope({
            itemSelector: '.isotope-item',
            // masonry: {
            //   columnWidth: 0
            // }
        });

        // Add isotope click function
        $(".isotope-button").click(function () {
            $(".isotope-button").removeClass("active");
            $(this).addClass("active");

            var selector = $(this).attr('data-filter');
            $grid.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });
            return false;
        });

        // Add isotope click function
        $(".load-more").click(function (e) {
            e.preventDefault();

            // $(".isotope-button").removeClass("active");
            // $(this).addClass("active");

            console.log('some');
            var elem = $("<div class='isotope-item one'></div>").text("Text.");
            var elem2 = "<div class='isotope-item one'><h1>Appended Markup</h1></div>";

            console.log( typeof elem, typeof elem2 );
            console.log( elem, elem2 );
            var html = $.parseHTML( elem2 );
            // $grid.isotope()
            // .append( elem )
            // .isotope( 'appended', elem )
            // .isotope('layout');

            //elem.appendTo( $grid );
            $grid.append( html )
            // $grid.isotope('appended', elem);
            // $grid.isotope('layout');
            setTimeout( function(){
                console.log('i am in');
                // $grid.isotope('layout');
                $grid.isotope( 'appended', html ).isotope('layout');
            },1000);
            // $grid.isotope().isotope( 'appended', elem ).isotope('layout');
            // $grid.isotope( 'appended', elem ).isotope('layout');
        });

    });


}(jQuery));