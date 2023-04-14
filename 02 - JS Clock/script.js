const hoursPointer = document.querySelector('.hours');
const secondsPointer = document.querySelector('.seconds');
const minutesPointer = document.querySelector('.minutes');
const allPointers = document.querySelectorAll('.pointer');

const setDate = () => {
  const currentTime =  new Date();

  const hours = currentTime.getHours();
  const hoursDegrees = ((hours / 12) * 360) + 90;
  hoursPointer.style.transform = `rotate(${hoursDegrees}deg)`;

  const minutes = currentTime.getMinutes();
  const minutesDegrees = ((minutes / 360) * 360) + 90;
  minutesPointer.style.transform = `rotate(${minutesDegrees}deg)`;

  const seconds = currentTime.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondsPointer.style.transform = `rotate(${secondsDegrees}deg)`;

  if (secondsDegrees === 90) {
    allPointers.forEach(pointer => pointer.style.transition = 'none');
  } else {
    allPointers.forEach(pointer => pointer.style.transition = '');
  };
};

setInterval(setDate, 1000);