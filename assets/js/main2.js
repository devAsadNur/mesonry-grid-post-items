(function ($) {
	"use strict";

	jQuery(document).ready(function($){

		// Custom Filter 
        var $isotopeSelectors = $(".xyz-masonry-filter-item");
        $isotopeSelectors.each(function () {
            var $selectorSelf = $(this);

            $selectorSelf.click(function () {
				var $self = $(this);
				var $dataText = $self.data('filter').replace(".", "");

				$self.closest(".xyz-masonry-filter").find(".xyz-masonry-filter-item").removeClass("active");
                $self.addClass("active");

                var $parentWrapper = $self.closest(".xyz-custom-post-type-wrapper");
                var $isotopeItems = $parentWrapper.find(".xyz-masonry-item");
                
                $isotopeItems.each(function () {
                    var $itemSelf = $(this);
                    var $itemHasCalss = $itemSelf[0].classList.contains($dataText);

                    if ( $itemHasCalss || $dataText === '*') {
                        $itemSelf.show(500);
                    }
                    else {
                        $itemSelf.hide();
                    }

                });

            });
        });

		// Load More Ajax
		var button = $('.xyz-load-more');
		button.on("click", function(e) {
			e.preventDefault();
			var $self = $(this),
			query_settings = $self.data("settings"),
			$button_wrap = $self.closest(".xyz-load-more-wrap"),
			$main_wrapper = $self.closest(".xyz-custom-post-type-wrapper"),
			$masonry_wrapper =  $main_wrapper.find('.xyz-masonry-container'),
			item = $main_wrapper.find('.xyz-masonry-item'),
			loaded_item = $main_wrapper.find('.xyz-masonry-item').length;

			$self.attr("disabled", true);
			var push_item = '<div class="xyz-masonry-item xyz-is-filter-two"><img src="https://picsum.photos/400/300" alt=""><h3><a href="#">Lorem ipsum dolor sit amet consectetur</a></h3><ul><li><a href="#">Webiner</a></li><li><a href="#">28 May 2020</a></li></ul><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, in. Beatae alias modi fugit laborum ex illum<span>...</span></p><a href="#">5 min read</a></div>';
			
			var html = $.parseHTML( push_item );
			$masonry_wrapper.append( html );
			$self.removeAttr('disabled');

		});


	});

})(jQuery);