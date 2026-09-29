// Ep-05-Promise API- and Interview Questions-
// Promise API-To make an parallel requests and wait for all of them to complete
//1- Promise.all() -
// 1.1- Success Case- It will to all the promises to resolve and return the result in an array.
// Example-
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("P1 Success");
//   }, 3000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("P2 Success");
//   }, 1000);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("P3 Success");
//   }, 2000);
// });

// Promise.all([p1, p2, p3]) // actual will be api calls like fetching data from multiple endpoints
//   .then((results) => {
//     console.log(results);
//   }); // results will be an array of results from all the promises after the 3 seconds

// After 3 seconds, the results will be an array of results from all the promises [P1 Success, P2 Success, P3 Success]
// [ "P1 Success", "P2 Success", "P3 Success" ]

// 1.2- Failure Case- It will return the first rejected promise and ignore the other promises.

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("P1 Success");
//   }, 3000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("P2 Success");
//     reject("P2 Rejected"); // After 1 second, P2 will be rejected and the other promises will be ignored.
//   }, 1000);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("P3 Success");
//     // reject("P3 Rejected"); // After 2 seconds, P3 will be rejected and the other promises will be ignored.
//   }, 2000);
// });

// Promise.all([p1, p2, p3])
//   .then((results) => {
//     console.log(results);
//   })
//   .catch((error) => {
//     console.error(error); // Error: P2 Rejected
//   });
// After 1 second, P2 will be rejected and the other promises will be ignored.
// Error: P2 Rejected
// what is P3 fails then after 2 seconds will get P3 rejected?  Error: P3 Rejected

////////////////////////////////////////////////////////////////////////////////////////////////////

//2- Promise.allSettled() -safe way to handle promises
// It will to all the promises to resolve and return the result in an array.same as Promise.all() for success case but diff in fail case it will return the result of all the promises even if some of them are rejected.
//2.1- Success Case- It will wait all the promises to resolve and return the result of it in array.

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("P1 Success");
//   }, 3000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("P2 Success");
//     reject("P2 Rejected");
//   }, 1000);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("P3 Success");
//   }, 2000);
// });

// Promise.allSettled([p1, p2, p3])
//   .then((results) => {
//     console.log(results);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// After 3 seconds, the results will be an array of results from all the promises [P1 Success, P2 Success, P3 Success]
// [
//     {
//         "status": "fulfilled",
//         "value": "P1 Success"
//     },
//     {
//         "status": "fulfilled",
//         "value": "P2 Success"
//     },
//     {
//         "status": "fulfilled",
//         "value": "P3 Success"
//     }
// ]

//2.2- Failure Case- It will wait all the promises to resolve and return the result of it in array.
// Example- p2 is rejected -only returns a result when all are settled- It will give object
// [
//     {
//         "status": "fulfilled",
//         "value": "P1 Success"
//     },
//     {
//         "status": "rejected",
//         "reason": "P2 Rejected"
//     },
//     {
//         "status": "fulfilled",
//         "value": "P3 Success"
//     }
// ]

///////////////////////////////////////////////////////////////////////////////////////

//3- Promise.race() -who wins first - whether it is success or failure- It will returns that value of promises
//Example-whos take less time - fail or success

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("P1 Success");
//   }, 3000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("P2 Success");
//     reject("P2 Rejected");
//   }, 1000);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("P3 Success");
//   }, 2000);
// });

// Promise.race([p1, p2, p3])
//   .then((results) => {
//     console.log(results);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// After 1 second, P2 will be resolved and the other promises will be ignored.
// P2 Success
// what is p2 falis- P2 Rejected it will give in 1 second P2 Rejected
// what is p3 fails then after 2 seconds will get P3 rejected?  Error: P3 Fail
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("P1 Success");
//   }, 3000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("P2 Success");
//   }, 5000);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("P3 Fail");
//   }, 2000);
// });

// Promise.race([p1, p2, p3])
//   .then((results) => {
//     console.log(results);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// after 2 seconds, P3 will be rejected and the other promises will be ignored.
// P3 Fail

//////////////////////////////////////////////////////////////////////////////

//4- Promise.any() -seek for first success - ignore the failures
//Example-
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("P1 Success");
//   }, 3000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("P2 Success");
//   }, 1000);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("P3 Fail");
//   }, 2000);
// });

// Promise.any([p1, p2, p3])
//   .then((results) => {
//     console.log(results);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

//after 1 second, P2 will be resolved and the other promises will be ignored.
// P2 Success
// What is P2 and p3 are fails-

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("P1 Success");
//   }, 5000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("P2 Fail");
//   }, 3000);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("P3 Fail");
//   }, 2000);
// });

// Promise.any([p1, p2, p3])
//   .then((results) => {
//     console.log(results);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// after 5 seconds, P1 will be resolved and the other promises will be ignored.
// P1 Success

///// What if is all the promises are rejected?-It will give AggregateError: All promises were rejected

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P1 Fail");
  }, 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P2 Fail");
  }, 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P3 Fail");
  }, 2000);
});

Promise.any([p1, p2, p3])
  .then((results) => {
    console.log(results);
  })
  .catch((err) => {
    console.log(err);
    console.error(err.errors);
  });

// after 3 It will give AggregateError: All promises were rejected
// It will returns array of errors- it will get in object
// [ "P1 Fail", "P2 Fail", "P3 Fail" ] will get err.errors object
