export default class View {
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

		var thumbLeft = document.createElement('div');
				(sliderVert) ? thumbLeft.classList.add('sliderVert-thumb') : thumbLeft.classList.add('slider-thumb');	
				thumbLeft.id = parentElement.id + '__thumb';
				(sliderVert) ? thumbLeft.style.top = value + 'px' : thumbLeft.style.left = value + 'px';	

				line.appendChild(thumbLeft);
				parentElement.appendChild(line);
	}

	createElemRangeSlider(parentElement, sliderVert, value, value2) {
		var line = document.createElement('div');
				(sliderVert) ? line.classList.add('sliderVert-line') : line.classList.add('slider-line');	
				line.id = parentElement.id + '__line';

		var thumbLeft = document.createElement('div');
				(sliderVert) ? thumbLeft.classList.add('sliderVert-thumb') : thumbLeft.classList.add('slider-thumb');
				thumbLeft.id = parentElement.id + '__thumb';
				(sliderVert) ? thumbLeft.style.top = value + 'px' : thumbLeft.style.left = value + 'px';	

		var thumbRigth = document.createElement('div');
				(sliderVert) ? thumbRigth.classList.add('sliderVert-thumb2') : thumbRigth.classList.add('slider-thumb2');
				thumbRigth.id = parentElement.id + '__thumb2';
				(sliderVert) ? thumbRigth.style.top = value2 + 'px' : thumbRigth.style.left = value2 + 'px';	

				line.appendChild(thumbLeft);
				line.appendChild(thumbRigth);
				parentElement.appendChild(line);
	}
}
