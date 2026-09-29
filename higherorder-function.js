// Ep-18 - Higher Order Function.

// A function that takes a function as an argument or returns a function is called a higher order function.
//  example ;
// function x() {
//   console.log("Hello");
// }

// function y(x) {
//   // higher order function is y and x is a callback function.
//   x();
// }

// y(x);

// output: Hello

// example 2:

// function z() {
//   return function () {
//     // higher order function is z and it returns a function.
//     console.log("Hello");
//   };
// }

// let a = z(); // reference to the function is stored in a.
// console.log(a); // prints the function.
// a(); // calls the function.

// output: Hello

// suppose we have radiues and we want to calculate the area of a circle.
const radius = [1, 2, 3, 4, 5];

// const calculateArea = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.PI * radius[i] * radius[i]);
//   }
//   return output;
// };

// console.log(calculateArea(radius));

// output: [3.141592653589793, 12.566370614359172, 28.274333882308138, 50.26548245743669, 78.53981633974483]

// what if we need to calculate the circumference of a circle.
// const calculateCircumference = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * Math.PI * radius[i]);
//   }
//   return output;
// };

// console.log(calculateCircumference(radius));

// output: [6.283185307179586, 12.566370614359172, 18.84955592153876, 25.132741228718345, 31.41592653589793]

// what if we want to calculate the diameter of a circle.
// const calculateDiameter = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * radius[i]);
//   }
//   return output;
// };

// console.log(calculateDiameter(radius));

// output: [2, 4, 6, 8, 10]

// so we can see that we are repeating the same code for each function.
// we can use a higher order function to avoid this.

//////////////////////////////////////////////////////////////////////////
// now will use a higher order function to calculate the area, circumference and diameter of a circle.

// const area = function (radius) {
//   return Math.PI * radius * radius;
// };

// /// making generic function - which takes the function as an argument.
// const calculate = function (radius, logic) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(logic(radius[i]));
//   } // we are passing the area() functions inside
//   return output;
// };
// console.log(calculate(radius, area));

// // same way we can calculate the circumference and diameter of a circle.

// const circumference = function (radius) {
//   return 2 * Math.PI * radius;
// };

// const diameter = function (radius) {
//   return 2 * radius;
// };

// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));

// map method is a higher order function that takes a function as an argument and returns a new array.
// console.log(calculate(radius, area));
// console.log(radius.map(area)); // same as calculate(radius, area)

// Ep-19 - map , filter and reduce - HOF

//1.map()- is used to transform an array. and get new array with transformed values. without mutating the original array.
// Double , triple the value of an array. or binary

// const array = [1, 2, 3, 4, 5];

// function double(x) {
//   return x * 2;
// }

// const output = array.map(double);
// console.log(output);

// output: [2, 4, 6, 8, 10]

// function triple(x) {
//   return x * 3;
// }

// const output2 = array.map(triple);
// console.log(output2);

// // output: [3, 6, 9, 12, 15]

// function binary(x) {
//   return x.toString(2); // converts the number to binary.
// }

// const output3 = array.map(binary);
// console.log(output3);

// // output: ['1', '10', '11', '100', '101']

// We can write pass a callback function to map method.

// const output1 = array.map((x) => x * 2);
// console.log(output1);

//2.filter()- is used to filter an array. and get a new array with filtered values. without mutating the original array.

// example:- to filter the odd numbers from an array.

// const array = [5, 1, 3, 2, 6];

// function isOdd(x) {
//   return x % 2;
// }

// const output = array.filter(isOdd);
// console.log(output);

// // We can write pass a callback function to filter method.
// const output1 = array.filter((x) => x % 2);
// console.log(output1);

// // output: [5,1,3]

// // example:- to filter the even numbers from an array.

// const output2 = array.filter((x) => x % 2 === 0);
// console.log(output2);

// // output: [2,6]

// 3.reduce -used at place when we need to reduce the array to a single value.
// example:- to find the sum of an array.

// without reduce method

const arr = [1, 2, 3, 4, 5];

// function findSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// console.log(findSum(arr));

// // output: 15

// // with reduce method

// const output = arr.reduce(function (acc, curr) {
//   acc = acc + curr;
//   return acc;
// });
// console.log(output);

// output: 15

// We can write pass a callback function to reduce method.

// const output1 = arr.reduce((acc, curr) => acc + curr, 0);
// console.log(output1);

// output: 15

// example - to find the maximum number in an array.

// function findMax(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log(findMax(arr));

// using reduce

// const output = arr.reduce(function (acc, curr) {
//   if (curr > acc) {
//     acc = curr;
//   }
//   return acc;
// }, 0);
// console.log(output);

// // using arrow function

// const output1 = arr.reduce((acc, curr) => {
//   if (curr > acc) {
//     acc = curr;
//   }
//   return acc;
// }, 0);
// console.log(output1);

// // output: 5

///////////////////////////////////////
// example -

// const users = [
//   { firstName: "John", lastName: "Doe", age: 25 },
//   { firstName: "Jane", lastName: "Doe", age: 22 },
//   { firstName: "Jim", lastName: "Beam", age: 28 },
//   { firstName: "Jill", lastName: "Doe", age: 21 },
//   { firstName: "John", lastName: "Doe", age: 25 },
//   { firstName: "Jane", lastName: "Doe", age: 22 },
//   { firstName: "Jim", lastName: "Beam", age: 28 },
//   { firstName: "Jill", lastName: "Doe", age: 21 },
//   { firstName: "John", lastName: "Doe", age: 18 },
// ];

// 1.find the list of full names of the users.

// const output = users.map((x) => x.firstName + " " + x.lastName);
// console.log(output);

// output: ["John Doe", "Jane Doe", "Jim Beam", "Jill Doe"]

//2.how many users have same age. // {25:2, 22:2, 28:2, 21:2, 18:1}

// const output1 = users.reduce(function (acc, curr) {
//   if (acc[curr.age]) {
//     acc[curr.age] = acc[curr.age] + 1;
//   } else {
//     acc[curr.age] = 1;
//   }
//   return acc;
// }, {}); // initial value of acc is an empty object.

// console.log(output1);

// output: {25:2, 22:2, 28:2, 21:2, 18:1}

// using arrow function

// const output2 = users.reduce((acc, curr) => {
//   if (acc[curr.age]) {
//     acc[curr.age] = acc[curr.age] + 1;
//   } else {
//     acc[curr.age] = 1;
//   }
//   return acc;
// }, {});

// console.log(output2);

// output: {25:2, 22:2, 28:2, 21:2, 18:1}

// filter the users who are less than 25 years old and return the first name of the users

const friends = [
  { firstName: "kavita", lastName: "mastud", age: 25 },
  { firstName: "rupali", lastName: "thore", age: 22 },
  { firstName: "puja", lastName: "bhosale", age: 21 },
  { firstName: "aarti", lastName: "kale", age: 20 },
];

// we can do chaining of methods to get the output. -map and filter methods are higher order functions.
// const output3 = friends.filter((x) => x.age < 25).map((x) => x.firstName);
// console.log(output3);
// // output:  ['rupali', 'puja', 'aarti']

// we can do using reduce method above example-

const output = friends.reduce((acc, curr) => {
  if (curr.age < 25) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);
console.log(output);

// output: ['rupali', 'puja', 'aarti']
