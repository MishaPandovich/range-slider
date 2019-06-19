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

		view.initRangeSlider(firstThis);
		
		var thumb = document.getElementById(firstThis.id + '__thumb');
		var thumb2 = document.getElementById(firstThis.id + '__thumb2');
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

		//standart(thumb, line);

		function thumbLeft(thumbElem, thumbElem2, lineElem) {
			thumbElem.onmousedown = function() {
				controller.mousedownThumb(thumbElem);

				document.onmousemove = function() {
					controller.mousemoveThumbLeft(thumbElem, thumbElem2, lineElem);
				}

				document.onmouseup = function(){
					controller.mouseupThumb();
				}

				return false; // disable selection start (cursor change)
			}
		}

		thumbLeft(thumb, thumb2, line);

		function thumbRigth(thumbElem, thumbElem2, lineElem) {
			thumbElem2.onmousedown = function() {
				controller.mousedownThumb(thumbElem2);

				document.onmousemove = function() {
					controller.mousemoveThumbRigth(thumbElem, thumbElem2, lineElem);
				}

				document.onmouseup = function(){
					controller.mouseupThumb();
				}

				return false; // disable selection start (cursor change)
			}
		}

		thumbRigth(thumb, thumb2, line);
	};

})(jQuery);

