(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {


        // Isotope Mechanism Start
        var $isotopeSelectors = $(".isotope-button"); // Isotope Selectors

        // Looping through each isotope selectors
        $isotopeSelectors.each(function () {

            var $selectorSelf = $(this);    // Isotope current selector
            var $selectorNumber = $selectorSelf.data('isotope');    // Current selector's data number

            // Handler function based on click
            $selectorSelf.click(function () {

                // Add/Remove Active Class from Isotope Selectors
                var $siblingSelectors = $(this).siblings(".isotope-button");
                $siblingSelectors.removeClass("active");
                $(this).addClass("active");

                var $parentWrapper = $selectorSelf.closest(".isotope-wrapper"); // Parent wrapper
                var $isotopeItems = $parentWrapper.find(".isotope-item");       // Isotope items

                // Looping through each isotope items inside the parent wrapper
                $isotopeItems.each(function () {
                    var $itemSelf = $(this);    // Isotope item
                    var $itemNumber = $itemSelf.data('isotope');    // Item's data number

                    // Hide/Show items based on data numbers
                    if ($selectorNumber === $itemNumber || $selectorNumber === "*") {
                        $itemSelf.show(500);
                    }
                    else {
                        $itemSelf.hide();
                    }

                });

            });

        });
        // Isotope Mechanism End




    });




    jQuery(window).load(function () {


    });


}(jQuery));