// callback function is a function that is passed as an argument to another function. -which is higher order functions.
// with the help of callback function we can achieve asynchronous programming.
// example of callback function-
// function x(y) {
//   console.log("x called");
//   y();
// }
// x(function y() {
//   console.log("y called"); // function y is passed as arg to function x then function y is called a callback function
// });

// ex-2 -settimeout is a callback function.
// setTimeout(function () {
//   console.log("settimeout called");
// }, 5000);

// function x(y) {
//   console.log("x called");
//   y();
// }
// x(function y() {
//   console.log("y called"); // function y is passed as arg to function x then function y is called a callback function
// });

// first setTimeout will register the callback function and attch the timer to it .
// it will go to the next line of code and execute the code. it does not wait to timer to expire .
// it will print the output as x called and y called. and when timer will expire it will call the callback function and print the output as settimeout called.
// js will has only one call stack.- it called main thread.
// if any operation is taking time to execute . it will block the main thread.

// EventListener is a callback function.
// document.getElementById("btn").addEventListener("click", function xyz() {
//   console.log("button clicked");
// });

// function xyz() is a callback function.

// closure demo with help of callback function. -eventHandler.
// needs to count how many times button is clicked. using closure.

function attachEventListner() {
  let count = 0;
  document.getElementById("btn").addEventListener("click", function xyz() {
    // callback functions forms a closure. with count variable.
    console.log("button clicked", count++);
  });
}
attachEventListner();
