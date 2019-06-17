export default class Observer {
	constructor() {
		this.events = {}
	}

	add(event, listener) {
		if (this.events.hasOwnProperty(event)) {
			this.events[event].push(listener);
		} else {
			this.events[event] = [];
			this.events[event].push(listener);
		}
	}

	remove(event, listener) {
		if (this.events[event].has(listener)) {
			this.events[event].delete(listener);
		}
	}

	notify(event, ...args) {
		for (let listener of this.events[event]) {
			listener.update(...args);
		}
	}
}