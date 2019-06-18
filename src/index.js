// Aplication
import Model from './model.js';
import View from './view.js';
import Controller from './controller.js';

const model = new Model();
const view = new View();
const controller = new Controller(model, view); 


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

standart(event);