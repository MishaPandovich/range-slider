// Aplication
import Method from './addFacade.js';


;(function($) {
	var defaults = {
		vertSlider : false,
		rangeSlider: true,
		posThumbLeft: 10,
		posThumbRigth: 50
	}

	const method = new Method();

	$.fn.slider = function(options) {
		var config = $.extend({}, defaults, options);
		var parentEl = this[0];

		method.createSlider(config.rangeSlider,
							config.vertSlider,
							parentEl,
							config.posThumbLeft,
							config.posThumbRigth);

		(config.vertSlider) ? method.initVertSlider(config.rangeSlider) : method.initSlider(config.rangeSlider);	

		return this;
	};
})(jQuery);


