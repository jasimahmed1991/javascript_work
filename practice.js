//*********call back function practice ********

//this is the function which is passed as parameter
//function to be called

// function hello(){
//   console.log("hello how are you");
// }


// function wish(callback){
//   console.log("you are inside wish function");
//   callback();
// }

// wish(hello);

//*********call back function practice ********


//********** destructuring of objects *********

//  const band = {
//   bandName : "led zaplin",
//   famousSong : "stairways to heaven",
//   anotherFamousSong : "kashmir",
//   year : 1998
//  }

//  //1st way 
// // const bandName = band.bandName;
// // const famousSong = band.famousSong;

// //destructuring 

// const { bandName, famousSong, ...rest } = band;
// console.log(bandName);
// console.log(famousSong);
// console.log(rest.anotherFamousSong);


//if you want to change the name of bandname you could do it like 
//const {bandName:yourName, famousSong:asYouWush} = band;
//********** destructuring of objects *********



//******** objects inside arrays  imp   for real world*********

// const users = [
//   {firstname:"john",age:32,gender:"male"},
//   {firstname:"harry",age:52,gender:"male"},
//   {firstname:"maria",age:12,gender:"female"}
// ];

// for(user of users){
//   console.log(user.firstname);
// }

//******** objects inside arrays *********

//******** simple for of loop *********
// const fruits = ["apple","grapes","mango"];
// for(fruit of fruits){
//   console.log(fruit)
// }
//******** simple for of loop *********

//**********sorting method real world eg ***********

// const products = [
//   {productId : 5,productName : "samsung",productPrice:10000},
//   {productId : 2,productName : "mi",productPrice:5000},
//   {productId : 1,productName : "apple",productPrice:2000},
//   {productId : 4,productName : "moto",productPrice:3000}

// ];

// products.sort((a,b)=>{
//   return a.productId - b.productId;
// });
// console.log(products);

//**********sorting method real world eg ***********


//************* printing array data in loop ************

// const products = [
//   {productId : 1,productName : "laptop" ,productprice : 45000 },
//   {productId : 2,productName : "macbook" ,productprice : 15000 },
//   {productId : 3,productName : "notebook " ,productprice : 30000 }
// ];



// const product_id =  products.map(function(product,index){
// return product.productId;
// });

// console.log(product_id);

//************* printing array data in loop ************

// ************ for each method **********
// const numbers = [2,4,6,8,10];
// numbers.forEach(function(number,index){
//   console.log(number * 3);
// }
// );

// ************ for each method **********


//************** for each example *******

// const users = [
//   {firstname:"john",age:22,gender: "male"},
//   {firstname:"doe",age:19,gender: "male"},
//   {firstname:"peter",age:29,gender: "male"}
// ];


// users.forEach(function(user){
//   console.log(user.firstname);
// });

//************** for each example *******

//***********set practice***********
//only iterable elements can be stored
// const numbers = new Set([1,2,3]);
// const items = ["item1","item2"];
// numbers.add("one");
// numbers.add(items);
// console.log(numbers);
// let length = 0;
// for(let number of numbers){
//   length++;
// }
// console.log(length);

// if(numbers.has(items)){
//   console.log("yes");
// }
//to add numbers
//***********set practice***********


//***********methods ************** 
//functions inside objects

// const person = {
//   firstName : "jasim",
//   age : 32,
//   about : function(){
//     console.log(`name is ${this.firstName} and age is ${this.age} `);
//   }
// }

// person.about();

//
//***********methods ************** 

//*********** defining function outside object *************

// function personInfo(){
//   console.log(`name is ${this.firstName} and age is ${this.age} `);
// }

// const person = {
//   firstName : "jasim",
//   age : 32,
//   about : personInfo
// }

// const person1 = {
//   firstName : "ahmed",
//   age : 30,
//   about : personInfo
// }

// person.about();
// person1.about();

//*********** defining function outside object *************

//*********** call method example  *************


// const user = {
//   firstName : "jasim",
//   lastName : "ahmed",
//   about : function(hobby,favMusic){
//     console.log(`my first name is ${this.firstName} and lastname is ${this.lastName} hibby is ${hobby} fav music is ${favMusic} `)
//   }
// }

// user.about.call(user,"cricket","rock");



//*********** call method example  *************

//******** how to create object using function defining methods outside function  */

// const createMethod = {
//   about : function(){
//     console.log(`name is ${this.name} age is ${this.age} `);
//   }
// }

// function createUser(name,age){
//   const user ={};
//   user.name = name;
//   user.age = age; 
//   user.about = createMethod.about;
//   return user;
// }

// const user1 = createUser("jasim",32);
// const user2 = createUser("ahmed",12);
// user2.about.call(user2);// here user1 inside arguement is referred as {this} inside object


//******** how to create object using function defining methods outside function  */


//************ simple way to create object with new key word ************

// function CreateUser(name,email,age){

//     this.name = name;
//     this.email = email;
//     this.age = age;

// }
// CreateUser.prototype.about =function(){
//     console.log(this.name,this.age);
// }

// const user1 = new CreateUser("jasim","email",32);
// console.log(user1);
// user1.about();

//************ simple way to create object with new key word ************



//************ callback functions ***********

// function hello(a){
//     a();//for function you ned to write here callback
// }

// function call_back_function(){
//     console.log("This is call back function"); 
// }

// //hello("john");
// //hello(["john","doe","rick"]);
// //hello({ name: "john",age :28 , gender : "male" });
// hello(call_back_function);



//************ callback functions ***********



//********* promise series **************

// const myPromise = new Promise(function(resolve,reject){
//     const value = true;

//     if(value){
//         resolve("The promise is resolved");
//     }else{
//         reject("The promise is rejected");
//     }
// })
// //produce

// myPromise.then(function(message){
//     console.log(message);
// })



//********* promise series **************


//********* for loop **************

// const fruits = ["banana","apple","grapes"];
// for(i=0 ; i < fruits.length; i++){
//     console.log(fruits[i]);
// }
//********* for loop **************


//********* for  of loop **************

// const fruits = ["apple","banana","grapes"];

// for(let fruit of fruits){
//     console.log(fruit);
// }

//********* for  of loop **************



//********* for  in loop **************

// const fruits = ["apple","banana","grapes"];

// for(let fruit in fruits){
//     console.log(fruits[fruit]);
// }

//********* for  in loop **************


//********array destructures **********

// const fruits = ["apple","grapes","mango"];

// let[var1,var2,var3] = fruits;
// console.log(var1,var2,var3);

//********array destructures **********



// promises********

const items = ["tomato", "onion", "rice", "oil"];

// function myPromise(){
//  return  new Promise(function(resolve,reject){
//         if(items.includes("tomato")){
//             resolve("yes we can create");
//         }else{
//             reject("sorry could not do it");
//         }
//     });
// }

// myPromise().then(function(data){
//     console.log(data);
// }).catch(function(data){
//     console.log(data);
// })
// promises********


// promises example one********
// const myPromise = Promise.resolve(5);
// myPromise.then(function(data){
//     console.log(data);
// })

// promises example one********



// promises example two********
// function myPromise(){
//     return new Promise(function(resolve,reject){
//         resolve("foo");
//     })
// }

// myPromise()
// .then(function(data){
//     console.log(data);
//     return data += "bar";
// }).then(function(data){
//     console.log(data);
//     return data += "newly added";
// }).then(function(data){
//     console.log(data);
// })
// promises example two********


// async and await

// async function myfunc(){
//     return "hello";
// }

// myfunc().then(function(data){
//     console.log(data);
// })
// async and await

// async and await second example

// async function myfunc(){
//     console.log("inside function");

//     const promise = new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve("this is promise data");
//         },2000)
//     })


//     const res = await promise;
//     return res


// }

// myfunc().then(function(data){
//     console.log(data);
// })

// async and await second example



// async and await third example


// start normal way

// function myfunc(){
//    return fetch("https://jsonplaceholder.typicode.com/users");
// }

// myfunc().then(function(response){
//    return response.json()
// }).then(function(data){
//     console
//     .log(data);
// })

// end normal way


//start with async await

// async function myfunc() {
//     const promise = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await promise.json();
//     return data;
// }

// myfunc().then(function (data) {
//     console.log(data);
// })

//another way
// const promise = fetch("https://jsonplaceholder.typicode.com/users");
// promise.then(function (data) {
//     if (data.ok) {
//         console.log(data);
//         return data.json();
//     }
// }).then(function (data) {
//     console.log(data);
// })

//end with async await

// async and await third example


//arrays practice




//##################### debouncing ####################

// function decorator(hi) {
//     console.log("you entered decorator function");
//     return function (...args) {
//         hi.call(this, ...args);
//     }
// }

// function hi(name) {
//     console.log("Hello " + name);
// }


// const decoratedHi = decorator(hi);
// decoratedHi("jasim");

//##################### debouncing ####################


// //#############testing arrays ###############

// const fruits = ["apple", "mango", "grapes", "banana"];

// const fruits_new = ["apple", "banana"];
// fruits_new.map(function (fruit) {
//     console.log(fruits.indexOf(fruit));
// })

//#############testing arrays ###############


// ######### while loop in array ########
// const fruits = ["apple", "mango", "grapes"];
// const fruits2 = [];
// console.log(fruits);

// let i = 0;
// while (i < fruits.length) {
//     fruits2.push(fruits[i].toUpperCase());
//     i++;
// }
// console.log(fruits2);


// ######### while loop in array ########



//################## for of loop #############
// const fruits = ["apple", "mango", "grapes"];
// for (const fruit of fruits) {
//     console.log(fruit);
// }
//################## for of loop #############


// ### array destructuring ###
// const myArray = ["apple", "mango", "grapes", "guava"];
// let [fruit1, fruit2, ...rest] = myArray;
// console.log(fruit1, fruit2);
// fruit1 = "new apple";
// console.log(fruit1);
// console.log(myArray);
// console.log(rest);
// ### array destructuring ###


// ### Objects ###
// const person = {
//     name: "jasim",
//     age: 10,
//     hobbies: ["playing", "reading"]
// }

// console.log(person.hobbies)
// ### Objects ###



// ### object iteration ###

// const person = {
//     name: "jasim",
//     age: 21,
//     hobby: ["playing", "sleeping"]
// }


// for (const key in person) {
//     console.log(person[key]);
// }
// ### object iteration ###


// ### object iteration objects.keys ###

// const person = {
//     name: "jasim",
//     age: 21,
//     hobby: ["playing", "sleeping"]
// }

// const object1 = Object.keys(person);
// //console.log(object1);
// for (const key of object1) {
//     console.log(person[key]);
// }

// ### object iteration objects.keys ###


// ### computed values ###
// const key1 = "mykey1";
// const key2 = "mykey2";

// const value1 = "myvalue1";
// const value2 = "myvalue2";

// const person = {
//     [key1]: value1,
//     [key2]: value2
// }

// console.log(person);
// ### computed values ###



// ### Spread Operators ###
// const newArray = [..."abc", "new item", "new item 2"];
// console.log(newArray);
// ### Spread Operators ###



// ########## spread operators in object ############
// const person1 = {
//     name: "jasim",
//     age: "10"
// }

// const person2 = {
//     name: "ahmed",
//     color: "black"
// }


// const person = { ...person1, ...person2 }
// console.log(person);
// ########## spread operators in object ############


// ########## spread operators in object ############
// const alphabetsarray = [..."abcdef"];
// console.log(alphabetsarray);

// const alphabetsObj = { ..."abcdefghijklmnopqrstuvwxyz" }
// console.log(alphabetsObj);

// const newArray = [];
// let randomName = "";
// for (let i = 0; i < 6; i++) {
//     newArray.push(alphabetsObj[(Math.floor(Math.random() * 26))]);
//     randomName = randomName + alphabetsObj[(Math.floor(Math.random() * 26))]
// }

// console.log(newArray);
// console.log(randomName);

// ########## spread operators in object ############


// ############ object Destructuring ##############
// const band = {
//     bandName: "led zepplin",
//     favSong: "stirway to heaven",
//     age: 21,
//     year: 2020
// }
// let { bandName: myvar1, favSong, ...rest } = band;
// console.log(myvar1);
// console.log(rest);
// ############ object Destructuring ##############


// ######## objects inside arrays ############
// const users = [
//     { userId: 1, name: "jasim", email: "test1@gmail" },
//     { userId: 2, name: "ahmed", email: "test2@gmail" },
//     { userId: 3, name: "test", email: "test3@gmail" }
// ];

// const [{ userId }, { name }, { email }] = users;
// console.log(userId, name, email)
// ######## objects inside arrays ############



// ###########functions ############
// const singHappyBirthday = () => {
//     console.log("happy birth day to you");
// }
// singHappyBirthday();
// ###########functions ############


// ###########functions ############
// const isEven = (number) => {
//     return number % 2 === 0;
// }

// console.log(isEven(5));
// ###########functions ############


// ########### rest parameters ############
// function printAll(...names) {
//     console.log(names);
// }


// printAll("jasim", "ahmed", "john");
// ########### rest parameters ############


// ########### parameter destructuring ############
// const person = { name: "john", age: 20 }

// function printperson({ name, age }) {
//     console.log(name, age)
// }
// printperson(person);

// ########### parameter destructuring ############



// ######### callback functions ########

// function callback(name) {
//     console.log("my name is " + name);
// }

// function callName(callback) {
//     console.log("i' will run first");
//     callback("jasim");
// }

// callName(callback);

// ######### callback functions ########


// ######## foreach ##########
// const users = [
//     { firstname: "jasim", age: 10 },
//     { firstname: "asds", age: 50 },
//     { firstname: "fsdfd", age: 20 }];

// users.forEach(function (user) {
//     console.log(user.firstname);
// })
// ######## foreach ##########


// ########## map #########
// const numbers = [10, 20, 30, 40];

// const numArr = numbers.map(function (number) {
//     return number * number;
// });

// console.log(numArr);
// ########## map #########


// #####fliter ############

// let numbers = [];
// generate_numbers();
// function generate_numbers() {
//     for (let i = 0; i < 100; i++) {
//         numbers.push(i);
//     }
// }

// const isEven = numbers.filter(function (number) {
//     return number % 2 === 0;
// });
// console.log(isEven);



// #####fliter ############



// ############### reduce method #############
// const numbers = [1, 2, 3, 4, 5];
// const addNumbers = numbers.reduce(function (accumelator, currentValue) {
//     return currentValue = currentValue + accumelator;
// })

// console.log(addNumbers);

// ############### reduce method #############


// ############### reduce method #############
// const numbers = [
//     { product_id: 1, product_price: 1000 },
//     { product_id: 2, product_price: 1200 },
//     { product_id: 3, product_price: 1500 }
// ];
// const cart = numbers.reduce(function (accumelator, currentValue) {
//     return currentValue = currentValue.product_price + accumelator;
// }, 0)

// console.log(cart);

// ############### reduce method #############

// ############### sort  method #############
// const usernames = ["john", "anna", "beth", "carl", "drake"];
// usernames.sort();
// console.log(usernames);
// ############### sort method #############


// ######### sort method real world eg ###########
// const products = [
//     { product_id: 1, pname: "phone", price: 1800 },
//     { product_id: 2, pname: "watch", price: 1500 },
//     { product_id: 3, pname: "tab", price: 1000 }
// ];

// const lowToHigh = products.slice(0).sort(function (a, b) {
//     return a.price - b.price;
// });

// console.log(lowToHigh);
// ######### sort method real world eg ###########



// ############ find method #############
// const products = [
//     { product_id: 1, pname: "phone", price: 1800 },
//     { product_id: 2, pname: "watch", price: 1500 },
//     { product_id: 3, pname: "tab", price: 1000 }
// ];


// const ans = products.find(function (product) {
//     if (product.product_id == 3) {
//         return true;
//     }
// })

// console.log(ans);
// ############ find method #############



// ############every method###############
// const numbers = [2, 4, 6, 8];

// const ans = numbers.every(function (number) {
//     if (number % 2 === 0) {
//         return true;
//     }
// })

// console.log(ans);

// ############every method###############



// ############every method###############

// const products = [
//     { product_id: 1, pname: "phone", price: 1800 },
//     { product_id: 2, pname: "watch", price: 1500 },
//     { product_id: 3, pname: "tab", price: 1000 }
// ];

// const ans = products.every(function (product) {
//     if (product.price >= 1000) {
//         return true;
//     }
// })
// console.log(ans);
// ############every method###############


// ############ some method ###############
// const products = [
//     { product_id: 1, pname: "phone", price: 1800 },
//     { product_id: 2, pname: "watch", price: 1500 },
//     { product_id: 3, pname: "tab", price: 1000 }
// ];

// const ans = products.some((product) => {
//     if (product.price > 1500) {
//         return true;
//     }
// })

// console.log(ans);
// ############ some method ###############


// ############ fill method #############
// const myArray = new Array(10).fill("name");
// const myArray = new Array(10).fill(0);

// const myArray = new Array(10).fill("any value");
// console.log(myArray);
// ############ fill method #############


// ############# fill method #############
// const myArray = [2, 4, 6, 8, 8, 5];
// myArray.fill(0, 2, 3);// could also do myArray.fill(0, 2);
// console.log(myArray);
// ############# fill method #############


// ########### splice method #########
// const myAraay = [2, 4, 6, 8, 8, 5];
// myAraay.splice(0, 3, "insert item")
// console.log(myAraay);
// ########### splice method #########


//############ SET ##############
// const myProducts = [
//     { product_id: 1, pname: "phone", price: 1800 },
//     { product_id: 2, pname: "watch", price: 1500 },
//     { product_id: 3, pname: "tab", price: 1000 }
// ];

// const products = new Set();
// products.add(myProducts);
// console.log(products);

//############ SET ##############



//############ SET ##############
// const item1 = ["item1", "item2", "item3"];
// const total = new Set();
// total.add(item1);
// total.add("new string");
// console.log(item1);
// console.log(total.has());
// console.log(total);
//############ SET ##############


// ############ MAP ###############
// const person = new Map();
// console.log(person);
// person.set("name", "jasim");
// person.set("age", 10);
// // console.log(person.get("name"))
// // console.log(person.keys());


// for (let key of person) {
//     console.log(key);
// }
// ############ MAP ###############



// ########### OBJECTS ##################
// function personInfo() {
//     console.log(`you called in person info ${this.firstName}`);
// }

// const person1 = {
//     firstName: "jasim",
//     age: 18,
//     about: personInfo

// }

// const person2 = {
//     firstName: "ahmed",
//     age: 20,
//     about: personInfo
// }

// person1.about();
// person2.about();
// ########### OBJECTS ##################


// ########### objects ##############
// function myFunc() {
//     console.log(this);
// }

// window.myFunc();


// ########### objects ##############


// #################3 call apply and bind #################
// const user1 = {
//     firstName: "john",
//     age: 8,
//     about: function (param1, param2) {
//         console.log(`call this method to know about ${this.firstName} and address: ${param1}  pin: ${param2} `);
//     }

// }


// const user2 = {
//     firstName: "doe",
//     age: 10

// }

// const callAbout = user1.about.bind(user2, "bangalore", 560021);
// callAbout();
// #################3 call apply and bind #################



// ############ create objects via function ##################
// const userMethods = {
//     about: function () {
//         return `${this.firstName} is ${this.age}`;
//     },

//     sing: function () {
//         return `i am singing with ${this.firstName}`;
//     }
// }


// function createUser(firstName, lastName, age) {
//     const user = Object.create(userMethods);
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.age = age;
//     user.about = userMethods.about;
//     user.sing = userMethods.sing;
//     return user;
// }

// const user1 = createUser("jasim", "ahmed", 28);
// console.log(user1);
// console.log(user1.about());
// console.log(user1.sing());
// ############ create objects via function ##################



// ################ obj.create ####################

// const obj1 = {
//     key1: 'value1',
//     key2: 'value2'

// }

// const obj2 = Object.create(obj1);
// console.log(obj2.__proto__);

// ################ obj.create ####################






// ################### prototype ################
function hello() {
    console.log("hello");
}

console.log(hello.name);
console.log(hello.prototype)
// ################### prototype ################



