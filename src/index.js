// Aplication
import Method from './addFacade.js';


;(function($) {
	const method = new Method();

	var defaults = {
		vertSlider : false,
		rangeSlider: false,
		posThumbLeft: 10,
		posThumbRigth: 50
	}

	$.fn.slider = function(options) {
		var config = $.extend({}, defaults, options);
		var parentEl = this[0];

		method.createSlider(config.rangeSlider,
											  config.vertSlider,
											  parentEl,
											  config.posThumbLeft,
											  config.posThumbRigth);

		var thumb = document.getElementById('sliders__thumb');
		console.log(thumb);
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

