export default class Controller {
	constructor(Model, View) {
		this._model = Model;
		this._view = View;

		this.positionSlider = 0;
		this.thumb = this._view.thumb;
		this.line = this._view.line;
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