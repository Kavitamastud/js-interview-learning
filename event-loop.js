// Ep-15 - Event Loop. and Asynchronous programming.
// function a() {
//   console.log("a called");
// }
// a();
// console.log("end of the code");

// we know how above code will execute. in callstack

// console.log("start");
// setTimeout(function () {
//   console.log("callback function");
// }, 5000);
// console.log("end");
// above code will execute in event loop mechanism.
// 1.output will be start - it will use console web Apit o print it on console.
//2.then setTimeout also provided by browser api. it has callback function. it will get registerd to webApis and attach timer to it.
//3. it does not wait for timer to expire. it will go to next line of code and execute the code. it will print end.
//4. js is done excution then GeC will be deleted . then timer will expire then we need to run callback function for that we need to put into callStack.
// we cant put directly into callStack.what will happens

//---solution to above problem.
//1.after it expires the timer we need to put in  callback queue .
//2.Event loop will check if callStack is empty. if it is empty it will put the callback function from callback queue to callStack.
//3. callback function will be executed. and it will print callback function.

/////Event loop will contiosly check if callstack is empty and there is callback function is waiting in callback queue.if empty callstack then put into callstack then excute

//2.example of event loop. - with fetch api.
console.log("start");

setTimeout(function () {
  console.log("callback function");
}, 5000);
fetch("https://fakestoreapi.com/products/1")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
console.log("end");

// output
// start
// end
// callback function
// {id: 1, title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops', price: 109.95, description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded …', category: 'men clothing', image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg', rating: {…}}
