export default class Controller {
	constructor(Model, View) {
		this._model = Model;
		this._view = View;
		this.positionSlider = 0;
		this.positionSliderY = 0;
		this.positionThumb = 0;
		this._controller = this;
	}

	/*функция нажатия на бегунок (слайдер с одним бегунком)*/
	mousedownThumb(thumb) {
		this._model.drag_status = true;
		this.positionSlider = event.pageX - thumb.offsetLeft; // переназвать
	} 

	/*функция нажатия на бегунок (вертикальный слайдер с одним бегунком)*/
	mousedownThumbVert(thumb) {
		this._model.drag_status = true;
		this.positionSliderY = event.pageY - thumb.offsetTop;
	}

	/*функция передвижения бегунка (слайдер с одним бегунком)*/
	mousemoveThumb(thumb) {
		if (!this._model.drag_status) return false;

		this.positionThumb = event.pageX - this.positionSlider;
	  this.minPosThumb();
		this.maxPosThumb(thumb);
	 	this._view.changeView(thumb, this.positionThumb);
	}

	/*функция передвижения бегунка (вертикальный слайдер с одним бегунком)*/
	mousemoveThumbVert(thumb) {
		if (!this._model.drag_status) return false;

		this.positionThumbY = event.pageY - this.positionSliderY;

		if (this.positionThumbY < 0) {
				this.positionThumbY = 0;
		}

		if (this.positionThumbY > (thumb.parentElement.offsetHeight - thumb.offsetHeight)) {
				this.positionThumbY = (thumb.parentElement.offsetHeight - thumb.offsetHeight);
		}

		this._view.changeViewY(thumb, this.positionThumbY);
	}

	/*функция передвижения левого бегунка (слайдер с двумя бегунками)*/
	mousemoveThumbLeft(thumb, thumbRigth) {
		if (!this._model.drag_status) return false;

		this.positionThumb = event.pageX - this.positionSlider;
		this.minPosThumb();
		this.maxPosThumbLeft(thumbRigth);
		this._view.changeView(thumb, this.positionThumb);
	}

	/*функция передвижения правого бегунка (слайдер с двумя бегунками)*/
	mousemoveThumbRigth(thumb, thumbRigth) {
		if (!this._model.drag_status) return false;
		this.positionThumb = event.pageX - this.positionSlider;
		this.minPosThumbRigth(thumb);
		this.maxPosThumb(thumb);
		this._view.changeView(thumbRigth, this.positionThumb);
	}

	/*функция отпускания бегунка*/
	mouseupThumb() {
		this._model.drag_status = false;
	}

	/*--------------------------------вспомогательные функции----------------------------*/
	minPosThumb() {
		if (this.positionThumb < 0) {
			  this.positionThumb = 0;
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
}