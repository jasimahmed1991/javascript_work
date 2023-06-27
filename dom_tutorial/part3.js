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

// function hello(){
//     console.log("hello world");
// }
// setTimeout(hello,1000); //you can see in console that this function output will come after last line execution
// console.log("script end"); 

//*********eg for async programming **********



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



//***********callback, callback hell , pyramid of doom ****************


