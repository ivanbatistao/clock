import getDegrees from '../utils/getDegrees.js';

const setSeconds = () => {
  const seconds = new Date().getSeconds();
  const secondsHand = document.querySelector('.seconds-hand');
  secondsHand.style.transform = `rotate(${getDegrees(seconds, 60)}deg)`;
};

export default setSeconds;
