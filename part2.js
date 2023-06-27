//****** clousers eg1 **********
//functions returning functions

// function outerfunction(){
//     function innerfunction(){
//         console.log('hello world');
//     }

//     return innerfunction;
// }

// const ans = outerfunction();
// ans();


//****** clousers eg1 **********




//****** clousers eg2 **********
// function hello(x){
//     const a = "varA";
//     const b = "varB";
//     return function(){
//         console.log(a,b,x);
//     }
// }

// const ans = hello("args");
// ans();


//****** clousers eg2 **********



//****** clousers eg3 **********

// function myFunction(power){
//     return function(number){
//         return number ** power;
//     }
// }

// const square = myFunction(2);
// const ans = square(4);
// console.log(ans);

//****** clousers eg3 **********




//****** clousers eg4 **********

function func(){
    let counter = 0;
    return function(){
        if(counter < 1){
            console.log('hi! you called me');
            counter++;
        }else{
            console.log("you have already called me once");
        }
    }
}

const myFunc = func();
myFunc();
myFunc();

//****** clousers eg4 **********