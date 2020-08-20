(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {


        // Isotope Mechanism Start
        var $isotopeSelectors = $(".isotope-button"); // Isotope Selectors

        // Looping through each isotope selectors
        $isotopeSelectors.each(function () {
            var $selectorSelf = $(this);    // Isotope selector
            var $selectorNumber = $selectorSelf.data('isotope');    // Selector's data number

            $selectorSelf.click(function () {

                //    Add/Remove Active Class from Isotope Selectors
                $($isotopeSelectors).removeClass("active");
                $(this).addClass("active");

                var $parentWrapper = $selectorSelf.closest(".isotope-wrapper"); // Parent wrapper
                var $isotopeItems = $parentWrapper.find(".isotope-item");       // Isotope items

                // Looping through each isotope items inside the parent wrapper
                $isotopeItems.each(function () {
                    var $itemSelf = $(this);    // Isotope item
                    var $itemNumber = $itemSelf.data('isotope');    // Selector's data number

                    if ($selectorNumber === $itemNumber || $selectorNumber === 0) {
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