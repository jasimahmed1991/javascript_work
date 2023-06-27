
//add event listerner onmuliple buttons

//*********** */ add event listener using for of loop***********
// const allButtons = document.querySelectorAll(".my-buttons button");
// console.log(allButtons);// here we will get a node list , we can apply for of loop to that


//first we will try with for of loop
// for(let button of allButtons){
//     button.addEventListener("click",function(){
//         console.log(this);// it reffers to the button element
//         console.log(this.textContent);
//     });
// }

//*********** */ add event listener using for of loop***********




//*********** */ add event listener using for  loop***********


// const allButtons = document.querySelectorAll(".my-buttons button");
// console.log(allButtons);// here we will get a node list , we can apply for of loop to that

// //now we will use for loop
// for(let i=0;i<allButtons.length;i++){
//     allButtons[i].addEventListener("click",function(){
//         console.log(this);// it reffers to the button element
//         console.log(this.textContent);
//     })
// }

//*********** */ add event listener using for  loop***********


//*********** add event listener using for each loop *************

// const allButtons = document.querySelectorAll(".my-buttons button");
// console.log(allButtons);// node list


// allButtons.forEach(function(button){

//     button.addEventListener("click",function(){
//         console.log(this);
//         console.log(this.textContent);
//     })
// })

//*********** add event listener using for each loop *************


//***********all about events *************
// firstButton.addEventListener("click", function(event){
//     console.log(event);
// })

// jab bhi mai kisi bhi element pe event listener add hoga 
// js Engine --- line by line execute karta hai 
// browser ---- js Engine + extra features 
// browser ----- js Engine + WebApi

// jab browser ko pata chala ki user ne event perform kia 
// jo hum listen kar rahe hai 
// browser ----- 2 
// 1.) callback function hai vo js Engine ko degi ...... 
// 2.)  callback function ke sath browser jo event hua hai uski information bhi dega
// ye info hamein ek object ke form mai milegi 

//***********all about events *************


//******** using e and event inside callback as parameters ***********
//we can use this in arrow functions
//here e is an object which is given by browser

// const allButtons = document.querySelectorAll(".my-buttons button");
// console.log(allButtons);

// allButtons.forEach(function(button){
//     button.addEventListener("click",function(e){
//         console.log(e.target);
//         console.log(e.target.textContent);
//         console.log(e.currentTarget);
//     })
// });


//******** using e and event inside callback as parameters ***********



//************event loop ***************
//here event listener code will be executed at the last since it will have an event loop, run to see te output

// console.log("script start !!!!!")
// const allButtons = document.querySelectorAll(".my-buttons button");

// allButtons.forEach((button)=>{
//     button.addEventListener("click", (e)=>{
//         let num = 0;
//         for(let i = 0; i<= 1000000000; i++){
//             num += i;
//         }
//         console.log(e.currentTarget.textContent, num);
//     })
// })

// let outerVar = 0;
// for(let i = 0; i<= 100000000; i++){
//     outerVar += i;
// }
// console.log("value of outer variable is ", outerVar);
// console.log("script end !!!!!")

//************event loop ***************



//*********** mini project relatd to click events ***************


//1st way using this object, changing color and background color
// const allButtons = document.querySelectorAll(".my-buttons button");

// allButtons.forEach(function(button){
//     button.addEventListener("click",function(e){
//         this.style.color = "red";
//         this.style.backgroundColor = "gray";
//     })
// })

//*********** mini project relatd to click events  ***************



//*********** mini project relatd to click events  ***************
//2nd way using this e, changing color and background color

// const allButtons = document.querySelectorAll(".my-buttons button");

// allButtons.forEach(function(button){
//     button.addEventListener("click",function(e){
//         console.log(e.target);
//         e.target.style.backgroundColor = "yellow";
//         e.target.style.color = "red";
//     })
// });



//*********** mini project relatd to click events is done with name little_demo.html  ***************


//********** events further topics *********
//keypress event

// const body = document.body;
// body.addEventListener("keypress",function(e){
//     console.log(e);
//     console.log(e.key);//key you exactly which key has been pressed
// });

//********** events further topics *********


// *************mousehover event***********

// const first_button = document.querySelector("#first-button");
// console.log(first_button);
// first_button.addEventListener("mouseover",function(e){
//    console.log("mouseover event has occured"); 
// })


// first_button.addEventListener("mouseleave",function(e){
//     console.log("Mouseleave event has occured");
// })

// *************mousehover event***********