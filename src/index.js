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

		(config.vertSlider) ? method.initVertSlider(config.rangeSlider) : 
													method.initSlider(config.rangeSlider);	

		return this;
	};
})(jQuery);



// 1. поправить отрисовку 
// 2. сделать так, чтобы можно было мнговенно менять этот слайдер

//var thumb = document.getElementById('thumb-vert');
//facade.sayHi(thumb);
/*
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

		var thumbvert = document.getElementById('thumb-vert');

		facade.initSliderVert(thumbvert);
	};

})(jQuery);*/

