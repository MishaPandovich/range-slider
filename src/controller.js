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
		
		var left = event.pageX - this.positionSlider;

		if (left < 0) {
			left = 0;
		}
		
		if (left > (line.offsetWidth - thumb.offsetWidth)) {
			left = (line.offsetWidth - thumb.offsetWidth);
		}

	 	this._view.changeView(thumb, left);
	}

	mouseupLeftThumb(thumb, thumb2, line) {
		if (!this._model.drag_status) return false;

		var positionLeft = event.pageX - this.positionSlider;

		if (positionLeft < 0) {
			positionLeft = 0;
		}

		var rightEdge = parseInt(thumb2.style.left)-thumb2.offsetWidth;
		if (positionLeft > rightEdge) {
			positionLeft = rightEdge;
		}

		this._view.changeView(thumb, positionLeft);
	}

	mouseupRigthThumb(thumbLeft, thumbRigth, line) {
		if (!this._model.drag_status) return false;

		var positionLeft = event.pageX - this.positionSlider;
		var leftEdge = parseInt(thumbLeft.style.left) + thumbLeft.offsetWidth;
		var rightEdge = line.offsetWidth - thumbLeft.offsetWidth;

		if (positionLeft < leftEdge) {
			positionLeft = leftEdge;
		}

		if (positionLeft > rightEdge) {
      positionLeft = rightEdge;
    } 

    this._view.changeView(thumbRigth, positionLeft);
	}

	mouseupThumb() {
		this._model.drag_status = false;
	}
}