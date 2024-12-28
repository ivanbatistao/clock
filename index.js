import { setHours, setMinutes, setSeconds } from './helpers/dom/index.js';

setSeconds();
setMinutes();
setHours();

setInterval(() => {
  setSeconds();
  setMinutes();
  setHours();
}, 1000);
