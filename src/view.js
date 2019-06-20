export default class View {
	changeView(thumb, left) {
		thumb.style.left = left + 'px';
	}

	initSlider(parentElement, value) {
		var line = document.createElement('div');
				line.classList.add('line');
				line.id = parentElement.id + '__line';
				
		var thumb = document.createElement('div');
				thumb.classList.add('thumb');
				thumb.id = parentElement.id + '__thumb';
				thumb.style.left = value + 'px';

				line.appendChild(thumb);
				parentElement.appendChild(line);
	}

	initRangeSlider(parentElement, value, value2) {
		var line = document.createElement('div');
				line.classList.add('line');
				line.id = parentElement.id + '__line';

		var thumbLeft = document.createElement('div');
				thumbLeft.classList.add('thumb');
				thumbLeft.id = parentElement.id + '__thumb';
				thumbLeft.style.left = value + 'px';

		var thumbRigth = document.createElement('div');
				thumbRigth.classList.add('thumb2');
				thumbRigth.id = parentElement.id + '__thumb2';
				thumbRigth.style.left = value2 + 'px';

				line.appendChild(thumbLeft);
				line.appendChild(thumbRigth);
				parentElement.appendChild(line);
	}
}
