import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const ref = {
    datePicker: document.querySelector('input#datetime-picker'),
    startBtn: document.querySelector('button[data-start]'),
    days: document.querySelector('span[data-days]'),
    hours: document.querySelector('span[data-hours]'),
    minutes: document.querySelector('span[data-minutes'),
    seconds: document.querySelector('span[data-seconds]'),
}

ref.startBtn.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      const selectedDate = selectedDates[0];
      const startTime = Date.now();

      if(selectedDate <= startTime){
        Notify.failure("Please choose a date in the future.");
        ref.startBtn.disabled = true;
        return;
      }
      ref.startBtn.disabled = false;
      let intervalId = null;
      ref.startBtn.addEventListener('click', startCountDown);

      function startCountDown(){
        ref.startBtn.disabled = true;
        ref.datePicker.disabled = true;
        intervalId = setInterval(() =>{
            const currentTime = Date.now();
            if(selectedDate < currentTime){
                clearInterval(intervalId);
                ref.datePicker.disabled = !true;
                return;
            }
            const timeDifference = selectedDate - currentTime;
           const {days, hours, minutes, seconds} = convertMs(timeDifference);
            
           ref.days.textContent = addZero(days);
           ref.hours.textContent = addZero(hours);
           ref.minutes.textContent = addZero(minutes);
           ref.seconds.textContent = addZero(seconds);
        });

      }
    },
  };

  flatpickr(ref.datePicker, options);
  function addZero(value){
    return String(value).padStart(2, '0');
  }
  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  