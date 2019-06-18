// Aplication
import Model from './model.js';
import View from './view.js';
import Controller from './controller.js';


;(function($) {
	
	$.fn.slider = function() {
		const firstThis = this[0];
		const model = new Model();
		const view = new View(firstThis);
		const controller = new Controller(model, view); 

		view.initSlider(firstThis);
		
		var thumb = document.getElementById(firstThis.id + '__thumb');
		var line = document.getElementById(firstThis.id + '__line');

		function standart(thumbElem, lineElem) {
			thumbElem.onmousedown = function() {
				controller.mousedownThumb(thumbElem);

				document.onmousemove = function() {
					controller.mousemoveThumb(thumbElem, lineElem);
				}

				document.onmouseup = function(){
					controller.mouseupThumb();
				}

				return false; // disable selection start (cursor change)
			}
		}

		standart(thumb, line);
	};

})(jQuery);

