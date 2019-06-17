// 2. Независимость Модели и синхронизация пользовательских интерфейсов за счет шаблона НаблюдательS
import Observer from './Observer.js';

class Model extends Observer {
	constructor(options) {
		super();
		this.drag_status = false;
		this.positionX;
		this.count = 0;

		this.hui = 'lolollo';
	}

	getData(event) {
		this.notify(event, this.hui);
	}
}

class View {
	constructor() {
		this.thumb = document.querySelector('#thumb');
		this.line = document.getElementById('bg');
	}

	changeView(left) {
		this.thumb.style.left = left + 'px';
	}
}

class Controller {
	constructor(Model, View) {
		this._model = Model;
		this._view = View;

		this.positionSlider = 0;
		this.thumb = this._view.thumb;
		this.line = this._view.line;

		const clickThumb = { // слушатель
			update(title) {
				console.log(title);
			}
		};

		model.add('click', clickThumb);
		model.getData('click');
	}

	mousedownThumb(e) {
		this._model.drag_status = true;
		this.positionSlider = e.pageX - this.thumb.offsetLeft;
	}

	mousemoveThumb(e) {
		if (!this._model.drag_status) return false;
		
		this._model.positionX = e.pageX - this.positionSlider;

		if (this._model.positionX < 0) {
			this._model.positionX = 0;
		}
		
		if (this._model.positionX > (this.line.offsetWidth - this.thumb.offsetWidth)) {
			this._model.positionX = (this.line.offsetWidth - this.thumb.offsetWidth);
		}

	 	this._view.changeView(this._model.positionX);
	}

	mouseupThumb() {
		this._model.drag_status = false;
	}
}

// API
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
// 1. прочитать по фасад
// 2. разбить констроллер на подписки

/*
class View {
	constructor() {

	const subscriber1 = { // слушатель
		update(title) {
			console.log(title);
		}
	};


	 const model = new Model();
//
	model.add('publish', subscriber1); 

	 var thumb = document.getElementById('thumb');
	 var bg = document.getElementById('bg');
	 var positionSlider = 0;

	 thumb.onmousedown = function(e) {

		model.publish('sfs');

	 	model.drag_status = true;
	 	positionSlider = e.pageX - thumb.offsetLeft;

	 	document.onmousemove = function(e) {
	 		if (!model.drag_status) return false;

	 		model.positionX = e.pageX - positionSlider;

	 		if (model.positionX < 0) {
	 			model.positionX = 0;
	 		}

	 		if (model.positionX > (bg.offsetWidth - thumb.offsetWidth)) {
	 			model.positionX = (bg.offsetWidth - thumb.offsetWidth);
	 		}

	 		thumb.style.left = model.positionX + 'px';
	 	}

	 	document.onmouseup = function(){
			model.drag_status = false;
		}

		return false; // disable selection start (cursor change)
	 }

	 thumb.ondragstart = function() {
	  return false;
	 };
	}
}

const view = new View();
*/