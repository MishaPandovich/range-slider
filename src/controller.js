export default class Controller {
	constructor(Model, View) {
		this._model = Model;
		this._view = View;
		this.positionSlider = 0;
		this.positionThumb = 0;
		this._controller = this;
	}

	mousedownThumb(thumb) {
		this._model.drag_status = true;
		this.positionSlider = event.pageX - thumb.offsetLeft;
	} 

	mousemoveThumb(thumb) {
		if (!this._model.drag_status) return false;

		this.positionThumb = event.pageX - this.positionSlider;
	  this.minPosThumb();
		this.maxPosThumb(thumb);
	 	this._view.changeView(thumb, this.positionThumb);
	}

	mousemoveThumbLeft(thumb, thumbRigth) {
		if (!this._model.drag_status) return false;

		this.positionThumb = event.pageX - this.positionSlider;
		this.minPosThumb();
		this.maxPosThumbLeft(thumbRigth);
		this._view.changeView(thumb, this.positionThumb);
	}

	mousemoveThumbRigth(thumb, thumbRigth) {
		if (!this._model.drag_status) return false;
		this.positionThumb = event.pageX - this.positionSlider;
		this.minPosThumbRigth(thumb);
		this.maxPosThumb(thumb);
		this._view.changeView(thumbRigth, this.positionThumb);
	}

	minPosThumb() {
		if (this.positionThumb < 0) {
			  this.positionSlider = 0;
		}
	}

	maxPosThumb(thumb) {
		if (this.positionThumb > (thumb.parentElement.offsetWidth - thumb.offsetWidth)) {
			  this.positionThumb = (thumb.parentElement.offsetWidth - thumb.offsetWidth);
		}
	}

	maxPosThumbLeft(thumbRigth) {
		let rightEdge = parseInt(thumbRigth.style.left) - thumbRigth.offsetWidth;

		if (this.positionThumb > rightEdge) {
				this.positionThumb = rightEdge;
		}
	}

	minPosThumbRigth(thumbLeft) {
		let leftEdge = parseInt(thumbLeft.style.left) + thumbLeft.offsetWidth;

		if (this.positionThumb < leftEdge) {
				this.positionThumb = leftEdge;
		}
	}

	mouseupThumb() {
		this._model.drag_status = false;
	}
}