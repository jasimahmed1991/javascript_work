//  let fruits = ["apple","mango","grapes"];
// let numbers = [1,2,3];
// console.log(fruits);

// console.log(typeof fruits);
// console.log(Array.isArray(fruits));

//Refecence type example

// let array1 = ["item1","item2"];
// let array2 = array1;

// console.log("array1", array1);
// console.log("array2", array2);

// array1.push("item3");
// console.log("after pushing item into array 1");
// console.log("array1",array1);
// console.log("array2",array2);

// ***********
// console.log("How to clone array");
// let array1 = ["mango","grapes"];
// let array2 = array1.slice(0);
// console.log(array2);
// array1.push("banana");
// console.log(array1);

// ***********
//for loop in arrays
// let fruits = ["apple","banana","grapes","mango"];
// let fruits2 = [];
// for(let i = 0 ; i < fruits.length; i++){
//   fruits2.push(fruits[i]);
// }

// console.log(fruits2);

// *******while loop in array***********
// const fruits = ["apple","grapes","mango"];
// let i = 0;
// while(i<fruits.length){
//   console.log(fruits[i]);
//   i++;
// }
// *******while loop in array***********


// ***********
//eg for arrays concat
// let fruits1 = ["apple","mango"];
// let fruits2= ["grapes","banana"];

// let fruitsAll = [...fruits1,...fruits2];
// console.log(fruitsAll);
// let concatFruits = ["guava"].concat(fruitsAll);
// console.log(concatFruits);

// concatFruits.pop();
// console.log(concatFruits);
// ***********

// ******* for of loop in arrays*******
// const fruits = ["apple","mango","banana","grapes"];
// const fruits2 = [];
// for(let fruit of fruits){
//   console.log(fruit);
//   fruits2.push(fruit.toUpperCase);
// }
// console.log(fruits2);
// ******* for of loop in arrays*******

// ******* for in loop in arrays*******
// let fruits = ["apple","mango","grapes"];
// let fruits2 = [];

// for(let index in fruits ){
//   fruits2.push(fruits[index]);
// }
// console.log(fruits2);
// ******* for in loop in arrays*******

// ******for in loop ********
// const fruits = ["apple","banana","mango"];
// for(let index in fruits){
//   console.log(fruits[index]);
// }
// ******for in loop ********

// ****** array destructure ******
// fruits = ["apple","banana","grapes","mango"];
// let [var1 , var2 ,...var3 ] = fruits;
// console.log(var1  , var2 , var3);
// ****** array destructure ******

// ******* objects in javascript*******
// const fruits = ["apple","mango","banana"];
// const person = {
//   name:"jasim",
//   age:31,
//   email:"jaism@gmail.com"
// }

// console.log(typeof person);
// ******* objects in javascript*******

// ********objects example 1*********

// let race = "colour";
// const person = {
//   name:"john",
//   age:21,
//   hobbies:["playing","studying"]
// }

// const array1 = person.hobbies;
// console.log(person["age"]);

// person["gender"] = ["one","two"];
// person[race] = "black";
// console.log(person);  
// ********objects example 1*********


// ******* iteration of objects 1st way *******
// const person = {
//   name: "jasim",
//   age : 32,
//   hobbies : ["playing","music"]
// }

// for(let key in person){
//   console.log(person[key]);
// }
// ******* iteration of objects 1st way *******


// ******* iteration of objects 2nd way *******
// const person = {
//     name: "jasim",
//     age : 32,
//     hobbies : ["playing","music"]
//   }

//   const new_array = Object.keys(person);
//   for(let index in new_array){
//     console.log(index);
//   }
// ******* iteration of objects 2nd way *******


// ********Spread operator in array ********
// const array1 = ['apple','banaba'];
// const array2 = ['guava','mango'];
// const merge_two = [...array1,...array2,"test"];
// console.log(merge_two);
// ********Spread operator in array ********


// ********how to speard string in arrays*********
// const newArray = [..."mango"];
// console.log(newArray);
// ********how to speard string in arrays*********


// **********spread operaters in object  ************
//if there are same values in both the objects it gets overwritten

// const obj1 = {
//   key1 : "value1",
//   key2 : "value2"
// }

// const obj2 = {
//   key3 : "value3",
//   key4 : "value4"
// }

// const newObject = {...obj1,...obj2 ,"newkey":"newvalue"}
// console.log(newObject);

// **********spread operaters in object ************


//********** convert strings into object values **********
//eg 

//  const newObject = {..."abcdefg"}
// console.log(newObject);

//********** convert strings into object values **********


//****** destructuring of Object *******
// how to access the values of objects eg1
//here year and place comes in rest variable as another object
//const{ var name should be same as key inside object}

// const band = {
//   bandName : "led zapline",
//   song: "stairway to heaven",
//   year:1991,
//   place:"berlin"
// }
// const {bandName,song,...rest} = band;
// console.log(rest);

//****** destructuring of Object *******


//******* objects inside arrays ********
// const users = [
// {userId:1,firstName : "test",gender:"male"},
// {userId:2,firstName : "john",gender:"male"},
// {userId:3,firstName : "jack",gender:"male"}
// ];

// console.log(users[0].userId);

// for(let user of users){
//   console.log(user.firstName);
// }


//218 to access individual 
//******* objects inside arrays ********


//******* nested destructuring ********

// const users = [
// {userId:1,firstName : "test",gender:"male"},
// {userId:2,firstName : "john",gender:"male"},
// {userId:3,firstName : "jack",gender:"male"}
// ];

// const [ user1,user2,user3 ] = users;
// console.log(user1);
// console.log(user2);
// console.log(user3);


//******* nested destructuring ********

//******* nested destructuring for specfic values inside the object ********
//if you want to give the variable name of your wish you can use eg: const [ {firstname:youname}]

// const users = [
//   {userId:1,firstName : "test",gender:"male"},
//   {userId:2,firstName : "john",gender:"male"},
//   {userId:3,firstName : "jack",gender:"male"}
//   ];
  
//   const [ {firstName},{userId:userId2},{userId:userId3,firstName:firstName3} ] = users;
//   console.log(firstName);
//   console.log(firstName3);
  
  
//******* nested destructuring for specfic values inside the object ********


//*******functions in javscript ********
//eg to check if num is even or odd

// function isEven(number){
//   if(number % 2 ===0 ){
//     return true;
//   }else{
//     return false;
//   }
// }

// console.log(isEven(10));

//*******functions in javscript ********

//*******functions in javscript reduce code ********

// function isEven(number){
//   if(number % 2 === 0){
//     return true
//   }
//   return false;
// }

// console.log(isEven(10));

//*******functions in javscript reduce code ********

//*******functions in javscript reduce code again ********

// function isEven(number){
//   return number % 2 === 0;
// }
// console.log(isEven(11));

//*******functions in javscript reduce code ********


//*********** find target index *******
// function FindTarget (myArray,target){
//   for(let i = 0;i<myArray.length;i++){
//     if(myArray[i] == target){
//       return i
//     }
//   }
//   return -1;
// }

// const myArray = [1,10,12,13,15];
// const target = 15;
// const ans = FindTarget(myArray,10);
// console.log(`the target element was found at ${ans} position `);
//*********** find target index *******


//**********return 1st charactrer of string ********

// function firstChar(name){
//   return name[0];
// }

// const result = firstChar("jasim");
// console.log(result);

//**********return 1st charactrer of string ********



//******* function expressions **************
//different approcah to express functions

//  const firstChar = function(name){
//   return name[0];
// }

// const result = firstChar("jasim");
// console.log(result);

//******* function expressions **************

//******* arrow  function **************

// const singHappyBirthday = () => {
//   console.log("happy birthday to you");
// }
// singHappyBirthday();

//******* arrow  function **************

//******* arrow  function example**************

// const addThreeNum = (num1,num2,num3) =>{
//   return num1 + num2 + num3;
// }

// const ans = addThreeNum(20,30,40);
// console.log(ans);

//******* arrow  function example **************


//******* hoisting**************
// calling the function even before it's declared is call hoisting
//this works ony in the case of function declaration not in the case of function expression.
//eg

// hello();

// function hello(){
//   console.log("hello world");
// }

//******* hoisting **************

//******* hoisting function expression eg **************
//it does not work here

// hello();

// const hello = function(){
//   console.log("hello world");
// }

//error Uncaught SyntaxError: Identifier 'hello' has already been declared (at script.js:381:7)
//******* hoisting function expression eg **************

//************functions inside function *********

// function app(){
//   const myFunc = () =>{
//     console.log("hello myFunc");
//   }

//   const addTwo = (num1,num2) =>{
//     return num1 + num2;
//   }
//   const mulTwo = (num1,num2) =>{
//     return num1 * num2;
//   }

//   console.log("this is myfunc");
//   console.log(addTwo(2,3));
//   console.log(mulTwo(2,3));


// }

// app();

//************functions inside function *********


//********lexical scope *******
// lexical scope 

// const myVar = "value1";

// function myApp(){
    

//     function myFunc(){
//         // const myVar = "value59";
//         const myFunc2 = () =>{
//             console.log("inside myFunc", myVar);
//         }
//         myFunc2();
//     }


//     console.log(myVar);
//     myFunc();
// }

// myApp();

//the value of myvar is first searched inside the function myFunc if not found it will search the outer function if not the global function
//********lexical scope *******



//*********block scope vs function scope *******
//if you define variable using let and const inside any block those variable are only accessed inside the block if you use them outside that block you will get eroor.

// {
//   let firstName = "jasim";
// }
// console.log(firstName);

//Uncaught ReferenceError: firstName is not defined

//some more eg
// {
//   let firstName = "jasim";
//   console.log(firstName);
// }


// {
//   let firstName = "ahmed";
//   console.log(firstName);
// }
// This will not throw any error because they both are in diff block

//*********block scope vs function scope *******


// ******* accessing block variables ******
//let and const are block scope
//var is function scope

// if(true){
//   var firstName = "harshit";
//   console.log(firstName);
// }

// console.log(firstName);

// ******* accessing block variables ******


// ******* accessing block variables eg ******

// function myApp(){
//   if(true){
//     let firstName = "harshit";
//     console.log(firstName);
//   }
//   console.log(firstName);
// }

// myApp();

//first console will work the second one throws error because we cannot use const oustide the function, only let will work
// ******* accessing block variables ******


// ***** default parameters ******

// function addTwo(a=3,b=0,c=2){
//   return a + b + c;
// }

// const ans = addTwo(4,5,6);
// console.log(ans);

// ***** default parameters ******

// ********rest parameters *******

// function myFunc(a,b,...c){
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// myFunc(1,2,3,4,5);

//here 1 is passed to a , 2 is passed to b rest all paraments are passed to c as a array 
// ********rest parameters *******

// ********rest parameters eg *******
//if we want to add all numbers passed as array

// function myFunc(...numbers){
//   var total = 0;
//   for(let number of numbers ){
//     total = total + number;
//   }
//   console.log(total);
//   return total;

// }

// var result = myFunc(1,2,3,4);
// console.log(result);

// ********rest parameters eg *******


//***********parameter destructuring *********
//basic structure

// const person = {
//   firstName : "jasim",
//   gender: "male"
// }

// //console.log(person);
// function myFunc(Obj){
//   console.log(Obj.firstName);
//   console.log(Obj.gender);
// }

// myFunc(person);

//***********parameter destructuring *********


//***********parameter destructuring passing object *********
//we can do the direct destructuring in the parameters itself istead of writing Obj.first name


// const person = {
//   firstName : "jasim",
//   gender: "male"
// }

// //console.log(person);
// function myFunc({firstName,gender}){
//   console.log(firstName);
//   console.log(gender);
// }

// myFunc(person);

//***********parameter destructuring passing object*********



//***********parameter destructuring passing arrays*********
// const fruits = ["apple","mango",'grapes'];
// function myFunc([one,tow]){
//   console.log(one,tow);
// }

// myFunc(fruits);
//***********parameter destructuring passing arrays*********


//*********call back functions  basics**********
//these are the basics of how agruments are passed into functions
//turns out we can even pass a function as a arguement

// function myFunc(a){
//   console.log(a);
// }

//myFunc(['a','b','c']);
//myFunc("abc");
//myFunc({firstname:"john",age:32} );

//*********call back functions basics**********




//*********call back functions using actual functions **********
//passing the value as a function to a in the above eg
//here we are passing hello world as a argument to myFunc function

// function hello_world(name){
//   console.log("Hello world......"+name);
// }


// function myFunc(callback){
// callback("jasim");
// };

// myFunc(hello_world);

//myFunc(hello_world); here hello_world is a function which is passed to myFunc
//We always call the paramenter as callback , it is a practice
//taking a function as a input and calling that is called callback function
//*********call back functions using actual functions **********


//********* function returning functions **********
//basic return eg

// function myFunc(){
//   return "a";
// }

// const  ans = myFunc();
// console.log(ans);

//********* function returning functions **********

//********* function returning functions **********
//basic return eg of arrays

// function myFunc(){
//   const fruits = ["apple","grapes","mango"] ;
//   return fruits;
// }

// const  ans = myFunc();
// console.log(ans);

//********* function returning functions **********


//********* function returning functions **********
//basic return eg of objects

// function myFunc(){
//   const person = {
//     firstname : "john",
//     age : 22
//   }
//   return person;
//   //return {firstname:"jaism",age:32}
// }

// const  ans = myFunc();
// console.log(ans);

//********* function returning functions **********


//********* function returning functions real eg **********

// function myFunc(){
//   function hello_world(){
//     console.log("hello world.....");
//   }

//   return hello_world ;
//   //here hell_world is returned , whole function is returned which is collected in ans variable
// }

// const ans = myFunc();//hello_world function is saved in here
// ans();

//********* function returning functions real eg **********


//******* important array methods -foreach method *******
//write a prog to use multiple array  items with 2 one by one

// const numbers = [4,12,15,16,17];

// function multiplyByTwo(number,index){
//   console.log("index is "+ index +" number us "+number);
//   console.log(`${number} * 2 = ${number * 2 } `);
// }

// // for( let i = 0; i<numbers.length; i++){
// //   multiplyByTwo(numbers[i],i);
// // }
// //instead of this we can directly use for each method by using call back function

// numbers.forEach(multiplyByTwo);//here by default the first arguement is number and second arguement is index , this is callback function

//here we have creadted seperate function to execute ,we can do it in single line as well
//******* important array methods -foreach method *******


//******* important array methods -foreach method *******
//inside a argument  you are passing whole function

// const numbers = [10,20,30,40,50];

// numbers.forEach(function(number,index){
//   console.log(number+" * 2 ="+ number * 2);
// });

//******* important array methods -foreach method *******

//******* important array methods -foreach method real world eg *******

// const users = [
//   {firstname:"jasim",age:32,gender:"male"},
//   {firstname:"john",age:12,gender:"male"},
//   {firstname:"harry",age:22,gender:"male"}
// ];

// //first method forach method
// users.forEach(function(user){
//   console.log(user.firstname);
// });

// //we can use for of loop as well
// for(let user of users){
//   console.log(user.firstname);
// }


//******* important array methods -foreach method real world eg *******


//******** map method very imp *************
//map method always returns something which will be stored in new array.

// numbers = [10,12,14,18,20];

// const square =  function(number){
//   return number * number;
// }

// const result =  numbers.map(square);
// console.log(result);

//makesure you always return sometime from a function or else it will return as undefined
//******** map method very imp *************

//******** map method very imp *************
//we can do this by defining function inside argument.

// numbers = [10,12,14,18,20];

// // const square =  function(number){
// //   return number * number;
// // }

// const result =  numbers.map(function(number,index){
// return  `index is ${index} and square is ${number * number} `
// });
// console.log(result);

//each time a single element from array is picked and returned in the form of array
//******** map method very imp *************


//******** map method real world eg *************

// const users = [
//   {firstname : "john",age:28,gender:"male"},
//   {firstname : "maria",age:22,gender:"female"},
//   {firstname : "rick",age:32,gender:"male"}
// ];

// const result = users.map(function(user,index){
//   return `${user.firstname}`;
// });
// console.log(result);

//this was done using anonamus function
//******** map method real world eg *************


//******** map method real world eg using arrow function *************

// const users = [
//   {firstname : "john",age:28,gender:"male"},
//   {firstname : "maria",age:22,gender:"female"},
//   {firstname : "rick",age:32,gender:"male"}
// ];

// const result = users.map((user,index)=>{
//   return user.firstname
// });
// console.log(result);

//this was done using map  function
//******** map method real world eg  using arrow function*************


//******** filter method*************
//This return only boolean values
//Those values are stored in the form of array

// const numbers = [1,2,3,4,5,6,7,8,9];

// const isEven = function(number){
//   return number % 2 === 0;
// }

// const result = numbers.filter(isEven);
// console.log(result);

//call back method
//******** filter method*************


//******** filter method using function as arguement*************
//by using function inside arguments 

// const numbers = [1,2,3,4,5,6,7,8,9];

// const result  = numbers.filter(function(number){
// if(number % 2 === 0){
//     return true;
//   }else{
//     return false;
//   }
// });

// console.log(result);

//******** filter method using function as arguement*************

//******** filter method using arrow function*************

// const numbers = [1,2,3,4,5,6,7,8,9];

// const result =  numbers.filter((number,index)=>{
// return number % 2 === 0;
// });

// console.log(result);

//******** filter method using arrow function*************


//*********** reduce method ***********
// reduce 
//const numbers = [1,2,3,4,5, 10];

// aim : sum of all the numbers in array 

// const sum = numbers.reduce((accumulator, currentValue)=>{
//     return accumulator + currentValue;
// }, 100);

// console.log(sum);
// accumulator , currentValue,  return 
// 1               2              3 
// 3               3              6
// 6               4              10
// 10              5              15
// 15              10             25


// const userCart = [
//     {productId: 1, productName: "mobile", price: 12000},
//     {productId: 2, productName: "laptop", price: 22000},
//     {productId: 3, productName: "tv", price: 15000},
// ]

// const totalAmount = userCart.reduce((totalPrice, currentProduct)=>{
//     return totalPrice + currentProduct.price;
// }, 0)

// console.log(totalAmount);

// total price      currentValue     return 
// 0                {}                  12000
// 12000            22000                34000
// 34000            15000                49000
//*********** reduce method ***********

//********* sort method ***********
//sort method changes the original array
//here all elements inside are sorted based on converting numbers into strings


// const numbers = [40,100,50,44,300];
// numbers.sort();
// console.log(numbers);

//********* sort method ***********

//********* sort method based on strings ***********

// const userNames = ['john','doe','erik','cartman'];
// userNames.sort();
// console.log(userNames);

//********* sort method based on strings ***********




// ********** find methode*********


// const myArray = ["cat","dog","apple","mango"];

// function MyLength3(string){
//   return string.length === 5;
// }

// const ans = myArray.find(MyLength3);
// console.log(ans);

//each time an item is passed as arguement in find method and checked with the function . If matched it will be returned 
//if the string does not match the equation it will be returned false 
// ********** find methode*********


// ******* find method real world eg *********

// const users = [
//   {userid:1,username : "john"},
//   {userid:2,username : "peter"},
//   {userid:3,username : "pan"}
// ];


// const ans =  users.find((string)=>{
// return string.userid === 3;

// });
// console.log(ans);

//******* find method real world eg *********

//************* every method ************
// const numbers = [2,4,6,9,10];


// const ans = numbers.every((number)=>number%2===0);

// console.log(ans);


//************* every method ************

//********** every method real world example ********

// const userCart = [
//   {productId: 1, productName: "mobile", price: 12000},
//   {productId: 2, productName: "laptop", price: 18000},
//   {productId: 3, productName: "tv", price: 15000},
// ]


// const ans = userCart.every((cartItem)=>cartItem.price < 30000);
// console.log(ans);


//the condition checked here is if every element satisfy the condition true is returned or else false.
//in the above eg it is checked if the price of cert item is less then 30k or not
//********** every method real world example ********


//*********** some methode **************
// some method 

//const numbers = [3,5,11,9];

// kya ek bhi number esa hai jo even hai 
// true 

// const ans = numbers.some((number)=>number%2===0);
// console.log(ans);

// const userCart = [
//     {productId: 1, productName: "mobile", price: 12000},
//     {productId: 2, productName: "laptop", price: 22000},
//     {productId: 3, productName: "tv", price: 35000},
//     {productId: 3, productName: "macbook", price: 25000},
// ]

// const ans = userCart.some((cartItem)=>cartItem.price > 100000);
// console.log(ans);

//any any of the the element passed satisfies the conditon it retuens true else false.
//*********** some methode **************



//***************** splice method *******************

// const myArray = ['item1','item2','item3'];
// myArray.splice(0,1,"item","new item");
// console.log(myArray);

//here first parameter 0 represents index in the array
//2nd parameter 1 represents how many item needs to deleted
//3rd parameter represents the item which needs to be added.
//***************** splice method *******************

//***************** splice method *******************
//we can also store the deleted items

// const myArray = ['item1','item2','item3','item4'];
// const result = myArray.splice(0,4,"new insert");
// console.log(result);
// console.log(myArray);


//***************** splice method *******************


// *********** iterables *************
//The one's for which we can apply for loop is called iterables

// //eg1
//  const myName = "jasim ahmed";
//  for(let char of myName){
//   console.log(char);
//  }


//  //eg2
//  const items = ['item1','item2','item3','item4'];
//  for(let item of items){
//   console.log(item);
//  }

//this eg doesn't work for objects, because objects are not iterables
//************* iterables *************


//***********array like objects***********
// strings are array like objects,because they have length property
//And we can access with index 

// const myName = "john";
// console.log(myName[0]);

//***********array like objects***********
//set (it is iterable)
//stores data
//also have own method
//no index based access
//order is not guarenteed
//unique items only (no duplicate)

// const item1 = new Set([1,2,3]);
// const item2 = new Set("abcd");//we can add those values which are iterable
// console.log(item1);
// console.log(item2);

//***********array like objects***********

//******** set eg to add items into set*************
// const numbers = new Set();
// numbers.add("one");
// numbers.add("two");
// console.log(numbers);
//******** set eg add items into set *************

//******** set eg to check if any item is present or not *************

// const numbers = new Set();
// numbers.add("john");
// numbers.add("doe");
// numbers.add(["apple","mango"]);
// console.log(numbers);

// ans = numbers.has("john");
// console.log(ans);

//******** set eg to check if any item is present or not *************


// *********** map data structure **********
//always remembers the key in the object will always be in string and symbol
// const person = {
//     firstName :"harshit",
//     age: 7,
//     1:"one"
// }
//*********** map data structure ***********


//********** map data structure ********
// const person = new Map();
// person.set('name','john');
// person.set('age',30);

// //console.log(person.keys());
// //this is one way of accessing the values of map
// for(keys of person.keys()){
//     console.log(person.get(keys));
// }
//********** map data structure ********


//*********** map method is iterable in for of loop **************
//it returns in the form of arrays

// const person = new Map();
// person.set('firstName','harshit');
// person.set('age',20);
// person.set(1,"one");
// for(let key of person){
//     console.log(key);
// }


//*********** map method is iterable in for of loop **************


//********** storing other object data into the map structure *********

// const person = {
//     name : "john",
//     age : 22
// }

// const person1 = {
//     name : "doe",
//     age : 33
// }

// const extraInfo = new Map();
// extraInfo.set(person,{id:5,gender:"male"});
// extraInfo.set(person1,{id:6,gender:"male"});

// console.log(extraInfo.get(person1).id);

//********** storing other object data into the map structure *********


// ********** cloning using object.assign *************

// const obj = {
//     key1 : "value1",
//     key2 : "value2"
// }

// obj.key3 = "value3";
// //if we assign like this both the objects will have same value even if changed in one
// const  obj2 = obj;
// console.log(obj);
// console.log(obj2);


//if we do not want this to happen we need to clone
// ********** cloning using object.assign *************

// ********** cloning of obejcts using spread operator *************

// const obj = {
//     key1 : "value1",
//     key2 : "value2"
// }
// const obj2 = {...obj};


// ********** cloning of obejcts using spread operator *************


// ********** cloning of objects using object.assign *************

// const obj = {
//     key1 : "value1",
//     key2 : "value2"
// }
// const obj2 =Object.assign({},obj);

// ********** cloning of objects using object.assign  *************


//********optional chaining************

// const user = {
//     firstName : "harshit",
//     //address : { houseNumber: '12345' }
// }

// //if we try to access address.housenumber we will get error. so we use optional chaining
// //console.log(user.firstName);
// //console.log(user.address);// we will get undefined here    
// //console.log(user.address.houseNumber);// we will get error here    

// //so we use optional chaining

// console.log(user?.address?.houseNumber);

//********optional chaining************



//********* methods ***************
//functions inside objects are called methods

// const person = {
//     firstName : "harshit",
//     age : 8,
//     about : function(){
//         console.log('person name is harshit');
//     }
// }
// //how to access methods
// person.about();
//********* methods ***************

//********* methods example ***************

// const person = {
//     firstName : "harshit",
//     age : 8,
//     about : function(){
//         console.log(`person name is ${this.firstName} and age is ${this.age}`);
//     }
// }
// //how to access methods with first name and age
// person.about();


//this refers to the object which has called it
//********* methods example ***************


//***********another example to show how this is reffered ***********

// const person = {
//     firstName : "harshit",
//     age : 8,
//     about : function(){
//         console.log(this);//here this referes to person object
//     }
// }

// person.about();

// console.log(this);//here this is a window object

//***********another example to show how this is reffered ***********



//********* functions outside objects **************
//very important

// function personInfo(){
//     console.log(`person name is ${this.firstName} and age is ${this.age} `)
// }

// const person = {
//     firstName : "harshit",
//     age : 8,
//     about : personInfo
// }

// const person2 = {
//     firstName : "hars",
//     age : 12,
//     about : personInfo
// }

// person.about();
// person2.about();

//********* functions outside objects **************


//************* wind0w object *************

// function myFunc(){
//     console.log(this);
// }

// window.myFunc();
// console.log(window);

//if you check in console.log you will find a function name myFunc()
//************* window object *************

//************* */ call , apply and bind methods , very imp*********
//here we have one method with name about inside user1 object
//and another object user2 , we want to borrow about method inside user2 object

// const user1 = {
//    firstName : "john",
//    age : 8,
//    about : function(){
//     console.log(this.firstName, this.age);
//    }
// }

// const user2 = {
//     firstName : "doe",
//     age : 20
// }
// //how can we call about method of user1 from user2 object

// user1.about.call(user2);//  we can access about method of user1 object for user2 object,inside parameter we will pass the object which we want to access
// //if we want to call for user1 iteself we can use linke this user1.about.call(user1)


//if we use call method , we should mention inside parameter which object should be passed
//************* */ call , apply and bind methods , very imp***********



//************ call method with arguments ***********/

// const user1 = {
//     firstName : "jasim",
//     lastName : "ahmed",
//     age : 32,
//     about : function(hobby,music){
//         console.log(hobby, music);
//     }
// }

// const user2= {
//     firstName : "john",
//     lastName : "doe",
//     age : 12
// }

// user1.about.call(user1,"football","jazz"); //{user1 is object}{about is method}{call is to call the method inside object}{in first parameter we will pass object name to which it needs to call}{rest are parameters}
// user1.about.call(user2,"cricket","indie");


//This is how we use call method
//************ call method with arguments ***********/



//********** we can define the method or function oustide the objects **********

// function about(hobby,music){
//      console.log(`fav hobby is ${hobby} and fav music is ${music}`);
// }

// const user1 = {
//     firstName : "jasim",
//     lastName : "ahmed",
//     age : 32
// }

// const user2= {
//     firstName : "john",
//     lastName : "doe",
//     age : 12
// }

// about.call(user1,"football","indie");

//********** we can define the method or function oustide the objects **********


//********* apply method *************
//call and apply are similar they don't have much difference 
//the only differnce is apply takes argument in the form of arrays


// function about(hobby,music){
//     console.log(`fav hobby is ${hobby} and fav music is ${music}`);
// }

// const user1 = {
//    firstName : "jasim",
//    lastName : "ahmed",
//    age : 32
// }

// const user2= {
//    firstName : "john",
//    lastName : "doe",
//    age : 12
// }

// about.apply(user1,["cricket","football"]);//This is the only differnce


//********* apply method *************


//********* bind method *************
//here the arguments are not passsed in arrays, 
//single arguement is passed
//bind won't print anything instead it will return a whole function
//you can save that function in some varialbe and call that 



// function about(hobby,music){
//     console.log(`fav hobby is ${hobby} and fav music is ${music}`);
// }

// const user1 = {
//    firstName : "jasim",
//    lastName : "ahmed",
//    age : 32
// }

// const user2= {
//    firstName : "john",
//    lastName : "doe",
//    age : 12
// }

// const func = about.bind(user1,"cricket","indie");//function is returned here
// func();// when you call the func() the console is printed
 
//in future if you want to call func() you can call it
//********* bind method *************


//************ the one thing you should avoid **********

// const user = {
//     firstName : "john",
//     age : 30,
//     about : function(){
//         console.log(this.firstName, this.age); //here this is window object if it's not called directly but assigned to another variable
//     }
// }

// //don't do this mistake
// const myFunc = user.about;// here we cannot print this value , because we are calling myFunc, You will get undefined
// myFunc();


//you could use this way instead user.about()-> now this will be referred to user1
//use bind method insted, which returnes the function which acan be stored
//************ the one thing you should avoid **********



//************ from the above example, use this istead ************

// const user = {
//     firstName : "john",

//     age : 30,
//     about : function(){
//         console.log(this.firstName, this.age); //here this is window object if it's not called directly but assigned to another variable
//     }
// }

// const myFunc = user.about.bind(user);
// myFunc();

//************ from the above example use this istead ************


//**********arrow functions *************
//in arrow function this always refers to one step above it.

// const user = {
//     firstName : "jasim",
//     age :8,
//     about : ()=>{
//         console.log(this); //here this is refered as window object, even tough we call if from user.
//     }
    
// }

// user.about(); //always keeo in mind if we use wrrow functions , inside arrow funtion key word this refers to one step above it


//**********arrow functions *************




//we will learn about proto, oops, proototype, class

//*********** creating objects using functions *************


//*********** creating objects using functions *************

// const user1= {
//     firstName : "john",
//     lastName : "doe",
//     email : "john@gmail.com",
//     age :2,
//     address : "123456 house banglore",
//     about : function(){
//         return `${this.firstName} is ${this.age} years`;
//     },
//     is18 : function(){
//         return this.age >= 18;
//     }
// }

//this about this , if we want to create 1000's of object like this , we cannot create this objects like this every time,
//so we can create a function which will create a objects for us if we just pass the arguement to this
//now we will create a function which will take input as firstname,lastname
//the objective of function is
//1 create one object
//2. Add key value pair to them
//3. Object will be returned again

//This is how that function is created
    
// function createUser(firstName,lastName,email,age,address){
//  const user = {}; //empty object is created
//  user.firstName = firstName;
//  user.lastName = lastName;
//  user.email = email;
//  user.age = age;
//  user.address = address;
//  user.about = function(){
//     return `${this.firstName} is ${this.age} years`;
// };
// user.is18 =  function(){
//     return this.age >= 18;
// };
// return user; //just retutn the user

// }


// const newUser = createUser("jasim","ahmed","jaism@gmail.com",32,"bangalore");
// console.log(newUser);
// console.log(newUser.is18());


//but there are many issues in this, each time if a user is crated many lines of code is executed for creating functions
//so what we can do is create functions outside 
//*********** creating objects using functions *************


//*********** creating objects using functions with less code*************

// function createUser(firstName,lastName,email,age,address){
//     const user = {}; //empty object is created
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = function(){
//        return `${this.firstName} is ${this.age} years`;
//    };
//    user.is18 =  function(){
//        return this.age >= 18;
//    };
//    return user; //just retutn the user
   
//    }

//    //suppose we create many users such as , every time when we crete a user a new method will be created, which means lot of memory will be allocated
//    //to create users, what we are trying to do here is keeping methods outside of functions or object
//    //since methods are same we do not need much copies , because they use {this} keyword. only one copy of each method is suffient
//    const user1 = createUser("jasim","ahmed","jaism@gmail.com",32,"bangalore");
//    const user2 = createUser("john","doe","john@gmail.com",32,"bangalore");
//    const user3 = createUser("kyle","park","kyle@gmail.com",32,"bangalore");


//*********** creating objects using functions with less code *************


//*********** creating objects , defining methods outside *************
//in this part we are defining method outside functions by creating new object

// const userMethod = {
//     //these methods can be used as refernce in the below function object
//     about : function(){
//         return `${this.firstName} is ${this.age} years`;
//     },
//     is18 :  function(){
//         return this.age >= 18;
//     }
// }

// function createUser(firstName,lastName,email,age,address){
//     const user = {}; //empty object is created
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;

//     user.address = address;
//     user.about = userMethod.about; // this is the refernce for about method
//     user.is18 = userMethod.is18;// here only refernce is stored, each time when object is created a refernce is called here
    
//    return user; //just return the user
   
//    }

   
//    const user1 = createUser("jasim","ahmed","jaism@gmail.com",32,"bangalore");
//    const user2 = createUser("john","doe","john@gmail.com",32,"bangalore");
//    const user3 = createUser("kyle","park","kyle@gmail.com",32,"bangalore");

//    console.log(user1.about());
//this is also a tedious job we need to keep defining method every time in a function, so we can improve a lil bit
//for eg we need to define functions in create method and we need to mention it in function as wll
//*********** creating objects , defining methods outside *************




//*********understan this example *********
//if we wnat to achieve this example

// const obj1 = {
//     key1: "value1",
//     key2 : "value2"
// }

// const obj2 = {
//     key3 : "value3"
// }

// console.log(obj2.key1);// here we are trying to access key1 of object 2, but it is not there. so we want to search from obj1 and retrive from there 
//we are trying to get a value from the obj1 
//this can be done using obj.create();, it creates empty object " const obj2 = Object.create(obj1)"
//*********understan this example *********



//*********** Object.create  ************

// const obj1 = {
//     key1 : "value1",
//     key2 : "value2"
// }

// const obj2 = Object.create(obj1);// here obj2 object is created but it will be empty, but we can access properties of obj1
// obj2.key3 = "value3";
// console.log(obj2.key2); // here key2 is not there, so it will go to obj1 and get it from there
// console.log(obj2);//You can see there will be those values store in [[prototype]]
// console.log(obj2.__proto__);

//in the above example of functions you can use const user = Object.create(userMethod)
//*********** Object.create  ************


//********* final solution to create objects using functions ********

// const userMethod = {
//     //these methods can be used as refernce in the below function object
//     about : function(){
//         return `${this.firstName} is ${this.age} years`;
//     },
//     is18 :  function(){
//         return this.age >= 18;
//     },
//     sing:function(){
//         console.log("la la la la........");
//     }

// }

// function createUser(firstName,lastName,email,age,address){
//    const user = Object.create(userMethod)// this is the magic, the methods of createMethod will be stored inside __proto__
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = userMethod.about; // this is the refernce for about method
//     user.is18 = userMethod.is18;// here only refernce is stored, each time when object is created a refernce is called here
    
//    return user; //just return the user
   
//    }

   
//    const user1 = createUser("jasim","ahmed","jaism@gmail.com",32,"bangalore");
//    console.log(createUser.prototype);
   
//    // we are trying to access sing method which is not defined in user object
//    //for reference it will be stored in __proto__
//    user1.sing();//first it will be checked in user object if not found it will search is __proto__ object

//********* final solution to create objects using functions ********


//************ prototype *********
//what is prototype?
//everytime a function is created, we will get an empty space(object), We can use that empty space to create properties or methods
// functions acts as objects , function = function + object
//yiu can treat functions as objects as well

// function hello(){
//     console.log("hello world");
// }

// hello.prototype.name = "john doe";
// hello.prototype.about = function about(){
//     console.log("yes......");
// }

// hello();
// console.log(hello.prototype.name); 
// console.log(hello.prototype.about); 
// console.log(hello.prototype);

//************ prototype *********

//********* prototype example ************
//you can add your own property inside function

// function hello(){
//     console.log('hello world');
// }

// //if we want name of any function we can use the property name
// console.log(hello.name);//same as we used to do for objects
// //you can add your own property inside function
// hello.myOwnPropert = "unique";
// console.log(hello.myOwnPropert);

// //function provides more usefull properties
// //functions provides us the free space, that is object 
// console.log(hello.prototype);//we will get one free object which has constructer in it
// //rememeber only functions provide prototype property,not even objects or arrays
// //eg
// if(hello.prototype){
//     console.log("Yes there is a prototype here");
// }else{
//     console.log("NO prototype present");
// }

// hello.prototype.abc = "abc";
// hello.prototype.xyz = "xyz";
// hello.prototype.sing = function(){
//    return "La la la";
// }
// console.log(hello.prototype);
// console.log(hello.prototype.abc);
// console.log(hello.prototype.sing());

//********* prototype example ************


//*********** storing methods in prototypes and accssing methods from there *******

//  function createUser(firstName,age){

//     const user = Object.create(createUser.prototype);
//     user.firstName = firstName;
//     user.age = age;
//     return user;
// }

// console.log(createUser.prototype);
// createUser.prototype.about = function(){
//     return `name is ${this.firstName} and age is ${this.age}`;
// }
// console.log(createUser.prototype);
// const user1 = createUser("jasim",12);
// console.log(user1);
// console.log(user1.about());

// [[__proto__ or prototype ]] is present in object not in function, prototype property is present inside function
//*********** storing methods in prototypes and accssing methods from there *******


//****** using prototype in example



//****** using prototype in example



