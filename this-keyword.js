// EP-06-This Keyword
"use strict";
// 1.this in global space -
// global object -window object in browser , global- object in node.js
// console.log(this);

//2.this inside a function- depends on strict mode
// behaves different in strict mode and non-strict mode
// function x() {
//   console.log(this);
// }
// x();

// undefined in strict mode ,
// window object in non-strict mode in browser
// This behvaes like this becasue of this substitution rule
// if value of this undefined or null - this will be replaced with global object only in non-strict mode

//3.In strict mode - for inside function -
// this is undefined and in non-strict mode - this is global object
// console.log("this is global object with strict mode", this);

//4.this keyword value depends on how the function is called-
// in Strict mode - this is undefined

// function x() {
//   console.log(this);
// }
// x(); //undefined -without any reference to the function
// window.x(); //window object -with reference to the function

//5.this inside a object methods-

// const obj = {
//   a: 10,
//   x: function () {
//     console.log(this); // it refers to the object that is obj
//     // console.log(this.a); // it refers to the value of a in the object obj // 10
//   },
// };
// // value of this depends on how method is called.
// obj.x(); // obj object

//6.call , apply , bind methods- (sharing methods)- function borrowing- to set value of this

//1.call method-
// const student1 = {
//   name: "Akshay",
//   age: 20,

//   printName: function () {
//     console.log(this.name, this.age);
//   },
// };
// student1.printName(); // Akshay

// // we want to use the printName method of student1 object for student2 object -
// // we can use call method to do this -

// const student2 = {
//   name: "John",
//   age: 21,
// };
// student1.printName.call(student2); // here in call this will be pointing to student2 object
// John will be printed

// example -2
// let student1 = {
//   firstName: "Akshay",
//   lastName: "Kumar",
//   age: 20,
//   printName: function () {
//     console.log(
//       "My name is",
//       this.firstName,
//       this.lastName,
//       "and my age is",
//       this.age,
//     );
//   },
// };

// if inside method-student1.printName(); // My name is Akshay Kumar and my age is 20

// we can put printName outside the object and call it using the object name -
// let printName = function () {
//   console.log(
//     "My name is",
//     this.firstName,
//     this.lastName,
//     "and my age is",
//     this.age,
//   );
// };

// printName.call(student1); // My name is Akshay Kumar and my age is 20

// let student2 = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 21,
// };
// printName.call(student2); // My name is John Doe and my age is 21

// 2.apply method- same as call method but takes arguments as an array-
// what is we have more parameters to pass?- for functions
// only diff how we pass arguments -
// call method - arguments are passed as individual arguments
// apply method - arguments are passed as an array
// example -
// printName2.call(student1, "Mumbai", "India"); // My name is Akshay Kumar and my age is 20 and I live in Mumbai India
// printName2.apply(student2, ["New York", "USA"]); // My name is John Doe and my age is 21 and I live in New York USA

// let student1 = {
//   firstName: "Akshay",
//   lastName: "Kumar",
//   age: 20,
// };
// let printName2 = function (city, country) {
//   console.log(
//     "My name is",
//     this.firstName,
//     this.lastName,
//     "and my age is",
//     this.age,
//     "and I live in",
//     city,
//     country,
//   );
// };

// let student2 = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 21,
// };

// we can call printName2 function using call method -
// first argument is the object that we want to use the method of and rest are the arguments that we want to pass to the method.
// printName2.call(student1, "Mumbai", "India"); // My name is Akshay Kumar and my age is 20 and I live in Mumbai India
// printName2.call(student2, "New York", "USA"); // My name is John Doe and my age is 21 and I live in New York USA

//apply method - pass arguments as an array-list
// printName2.apply(student1, ["Pune", "India"]); // My name is Akshay Kumar and my age is 20 and I live in pune India
// printName2.apply(student2, ["new Mumbai", "India"]); // My name is John Doe and my age is 21 and I live in New York USA

//3.bind method- same as call method but returns a new function-returns a copy of the function which can be called later.
// we can store the returned function in a variable and call it later.
// example -
// let printNameByBind = printName2.bind(student1, "Mumbai", "India"); // My name is Akshay Kumar and my age is 20 and I live in Mumbai India
// console.log(printNameByBind); // [Function: bound printName2] // It will copy of printName2 function with the value of this pointing to student1 object and arguments "Mumbai" and "India"
// printNameByBind(); // My name is Akshay Kumar and my age is 20 and I live in Mumbai India

//7.this inside a arrow function-
// arrow function is does not have its own this keyword. It inherits this from the parent scope
// value of this inside the arrow function will be enclosing lexical context.
// example -
// console.log(this); //window object - behaves like this in global scope - below this inside object function will be window object
// const obj = {
//   a: 10,
//   x: () => {
//     console.log(this); //window object
//   },
// };
// obj.x(); // window object - it is enclosed inside a global scope

//8.this inside a nested  arrow function-

// const obj = {
//   a: 10,
//   x: function () {
//     // console.log(this); // here this will be pointing to the object obj - becasue of enclosing lexical context will be obj - means parent scope will be obj
//     const y = () => {
//       console.log(this); // here this will be pointing to the object obj - becasue of enclosing lexical context will be obj - means parent scope will be obj
//     };

//     y();
//   },
// };
// obj.x(); // here enclosing lexical context will be obj - means parent scope will be obj

// output - { a: 10, x: [Function: x] }

//9. this inside a DOM

// example-check in html-
// value of this inside a button element will be referring to the button element itself
// referencing to the button element itself
// we can use propeties-of button element like id, class, etc.
// this.tagName will be button
// <button id="btn" onclick="alert(this)">Click me</button> // [object HTMLButtonElement] - button element itself
// <button id="btn" onclick="alert(this.tagName)">Click me</button> // button - tagName of button element
