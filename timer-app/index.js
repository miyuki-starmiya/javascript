const inputByHours = document.getElementById('set-counter-by-hours');
const inputByMinutes = document.getElementById('set-counter-by-minutes');
const inputBySeconds = document.getElementById('set-counter-by-seconds');
const outputByHours = document.getElementById('output-hours');
const outputByMinutes = document.getElementById('output-minutes');
const outputBySeconds = document.getElementById('output-seconds');

/**
 * set, stop, restart timer
 * @param {number} hours
 * @param {number} minutes
 * @param {number} seconds
 */
class Timer {
  constructor(hours, minutes, seconds) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.timer = null;

    outputByHours.innerHTML = this.hours.padStart(2, '0');
    outputByMinutes.innerHTML = this.minutes.padStart(2, '0');
    outputBySeconds.innerHTML = this.seconds.padStart(2, '0');
  }

  start() {
    this.timer = setInterval(() => {
      if (this.minutes <= 0 && this.seconds <0) {
        this.hours --;
        let hours = String(this.hours).padStart(2, '0');
        outputByHours.innerHTML = hours;
        this.minutes += 5;
      }
      if (this.seconds < 0) {
        this.minutes --;
        let minutes = String(this.minutes).padStart(2, '0');
        outputByMinutes.innerHTML = minutes;
        this.seconds += 5;
      }
      let seconds = String(this.seconds).padStart(2, '0');
      this.seconds --;
      outputBySeconds.innerHTML = seconds;

      // stop when all counter is zero
      if (this.hours <= 0 && this.minutes <= 0 && this.seconds <0) {
        this.stop();
        clearCounter();
        // congratulations
        new Audio('https://alerm-music.s3.ap-northeast-3.amazonaws.com/fripSide+-+only+my+railgun.mp3').play();
      }
    }, 1000);
  }
  
  stop() {
    clearInterval(this.timer);
  }
}

const setCounter = () => {
  const hours = inputByHours.value;
  const minutes = inputByMinutes.value;
  const seconds = inputBySeconds.value;

  // create timer instance
  timer = new Timer(hours, minutes, seconds);
}

const clearCounter = () => {
  if (timer) {
    delete timer;
    inputByHours.value = '00';
    inputByMinutes.value = '00';
    inputBySeconds.value = '00';
    outputByHours.innerHTML = inputByHours.value;
    outputByMinutes.innerHTML = inputByMinutes.value;
    outputBySeconds.innerHTML = inputBySeconds.value;
  }
}

const test = () => {
  new Audio('https://alerm-music.s3.ap-northeast-3.amazonaws.com/fripSide+-+only+my+railgun.mp3').play();
}

// execute in created
outputByHours.innerHTML = inputByHours.value;
outputByMinutes.innerHTML = inputByMinutes.value;
outputBySeconds.innerHTML = inputBySeconds.value;

