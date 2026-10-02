//  ep-13 - throttling  - it is a technique to limit the number of times a function can be called in a given time period
// means when user is continuously pressing button then we need to limit the fucntion call
//things to remember- user is contioulsy pressing button in that event only we need to call functions
// we need to call function after certain time interval

// Create a button UI and throttling as follows:
//show "Button pressed <X> times" everytime button is pressed
// Increase Trigger Y times count after 300ms of debounce

// const btn = document.querySelector(".increment-btn");
// const btnPressed = document.querySelector(".increment_pressed");
// const count = document.querySelector(".increment_count");

// let pressedCount = 0; // every time button is pressed, increment the pressedCount
// let triggerCount = 0;

// const start = new Date().getTime();

// const throttledCount = _.throttle(() => {
//   const now = new Date().getTime();
// //   console.log(now - start); // will give the time difference between two function calls every 800ms it will print the time difference
//   count.innerHTML = ++triggerCount;
// }, 800); // every 800ms only call the function- when user is continuously pressing button then we need to limit the function call

// btn.addEventListener("click", () => {
//   btnPressed.innerHTML = ++pressedCount; // every time button is pressed, increment the pressedCount
//   throttledCount(); // will trigger every 800ms
// });

// Q-2 - create a Throttle Polyfill Implementation- namste js implementation

const btn = document.querySelector(".increment-btn");
const btnPressed = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

let pressedCount = 0; // every time button is pressed, increment the pressedCount
let triggerCount = 0;

// const myThrottle = (cb, delay) => {  //namste js implementation
//   let flag = true;
//   return function (...args) {
//     if (flag) {
//       cb(...args); // first when user presses the button then call the cb function
//       flag = false; // then set the flag to false
//       setTimeout(() => {
//         flag = true; // then set the flag to true after the delay
//       }, delay);
//     } // if the flag is false then don't call the cb function
//   };
// };

// RodeSiderCoder  implementation of throttle polyfill
const myThrottle = (cb, delay) => {
  let last = 0; // set the last time to 0 means will consider the first time as 0 and next is happened after 300ms
  // then will check 300-0=300ms and if it is less than dealy that is 800ms then return means dont call the function
  // next suppose user presses after the 700ms- then will check 700-0=700ms and if it is less than dealy that is 800ms then return means dont call the function
  // next user presses after 1100 ms means 1100-0=1100ms -
  return function (...args) {
    // return the function so that we can call it later
    const now = new Date().getTime(); // get the current time
    if (now - last < delay) {
      // if less than delay then return means dont call the function is still in the delay period
      // if the current time is less than the last time + delay then return
      return;
    }
    // if greater than delay then call the function
    last = now; // set the last time to the current time because user is continuously pressing button so we need to set the last time to the current time
    cb(...args); // call the cb function
  };
};

const throttledCount = myThrottle(() => {
  count.innerHTML = ++triggerCount;
}, 800);

btn.addEventListener("click", () => {
  btnPressed.innerHTML = ++pressedCount;
  throttledCount();
});
