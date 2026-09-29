// EP-o8--->let and const -->

// for the var varible even before the declaration we can access it but for let and const we cant access it before the declaration
// console.log(b); // undefined // because var is hoisted
// var b = 10;

// but for let we can not access it before the initialization
// console.log(c); // ReferenceError: c is not defined
// //////////////////////////////////////// -----> this is TDZ the time between the let and const were hoisted till the initialization
// let c = 10; //Cannot access 'c' before initialization

// to check in brower

// let a = 10; // let and const are not get attched to window object , they will be in seperate memory space
// console.log(a); // 10
// var b = 100; // will attch to the global that is global object in browser
// console.log(window.a); // undefined
// console.log(window.b); // 100

// let and const we can not redeclare the same variable name

// let a = 10;
// let a = 20; // SyntaxError: Identifier 'a' has already been declared

// in same scope we can not redeclare the same variable name
// let a = 10;
// var b = 20; // SyntaxError: Identifier 'b' has already been declared

// for const we can not redecalre the same variable name
// const b = 10;
// const b = 20; // SyntaxError: Identifier 'b' has already been declared

// but for var we can redeclare the same variable name
// var b = 10;
// console.log(b); // 10
// var b = 20; // no error
// console.log(b); // 20

// const - it is similar in case of hositing with let but even more strict than let
// for let we can declare varible first and then initialize it later but for const we can not declare it first and then initialize it later
// we should declare and initialize the variable at the same time -for const
// const a; // SyntaxError: Missing initializer in const declaration
// a = 10;
// its needs to decalre and initialize the variable at the same time
// const a = 10;
// console.log(a); // 10

// // we cant reassign the value to the const variable
// const b = 10;
// b = 20; // TypeError: Assignment to constant variable.

// ep-o9--->  block scope and shadowing in javascript-->

// block- block is used to combine multiple statements into a single unit.
// means we can put multiple stmt in block and used to  get a single return value.

// example of block
// {
//     let a = 10;
//     console.log(a); // 10
//     if(a>5){
//         console.log("a is greater than 5"); // 20
//     }
// }

//block scope - what are the varibles and functions are accessible in the block that is called block scope.
// example of block scope

// {
//   var a = 10;
//   console.log(a); // 10
//   let b = 20;
//   console.log(b); // 20
//   const c = 30;
//   console.log(c); // 30
// }
// console.log(a); // 10
// console.log(b); // ReferenceError: b is not defined
// console.log(c); // ReferenceError: c is not defined
// if we put debugger in the block then we can see the block scope
// let and const are stored in block scope but var is stored in global scope
// means let and const are not accessible outside the block but var is accessible outside the block
// we can access the var outside the block but let and const are not accessible outside the block

// shadowing - when we have same varible name in the inner block and outer bolck then the inner block will shadow the outer block varible

// example of shadowing - with var

// var a = 10;
// {
//   var a = 20;
//   console.log(a); // 20
// }
// console.log(a); // 20

// example of shadowing - with let

// let a = 10;
// {
//   let a = 20;
//   console.log(a); // 20 // this b has block scope - this is stored as diff scope
// }
// console.log(a); // 10 // this b has another scope - not presnt in global scope

// example of shadowing - with const
// const a = 10;
// {
//   const a = 20;
//   console.log(a); // 20 // this b has block scope - this is stored as diff scope
// }
// console.log(a); // 10 // this b has another scope - not presnt in global scope

// shadowing in functions - it behaves the same way in functions like block-

// example

// var c = 100;
// function x() {
//   var c = 200;
//   console.log(c); // 200
// }
// // console.log(c); // 100
// x();
// console.log(c); // 100

// // example of shadowing in functions - with let

// let d = 100;
// function y() {
//   let d = 200;
//   console.log(d); // 200
// }
// y();
// console.log(d); // 100

// Eligle shadowing-

// var a=10; // we can shadow
// {
//     var a=20;
//     console.log(a); // 20
// }
// console.log(a); // 20

////// but what if we try to shadow var with let or const

let a = 10;
{
  var a = 20; // we can not shadow var with let or const //Identifier 'a' has already been declared
}

// but we shadow
var b = 100;
{
  let b = 200;
  console.log(b); // 200
}
console.log(b); // 100

// so we can shadow var with let or const but we can not shadow let or const with var
