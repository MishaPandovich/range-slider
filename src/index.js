// Aplication
import Model from './model.js';
import View from './view.js';
import Controller from './controller.js';

;(function($) {
	const model = new Model();
	const view = new View();
	const controller = new Controller(model, view); 

	var defaults = {
		rangeSlider: false,
		posThumbLeft: 10,
		posThumbRigth: 30
	}

	$.fn.slider = function(options) {
		var config = $.extend({}, defaults, options);
		var firstThis = this[0];

		if (!config.rangeSlider) {
			view.initSlider(firstThis, config.posThumbLeft);
			var thumb = document.getElementById(firstThis.id + '__thumb');
			var line = document.getElementById(firstThis.id + '__line');

			initSlider(thumb, line);
		} else {
			view.initRangeSlider(firstThis, config.posThumbLeft, config.posThumbRigth);
			var thumb = document.getElementById(firstThis.id + '__thumb');
			var thumb2 = document.getElementById(firstThis.id + '__thumb2');
			var line = document.getElementById(firstThis.id + '__line');

			initThumbLeft(thumb, thumb2, line);
			initThumbRigth(thumb, thumb2, line);
		}
	
		function initSlider(thumbEl, lineEl) {
			thumbEl.onmousedown = function() {
				controller.mousedownThumb(thumbEl);

				document.onmousemove = function() {
					controller.mousemoveThumb(thumbEl, lineEl);
				}

				document.onmouseup = function(){
					controller.mouseupThumb();
				}

				return false; // disable selection start (cursor change)
			}
		}

		function initThumbLeft(thumbEl, thumbEl2, lineEl) {
			thumbEl.onmousedown = function() {
				controller.mousedownThumb(thumbEl);

				document.onmousemove = function() {
					controller.mousemoveThumbLeft(thumbEl, thumbEl2, lineEl);
				}

				document.onmouseup = function(){
					controller.mouseupThumb();
				}

				return false; // disable selection start (cursor change)
			}
		}

		function initThumbRigth(thumbEl, thumbEl2, lineEl) {
			thumbEl2.onmousedown = function() {
				controller.mousedownThumb(thumbEl2);

				document.onmousemove = function() {
					controller.mousemoveThumbRigth(thumbEl, thumbEl2, lineEl);
				}

				document.onmouseup = function(){
					controller.mouseupThumb();
				}

				return false; // disable selection start (cursor change)
			}
		}
	};

})(jQuery);