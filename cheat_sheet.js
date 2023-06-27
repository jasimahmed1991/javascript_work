//String(); //to convert into string
//Number(); // to convert into numbers
//Array.isArray(arrayName); //to check if it is array or not
//fruits.push("apple", "mango"); // php array_push($a,"apple","mango");
//arrays are mutable they have ability to change origonal array . // strings are not mutable, we cannot change original string
//fruits.pop() they even return the removed element which can be stored
//fruits.unshift("banana");
//fruits.shift(); //removes elements from the begining of array
//push and pop are fast compared to shift and unshift
//primitive vs reference- primitive stores the value which are immutable (cannot be changed), reference stores only the address
//array comparison , console.log(array1 === array2);
//array clone using slice - arr1 = ["apple","mango","grapes"] arr2 = arr1.slice(0);
//array clone: let array2 = [].concat(array1);
//sprad operator: array2 = [...array1];
//spread operator : array2 = [...array1,"apple","mango"];
//using concat : array2 = array1.slice(0).concat(["apple","mango"]);
//arrays data will be stored in the heap memory, only the address is provided as reference
//if we assign array with let, we can change the array name and add new elements, not in the case of const
// while loop : const fruits = ["apple","mango","grapes"]; i=0; while(i<fruits.length){console.log[i]; i++}
//array destructuring : const myAraay = ["apple","mango"]; let [myvar1,myvar2] = myarray;
//arrays are good but not suffient for real world
//objects donot have index, objects have key value pair
//objects are also of reference type
//simple object const person{name:"jasim",age:21,hobbies: ["playing","sleeping"]} : console.log(person.name);
//object iteration ways can be done: 1. for-in loop 2. Object.keys
//for(let key in person){ console.log(person[key])}
//Object.keys : let objectKeys = Object.keys(person);  for(const key of objectKeys){console.log(person[key])}
//Object to arrrays ::: const someArray = Object.entries(ObjectName);
//computed properties const key1 = "objkey1",const key2 = "objkey2"; value1 = "myvalue1"; value2 = "myvalue2";  person{[key1] : value1,person[key2]:value2} (here key and value pairs are fetched from outside the object)
//spread operators can work on arrays, objects, strings ; strings : const newArray = [..."abc"];(a,b,c )
// spread operator eg : const newArray = [..."123456789"]; output :['1','2',---,'9'];
//spread operator in obejcts  const person1 = {name: "jasim",age: "10"}const person2 = {name: "ahmed",color: "black"}const person = { ...person1, ...person2 }console.log(person);
//just remember if you want to merge many objects into one: just use spread operator
// spread : const newObject = {..."abc"}: output {0:"a",1:"b",2:"c"}
//spread : const newObject = {...["item1","item2"]}: output {0:"item1",1:"item2"}
//spread : const alphabet = {..."abcdefghijklmnopqrstuvwxyz"}
//code to generate random chars  //const alphabetsarray = [..."abcdef"]; console.log(alphabetsarray); const alphabetsObj = { ..."abcdefghijklmnopqrstuvwxyz" } console.log(alphabetsObj); const newArray = []; let randomName = ""; for (let i = 0; i < 6; i++) { newArray.push(alphabetsObj[(Math.floor(Math.random() * 26))]); randomName = randomName + alphabetsObj[(Math.floor(Math.random() * 26))] } console.log(newArray); console.log(randomName);
//Object Destructuring:  const band = {bandName:"led zepplin",favSong : "stirway to heaven"} let{bandName,favSong} = band;console.log(bandName);
//objects inside arrays -- const user = [{},{},{}];
//objects inside arrays -- const user = [{userid:1,name:"jasim"},{userid:1,name:"jasim"},{userid:1,name:"jasim"}];
//destructuring from above eg: const [{ userId }, { name }, { email }] = users;
//converting objects to array ::: const arrayName =  Object.entries(objectname); //for key Object.key(objectName) //for values Object.values(ObjectName)
//function expression is nothing but assigning a function to a variable
//function declaration -> function expression -> arrow function
//hoisting : calling functions before declaration is called hoisting: (This works only in the case of function declaration)
//lexical scope :supppose if we want to console variable myvar inside any function- first it will look for that variable within function if not found it will search in lexiacal environment
//lexical eg : suppose if you want money you will first approach your close family, if not found will approach cousins if ypu still do not find you will approcah friends
//block scope vs function scope: if you have initialised  let and cost variables inside any block they are valid pnly to that block
//block eg {let firstname ="harsit"; console.log(firstName) } {let firstname ="mohit"; console.log(firstName)} //no error here
//incase of var you can access variables even if you have defined inside block(anything which comes under curly braces it is called block)
//rest paramaeters : function addAll(..numbers){console.log(numbers)} const ans = addALl(1,2,3,4); this will be passed as an array in function parameters
//parameter destructuring(used in react) : works in the case of objects - (very imp) ::: const person = {name:"john",age:20} function printperson({name,age}){console.log(name,age)}  printperson(person);
//callback function::::  passing a function as a agrument and calling the passed function inside that function is called callback function
//higher order functions ::: suppose if a function is passed as a parameter or if function is returned by another function they are called higher order function
//foreach method::: its an array method just use it like ::numbers.foreach(function(number){console.log(number)})
// map method is also similar method as foreach, but it will also return a new array at the end
//filter method:: it is also an array method which returns an array but it will return only an expression value(boolen value true or false) .The element which returns true gets saved in new array
//reduce method ::: (reduce in return gives you a value) So reduce method has 2 parametes inside callback 1.accumelator 2.current value, and one more parameter outside which contains initial value. You can take an eg of cart (initial value will be 0 , it gets added to accumlator so for each loop this gets added up)
//sort method::: main thing is it mutates the original array. :::here sorting is done based on the value of strings but not numbers [5,6,8] is manupilated as ["5","6","8"] so it will be sorted based on ascii values ::: it always checks the first character::: it is helpfull in sorting usernames::: const usernames = ["john", "anna", "beth", "carl", "drake"];usernames.sort();
//sort method for numbers ::: const numbers = [10,50,65,80,25]; numbers.sort(funtion(a,b){return a-b}):::here initial 2 numbers are taken and sorted, as gets followed.::: if you want asc order just return a-b or else b-a
//find method is also an array method, it returns that particular element which we want to search::: it will give us the first found element
//every method ::: So (every) method returns a  boolen value::: it checks for every element and at the end it will return true or false::: the condition should be fulfilled for all the values::: eg you can say if all the numbers are even ::: numbers.every(function(number){ if(return number % 2 ===0)})
//some method ::: first of all it will only return boolen single value::: if any of the element satisfy the condition it will return true
//fill method ::: suppose if you want an array with all the elements containing 0 with 10 same values you can use array.fill method ::: const myArray = new Array(10).fill(0); console.log(myArray);
// fill method ::: if you want an array elemwnt to be filled with specifed value you can user:::const myArray = [1, 2, 3, 4, 5, 6];myArray.fill(0, 2, 4); //first argument is the value which you want to replace, start index, end index
//splice method::: if you want to delete some element or add some elemnt in between the array then use splice method
//splice method working ::: const myArray = [1,2,3,4,5]; myArray.splice(0,3,"insert new");
//splice ::: when you delete any items it will also be returned
//iterables are something which can be looper through::: string and array are iterable::: anythig which runs with forof loop can be considered as iterables
// Objects are not iterable::: but you can use forin loop to get key of Object
//array like object but not exactly arrays::: we can call array like objects if they have length property and which can  be accessed through index
// SET ::: set's are simillar to array but not fully like array::: they are iterable but they do not have order::: to add elements inside set just use numbers.add("any value"); ::: sets do not contain duplicte values::: it just elemenates duplicate values
//const item1 = ["item1", "item2", "item3"];const total = new Set();total.add(item1);total.add("new string");
//SET ::: just rememebr if you want to have unique values at that moment just pass the array to set
//MAP ::: maps stores the values in the form of key ,pair form::: const person = new Map();person.set("name","jasim"); person.set("age",7);
// MAP's are iterable unlike objects ::: you can use for-of loop here::: for(let key of person) ::: Use de-structuring to loop array inside map::: for(let [key,value] of  person){ console.log(key,value)}::: order will fashioned
//Map ::: to set the values in map ::: const person = new Map(); person.set('age',7); console.log(person.get('age'));
//you can set anything as key inside map that is the advantage here, you can set even array as key or full object as key :::eg :person.set([1,2,3],"onetwothree");
//Optional chaining ::: const user = { firstName:"jaism",address:{house:123,} }::: now if we try to access address which is present it will give us error. :::so we use optional chaining eg::: console.log(user?.address?.house);
//methods::: function inside object can be called as methods
//:::inside and object this refers to current object ::: just cosole.log(this); to know which objec it is referring to
// this::: if you directly call (this) , window object is called. console.log(this);  :::window object ::: if you use this inide main function window object is accessed. ::: window.myFunc();
//Only functions provide prototype properties








