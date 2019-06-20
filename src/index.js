// Aplication
import './addFacade.js';

;(function($) {
	var defaults = {
		rangeSlider: false,
		posThumbLeft: 10,
		posThumbRigth: 30
	}

	$.fn.slider = function(options) {
		var config = $.extend({}, defaults, options);
		var firstThis = this[0];
		var facade = window.addFacade;

		if (!config.rangeSlider) {
			facade.initViewSlider(firstThis, config.posThumbLeft);

			var thumb = document.getElementById(firstThis.id + '__thumb');
			facade.initSlider(thumb);
		} else {
			facade.initViewRangeSlider(firstThis, config.posThumbLeft, config.posThumbRigth);

			var thumb = document.getElementById(firstThis.id + '__thumb');
			var thumb2 = document.getElementById(firstThis.id + '__thumb2');
			facade.initThumbLeft(thumb, thumb2);
			facade.initThumbRigth(thumb, thumb2);
		}
	};

})(jQuery);