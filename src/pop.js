class Model extends Observer {
	constructor(options) {
		super();
		this.drag_status = false;
		this.positionX;
		this.count = 0;
	}

	publish(title) {
		this.notify('publish', title);
	}
}

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