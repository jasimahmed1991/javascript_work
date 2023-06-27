//we need to focus on 3 input  events 
//1.Keyup event : works when you type and release the key (keyup)
//2.Input  event : works as soon as you type something (input)
//3.chnage  event : works as soon as you remove the focus from that field. (change)
//recomended one is input event.
//e.tatget means on which element it has been trigered


// const myInput = document.getElementById("input-event");
// myInput.addEventListener("keyup", function (e) {
//     console.log(e.target.value);
// })



// ############### about decorator function ##########################
//decorator function : as a input it takes one function
//and it returns another function
//decorator functions takes input as a function, returns a function as well in which it will call the input function.
//so it gets the original function with some more functionlaity
//if ypu want to increse the functinality of a function you use decorator function
//inside decorator you can do other things as well, at last you can call the input function
// in simple if you want to decorate any function you will send it to decorator , there along with decorator you can access many other functionalities


// function decorator(func) {
//     console.log(`You are calling decorator function and then calling ${func.name}  func`);
//     return function (...args) {
//         console.log(args);
//         func.call(this, ...args)
//     }
// }

// function hi(name, age) {
//     console.log("hello..." + name, age);
// }

// const decoratedHello = decorator(hi);
// //decorated functions
// decoratedHello("jasim", 18);


// ######################### END OF DECORATOR FUNCTION ################




//################ DEBOUNCING ###############


function debouncing(display, delay) {
    let timeoutId;
    return function (...args) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(function () {
            display.call(this, ...args);
        }, delay)
    }
}

function display(e) {
    console.log(e.target.value);
    document.getElementById("result").innerHTML = e.target.value;
}

const showSuggestions = debouncing(display, 1000);

const input = document.getElementById("input-event");
//add event listener
input.addEventListener("input", showSuggestions);


//################ DEBOUNCING ###############