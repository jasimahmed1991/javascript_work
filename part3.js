//synchronous programming vs asynschronous programming
//javascript is a synchronous programming and single threaded

// in this eg you can see the program executes line by line

//**********eg of synchronous programming ***********

// for(let i =0;i<1000;i++){
//     console.log("inside for loop");
// }
// console.log("script end"); //This will run only after the loop is completed for 1000 iteratios

//**********eg of synchronous programming ***********



//*********eg for async programming using setTimeout**********
//when the program comes to setTimeout function it will pass this task to browser api and continue with the rest of the program

// console.log("script start");

// function hello() {
//   console.log("hello world");
// }
// setTimeout(hello, 1000); //you can see in console that this function output will come after last line execution
//console.log("script end");

//*********eg for async programming **********


// ******** set timeoue eg


// console.log("script start");
// for (let i = 0; i < 99; i++) {
//   console.log(i);
// }

// const id = setTimeout(() => {
//   console.log("inside set timeout ")
// }, 1000);
// console.log("Set timeout id :" + id);
// console.log("script end");

// ******** set timeoue eg


//*************** */ clear timeout ***************


// console.log("script start");
// for (let i = 0; i < 99; i++) {
//   console.log(i);
// }

// const id = setTimeout(() => {
//   console.log("inside set timeout ")
// }, 1000);
// console.log("Set timeout id :" + id);
// clearTimeout(id); // settimeout function will not be executed by this function
// console.log("script end");

//*************** */ clear timeout ***************


//********* set Interval **********

//set Interval is simillar to timeout , after every given time it will execute the given code
//in the below eg , for every 1 sec code will execute

// console.log("script start");
// setInterval(() => {
//  console.log(Math.random());
// }, 1000);
// console.log("script end");


//*********Set Interval**********


//************ callback functions ************
//this is one way to use call back function


// function addTowNumbers(a,b,callback){
//     console.log(a,b);
//     callback(a,b);
// }

// function addition(num1,num2){
//     console.log(num1 + num2);
// }


// addTowNumbers(5,4,addition)

//************ callback functions ************

// ******** callback eg 2 ************
// function get_names(fname, lname, callback) {
//   console.log(fname, lname);
//   const fullname = callback(fname, lname);
//   console.log(fullname);
//   return fullname;

// }

// function add_two_names(fname, lname) {
//   const fullname = fname + ' ' + lname;
//   return fullname;
// }

// const fullname = get_names("jasim", "ahmed", add_two_names);
// console.log(fullname);
// ******** callback eg 2 ************


//************ callback functions another way ************
//this is one way to use call back function


// function addTowNumbers(a,b,callback){
//     console.log(a,b);
//     callback(a,b);
// }




// addTowNumbers(5,4,function addition(num1,num2){
//     console.log(num1 + num2);
// });


//will get the same output
//************ callback functions ************




//*********** more working related to callback functions ***********

// function addTowNumbers(number1,number2,onSuccess,onFailure){
//     if(typeof number1 === "number" && typeof number2 === "number"){
//         onSuccess(number1,number2);
//     }else{
//         onFailure();
//     }
// }

// function onSuccess(number1,number2){
//     console.log(number1 + number2);
// }


// function onFailure(){
//     console.log("Plese enter numbers only");
// }

// addTowNumbers(45,6,onSuccess,onFailure);

//*********** more worling related to callback functions ***********






//***********callback, callback hell , pyramid of doom ****************
//asynchronous programming


// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// const heading3 = document.querySelector(".heading3");
// const heading4 = document.querySelector(".heading4");
// const heading5 = document.querySelector(".heading5");
// const heading6 = document.querySelector(".heading6");
// const heading7 = document.querySelector(".heading7");


// //this is called callback hell
// //this is not a good practice
// setTimeout(function(){
//     heading1.textContent = "one";
//     heading1.style.color = "red";
//     setTimeout(function(){
//         heading2.textContent = "Two";
//         heading2.style.color = "blue";
//         setTimeout(function(){
//             heading3.textContent = "Three";
//             heading3.style.color = "green";
//             setTimeout(function(){
//                 heading4.textContent = "Four";
//                 heading4.style.color = "gray";
//             },4000);
//         },3000);
//     },2000);

// },1000);



//***********callback, callback hell , pyramid of doom ****************







//*************** The above eg is done with the help of  functions */
//pyramid of doom , callback hell


// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// const heading3 = document.querySelector(".heading3");
// const heading4 = document.querySelector(".heading4");
// const heading5 = document.querySelector(".heading5");
// const heading6 = document.querySelector(".heading6");
// const heading7 = document.querySelector(".heading7");

// function changeText(element,text,color,time,onSuccess,onFailure){
//     setTimeout(function(){
//         if(element){
//             element.textContent = text;
//             element.style.color = color;
//             console.log(element);
//             onSuccess();
//         }else{
//             onFailure();
//         }

//     },time);
// }


// function onFailure(){
//     console.log("Failed");
// }
// //this is called pyramid of doom, callback hell
// changeText(heading1,"one","blue",1000,function(){
//     changeText(heading2,"two","red",1000,function(){
//         changeText(heading3,"three","gray",1000,function(){
//             changeText(heading4,"four","black",1000,function(){
//                 changeText(heading5,"five","orange",1000,function(){
//                     changeText(heading6,"six","cyan",1000,function(){
//                         changeText(heading7,"seven","brown",1000,function(){

//                         },onFailure)
//                     },onFailure)
//                 },onFailure)
//             },onFailure)
//         },onFailure)
//     },onFailure)
// },onFailure)



//*************** The above eg is done with the help of functions */


//********* promises *************
//Please note promis will be added in microtask queue's to get executed, just like callback queue's (Microtask queue has higher preference so they get executed first)
//promises task is done by browser

// const bucket = ["vegetables","salt","rice","water"];


// const friedRicePromise = new Promise(function(resolve,reject){
//         if(bucket.includes("vegetables") && bucket.includes("salt")){
//             resolve(["friedrice","water","bill"]); //you can pass anything here array,object,string
//         }else{
//             reject("sorry!! kitchen is closed");//you can pass anything here array,object,string
//         }
// });
// //the above process is called we have produced promise, now we have to consume promise

// //consume promise  friedRicePromise.then(callbackfunction - >resolve, callbackfunction -> reject);
// //.then() will take 2 callback functions 1 from resolve and another from reject
// friedRicePromise.then(function(order){ //whatever is passed from resolve is recieved here
//     console.log(order);
//     for(let item of order){
//         console.log(`please take : ${item}`);
//     }
// },function(error){ //whatever is passed from reject is recieved here
//     console.log(error);
// });

//you can also do this friedRicePromise.then().catch(function(error){ console.log(error) })



//********* promises *************



//************** promise work flow check *************

// const promise = new Promise(function(resolve,reject){
//       if(false){
//         resolve(["one","two","three"]);
//       }else{
//         reject("Promise is rejected");
//       }
//      });

//      console.log(promise);

//      promise.then(function(message){
//         console.log(message);
//      }).catch(function(message){
//         console.log(message);
//      })


//************** promise work flow check *************





//**********function returning promise **********

// function friedPromise(){
//     return new Promise(function(resolve,reject){
//               if(true){
//                 resolve(["one","two","three"]);
//               }else{
//                 reject("Promise is rejected");
//               }
//              });
// }


// friedPromise().then(function(message){
// console.log(message);
// }).catch(function(message){
//     console.log(message);
// })



//**********function returning promise **********




//******** promise and settimeout function at same time */

// function myPromise(){

//     return new Promise(function(resolve,reject){
//         const value = true;
//         setTimeout(() => {
//             if(value){
//                 resolve("You are calling resolve after 2 seconds");
//             }else{
//                 reject("your call is rejected");
//             }
//         }, 2000);
//     })

// }


// myPromise().then(function(message){
//     console.log(message);
// }).catch(function(message){
//     console.log(message);
// })


//******** promise and settimeout function at same time */






//*********** promise resolve and promise chaining */
//promise resolve


// const promise = Promise.resolve(5); //this will return a promise which can be fetched by .then() method
// console.log(promise);

// promise.then(function(output){
//     console.log(output); //rememebr .then() always returns new promise
// })


//always remember then() method will always return promise

//*********** promise resolve and promise chaining */








//******** promise chaining ************

// function myPromise(){
//     return new Promise(function(resolve,reject){
//         const value = true;
//         if(value){
//             resolve(" i am first output of resolve method");
//         }else{
//             reject();
//         }
//     })
// }


// myPromise().then(function(output){
//     console.log(output);
//     return output+" this is added text";  //theis will retuen a new promise, you can apply .then() method to promise as always, you can collect the output by using .then() method
//     //this is internally done as Promise.resolve(output)
// }).then(function(newoutput){
//     console.log(newoutput); // the returned ouput is collected here, this is called promise chaining
// })

//******** promise chaining ************



//*********revision objects *************

// const   obj1 = {
//     key1: "value1",
//     key2: "value2"
// }


// const obj2 = Object.create(obj1);
// console.log(obj2.__proto__); //[[prototpe is nothing but proto]]
// console.log(obj2.__proto__.__proto__);
// console.log(obj2.key1); //This obj2.key1 prints the value value1 which is picked by __proto__ of object 1
// //when there is no key present in the object it will always search in __proto__ object (here obj1)


// console.log(obj1);
//*********revision *************


//************revision functions*********** */
//functions provide us free space , that is called prototype
//only functions provide prototype property
// function hello(){
//     console.log("yes");
// }
// console.log(hello.prototype); //it's an empty object

//************revision function *********** */



//****back to promises ************ */
// turning callback hell into flat code


// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// const heading3 = document.querySelector(".heading3");
// const heading4 = document.querySelector(".heading4");
// const heading5 = document.querySelector(".heading5");
// const heading6 = document.querySelector(".heading6");
// const heading7 = document.querySelector(".heading7");

// function changeText(element, text, color) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       if (element) {
//         element.textContent = text;
//         element.style.color = color;
//         resolve(element.textContent + " is changed");
//       } else {
//         reject("Could not chage the color");
//       }
//     }, 1000)
//   })

// }

// const returedPromise = changeText(heading1, "one", "red");
// returedPromise.then(function (message) {
//   console.log(message);
//   return changeText(heading2, "two", "blue");
// }).then(function (message) {
//   console.log(message);
//   return changeText(heading3, "three", "green");
// }).then(function (message) {
//   console.log(message);
//   return changeText(heading4, "four", "yellow");
// }).catch(function (message) {
//   console.log(message); //this part will run if there is error
// })

//****back to promises ************ */