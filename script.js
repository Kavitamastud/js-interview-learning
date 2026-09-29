// // Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
// // getName(); //hello world
// // console.log(num); // undefined
// // console.log(getName); // [Function: getName]



// // var num=7; // if we remove this line then it will give error because of hoisting and now console.log(num) will give error because num is not defined
// // function getName(){
// //     console.log("Hello World");
// // }


// // getName(); //hello world
// // console.log(num); //  7 
// // If we move the console.log(num) after the getName() then it will give error because of hoisting and now console.log(num) will give error because num is not defined


// // we we try to use arrow funtions-
// // var  num=7;
// // var getName = () => {
// //     console.log("Hello World");
// // }


// // if we try to use arrow funtions with var then it will give error because of hoisting and now console.log(getName) will give error because getName is not defined

// // working of call stack-
// var x=7;
// function getName(){
//     console.log("Hello World");
// }
// getName();
// console.log(x);
// Hoisting is the js mech where we can access the vaibles and function before initialization of it, it means we have move the vaibles and
// and functions to top of the their scope before code excuetions , it we can access it without error.

// getName();
// console.log(x);
// // var x=7
// function getName(){
//     console.log("Hello World");
// }


// always returns a promise , either we need to return promise or if we dont return promise , whatever value we have returend the this function will wrap in promise.
const p1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Promise is resloved!!!");
    }, 10000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Promise is resloved!!!");
    }, 5000);
});


async function handlePromise(){
    console.log("Hello kavita");
     const value = await p1;
     console.log("Hello World");
     console.log(value);

     const value2 = await p2;
     console.log("Hello World2 ");
     console.log(value2);
}
handlePromise();
// function getData(){
//     p.then(data=>console.log(data));
//     console.log("Hello World");

// }
// getData();
