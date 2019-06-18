export default class View {
	constructor() {
		this.thumb = document.querySelector('#thumb');
		this.line = document.getElementById('bg');
	}

	changeView(left) {
		this.thumb.style.left = left + 'px';
	}
}