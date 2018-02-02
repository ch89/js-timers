class Timer {
	constructor(callback, delay, repeatCount = 0) {
		this.callback = callback;
		this.delay = delay;
		this.repeatCount = repeatCount;
		this.id = null;
		this.running = false;
		this.currentCount = 0;
	}

	start() {
		if(!this.running) {
			this.running = true;

			this.id = setInterval(() => {
				this.currentCount++;
				this.callback();

				if(this.currentCount == this.repeatCount) {
					this.stop();
				}
			}, this.delay);
		}
	}

	stop() {
		if(this.running) {
			this.running = false;
			this.currentCount = 0;
			clearInterval(this.id);
		}
	}
}

module.exports = Timer;