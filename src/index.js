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


		var thumb = document.querySelector('#sliders__thumb');

		function standart(elemnt, e) {
			thumb.onmousedown = function(element, e) {
				controller.mousedownThumb(element, e);

				document.onmousemove = function(element, e) {
					controller.mousemoveThumb(element, e);
				}

				document.onmouseup = function(){
					controller.mouseupThumb();
				}

				return false; // disable selection start (cursor change)
			}
		}

		standart(thumb, event);
	};

})(jQuery);


// 1. создаем слайдер + 
// 2. 

/*
var thumb = document.querySelector('#thumb');

function standart(e) {
	thumb.onmousedown = function(e) {
		controller.mousedownThumb(e);

		document.onmousemove = function(e) {
			controller.mousemoveThumb(e);
		}

		document.onmouseup = function(){
			controller.mouseupThumb();
		}

		return false; // disable selection start (cursor change)
	}
}

standart(event);*/

