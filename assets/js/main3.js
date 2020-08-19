(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {

        var isotopeSelectors = $(".isotope-button");

        isotopeSelectors.each(function() {
            var $selector = $(this);
            var $selectorData = $selector.data('isotope');

            $selector.click(function () {

                //    Add/Remove Active Class from Isotope Selectors
                $(isotopeSelectors).removeClass("active");
                $(this).addClass("active");


                //    Switching Isotope item by Clicking Tab Items
                var isotopeItems = $(".isotope-item");
                isotopeItems.each(function() {
                    var $singleItem = $(this);
                    console.log($singleItem);

                    var $itemData = $singleItem.data('isotope');
                    
                    if($selectorData !== $itemData) {
                        $(singleItem).hide();
                    }
                    else {
                        $(singleItem).show();
                    }
                });

            });

            

        });
        
        //    Add/Remove Active Class from Isotope Selectors
        // $(".isotope-button").click(function () {
        //     $(".isotope-button").removeClass("active");
        //     $(this).addClass("active");
        // });

        // //    Switching Isotope item by Clicking Tab Items
        // $(".isotope-button-0").click(function () {
        //     // $(".isotope-item").addClass("active");
        //     $(".isotope-item").show(500);
        // });

        // $(".isotope-button-1").click(function () {
        //     // $(".isotope-item").removeClass("active");
        //     // $(".isotope-item-1").addClass("active");
        //     $(".isotope-item").hide();
        //     $(".isotope-item-1").show(500);
        // });

        // $(".isotope-button-2").click(function () {
        //     // $(".isotope-item").removeClass("active");
        //     // $(".isotope-item-2").addClass("active");
        //     $(".isotope-item").hide();
        //     $(".isotope-item-2").show(500);
        // });

        // $(".isotope-button-3").click(function () {
        //     // $(".isotope-item").removeClass("active");
        //     // $(".isotope-item-3").addClass("active");
        //     $(".isotope-item").hide();
        //     $(".isotope-item-3").show(500);
        // });


    });




    jQuery(window).load(function () {


    });


}(jQuery));