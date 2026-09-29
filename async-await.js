// Ep-04
// async and await

// what is async-
// It is a keyword which is used before a function -to create a async function
// while declaring the function we will use async keyword
// example

// async function getData() {
//   return "Hello World";
// }

// How it is diff from normal function?
// It will  always return a promise
// if the functions returns a only value then it will warp that value into a promise and return that

// const dataPromise = getData();
// console.log(dataPromise); // will return a promise -
// // accessing the value of the promise
// dataPromise.then((data) => {
//   console.log(data);
// });

// what is if we return a promise from the function?

// const p = new Promise((resolve, reject) => {
//   resolve("promise resolved value");
// });

// async function getData() {
//   return p;
// }

// const dataPromise = getData();
// // console.log(dataPromise); // will return a promise -
// // accessing the value of the promise
// dataPromise.then((data) => {
//   console.log(data); // will return the value of the promise - promise resolved value - because we are returning a promise
// });

// using await with async----->

// async and await is used to handle the promises  -----> it makes the code more readable and easy to understand
// how we used to handle the promises before async and await?
// using then and catch
// example

// const p = new Promise((resolve, reject) => {
//   resolve("promise resolved value");
// });

// function getData() {
//   p.then((data) => {
//     console.log(data);
//   });
// }

// getData();

// how we used to handle the promises using async and await?

// async function handlePromise() {
//   const value = await p; // await can be used only inside a async function before the promise is resolved
//   console.log(value);
// }

// handlePromise();

////////////////////////////////////////////

// what is difference between using normal promise and promise with async and await?

// using normal promise-older way of handling the promises-
// creating a promise which takes a some time - means async operation-

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise resolved value");
//   }, 10000); // 10 seconds - means async operation - takes some time to resolve
// });

// function handlePromise() {
//   // Js will not wait for the promise to resolve - it will execute the code line by line - so it will print the message first and then the promise resolved value
//   p.then((data) =>console.log(data));
//   console.log("Namste JavaScript");
// }

// handlePromise();

// output will be -
// Namste JavaScript
// after 10 seconds - promise resolved value

//using async and await - promise with async and await is more readable and easy to understand

// async function handlePromise() {
//   console.log("Hello World"); //It will print immediately
//   //  Js engine was waiting for the promise to resolve - so it will print the message first and then the promise resolved value
//   const value = await p; // await can be used only inside a async function before the promise is resolved
//   console.log("Namaste JavaScript 1");
//   console.log(value);
// }

// handlePromise();

// output will be
// Hello World
// after 10 seconds -below
// Namste JavaScript
// promise resolved value

// What if we call the same promise multiple times?
// async function handlePromise() {
//   console.log("Hello World"); //It will print immediately
//   //  Js engine was waiting for the promise to resolve - so it will print the message first and then the promise resolved value
//   const value = await p; // await can be used only inside a async function before the promise is resolved
//   console.log("Namaste JavaScript 1");
//   console.log(value);

//   const value2 = await p; // await can be used only inside a async function before the promise is resolved
//   console.log("Namaste JavaScript 2");
//   console.log(value2);
// }

// output will be -
// Hello World
// after 10 seconds -below
// Namaste JavaScript 1
// promise resolved value
// Namaste JavaScript 2
// promise resolved value

// what is we call different promises in the same async function? with diff times?

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise resolved value1");
//   }, 10000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise resolved value2");
//   }, 5000);
// });

// async function handlePromise() {
//   console.log("Hello World");
//   const value1 = await p1;
//   console.log("Namaste JavaScript 1");
//   console.log(value1);

//   const value2 = await p2;
//   console.log("Namaste JavaScript 2");
//   console.log(value2);
// }

// handlePromise();

// output will be -
// Hello World
// after 10 seconds -below
// Namaste JavaScript 1
// promise resolved value
// Namaste JavaScript 2
// promise resolved value

// what if we reverse the order of the promises? with diff times?

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise resolved value");
//   }, 10000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise resolved value2");
//   }, 20000);
// });

// async function handlePromise() {
//   console.log("Hello World");
//   const value1 = await p1;
//   console.log("Namaste JavaScript 1");
//   console.log(value1);

//   const value2 = await p2;
//   console.log("Namaste JavaScript 2");
//   console.log(value2);
// }

// handlePromise();

//output will be- we can check in browser by putting debugger in the code and then running the code in browser

// Hello World
//After 10 sec-
// Namaste JavaScript 1
// promise resolved value
//After 20 sec-
// Namaste JavaScript 2
// promise resolved value2

//Real world example of async and await

// fetch data from api using fetch()
// const apiUrl = "https://jsonplaceholder.typicode.com/posts";

// async function handlePromise() {
//   //handlePromise will suspend until it gives a reponse
//   // it will give response which will return a promise
//   //that response body is readable stream - we need to convert it into a json
//   // we can use json() method to convert the response body into a json
//   //response.json() again returns a promise- which gives a json value
//   // handle error using try and catch - we can check error using giving random invalid url
//   // like "https://jsonplaceholder.typicode.com/posts123"

//     const response = await fetch(apiUrl);
//     const data = await response.json();
//     console.log(data);
//     // const titles = data.map((user) => user.title);
//     // console.log(titles);

// }

// handlePromise();

//How to handle errors in async and await?- using try and catch-

async function handlePromise() {
  //handlePromise will suspend until it gives a reponse
  // it will give response which will return a promise
  //that response body is readable stream - we need to convert it into a json
  // we can use json() method to convert the response body into a json
  //response.json() again returns a promise- which gives a json value
  // handle error using try and catch - we can check error using giving random invalid url
  // like "https://jsonplaceholder.typicode.com/posts123"
  const invalidUrl = "https://jsonplaceholder.typicode.com/posts123";
  try {
    // const response = await fetch(apiUrl);
    const response = await fetch(invalidUrl);
    const data = await response.json();
    console.log(data);
    // const titles = data.map((user) => user.title);
    // console.log(titles);
  } catch (error) {
    console.log("error in fetching data", error);
  }
}

// handlePromise();

// we can do in older way of handling the promises using then and catch-
// handlePromise().catch((error) => console.log("error in fetching data", error));
