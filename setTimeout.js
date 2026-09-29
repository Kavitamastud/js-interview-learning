// Ep-17 - Trust issues with setTimeout.
// settimeout with with timers of 5 seconds. will not always print after 5 seconds.
// console.log("start");
// setTimeout(function () {
//   console.log("callback function");
// }, 5000);
// console.log("end");

// // block the main thread for 10 seconds.

// let startDate = new Date().getTime(); // gives the current time in milliseconds.
// let endDate = startDate;
// while (endDate <= startDate + 10000) {
//   endDate = new Date().getTime();
// }

// // means end date will be start date and means example cureent time is 10000 milliseconds and we are adding 10 seconds to start date 10010 milliseconds
// // until end date is less than or equal to start date + 10000 milliseconds.
// // so while loop will run for 10 seconds.
// // after 10 seconds, the callback function will be printed.
// console.log("while loop ended");

// now settimeout will print after 10 seconds. even if the timers has been set to 5 seconds.

// settimeout with 0 seconds will print after the main thread is executed.
console.log("start");
setTimeout(function () {
  console.log("callback function");
}, 0);
console.log("end");
// output: start, end, callback function.

// so settimeout with 0 seconds will print after the main thread is executed.
// so settimeout with 0 seconds will print after the main thread is executed.
