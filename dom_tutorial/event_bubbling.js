// ********* event capturing and event bubbling eg 1 ***************

// const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");



// //always remember first the outer body capturing is shown, followed by grand parent , parent, child...
// //it always comes on U shape from outer body of capturing to inner body , on event bubbling it goes from inner body to  outer part
// child.addEventListener("click",function(){
//     console.log("you captured------>  child");
// },true);


// parent.addEventListener("click",function(){
//     console.log("you captured ------> parent");
// },true);


// grandparent.addEventListener("click",function(){
//     console.log("you captured ------>grand parent");
// },true);


// //add event listener
// child.addEventListener("click",function(){
//     console.log("you clicked on child");
// });


// parent.addEventListener("click",function(){
//     console.log("you clicked on parent");
// });


// grandparent.addEventListener("click",function(){
//     console.log("you clicked on grand parent");
// });
//this is called event bubling
//if both child and parent have same event listener, in that case if we click on child the parent event listener will also be called.

// ********* event capturing and event bubbling eg 1 ***************




// ********* event capturing and event bubbling eg 2 ***************

// const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");

// grandparent.addEventListener("click",function(){
//     console.log("You have captured grandparent");
// },true);

// parent.addEventListener("click",function(){
//     console.log("You have captured parent");
// },true);

// grandparent.addEventListener("click",function(){
//     console.log("Bubbling on grandparent started");
// });

// parent.addEventListener("click",function(){
//     console.log("Bubbling on parent started");
// });




// ********* event capturing and event bubbling eg 2 ***************


//********* event delegation *************
// instead of adding event listener on all gran parent, parent and child we can add only on grandparent and from e object we can retrive using e.target

const grandparent = document.querySelector(".grandparent");

grandparent.addEventListener("click",function(e){
    console.log(e.target);
    console.log(e.target.textContent);
});

//********* event delegation *************