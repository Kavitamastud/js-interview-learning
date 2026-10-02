// we need to know bind and clouser to understand currying

// 1.bind method

// let multiply = function (x, y) {
//   console.log(x * y);
// };

// let multiplyByTwo = multiply.bind(this, 2); // when we bind method -It will create a copy of multiply function and does not invoke directly
// // here this is window object and x is 2 and y is 5
// multiplyByTwo(5); // 10

// // we can all the arguments to bind method
// let multiplyByThree = multiply.bind(this, 3, 5); // x=3 and y=5
// multiplyByThree(6); // here it will ingore the 5 and use the 3 and 5

// // or else we pass the arguments later
// let multiplyByFour = multiply.bind(this);
// multiplyByFour(4, 5); // 20

// 2.function clouser concept

// function multiply(x) {
//   return function (y) {
//     // function y will remember the value of x - from the outer function - that is lexical scope
//     console.log(x * y);
//   };
// }

// let multiplyByTwo = multiply(2);
// multiplyByTwo(5); // 10

// let multiplyByThree = multiply(3);
// multiplyByThree(5); // 15

// currying -
// currying is function that takes one argument at a time and returns a  new functions which takes next argument and so on until all the arguments are passed.
// is a technique of transforming a function with multiple arguments into a sequence of functions with single argument.
// means it is converting callable function sum(a,b,c) into sum(a)(b)(c)

// exmaple-
// f(a,b) -> f(a)(b)
// normal function

// function f(a, b) {
//   console.log(a + b);
// }
// f(2, 3); // 5

// currying function
// function f(a) {
//   return function (b) {
//     return a + b;
//   };
// }
// console.log(f(2)); // which will return the function f(b)
// console.log(f(2)(3)); // 5

// let f1 = f(2);
// console.log(f1(3)); // 5

// example- 2
// sum(2)(3)(5); // 10

// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// we can explain if we provide first arg then will get fucntion and
// console.log(sum(2)); // which will return the function sum(b)
// console.log(sum(2)(3)); // which will return the function sum(c)
// console.log(sum(2)(3)(5)); // 10

// check the roadside coder example for currying

// exmaple-3

// evaluate("sum")(5)(3)//6
// evaluate("multiply")(5)(3)//15
// evaluate("divide")(5)(3)//1.6666666666666667
// evaluate("subtract")(5)(3)//2

// function evaluate(operation) {
//   return function (a) {
//     return function (b) {
//       if (operation === "sum") return a + b;
//       if (operation === "multiply") return a * b;
//       if (operation === "divide") return a / b;
//       if (operation === "subtract") return a - b;
//       if (operation === "power") return a ** b;
//       return "Invalid operation";
//     };
//   };
// }
// console.log(evaluate("sum")(5)(3)); //6
// console.log(evaluate("multiply")(5)(3)); //15
// console.log(evaluate("divide")(5)(3)); //1.6666666666666667
// console.log(evaluate("subtract")(5)(3)); //2
// console.log(evaluate("power")(5)(3)); //125
// console.log(evaluate("modulus")(5)(3)); // invalid operation

// // we can do use-

// const mul = evaluate("multiply");

// // we can use the mul function to multiply the numbers
// console.log(mul(5)(3)); //15
// console.log(mul(5)(4)); //20
// console.log(mul(5)(5)); //25

// example-4
// Write a currying function that takes infinite arguments. means add(1)(2)(3).....(n)
//means console.log(add(1)(2)(3)(4)(5)()) // means infinite how many arguments we pass it will add all the numbers
// function add(a) {
//   return function (b) {
//     // means will consider we have passed the second argument and it will add the first argument and second argument and so on until all the arguments are passed
//     if (b) return add(a + b);
//     return a;
//   };
// }
// using arrow function
// let sum = (a) => (b) => (b ? sum(a + b) : a);
// console.log(sum(1)(2)(3)(4)(5)()); // 15

// means a =1 , it will check b means 2 is there so it will add 1 and 2 and return the function add(3) -means here a 3 and b is 6
// then again check here a =6 and b=4 again b is there so it will add 6 and 4 and return the function add(10) -means here a 10 and b is 5
// then again check here a =10 and b=5 again b is there so it will add 10 and 5 and return the function add(15) -means here a 15 and b is undefined
// then again check here a =15 and b is undefined so it will return the value of a which is 15
// console.log(add(1)(2)(3)(4)(5)()); // 15

// example-5 - difference between currying and partial application
// currying -number of arguments we pass = number of arguments function takes
// means number of nested function calls = number of arguments function takes

// partial application-trnasforms a function into another fucntion with smaller number of arguments.or small arity.
// example-
// function sum(a) {
//   return function (b, c) {
//     return a + b + c;
//   };
// }
// const x = sum(1);
// console.log(x(2, 3)); // 6 // number of function returnend=2 but we have passed 3 arguments
// console.log(sum(1)(2,3)); // 6
// means called partial application but not currying

// example - real world example
// DOM manipulation

function updateElementText(id) {
  return function (content) {
    document.querySelector("#" + id).textContent = content;
  };
}
// we can intialize fucntions once and we can use multiple times to update the text

const updateHeading = updateElementText("heading");
updateHeading("Hello Kavita Mastud ");

//exmaple - curry() implementation- important for interviews
// f(a,b,c) -> f(a)(b)(c)

// function curry(func) {
//   return function curriedFunc(...args) {
//     if (args.length >= func.length) {
//       return func(...args);
//     }
//     return function (...next) {
//       return curriedFunc(...args, ...next);
//     };
//   };
// }
// const sum  = (a, b, c) => a + b + c;
// const total = curry(sum);
// console.log(total(1)(2)(3)); // 6 // curried function

function curry(func) {
  // sum = func
  return function curriedFunc(...args) {
    // collect the arguments
    // curriedFunc= total function which will return the result
    if (args.length >= func.length) {
      return func(...args); // spread the arguments and return the result
    }
    return function (...next) {
      return curriedFunc(...args, ...next); // collect the next arguments and return the result
    };
  };
}

const sum = (a, b, c) => a + b + c;
const total = curry(sum);
console.log(total(1)); // which will return the function total(2)
console.log(total(1)(2)(3)); // 6
console.log(total(1, 2)(3)); // 6
console.log(total(1)(2, 3)); // 6
console.log(total(1, 2, 3)); // 6
