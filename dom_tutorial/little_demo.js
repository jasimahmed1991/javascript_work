const main_button = document.querySelector("#main-button");
const body = document.body;
const current_color = document.querySelector("#current-color");
console.log(current_color);

function randomColor(){
    const red = Math.floor( Math.random() * 255);
    const green = Math.floor( Math.random() * 255);
    const blue = Math.floor( Math.random() * 255);
    return `rgb(${red},${green},${blue})`;
}

main_button.addEventListener("click",function(e){

    body.style.backgroundColor = randomColor();
    current_color.textContent = randomColor();

})