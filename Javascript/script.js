/* 
Hoisting - It is a default behaviour of Javascript engine where function declarations on the top of current scope.
Can't redeclare , reinitialize - let and const.

SCOPES :-
1. Global Variables :-
    1. Var
    2. Let
    3. Const

    Scopes of Global Scopes :-
    1. Global Scope
    2. Script Scope

2. Local Variables :-
    1. let
    2. const
    3. var

    Scopes of Local Variables :-
    1. Block Scope :- 
        When let and const declared inside any block then scope is 'block'.
        Note - 'var' variable inside a block but still has scope - Global.
    2. Local Scope :-
        Any var, let and const inside 'function' is called Local scope.
*/

// var a1 = 10;    // global variables - Global scope
// let a2 = 20; // global variables - script scope <----- due to Temporal Dead Zone means not initialized.
// const a3 = 30; // global variables - script scope <----- due to Temporal Dead Zone means not initialized.
// console.log(a1,a2,a3);

// if(100<10){
//     var b1 = 100; // global variables - global scope.
//     let b2 = 200;  // local variables - block scope.
//     const b3 = 300 // local variables - block scope
// }
// console.log(b1);

// function demo(){
//     var c1 = 1000;
//     let c2 = 2000;
//     const c3 = 3000;
// }
// demo();

// //! FUNCTIONS 

// greet(); // <----- due to HOisting.

// //! Named Function - Function which has name.
// // Function HOisting is only Possible in Named function.

// function greet() {
//     console.log("Welcome");
// }

// greet();

// //! GEC - Global Execution Context.
// debugger;
// console.log("start");
// console.log(a);
// student();
// var a = 10;
// console.log(a);
// function student (){
//     let b = 20;
//     console.log(b);
// }
// student();
// console.log(a);
// console.log("end");

// //! Anonymous Function - Function without Name.
// function (){}

// //! Function Expression - It is used to call Anonymous Function through variable.
// let f1 = function (){
//     console.log("Hi")
// };
// console.log(f1);
// f1()

// //! Function with Arguments and Parameters 
// function sum(n1 = 0, n2 = 0) {
//     console.log(arguments);

//     console.log(n1 + n2);

// }

// sum(45, 55)

//! Call back function - which passes as an argument.

// //! 8 IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE) :-
// (function(){
//     console.log("I am IIFE");
// })();

// //! 9) ARROW FUNCTION - introduce in es6 version ------> shorter syntax

// const f1 = () => {
//     console.log("Arrow Function 1")
// };

// f1();

// const f2 = x => {
//     console.log("Arrow Function 2",x)
// }

// f2(10);

// const f3 = () => console.log("Arrow function 3")
// f3();

// // EXPLICIT RETURN
// const f4 = (n1 = 0,n2 = 0) => {
//     return n1+n2;
// };
// console.log(f4(23,45));

// // IMPLICIT RETURN
// const f5 = (n1 = 0,n2 = 0) => n1+n2;
// console.log(f5(59,20));

// const f6 = () => ({name : "John"})
// console.log(f6());

// //! OBJECTS 

// //!  CREATE AN OBJECT
// const obj1 = {
//     firstname : "John",
//     lastname : "Doe",
//     age : 20,
//     isAdmin : false,
//     company : "TCS"
// };

// //! READ OBJECT
// console.log(obj1.firstname);

// //! UPDATE OBJECT
// obj1.age = 24;

// console.log(obj1.age);

// //! ADD NEW KEY
// obj1.salary = 50000;
// console.log(obj1
// );

// //! DELETE
// delete obj1.isAdmin;
// console.log(obj1);

// //! LOOP OVER AN OBJECT
// for(let i in obj1){
//     console.log(obj1[i]);
// }

// let student = {
//     fname : "Henry",
//     course : "Mern Stack"
// };

// let x = "fname";
// console.log(student[x]);

// //! NESTED OBJECT
// let employee = {
//     fullname: {
//         firstname: "JOHN",
//         lastname: "DOE"
//     },
//     age: 35,
//     address: {
//         city: "NOIDA",
//         state: "UP",
//         pin: 201301,
//         coordinates: {
//             lat: 98449894894, long: 456454454
//         }
//     }
// };

// console.log(employee.fullname.firstname);
// console.log(employee.address.coordinates);
// console.log(employee.address.coordinates.long);
// console.log(employee.address.coordinates.lat);

// //! DESTRUCTURING
// let user = {
//     fname: "Jane",
//     lname: "Doe",
//     age: 20
// };

// let { age, fname: firstname, lname, salary: sal = "NA" } = user;
// console.log(age, firstname, lname, salary);

// //! NESTED OBJECT DESTRUCTURING
// let user = {
//     name : "John Doe",
//     address : {
//         city : "Noida",
//         state : "UP",
//     },
// };

// let {name, address:{city, state}} = user;
// console.log(name);
// console.log(city , state);

// //! ARRAYS :-
// let arr1 = [10,20,30,40,50];
// //          0  1  2  3  4
// console.log(arr1[0]);
// console.log(arr1.length); // length is a property.

// //! ARRAY METHODS :-
// let arr1 = [10,20,30,40,50];
// console.log(arr1);

// //! push() - add elements at the last of an array.
// arr1.push(60,70,80);
// console.log(arr1);

// //! pop() - removes element from last of an array.
// arr1.pop();
// console.log(arr1);

// //! unshift() :- adds element at the front of an array.
// arr1.unshift(100,200);
// console.log(arr1);

// //! shift() - removes element from front of an array.
// arr1.shift();
// console.log(arr1);

// //! splice(position, deleteCount, newElements) - to add or delete element at specific position in array.
// //! We can't use -ve values here.
// let arr2 = [100,200,300,400,500];
// console.log(arr2);

// // arr2.splice(1,3);
// // console.log(arr2);

// // arr2.splice(2,0,250);
// // console.log(arr2);

// // arr2.splice(1,2,"Hello World",260);
// // console.log(arr2);

// //! slice() - to extract a copy of any part from array.
// //!           it always ignores end index while removing.
// //!           we can use -ve value also in it.
// let arr3 = [100,200,300,400];
// console.log(arr3);

// let val1= arr3.slice(1,3);
// console.log(arr3);
// console.log(val1);

// let val2 = arr3.slice(-3,-1);
// console.log(val2);

// let val3 = arr3.slice(-3,3);
// console.log(val3);

// let arr4 = [10,20,30,40,50];
// //! forEach(()=>{}) - have only single argument
// //! Parameters = 1. element     2. index value   3. complete array 
// let res1 = arr4.forEach((ele,idx,arr)=>{
//     console.log(ele);
//     return ele+5;
// });
// console.log("forEach Result "+res1);


// //! map(()=>{}) - give a new array as output.
// //! It provide boolean value if we apply filter like conditions in map.
// let res2 = arr4.map((ele,idx,arr) => {
//     return ele+5;
// });

// let res5 = arr4.map((ele,idx,arr) => {
//     return ele > 25;
// });

// console.log(res5);

// console.log("Map Result",res2);

// //! filter(()=>{}) - give a new filtered array as output.
// let res3 = arr4.filter((ele,idx,arr) => {
//     return ele > 30;
// });
// console.log("Filter Result",res3);

// //! find(()=>{}) - give a single value which satisfy the condition as output.
// //! give first occurance value.
// let res6 = arr4.find((ele,idx,arr) => {
//     return ele > 30;
// });
// console.log("Find Result",res6);

// //! findIndex(()=>{}) - give a new filtered array as output.
// //! return -1 if element is not present in array.
// let res7 = arr4.findIndex((ele,idx,arr) => {
//     return ele > 30;
// });
// console.log("Find Index Result",res7);

//! Promise - it is an object created while interacting with Server.
//! States of Promise - 
//! 1. Pending - When details are sent to server.      
//! 2. fullfilled - When Server received the request and details.       
//! 3. Rejected - When Server rejected the request.

// let p1 = fetch("https://dummyjson.com/todos");
// console.log(p1);

// p1.then((resp) => {
//     let p2 = resp.json();
//     console.log(p2);

//     p2.then((data) => {
//         console.log(data.todos);
//     })
    
//     p2.catch((err) => console.log(err));
    
// })

// p1.catch(() => {
//     console.log("Something Went Wrong !!!");
    
// })

//! ASYNC / AWAIT - The modern Standart for handling promises cleanly is async/await, which
//! writes asynchronous code that looks and behaves like synchronous code.
// async function getTodos(){
// try {
//     let resp = await fetch("https://dummyjson.com/todos");
//     let data = await resp.json();
//     console.log(data);
// }
// catch(error) {
//     console.log(error);
    
// }   
// }

// getTodos();

//! PROMISE REVISION
// States of Promises : - Pending , Fulfilled and Response.
// then() - when code fullfilled.
// catch() - when code is rejected.
// finally() - both when code is either rejected or fullfilled.
/*
async / await -  other way to handle error or Risky code.
*/

// const API = "https://dummy.json.com/todos";
// let p1 = fetch(API);
// console.log(p1);

// p1.then((resp) => {
//     let p2 = resp.json();
//     console.log(p2);

//     p2.then((data) => console.log(data.todos));

//     p2.catch((err) => console.log(err));
    
// })

// p1.catch((err) => {
//     console.log(err);
// })

//! ASYNC / AWAIT -----> used with functions.

// async function fetchTodosData(){
//     try {
//         let resp = await fetch("https://dummy.json.com/todos");
//         let data = await resp.json();
//         console.log(data);
//     } 
//     catch (error) {
//         console.log(error);
//     }
// }

// fetchTodosData();

//! TIMER FUNCTIONS : - 
// 1) Set Interval(callback function, intervalTime).
// console.log("Start");


// let id = setInterval(() => {
//     console.log("Hi");
// },1000)

// // 2) Set Timeout(callback function, delay)

// setTimeout(() => {
//     console.log("Byee");
//     clearInterval(id);   
// },8000)

// console.log("End");

// //! Event Loop :- 

// console.log("Start");

// setTimeout(function T1() {
//     console.log("T1");
// },5000);

// console.log("HI");


// setTimeout(function T2() {
//     console.log("T2");
// },2000);

// console.log("End");