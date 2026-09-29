// HOISTING IN JAVASCRIPT - Namste JavaScript

// getName(); // Namaste JavaScript
// console.log(num); // undefined

// var num = 7; // If we  remove this line and above console.log(num) will give error because num is
//  not defined - means in memory allocation phase x is not allocated memory  -not defined
// and when we try to access it we get error - not defined

// getName();
// console.log(num);

// var num = 7;

// function getName() {
//   console.log("Namaste JavaScript");
// }

// Output:
// Namaste JavaScript
// 7

// for normal function it will work - it will copy function code.-
// function getName() {
//   console.log("Namaste JavaScript");
// }

// arrow function-

// getName(); // TypeError: getName is not a function

// var getName = () => {
//   console.log("Namaste JavaScript");
// };

// var getName2 = function () {
//   // It will give undefined because act as variable not function
//   console.log("Namaste JavaScript");
// };

// HOISTING -

// CALL STACK - DEMO - needs to check in browser console - (under console tab) - will have
// call stack section - it will show the call stack of the function calls.

// var x = 7;

// var y = 10;

// function printName(){
//   console.log("hello");
// }
// function getName() {
//   console.log("Namaste JavaScript");
// }
// printName();
// getName();
// console.log(x);

// Output:
// Namaste JavaScript
// 7

// Explanation:

//how functions works in javascript and varible environment-EP-04

var x = 1;
a();
b();
console.log(x);

function a() {
  var x = 10;
  console.log(x);
}
function b() {
  var x = 100;
  console.log(x);
}

// Output: 10 100 1 - we can check in browser console -
//1. here what will happen when we run the code then global Execution context will create
//2.then it will allocate memory for x = undefined and a and b as it is a function declaration.
//3.when we run the code the x=1 will be allocated memory and it will be 1 in global execution context.
//4.next line we are calling function a()- for this again  execution context will create there also memory for x=undefined
//5.when we run then x=10; and it will print - because for the x it will have its local scope memory and it will print 10. then excution is done and it will get deleted from the memory.
//6.same things will happen for function b() - it will print 100.later it will get deleted from the memory.
//7.finally console.log(x); will print 1 - because it is in global execution context and it will print 1. then excution is done and it will get deleted from the memory.
// so the output will be 10 100 1.
