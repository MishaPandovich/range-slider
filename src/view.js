export default class View {
	constructor() {
	}

	changeView(thumb, left) {
		thumb.style.left = left + 'px';
	}

	initSlider(parentElement) {
		var line = document.createElement('div');
				line.classList.add('line');
				line.id = parentElement.id + '__line';
		var thumb = document.createElement('div');
				thumb.classList.add('thumb');
				thumb.id = parentElement.id + '__thumb';

				line.appendChild(thumb);
				parentElement.appendChild(line);
	}

	// задать параметр смешения ползунка

	initRangeSlider(parentElement) {
		var line = document.createElement('div');
				line.classList.add('line');
				line.id = parentElement.id + '__line';
		var thumbLeft = document.createElement('div');
				thumbLeft.classList.add('thumb');
				thumbLeft.id = parentElement.id + '__thumb';
				thumbLeft.style.left = 0 + 'px';

		var thumbRigth = document.createElement('div');
				thumbRigth.classList.add('thumb2');
				thumbRigth.id = parentElement.id + '__thumb2';
				thumbRigth.style.left = 40 + 'px';

				line.appendChild(thumbLeft);
				line.appendChild(thumbRigth);
				parentElement.appendChild(line);
	}
}
