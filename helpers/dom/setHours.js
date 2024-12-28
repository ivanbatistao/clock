import getDegrees from '../utils/getDegrees.js';

const setHours = () => {
  const hours = new Date().getHours();
  const hoursHand = document.querySelector('.hours-hand');
  hoursHand.style.transform = `rotate(${getDegrees(hours, 12)}deg)`;
};

export default setHours;
