// ============================================
// setTimeout + CLOSURE IN JAVASCRIPT - DETAILED EXPLANATION
// ============================================

console.log("=== setTimeout + CLOSURE EXPLANATION ===\n");

// ============================================
// 1. WHAT IS setTimeout?
// ============================================

console.log("1. WHAT IS setTimeout?");
console.log("----------------------");

/*
 * setTimeout is a Web API function that executes a function after a specified delay.
 * Syntax: setTimeout(callback, delayInMilliseconds)
 * 
 * Important: setTimeout is ASYNCHRONOUS - it doesn't block the code execution.
 */

console.log("Start");

setTimeout(function() {
    console.log("This runs after 1 second");
}, 1000);

console.log("End");

// Output:
// Start
// End
// This runs after 1 second (after 1 second delay)

// ============================================
// 2. WHAT IS CLOSURE?
// ============================================

console.log("\n2. WHAT IS CLOSURE?");
console.log("-------------------");

/*
 * CLOSURE: A function has access to variables in its outer (enclosing) scope
 * even after the outer function has returned.
 * 
 * A closure gives you access to an outer function's scope from an inner function.
 */

function outerFunction() {
    let outerVariable = "I'm from outer function";
    
    function innerFunction() {
        console.log(outerVariable); // Can access outerVariable
    }
    
    return innerFunction; // Return the inner function
}

const myClosure = outerFunction();
myClosure(); // Still has access to outerVariable!

// ============================================
// 3. THE CLASSIC PROBLEM: setTimeout in Loop with VAR
// ============================================

console.log("\n3. THE CLASSIC PROBLEM - Loop with var:");
console.log("----------------------------------------");

console.log("Problem: All setTimeout callbacks see the same 'i' value");

for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log("var i:", i); // What will this print?
    }, 1000);
}

/*
 * WHY THIS HAPPENS:
 * 1. var is function-scoped, so there's only ONE 'i' variable
 * 2. The loop runs quickly (synchronously) and finishes before setTimeout executes
 * 3. By the time setTimeout callbacks run, the loop has finished
 * 4. All callbacks reference the SAME 'i' variable, which is now 3
 * 
 * Output (after 1 second): 3, 3, 3
 */

// ============================================
// 4. SOLUTION 1: Using IIFE (Immediately Invoked Function Expression) + Closure
// ============================================

console.log("\n4. SOLUTION 1 - IIFE with Closure:");
console.log("-----------------------------------");

for (var j = 0; j < 3; j++) {
    // IIFE creates a new scope for each iteration
    (function(index) {
        setTimeout(function() {
            console.log("IIFE solution - index:", index);
        }, 2000);
    })(j); // Pass 'j' as 'index' parameter
}

/*
 * HOW IT WORKS:
 * 1. IIFE creates a NEW function scope for each iteration
 * 2. Each IIFE receives 'j' as 'index' parameter
 * 3. Each setTimeout callback forms a closure over its own 'index' variable
 * 4. Each closure has its own copy of 'index' (0, 1, 2)
 * 
 * Output (after 2 seconds): 0, 1, 2
 */

// ============================================
// 5. SOLUTION 2: Using LET (Block Scope)
// ============================================

console.log("\n5. SOLUTION 2 - Using let (Block Scope):");
console.log("----------------------------------------");

for (let k = 0; k < 3; k++) {
    setTimeout(function() {
        console.log("let solution - k:", k);
    }, 3000);
}

/*
 * HOW IT WORKS:
 * 1. let is block-scoped, so each iteration creates a NEW 'k' variable
 * 2. Each setTimeout callback forms a closure over its own 'k' variable
 * 3. No need for IIFE - let handles it automatically!
 * 
 * Output (after 3 seconds): 0, 1, 2
 */

// ============================================
// 6. SOLUTION 3: Using Arrow Function with let
// ============================================

console.log("\n6. SOLUTION 3 - Arrow Function with let:");
console.log("----------------------------------------");

for (let m = 0; m < 3; m++) {
    setTimeout(() => {
        console.log("Arrow function - m:", m);
    }, 4000);
}

// Arrow functions work the same way - they form closures over block-scoped variables

// ============================================
// 7. SOLUTION 4: Using setTimeout Third Parameter
// ============================================

console.log("\n7. SOLUTION 4 - setTimeout Third Parameter:");
console.log("-------------------------------------------");

for (var n = 0; n < 3; n++) {
    setTimeout(function(index) {
        console.log("Third parameter - index:", index);
    }, 5000, n); // Third parameter passes value to callback
}

/*
 * HOW IT WORKS:
 * setTimeout(callback, delay, arg1, arg2, ...)
 * The third parameter (and beyond) are passed as arguments to the callback
 * This creates a closure-like effect without needing IIFE
 */

// ============================================
// 8. CLOSURE WITH setTimeout - Practical Example
// ============================================

console.log("\n8. PRACTICAL EXAMPLE - Counter with Closure:");
console.log("---------------------------------------------");

function createCounter() {
    let count = 0; // Private variable
    
    return {
        increment: function() {
            count++;
            console.log("Count:", count);
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();

// Use setTimeout to increment counter
setTimeout(() => {
    counter.increment(); // Count: 1
}, 6000);

setTimeout(() => {
    counter.increment(); // Count: 2
}, 7000);

setTimeout(() => {
    console.log("Final count:", counter.getCount()); // Final count: 2
}, 8000);

/*
 * This demonstrates:
 * - Closure maintains access to 'count' variable
 * - Multiple setTimeout callbacks can access the same closure
 * - Data encapsulation (count is private)
 */

// ============================================
// 9. CLOSURE WITH setTimeout - Delayed Execution
// ============================================

console.log("\n9. DELAYED EXECUTION WITH CLOSURE:");
console.log("----------------------------------");

function delayedGreeting(name, delay) {
    setTimeout(function() {
        console.log(`Hello, ${name}! (after ${delay}ms)`);
    }, delay);
}

delayedGreeting("Alice", 9000);
delayedGreeting("Bob", 10000);
delayedGreeting("Charlie", 11000);

/*
 * Each setTimeout callback forms a closure over:
 * - 'name' parameter (different for each call)
 * - 'delay' parameter (different for each call)
 * 
 * Even though delayedGreeting function has returned,
 * the callbacks still have access to their respective 'name' and 'delay' values
 */

// ============================================
// 10. ADVANCED: Nested setTimeout with Closure
// ============================================

console.log("\n10. NESTED setTimeout WITH CLOSURE:");
console.log("-----------------------------------");

function countdown(start) {
    let current = start;
    
    function tick() {
        console.log(`Countdown: ${current}`);
        current--;
        
        if (current >= 0) {
            setTimeout(tick, 1000); // Recursive setTimeout
        } else {
            console.log("Blast off! 🚀");
        }
    }
    
    setTimeout(tick, 12000);
}

countdown(3);

/*
 * This creates a closure chain:
 * - tick() has access to 'current' and 'start'
 * - Each recursive call maintains access to the same 'current' variable
 * - This creates a countdown effect
 */

// ============================================
// 11. COMMON MISTAKES AND GOTCHAS
// ============================================

console.log("\n11. COMMON MISTAKES:");
console.log("-------------------");

// Mistake 1: Not understanding closure scope
console.log("\nMistake 1: Loop with var (wrong way)");
for (var p = 0; p < 3; p++) {
    setTimeout(function() {
        console.log("Wrong - p:", p); // Prints 3, 3, 3
    }, 13000);
}

// Mistake 2: Trying to use loop variable directly
console.log("\nMistake 2: Direct reference (wrong)");
var arr = [];
for (var q = 0; q < 3; q++) {
    arr.push(function() {
        return q; // All functions return 3
    });
}
setTimeout(() => {
    console.log("Array results:", arr.map(fn => fn())); // [3, 3, 3]
}, 14000);

// Correct way: Use closure
console.log("\nCorrect way: Using closure");
var arr2 = [];
for (var r = 0; r < 3; r++) {
    arr2.push((function(index) {
        return function() {
            return index; // Each function returns its own index
        };
    })(r));
}
setTimeout(() => {
    console.log("Array results (correct):", arr2.map(fn => fn())); // [0, 1, 2]
}, 15000);

// ============================================
// 12. CLEARING setTimeout
// ============================================

console.log("\n12. CLEARING setTimeout:");
console.log("-----------------------");

const timeoutId1 = setTimeout(() => {
    console.log("This won't print");
}, 16000);

const timeoutId2 = setTimeout(() => {
    console.log("This will print");
}, 17000);

clearTimeout(timeoutId1); // Cancel the first timeout
console.log("First timeout cleared");

// ============================================
// SUMMARY
// ============================================

setTimeout(() => {
    console.log("\n\n=== setTimeout + CLOSURE SUMMARY ===");
    console.log(`
KEY CONCEPTS:

1. setTimeout is ASYNCHRONOUS
   - Code continues executing while waiting
   - Callback runs after specified delay

2. CLOSURE
   - Inner function has access to outer scope variables
   - Variables persist even after outer function returns

3. THE CLASSIC PROBLEM
   - Loop with var: All callbacks see the same variable
   - Solution: Use let, IIFE, or setTimeout third parameter

4. SOLUTIONS:
   ✅ let (block scope) - Easiest and recommended
   ✅ IIFE (Immediately Invoked Function Expression)
   ✅ setTimeout third parameter
   ✅ Arrow functions with let

5. PRACTICAL USES:
   - Delayed execution
   - Countdowns/timers
   - Debouncing/throttling
   - Data encapsulation
   - Maintaining state in async operations
`);
}, 18000);





