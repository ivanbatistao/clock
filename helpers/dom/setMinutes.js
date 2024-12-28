import getDegrees from '../utils/getDegrees.js';

const setMinutes = () => {
  const minutes = new Date().getMinutes();
  const minutesHand = document.querySelector('.minutes-hand');
  minutesHand.style.transform = `rotate(${getDegrees(minutes, 60)}deg)`;
};

export default setMinutes;
