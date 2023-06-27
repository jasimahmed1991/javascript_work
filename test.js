const all_divs = document.getElementsByClassName("change_toggle");
console.log(all_divs);

for (let singleDiv of all_divs) {
    singleDiv.addEventListener("click", function (e) {
        console.log(e.target)
        console.log(e.target.classList.contains("toggle-on"));
        console.log(e.target.parentElement.parentElement.parentElement);
    })
}


