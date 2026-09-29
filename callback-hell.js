// season 2-
//ep-1- callback hell

// console.log("start");
// console.log("middle");
// console.log("end");

// output: start, middle, end

// what is we want wait for 2 seconds and then print the middle
// we can use setTimeout function to wait for 2 seconds
console.log("start");
setTimeout(() => {
  console.log("middle");
}, 2000);
console.log("end");

// output: start, end, middle
// using callback we can do asynchronous programming.

// example-1

const cart = ["shoes", "pants", "kurta"];

createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (paymentInfo) {
    showOrderSummary(paymentInfo, function (summary) {
      showOrderSummary(summary);
    });
  });
});

// callback hell is a situation where we have to nest multiple callbacks inside each other.
// it is difficult to read and debug.
// Inversion of control is a situation where we have to pass the control to the callback function.
