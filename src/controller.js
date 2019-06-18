export default class Controller {
	constructor(Model, View) {
		this._model = Model;
		this._view = View;
		this.positionSlider = 0;
	}

	mousedownThumb(thumb) {
		this._model.drag_status = true;
		this.positionSlider = event.pageX - thumb.offsetLeft;
	} 

	mousemoveThumb(thumb, line) {
		if (!this._model.drag_status) return false;
		
		this._model.positionX = event.pageX - this.positionSlider;

		if (this._model.positionX < 0) {
			this._model.positionX = 0;
		}
		
		if (this._model.positionX > (line.offsetWidth - thumb.offsetWidth)) {
			this._model.positionX = (line.offsetWidth - thumb.offsetWidth);
		}

	 	this._view.changeView(thumb, this._model.positionX);
	}

	mouseupThumb() {
		this._model.drag_status = false;
	}
}