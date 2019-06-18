export default class View {
	constructor(parentElement) {
		this.parentElement = parentElement.id;
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
}
