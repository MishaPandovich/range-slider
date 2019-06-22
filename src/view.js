export default class View {
	constructor() {
		this.thumbLeft;
		this.thumbRigth;
	}

	changeView(thumb, left) {
		thumb.style.left = left + 'px';
	}

	changeViewY(thumb, top) {
		thumb.style.top = top + 'px';
	}

	createSlider(range, sliderVert, parentElement, value, value2) {
		if (parentElement.children[0] !== undefined) {
				this.checkVoid(parentElement);
		}

		this.checkRange(range, sliderVert, parentElement, value, value2);
	}

	checkVoid(parentElement) {
		var elem = parentElement.children[0];
							 parentElement.removeChild(elem);
	}

	checkRange(range, sliderVert, parentElement, value, value2) {
		if (range) {
			this.createElemRangeSlider(parentElement, sliderVert, value, value2);
		} else{
			this.createElemSlider(parentElement, sliderVert, value);
		}
	}

	createElemSlider(parentElement, sliderVert, value) { 
		var line = document.createElement('div');
				line.id = parentElement.id + '__line';
				(sliderVert) ? line.classList.add('sliderVert-line') : line.classList.add('slider-line');	

		this.thumbLeft = document.createElement('div');
				(sliderVert) ? this.thumbLeft.classList.add('sliderVert-thumb') : this.thumbLeft.classList.add('slider-thumb');	
				this.thumbLeft.id = parentElement.id + '__thumb';
				(sliderVert) ? this.thumbLeft.style.top = value + 'px' : this.thumbLeft.style.left = value + 'px';	

				line.appendChild(this.thumbLeft);
				parentElement.appendChild(line);
	}

	createElemRangeSlider(parentElement, sliderVert, value, value2) {
		var line = document.createElement('div');
				(sliderVert) ? line.classList.add('sliderVert-line') : line.classList.add('slider-line');	
				line.id = parentElement.id + '__line';

		this.thumbLeft = document.createElement('div');
				(sliderVert) ? this.thumbLeft.classList.add('sliderVert-thumb') : this.thumbLeft.classList.add('slider-thumb');
				this.thumbLeft.id = parentElement.id + '__thumb';
				(sliderVert) ? this.thumbLeft.style.top = value + 'px' : this.thumbLeft.style.left = value + 'px';	

		this.thumbRigth = document.createElement('div');
				(sliderVert) ? this.thumbRigth.classList.add('sliderVert-thumb2') : this.thumbRigth.classList.add('slider-thumb2');
				this.thumbRigth.id = parentElement.id + '__thumb2';
				(sliderVert) ? this.thumbRigth.style.top = value2 + 'px' : this.thumbRigth.style.left = value2 + 'px';	

				line.appendChild(this.thumbLeft);
				line.appendChild(this.thumbRigth);
				parentElement.appendChild(line);
	}
}
