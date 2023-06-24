const delay = 3000;

// display countdown message every second
const countdownInterval = setInterval(() => {
  const remainingTime = Math.round((delay - Date.now() + startTime) / 1000);
  console.log(`${remainingTime} seconds remaining...`);
}, 1000);

// generate random number after delay
const startTime = Date.now();
setTimeout(() => {
  clearInterval(countdownInterval);
  const randomNumber = Math.floor(Math.random() * 100);
  console.log(`Random number generated: ${randomNumber}`);
}, delay);


// DONE