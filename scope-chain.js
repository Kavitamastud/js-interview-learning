// EP-o7--->Scope Chain , Scope and lexical environment.

// function a() {
//   console.log(b); // here b will be 10  because first it will find out in local scople of a
//   // if it is there it will print or else it wiill check in global space and then it will print 10
// }
// var b = 10; // global scope this can accessed any where in program in
// a();

// what if we have function inside function then what will happen?

function a() {
  var b = 10;
  c();
  function c() {
    console.log(b); // here b will be 10  because first it will find out in local scople of b then its parents a() if not there a() parents will be global scop
    // scope chian is a finding out the variable from the local scope to the global scope // from child to parent
  }
}
a();

// //but when we access b here it will give error-
// console.log(b); // ReferenceError: b is not defined - because above b in decalre in local scope of fucntion a()
// which we cant not access outside the function a()
// parents to child -> access anything
// child to parents -> not access anything - but we can access varibles of lexical parents
