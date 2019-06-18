import Observer from './observer.js';

class Model extends Observer {
	constructor(options) {
		super();
		this.drag_status = false;
		this.positionX;
		this.count = 0;
	}
}

export default Model;