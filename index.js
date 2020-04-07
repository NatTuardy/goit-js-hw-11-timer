'use strict';
const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
};

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.days = refs.days;
    this.hours = refs.hours;
    this.mins = refs.mins;
    this.secs = refs.secs;
    this.selector = selector;
    this.targetDate = targetDate;
    this.timer();
    this.updateClockface();
  }

  timer() {
    this.timerId = setInterval(() => {
      const currentTime = Date.now();
      this.deltaTime = this.targetDate.getTime() - currentTime;
      this.updateClockface(this.deltaTime);
    }, 1000);
  }

  updateClockface(time) {
    refs.days.textContent = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    refs.hours.textContent = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    refs.mins.textContent = this.pad(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
    );
    refs.secs.textContent = this.pad(Math.floor((time % (1000 * 60)) / 1000));
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2020'),
});
