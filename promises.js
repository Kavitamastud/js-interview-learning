// season-2 - ep-24 - promises

// promises are the way to handle asynchronous operations in javascript
//before promises, we used callbacks to handle asynchronous operations
// with the callback - will get 2 issues:
// 1. Callback Hell
// 2. Inversion of Control
// with help of callbacks-
// const cart = ["item1", "item2", "item3"];

// createOrder(cart, function (orderId) {
//   // here we are passing the callback function to the createOrder api
//   proceedToPayment(orderId);
// });

// we need to slove these issues with promises
// for that we need to store api to empty objects and then return the data from the api
// It will filled the object with the data from the api
// means -
// const promise = createOrder(cart); // iintially empty object {data: undefined}
// then we will wait for the data to be filled in the object
// {data: orderDetails}

// then will contioue next api - by attaching a callback function to the promise like below
// promise.then(function (orderId) {
//   // here we are attaching the callback function to the promise
//   proceedToPayment(orderId);
// });

// with promises we have control of our code . they will give trust and garantty that callback will be called when ever it will return promises
// means - we will get the data from the api in the promise object and then we will use it in the next api
// it will call only once
// checking how promise object will look in browser console -

// const GITHUB_API = "https://api.github.com/users/akshaymarch7";
// const response = fetch(GITHUB_API); // it will return a promise object // state - pending and result - undefined
// console.log(response); // it is aynsynchronous operation and wi ll return a promise object // state -fulfilled and result - data from the api

// when can check the promise object in browser console - it will show the promise object with the data from the api
// first state - pending and result - undefined
// when async operation done - state - fulfilled and result - data from the api

// Attaching a callback function to the promise object -
// response.then(function (data) {
//   console.log(data);
// });

//////////////////////////////Promise Definition//////////////////////////////
// Promise is an Object that represents the eventual completion of an async operation
// it has 3 states:
// 1. pending
// 2. fulfilled
// 3. rejected
// when it will be fulfilled - it will return the data from the api
// then will attach a callback function to the promise object

// if there are many async operations . we need to perform them sequentially . means one after another
// we used to handle this with callbacks - but will get callback hell
// with promises we can handle this with ease -with promise chaining

// promise chaining -
// createOrder(cart)
//   .then(function (orderId) {
//     return proceedToPayment(orderId);
//   })
//   .then(function (paymentInfo) {
//     return showOrderSummary(paymentInfo);
//   })
//   .then(function (paymentStatus) {
//     return updateWalletBalance(paymentStatus);
//   });

// // we need to return the data from the api in the promise object

// // we can use arrow functions to simplify the code
// createOrder(cart)
//   .then((orderId) => proceedToPayment(orderId))
//   .then((paymentInfo) => showOrderSummary(paymentInfo))
//   .then((paymentStatus) => updateWalletBalance(paymentStatus));

////////////////////////////////////////////////////

// Ep-3 - creating our own promises , chaining and error handling

// const cart = ["shoes", "pants", "kurta"];

// const promise = createOrder(cart);
// // console.log(promise); // it will return a promise object // state - pending and result - undefined
// promise
//   .then(function (orderId) {
//     console.log(orderId); // orderId is the data from the api
//     // proceedToPayment(orderId);
//   })
//   .catch(function (err) {
//     console.log(err); // err is the error from the api // handle the error with the help of catch block
//   });

// we have created the promise object but we need to return the data from the api in the promise object
// and attach a callback function to the promise object

// here we need to write the createOrder function
// promise will create with the help of new keyword and Promise constructor
// Promise constructor will take a callback function as an argument
// callback function will take two arguments - reslove and reject
// reslove will be called when the promise is fulfilled
// reject will be called when the promise is rejected

// producer function
// function createOrder(cart) {
//   const pr = new Promise(function (reslove, reject) {
//     // createOrder
//     // logic to create order
//     // Validate the cart
//     if (!isValidateCart(cart)) {
//       const err = new Error("cart is not valid");
//       reject(err); // reject the promise with the error when it is false // It will error on browser console
//     }
//     // if cart is valid, then create the order
//     const orderId = "1234567890";
//     if (orderId) {
//       // setTimeout(function () {
//       //   reslove(orderId); // fulfill the promise with the orderId after 5 seconds it will be asynchronous operation
//       // }, 5000);

//       reslove(orderId); // fulfill the promise with the orderId
//     }
//   });
//   return pr;
// }

// function isValidateCart(cart) {
//   // we can check is cart is empty or not
//   // some validations logic
//   return true; // if cart is valid, then return true
//   // return false; // if cart is not valid, then return false - we can reject the promise with the error
// }

//////////////
// If our promise is rejected, then we need to handle the error
// we can handle the error with the help of catch block- with callback function

////////////////////////promise chaining////////////////////////
// we can chain the promises with the help of then block - means one after another

//  Proceed to payment function

// function proceedToPayment(orderId) {
//   // logic to proceed to payment
//   return new Promise(function (reslove, reject) {
//     // logic to proceed to payment
//     reslove("payment successful");
//     // reject("payment failed"); // if payment is failed, then reject the promise with the error
//   });
// }

// how it will look

// createOrder(cart)
//   .then(function (orderId) {
//     console.log(orderId); // orderId is the data from the api
//     return orderId; // return the orderId to the next promise
//   })
//   // we can the catch the error in the middle of the promise chain
//   // .catch(function (err) {
//   //   console.log(err.message); // err is the error from the api // handle the error with the help of catch block
//   // })
//   .then(function (orderId) {
//     return proceedToPayment(orderId); // return the paymentInfo to the next promise
//   })
//   .then(function (paymentInfo) {
//     console.log(paymentInfo); // paymentInfo is the data from the api
//   })
//   .catch(function (err) {
//     console.log(err.message); // err is the error from the api // handle the error with the help of catch block
//   });

/////////////////////////////////////////////////////////////////////////////////////////////////////

//homework- write a promise
// createOrder, proceedTopayment , showOrderSummary , updateWalletBalance

const cart = ["shoes", "pants", "kurta"];

function isValid(cart) {
  // check is cart is empty
  if (cart.length === 0) {
    return false;
  }
  return true;
}
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!isValid(cart)) {
      const err = new Error("cart is not valid");
      return reject(err); // reject the promise with the error when it is false // It will error on browser console
    }
    const orderId = "1234567890";
    if (orderId) {
      resolve(orderId); // fulfill the promise with the orderId
    }
  });
  return pr;
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    if (orderId === "1234567890") {
      resolve("payment sucessfull");
    } else {
      reject(new Error("payment failed"));
    }
  });
}

function showOrderSummary(paymentInfo) {
  const pr = new Promise(function (resolve, reject) {
    if (paymentInfo === "payment sucessfull") {
      resolve("shown ordersummary for kurta");
    } else {
      reject(new Error("payment failed thats why we can't show order summary"));
    }
  });
  return pr;
}

function updateWalletBalance(orderSummary) {
  const pr = new Promise(function (resolve, reject) {
    resolve("updated wallet balance for kurta");
  });
  return pr;
}

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId); // orderId is the data from the api
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo); // paymentInfo is the data from the api
    return showOrderSummary(paymentInfo);
  })
  .then(function (orderSummary) {
    console.log(orderSummary); // orderSummary is the data from the api
    return updateWalletBalance(orderSummary);
  })
  .then(function (walletBalance) {
    console.log(walletBalance); // walletBalance is the data from the api
  })
  .catch(function (err) {
    console.log(err.message); // err is the error from the api // handle the error with the help of catch block
  });
