// EP-13- First Class Functions.

//1.Function statement
// function statement is a way to create a function

// a(); // this will work because function statement is hoisted. means will get the function body
// b(); // this will throw an error b() is not a function. becasue its a varibles and value will be undefined
// calling undefined will throw an error.- b is not a function.
// function a() {
//   console.log("a called");
// }
// a();

//2.Function expression
// function expression is a way to create a function and store it in a variable.
// we can store function in a variable.

// var b = function () {
//   console.log("b called");
// };
// b();

// the only difference between function statement and function expression is the function statement is hoisted and function expression is not hoisted.

//3. function declaration is a same as function statement.
// function declaration is a way to create a function.

//4.Anonymous function-
// Anonymous function is a function without a name.
// function (){ // this will throw an error because - its looking like a function statement -
//     // error will be function statement required a name
//     console.log("anonymous function called");
// }

//It is used where we need to pass function as value
// means functions as used as a value. - see the function expression example.
// var b = function (){
//     console.log("b called");
// };
// b();

//5.Named function expression-
// var b = function a() {
//   console.log("b called");
//   //   a(); // we can call the function inside the function.
// };
// b();
// a(); // this will throw an error because a is not defined.

// 6.parameter and arguments
// parameter is the variable that is used to store the value of the function.
// arguments is the value that is passed to the function.
// function a(parameter){
//   console.log(parameter);
// }
// a(arguments);

// 7.First class functions-
// 1.First class functions is a function that can be passed as an argument to another function.

// var b = function (param1) {
//   console.log(param1);
// };
// b(function c() {
//   //   console.log("c called");
// }); // this will pass the function c as an argument to the function b. will get output as function c()

// Example of First class functions-
// var result = function (addFunction) {
//   addFunction(2, 3);
// };
// result(function add(param1, param2) {
//   console.log(param1 + param2);
// }); // this will pass the function add as an argument to the function result. will get output as 5.

// we can do this also

// var result = function (addFunction) {
//   addFunction(2, 3);
// };
// function add(param1, param2) {
//   console.log(param1 + param2);
// }
// result(add);

// 2. we can return a function from a function.
// var result = function (addFunction) {
//   return addFunction(2, 3);
// };
// function add(param1, param2) {
//   console.log(param1 + param2);
// }
// result(add);

// example 2-
// var result = function () {
//   return function () {
//     console.log("hello");
//   };
// };
// console.log(result()); // it will return the function itself. // output will be [Function (anonymous)]
// result()(); // it will call function inside the function. // output will be hello
