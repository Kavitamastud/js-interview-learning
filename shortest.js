// Global Space - any code we can write not inside any function or block is called global space.- we can check in browser this varible and functions
//will be in global space.
var x = 10;
function getName() {
  // Local Space - any code we can write inside any function or block is called local space.- we can check in browser this varible and functions
  //will be in local space.
  var y = 20; //local space variable - It will be not in global space. for global object we can check in browser console.
  console.log("Namaste JavaScript");
}

// EP-06----> undefined and not defined -
console.log(a); // undefined - during the memory allocation phase for the varible will allocate memory with placeholder undefined.
var a = 10; // if we dont assign any value to the varible then it will be undefined.
console.log(a); // when we run it will give 10 as output.

//undefined !== empty - it a placholder which will keep until the varibles get assigned any value.

// if we console log the varible like below
console.log(b); // it will give error as b is not defined. - means memory is not allocated for this

// main difference between undefined and not defined is that undefined is a placeholder which will keep until the varibles get assigned any value.
// and not defined is means memory is not allocated for this.
