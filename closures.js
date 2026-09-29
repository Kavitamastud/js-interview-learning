//basic things to remember child can access parents varibles but parents cannot access childs varibles.
// and siblings cannot access each others varibles.- because they will be block scoped.
// check in cosole by puttion debugger statement in the code. at console.log in scope

// function x() {
//   var a = 7;
//   function y() {
//     console.log(a); // y() forms a closure with its parents that is x() means y90 can access a varibles form x() to y() but x() cannot access a varibles form y() to x()
//   }
//   y();
// }
// x(); // we know when run the program y() tries to find a in its local scope if not there it will check in its parents lexical scope and print it will get 7 as output- this is called a closure.

// We can return a function from a function and that function will have access to the varibles of the parent function.
// function x() {
//   var a = 7;
//   function y() {
//     console.log(a); // y() forms a closure with its parents that is x() means y90 can access a varibles form x() to y() but x() cannot access a varibles form y() to x()
//   }
//   return y;
// }
// // here it will not just return y() - it will return its lexical scope of its parents fucntion that is x() and can access its varibles.
// var z = x(); // even if x() is returned still y() remembers its lexical scope of its parents fucntion that is x() and can access its varibles.
// console.log(z); //
// z(); // this will print 7 as output because z is a function and it has access to the varibles of the parent function x() and when we call z() it will print 7 as output.

// some corner cases of closures.

// case 1:- before returning funtion if we change the parents varible - will get chnaged values because of its reference
// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   a = 100;  // this will has refference to the varible a in its lexical scope and will print 100 as output.
//   return y;
// }
// var z = x();
// z(); // this will print 100 as output because a is a varible and it is changed after the function y() is returned and when we call z() it will print 100 as output.

// case 2 - if we have parents parents - will grand child will gets access of its grand parents varibles.

// function z() {
//   var b = 900;
//   function x() {
//     var a = 7;
//     function y() {
//       console.log(a, b);
//     }
//     y();
//   }
//   x();
// }

// z(); // this will print 7 and 900 as output because z() has access to the varibles of its parents function x() and x() has access to the varibles of its parents function z() and when we call z() it will print 7 and 900 as output.

// EP-11- setTimeout with closures.+ Interview Questions.

// Question 1:- What will be the output of the following code?
// function x() {
//   var i = 1;
//   setTimeout(function () {
//     // JS will not wait here
//     console.log(i);
//   }, 1000);
//   console.log("Namaste Javascript");
// }
// x();

// It will print Namaste javascript first and after 1 second it will print 1.
// Why it is happening because of closures.
//Because of closure function () forms a closure with its parent function x() . It will remember its lexical scopes varibles
//what setTimeout will do it will take the callback functions and store it in somewhere in memory and attach the timer to it.
// js will continue to execute the code and when the timer is up it will execute the callback functions and print the value of i which is 1.
// so it will print Namaste javascript first and after 1 second it will print 1.

// Question 2:- Needs to print 1 2 3 4 5 after 1 second each.

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// x();

// It will print 6 6 6 6 6 as output because the value of i is 6 when the setTimeout is executed and when the setTimeout is executed it will print the value of i which is 6.
// to solve this we can use let instead of var.

// function x() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// x(); //
// this will print 1 2 3 4 5 as output  let has block scope and every time when loop runs it will be in diff
// every time new copy of i with diff location in memory will be created. which froms a closure with parent function x()

// Question 3:- We need to print 1 2 3 4 5 after 1 second each. using var only - we will create  new copy of i every time

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     function close(i) {
//       setTimeout(function () {
//         console.log(i);
//       }, i * 1000);
//     }
//     close(i); // this will create a new scope for each iteration and will print the value of i which is 1 2 3 4 5.
//   }
// }
// x();

// EP-12- Interview Questions on Closures.
