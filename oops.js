//*********** functions inside objects are called methods ************
//functions inside objects are called methods
//we are creating one function outside object and calling defining it inside object
//golden rule always remember ( person.about-> left side will always be refered as this inside obj )

//start

// function personInfo(){
//     console.log(`person name is ${this.firstName} and age is ${this.age} `);
//     //here this refers to the object which is calling
// }

// const person1 = {
//     firstName : "john",
//     age : 30,
//     aboutAge : function(){
//         console.log(`age of the person is ${this.age}`); //this refers to the obj which has called person1.aboutAge
//     },
//     about : personInfo //here we are just defining the personInfo function whic is created at the top
// }

// const person2 = {
//     firstName : "steve",
//     age : 20,
//     about : personInfo //here we are just defining the personInfo function whic is created at the top
// }

// const person3 = {
//     firstName : "vick",
//     age : 10,
//     about : personInfo //here we are just defining the personInfo function whic is created at the top
// }

// person1.about(); // they keyword this refers to the object whhich is calling
// person2.about();
// person3.about();


//end

//*********** functions inside objects are called methods ************



//************ window object *************
//window is global object

//start

// console.log(this); //this refers to window object, window is global object
// console.log(window);
// console.log(this === window);
// window.alert('yes'); // you could do like this as well

// //another example
// function myfunc(){
//     console.log("hello"); //you can see myFunc will be there in window object , it is like window.myFunc()
// }

// window.myfunc();

//end

//you can use " use strict " if you do not want window object to get called inside function
//************ window object *************


//*********** call, apply and bind methods *************
//these are mainly used to call methods (inside objects)

//start
// function hello(){
// console.log('hello world');
// }

// hello.call(); //you can use hello.call() as well instead of just hello() , both works fine

//end


//*********** call, apply and bind methods *************


//*********** call, apply and bind methods *************
//how call method works

//start

// const user1 = {
//     firstName : "john",
//     age : 8,
//     about : function(){
//         console.log(`name is ${this.firstName} and age is ${this.age} `);
//     }
// }

// const user2 = {
//     firstName : vick,
//     age : 12// here we do not have about method
// }

// //now we are trying to call about method for user2

// user1.about.call(user2); //here user2 refers to this, user2 works as binding agent
// // we are calling user1. about method for user2

// end

//*********** call, apply and bind methods *************



//*********** call, apply and bind methods *************
//with parameters

//start
// const user1 = {
//     firstName : "john",
//     age : 8 ,
//     about : function(music,sport){
//         console.log(` ${this.firstName} fav music is ${music} and fav sport is ${sport} `);
//     }
// }


// const user2 ={
//     firstName : "rock",
//     age : 5
// }

// user1.about.call(user2,"indie","cricket");
//end

//in this example we were defining methods inside a object, what if we can define function or method outside the object
//*********** call, apply and bind methods *************

//*********** call, apply and bind methods *************
//works just fine if we define function outside object

//start

// function about(music,sport){
//     console.log(` ${this.firstName} fav music is ${music} and fav sport is ${sport} `);
// }

// const user1 = {
//     firstName : "john",
//     age : 8
// }


// const user2 ={
//     firstName : "rock",
//     age : 5
// }

// about.call(user2,"indie","cricket");// just use function name.call()
//end


//*********** call, apply and bind methods *************





//********* apply method *************
//start



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



//end

//********* apply method *************


//********* bind method *************
//here the arguments are not passsed in arrays,
//single arguement is passed
//bind won't print anything instead it will return a whole function
//you can save that function in some varialbe and call that

//start


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


//end
//in future if you want to call func() you can call it
//********* bind method *************


//************ the one thing you should avoid **********
//start

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

//end

//you could use this way instead user.about()-> now this will be referred to user1
//use bind method insted, which returnes the function which acan be stored
//************ the one thing you should avoid **********


//************ from the above example, use this istead ************

//start

// const user = {
//     firstName : "john",

//     age : 30,
//     about : function(){
//         console.log(this.firstName, this.age); //here this is window object if it's not called directly but assigned to another variable
//     }
// }

// const myFunc = user.about.bind(user);
// myFunc();

//end

//************ from the above example use this istead ************


//**********arrow functions *************
//in arrow function this always refers to one step above it.

//start
// const user = {
//     firstName : "jasim",
//     age :8,
//     about : ()=>{
//         console.log(this); //here this is refered as window object, even tough we call if from user.
//     }

// }

// user.about(); //always keep in mind if we use arrow functions , inside arrow funtion key word this refers to one step above it

//end

//**********arrow functions *************


//now  we are learning regarding proto,protype class
// We are going to see how exactly classes are made , objected are created
//very important topics
//understand each breakdown of each steps

//suppose we want to create many objects, this is how we were doing it till now


//****************simple object creation 1st way ******************
// 1st way to create object, i.e lenghty process
//start

// const user1= {
//     firstName : "jasim",
//     lastName : "ahmed",
//     age : 32,
//     address : "bangalore",
//     about : function about(){
//         return ` my name is ${this.firstName} and my age is ${this.age} `;
//     },
//     is18 : function(){
//         return this.age >= 18;
//     }
// }

// const user2= {
//     firstName : "nick",
//     lastName : "joe",
//     age : 12,
//     address : "usa",
//     about : function about(){
//         return ` my name is ${this.firstName} and my age is ${this.age} `;
//     },
//     is18 : function(){
//         return this.age >= 18;
//     }
// }


//end
// so if we keep creating objects this way , it will be very lenghty procedure
//****************simple object creation 1st way ******************





//****************simple object creation 2nd way ******************
//better approach is using function which will take input of all properties and return object at the end
//lets create that function

//start

//1st step create function with input values
//2nd add key value pair
//add the functions which you saw in first example
// function createUser(firstName,lastName,email,age,address){
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.address = address;
//     user.age = age;
//     user.about = function(){
//         return ` my name is ${this.firstName} and my age is ${this.age} `;
//     }
//     user.is18 = function(){
//         return this.age >= 18;
//     }

//     return user;
// }


// ///our aim is to cretae object,let's try to create a object now
// const user1 = createUser("jasim","ahmed","jasim@gmail.com",32,"bangalore");
// console.log(user1);
// console.log(user1.is18());

//end
// but here also we have lot of issues
//suppose we have to create multiple objects like this
//const user1 = createUser("jasim","fsdf","jasim@gmail.com",32,"fsdf");
//const user2 = createUser("dasd","fdsf","fsdf@gmail.com",32,"bangfsdfalore");
//const user3 = createUser("fsdf","fsdf","fsdf@gmail.com",32,"fsd");
//what happens is when we create objects multiple times the methods inside obejcts are created each and every time, which will be taking lot of memory
// so to tackle this we need some solution which we will do in next example
//we don't need multiple copies of method which are same, we can just have once copy of each method
//****************simple object creation 2nd way ******************



//****************simple object creation 3rd way ******************
// here we are creating one object which will be having all the methods inside it
//if we want to use that method we can call that inside out function of object creation


//we are just storing these methods inside for creating objects which will be used by calling inside function
//start
// const userMethods = {
//     about : function(){
//         return ` my name is ${this.firstName} and my age is ${this.age} `;
//     },
//     is18 : function(){
//         return this.age >= 18;
//     }
// }

// function createUser(firstName,lastName,email,age,address){
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.address = address;
//     user.age = age;
//     user.about = userMethods.about; //this is called from userMethods object, this is the refernce , it will not create new memory
//     user.is18 = userMethods.is18; //this is called from userMethods object
//     return user;
// }

// const user1 = createUser("jasim","ahmed","jasim@gmail.com",32,"bangalore");
// console.log(user1.about());
// console.log(user1.is18());


//end
//working fine, but there is still problem in this way as well,
//suppose we want one more method inside the object, so we have to create that in userMethods and again define it in object methods
//instead what if all methods are imported automatically
//****************simple object creation 3rd way ******************



//******* understand this before  proceeding further ***********

//start

// const obj1 = {
//     key1 : "value1",
//     key2 : "value2"
// }

// const obj2 = {
//     key2 : "value2"
// }

// //i'm trying to access key1 in obj2 which will not be there
// console.log(obj2.key10);//you'll get undefined

//end



//solution for this



//start

// const obj1 = {
//     key1: "value1",
//     key2 : "value2"
// }

// const obj2 = Object.create(obj1);
// console.log(obj2.key1); //see solved, by keeping this in mind we can solve the above problem
// console.log(obj2);//see [[proto]], inside [[proto]] tou will find the key1 , key2
// console.log(obj2.__proto__);
//end

//******* understand this before  proceeding further ***********





//****************simple object creation 4th way ******************
// the problem with the above approch is if there are thousands of method inside userMethods we need to assign all those inside function creation
//what if we miss to refer any one method
// so this approcah
//using proto we can store all the methods inside it

//start
// const userMethods = {
//     about : function(){
//         return ` my name is ${this.firstName} and my age is ${this.age} `;
//     },
//     is18 : function(){
//         return this.age >= 18;
//     }
// }

// function createUser(firstName,lastName,email,age,address){
//     const user = Object.create(userMethods);//first this will cretae empty object and next it will save user methods inside proto
//      //inside proto we have stored the refernce of userMethods, so if any methods is not there in user it will searc in [[proto]], By this we need not define methods everytime
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.address = address;
//     user.age = age;
//     return user;
// }

// const user1 = createUser("jasim","ahmed","jasim@gmail.com",32,"bangalore");
// const user2 = createUser("john","doe","john@gmail.com",22,"england");
// const user3 = createUser("sam","ray","sam@gmail.com",12,"usa");
// console.log(user1.about());
// console.log(user1.is18());
// console.log(user1);//check [[proto]], you can see about and is18 methods

//end

//****************simple object creation 4th way ******************


//******************   important things regarding function you should know **********

//function are combination of function + object
//so functions = function + object

//start
// function hello(){
//     console.log("hello world.....");
// }
// console.log(hello.name);// 1st proof , i am accessing it with . notation just like how we access objects

// //you can add your own property inside function
// hello.myOwnProperty = "unique value";
// console.log(hello.myOwnProperty);//proof 2 just like we did in objects
// //functions provide more usefull properties
// //functions provides us free space, that free space is called prototype

// console.log(hello.prototype);// you can see constructor inside it
// //only functions provides prototype property
// if(hello.prototype){
//     console.log("it is present");
// }else{
//     console.log("not present");
// }

// //how to add property inside
// hello.prototype.abc = "abc";
// hello.prototype.xyz = "xyz";
// hello.prototype.sing = function(){
//     console.log("lal allal");
// }
// console.log(hello.prototype);

//end
//******************   important things regarding function you should know **********





//****************simple object creation 5th way ******************
//remember this when a function is created , we will get a free space which is object and is called prototype
//proto is used as refernce object,so here we have set proto to a prototype (which is free space it is inside that we have functions)
//start


// function createUser(firstName,lastName,email,age,address){
//     const user = Object.create(createUser.prototype);//Here we have set a refernce as prototype of this function which has all the methods
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.address = address;
//     user.age = age;
//     return user;
// }

// createUser.prototype.about = function(){
//     return ` my name is ${this.firstName} and my age is ${this.age} `;
// }
// createUser.prototype.is18 = function() {
//     return this.age >= 18;
// }


// //checking if we have prototype in createUser function
// console.log(createUser.prototype);//yes we got prototype
// //now inside this object we can store methods
// const user1 = createUser("jasim","ahmed","jasim@gmail.com",32,"bangalore");
// const user2 = createUser("john","doe","john@gmail.com",22,"england");
// const user3 = createUser("sam","ray","sam@gmail.com",12,"usa");
// console.log(user1.about());
// console.log(user1.is18());
// console.log(user1);//check [[proto]], you can see about and is18 methods
//end
//****************simple object creation 5th way ******************



//***********new keyword ***********

//simple example

//start
// function createUser(firstName,age){
//     this.firstName = firstName;
//     this.age = age; //we know this is not object but function, what is happening in behind is it is called by new keyword
// }

// createUser.prototype.about = function(){
//     console.log(this.firstName, this.age); //automatically this is added to proto by new keyword, we don't need to give a reference
// }

// const user1 = new createUser("jasim",32);
// console.log(user1);

// //let's analyse what just happened here
// //1. when new key word is called an empty object is created
// //2. it adds up the values of this.firstName and this.age to the empty object
// //3. returns {this} means empty object
// //4. sets the [[proto]] reference to prototype

//end


//***********new keyword ***********


// ************* simple object creation 6th way ************
//new keyword does 4 jobs 1) creats an empty object 2)adds all the paramters inside empty object 3) returns the object 4)it sets the [[proto]] equals to prototype
//start
// function CreateUser(firstName,lastName,email,age,address){
//     //const user = Object.create(createUser.prototype); this part is not required , new keyword does the job
//     //empty object is created {} so add all values to empty object
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.address = address;
//     this.age = age;
//     //return user; return is also not required because this will only return , it will do the job
// }

// CreateUser.prototype.about = function(){
//     return ` my name is ${this.firstName} and my age is ${this.age} `;
// }
// CreateUser.prototype.is18 = function() {
//     return this.age >= 18;
// }

// const user1 =  new CreateUser("jasim","ahmed","jasim@gmail.com",32,"bangalore");
// const user2 =  new CreateUser("john","doe","john@gmail.com",22,"england");
// const user3 =  new CreateUser("sam","ray","sam@gmail.com",12,"usa");

// console.log(user1);


//end

// ************* simple object creation 6th way ************



//convention rule, if we are creating a function with new keyword make sure that the function name should start with capital letter

//************ simple way to create object with new key word ************
//start
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
//end
//************ simple way to create object with new key word ************







//*********** classes *******************

// 2015 / es6
// class keyword
// class are fake

// class CreateUser{
//     constructor(firstName, lastName, email, age, address){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.email = email;
//         this.age = age;
//         this.address = address;
//     }

//     about(){
//         return `${this.firstName} is ${this.age} years old.`;
//     }
//     is18(){
//         return this.age >= 18;
//     }
//     sing(){
//         return "la la la la ";
//     }

// }


// const user1 = new CreateUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
// const user2 = new CreateUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
// const user3 = new CreateUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
// // console.log(Object.getPrototypeOf(user1));

//*********** classes *******************


// *************** class practice and extend keyword ****************

//start


// class Animal {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     eat() {
//         return `${this.name} is eating`;
//     }

//     isSuperCute() {
//         return this.age <= 1;
//     }

//     isCute() {
//         return true;
//     }

//     myName() {
//         return `my name is ${this.name}`;
//     }

// }


// const animal1 = new Animal('rosy', 2);
// console.log(animal1.isSuperCute());


// class Dog extends Animal {
//     constructor(name, age, speed) {
//         super(name, age);
//         this.speed = speed;
//     }

//     eat() {
//         return `this is modified eat`;
//     }

// }

// const tommy = new Dog("tommy", 2, 45);
// console.log(tommy);
// console.log(tommy.myName());
// console.log(tommy.eat());

//end


// *************** class practice and extend keyword ****************



// *************** GETTERS AND SETTERS ********************
//just by using get you can use methods as property

// class Person {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }

//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }

//     set fullName(fullName) {
//         const [firstName, lastName] = fullName.split(" ");
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }

// const person1 = new Person("john", "doe", 20);
// console.log(person1.fullName); //from this line you can use methods as property because of (get) it will be treated as property but not as a function
// console.log(person1.fullName());
// console.log(person1.fullName);
// person1.fullName = "mohit vashistha";
// console.log(person1);



// *************** GETTERS AND SETTERS ********************

// ************** static methods and properties *************
// static methods and properties
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    static classInfo() {
        return 'this is person class';
    }
    static desc = "static property";
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName) {
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
    eat() {
        return `${this.firstName} is eating`;
    }

    isSuperCute() {
        return this.age <= 1;
    }

    isCute() {
        return true;
    }
}

const person1 = new Person("harshit", "sharma", 8);
// // console.log(person1.eat());
// const info = Person.classInfo();
// console.log(person1.desc);
// console.log(info);
// ************** static methods and properties *************



