//  //set local storage item
//  localStorage.setItem('tasks','john');

//  //set session storage item
//  sessionStorage.setItem('name','beth');

//  //remove from storage
//  localStorage.removeItem('name');

// //get value from local storage
// const name = localStorage.getItem('name');
// console.log(name);


// //clear all values from local storage
// localStorage.clear();




//**************store form values into local storage*********
document.querySelector("form").addEventListener("submit",function(e){
    e.preventDefault();
    console.log("form submit is done");

    const task = document.querySelector("#task").value;
    console.log(task);

    let tasks_array;

    if(localStorage.getItem("tasks") === null){
        console.log("yes it's empty");
        tasks_array = [];
    }else{
        console.log("yes there is something");
        tasks_array = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks_array.push(task);
    console.log(tasks_array);
    localStorage.setItem('tasks',JSON.stringify(tasks_array));

    

})
const tasks_new= JSON.parse(localStorage.getItem('tasks'));

tasks_new.forEach(function(task){
  console.log(task);
});

