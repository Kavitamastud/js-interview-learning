// ep-04 - Debouncing in JavaScript - way to optimize the event handling performance
// example - search bar of google / flipcart / amazon
// when we type in the search- check in html file
// let counter = 0;
// const getData = () => {
//   // calls an APi and get the data
//   console.log("fetching data..............", counter++); // It will call this function on each keyup press envet
//   // we don't want to call this function on each keyup press event
// };

// // doSomeMagic will return a fucntion that will be better function

// const doSomeMagic = function (fn, delay) {
//   // fn = getData , delay = 300ms- between two keypress
//   let timer;
//   let context = this;
//   console.log(context);
//   let args = arguments;
//   console.log(args);
//   return function () {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn.apply(context, args);
//     }, delay);
//   };
// };

// const betterFunction = doSomeMagic(getData, 300);
// this will not call on each keyup press event
// it will call only when user has puased typing - means diff of two keypress is  greater than 300ms then only fetch api call

// example -1 roadsideCoder
// Create a button UI and debounce as follows:
//show "Button pressed <X> times" everytime button is pressed
// Increase Trigger Y times count after 300ms of debounce

//first check html file

// const btn = document.querySelector(".increment-btn");
// const btnPressed = document.querySelector(".increment_pressed");
// const count = document.querySelector(".increment_count");

// let pressedCount = 0; // every time button is pressed, increment the pressedCount
// let triggerCount = 0; // when user has stopped the button click only after 300ms then increment the triggerCount

// // go to loadsh cdn and copy cdn link in html file and paste it in script tag
// // to use debounce function we need to use lodash library

// const debouncedCount = _.debounce(() => {
//   count.innerHTML = ++triggerCount;
// }, 800);

// btn.addEventListener("click", () => {
//   btnPressed.innerHTML = ++pressedCount; // every time button is pressed, increment the pressedCount
//   debouncedCount(); // when user has stopped the button click only after 300ms then increment the triggerCount
// });

// Q-2 - create a Debounce Polyfill Implementation-

const btn = document.querySelector(".increment-btn");
const btnPressed = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

let pressedCount = 0; // every time button is pressed, increment the pressedCount
let triggerCount = 0; // when user has stopped the button click only after 300ms then increment the triggerCount

// create a debounce polyfill implementation
// we can see it takes two arguments - function and delay that is 300ms

const myDebounce = (cb, delay) => {
  // we need a timer
  let timer;
  //It will return a function that will be called after the delay
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args); // cb function will be called after the delay
    }, delay);
  }; // extra arguments that are passed to the function means for  debouncedCount() when we call is that functions any extra arguments that are passed to the function will be passed to the cb function
};
const debouncedCount = myDebounce(() => {
  // cb function and delay is 300ms
  count.innerHTML = ++triggerCount;
}, 800);

btn.addEventListener("click", () => {
  btnPressed.innerHTML = ++pressedCount; // every time button is pressed, increment the pressedCount
  debouncedCount(); // when user has stopped the button click only after 300ms then increment the triggerCount
});

// here we need a timer to start when user stops pressing the button -means when user has stopped the button click only after 300ms then increment the triggerCount
// we can use setTimeout to start the timer when user stops pressing the button for dealy ms
// means that timer is expired then only call the cb function
// if the gap between two keypress is greater than 300ms then call the cb function
// and we need to clear the timer when user starts pressing the button again
