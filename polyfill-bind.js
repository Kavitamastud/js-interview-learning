// polyfill for call, apply and bind method -roadsideCoder

// ep-02 - of crack frontend interview

//1. call method -polyfill

let car1 = {
  brand: "Toyota",
  model: "Corolla",
};
function getCarDetails(year, color) {
  console.log(this.brand + " " + this.model + " " + year + " " + color);
}
// getCarDetails.call(car1, 2020, "Red");

// here for call we are passing the context-->object and the arguments

Function.prototype.mycall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("Context must be a function");
  }
  context.fn = this; // this is the function that we are calling
  context.fn(...args); // this is the arguments that we are passing
  //   delete context.fn; // this is to delete the function from the context
};
// getCarDetails.mycall(car1, 2020, "Red");

//2. apply method -polyfill

Function.prototype.myapply = function (context = {}, args = []) {
  // here args is an array of arguments
  if (typeof this !== "function") {
    throw new Error("Context must be a function");
  }
  context.fn = this;
  context.fn(...args);
  // delete context.fn;
};
// getCarDetails.myapply(car1, [2020, "Red"]);
// getCarDetails.apply(car1, [2020, "Red"]);

//3. bind method -polyfill
// bind method returns a new function with the context and the arguments passed to it

// const newFunction = getCarDetails.bind(car1, 2020, "Red"); // here first will return the new function and then we will call the new function
// newFunction();

Function.prototype.mybind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("Context must be a function");
  }
  context.fn = this;
  return function (...newArgs) {
    // Creates a new functions
    // here we are returning the new function with the context and the arguments passed to it
    return context.fn(...args, ...newArgs);
  };
};
// const newFunction = getCarDetails.mybind(car1, 2020, "Red");
const newFunction = getCarDetails.mybind(car1, 2020); //args is the arguments passed to the new function

newFunction("Red"); //newArgs is the arguments passed to the new function
