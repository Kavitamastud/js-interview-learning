// ============================================
// HOISTING IN JAVASCRIPT - DETAILED EXPLANATION- UDEMY
// ============================================

console.log("=== HOISTING EXPLANATION ===\n");

/*
 * HOISTING is a JavaScript behavior where variable and function declarations
 * are moved to the top of their scope (global or function scope) during the
 * compilation phase, BEFORE the code is executed.
 *
 * IMPORTANT: Only DECLARATIONS are hoisted, NOT INITIALIZATIONS!
 */

// ============================================
// 1. VAR HOISTING
// ============================================

console.log("1. VAR HOISTING:");
console.log("----------------");

// Example 1: Accessing var before declaration
console.log("Before declaration:", myVar); // Output: undefined (NOT an error!)
var myVar = 10;
console.log("After declaration:", myVar); // Output: 10

/*
 * What happens behind the scenes:
 * JavaScript interprets the above code as:
 *
 * var myVar;              // Declaration is hoisted to top
 * console.log(myVar);     // undefined (declared but not initialized)
 * myVar = 10;             // Assignment happens here
 * console.log(myVar);     // 10
 */

// Example 2: Multiple declarations
console.log("\n2. Multiple var declarations:");
console.log("-----------------------------");
console.log("x:", x); // undefined
var x = 5;
var x = 10; // Re-declaration is allowed with var
console.log("x after re-declaration:", x); // 10

// ============================================
// 2. FUNCTION DECLARATION HOISTING
// ============================================

console.log("\n3. FUNCTION DECLARATION HOISTING:");
console.log("----------------------------------");

// Function declarations are FULLY hoisted (both name and body)
sayHello(); // Works! Output: "Hello from function!"

function sayHello() {
  console.log("Hello from function!");
}

/*
 * Function declarations are hoisted completely, so you can call them
 * before they appear in the code.
 */

// ============================================
// 3. FUNCTION EXPRESSION HOISTING
// ============================================

console.log("\n4. FUNCTION EXPRESSION HOISTING:");
console.log("---------------------------------");

// Using var with function expression
console.log("typeof myFunc:", typeof myFunc); // undefined (not a function!)
// myFunc(); // ERROR: Cannot read property 'call' of undefined

var myFunc = function () {
  console.log("This is a function expression");
};

myFunc(); // Works here

/*
 * Why? Because only 'var myFunc' is hoisted, not the function assignment.
 * So myFunc is undefined until the assignment line is reached.
 */

// ============================================
// 4. LET AND CONST HOISTING (Temporal Dead Zone)
// ============================================

console.log("\n5. LET AND CONST HOISTING:");
console.log("--------------------------");

// console.log(myLet); // ERROR: Cannot access 'myLet' before initialization
// This is called TEMPORAL DEAD ZONE (TDZ)

let myLet = 20;
console.log("myLet after declaration:", myLet); // 20

// const behaves similarly
// console.log(myConst); // ERROR: Cannot access 'myConst' before initialization
const myConst = 30;
console.log("myConst after declaration:", myConst); // 30

/*
 * IMPORTANT DIFFERENCES:
 * - let and const ARE hoisted, but they are in a "Temporal Dead Zone" (TDZ)
 * - You cannot access them before the line where they are declared
 * - Unlike var, they are NOT initialized with 'undefined'
 * - They are block-scoped, not function-scoped
 */

// ============================================
// 5. ARROW FUNCTION HOISTING
// ============================================

console.log("\n6. ARROW FUNCTION HOISTING:");
console.log("---------------------------");

// Using var with arrow function
// console.log(arrowFunc); // undefined
// arrowFunc(); // ERROR: arrowFunc is not a function

var arrowFunc = () => {
  console.log("Arrow function");
};

arrowFunc(); // Works here

// Using let/const with arrow function
// arrowFunc2(); // ERROR: Cannot access before initialization

const arrowFunc2 = () => {
  console.log("Arrow function with const");
};

arrowFunc2(); // Works here

// ============================================
// 7. CLASS HOISTING
// ============================================

console.log("\n7. CLASS HOISTING:");
console.log("------------------");

// Classes are hoisted but also in TDZ
// const obj = new MyClass(); // ERROR: Cannot access before initialization

class MyClass {
  constructor() {
    this.name = "MyClass";
  }
}

const obj = new MyClass();
console.log("Class instance:", obj.name);

// ============================================
// 8. HOISTING IN FUNCTION SCOPE
// ============================================

console.log("\n8. HOISTING IN FUNCTION SCOPE:");
console.log("------------------------------");

function exampleFunction() {
  console.log("Inside function - before declaration:", localVar); // undefined
  var localVar = "I'm local";
  console.log("Inside function - after declaration:", localVar); // "I'm local"
}

exampleFunction();

// console.log(localVar); // ERROR: localVar is not defined (function scope)

// ============================================
// 9. HOISTING ORDER OF PRECEDENCE
// ============================================

console.log("\n9. HOISTING ORDER:");
console.log("------------------");

/*
 * HOISTING ORDER (from highest to lowest priority):
 * 1. Function declarations (fully hoisted)
 * 2. Variable declarations (var, let, const - but let/const in TDZ)
 * 3. Function expressions and assignments
 */

// Example demonstrating order
console.log("typeof example:", typeof example); // "function" (function wins!)

var example = "I'm a variable";

function example() {
  return "I'm a function";
}

console.log("typeof example after:", typeof example); // "string" (variable assignment overwrites)

// ============================================
// 10. PRACTICAL EXAMPLES AND GOTCHAS
// ============================================

console.log("\n10. COMMON GOTCHAS:");
console.log("-------------------");

// Gotcha 1: Loop with var
console.log("\nGotcha 1 - Loop with var:");
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log("var i:", i); // Prints 3, 3, 3 (not 0, 1, 2)
  }, 100);
}

// Gotcha 2: Loop with let (block scope)
setTimeout(function () {
  console.log("\nGotcha 2 - Loop with let:");
  for (let j = 0; j < 3; j++) {
    setTimeout(function () {
      console.log("let j:", j); // Prints 0, 1, 2 (correct!)
    }, 200);
  }
}, 150);

// ============================================
// SUMMARY
// ============================================

console.log("\n\n=== HOISTING SUMMARY ===");
console.log(`
1. VAR: Hoisted and initialized with 'undefined'
2. LET/CONST: Hoisted but in Temporal Dead Zone (TDZ)
3. FUNCTION DECLARATIONS: Fully hoisted (name + body)
4. FUNCTION EXPRESSIONS: Only variable declaration hoisted
5. ARROW FUNCTIONS: Same as function expressions
6. CLASSES: Hoisted but in TDZ
7. HOISTING ORDER: Functions > Variables
8. SCOPE: var is function-scoped, let/const are block-scoped
`);
