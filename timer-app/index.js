const input = document.getElementById('set-counter');
const output = document.getElementById('counter');

class Timer {
  constructor(counter) {
    this.counter = counter;
    this.timer = setInterval(() => {
      this.counter --;
      output.innerHTML = this.counter;
    }, 1000);
  }

  restart() {
    this.timer = setInterval(() => {
      this.counter --;
      output.innerHTML = this.counter;
    }, 1000);
  }
  
  stop() {
    clearInterval(this.timer);
  }
}

const setCounter = () => {
  counter = input.value;
  timer = new Timer(counter);
}

