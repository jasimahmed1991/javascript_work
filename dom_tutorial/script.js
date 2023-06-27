//**********select element by using get element by id*********

// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading);

//*******select element by using get element by id*********



// ******* select element using query selector *********

// const mainHeading = document.querySelector("#main-heading");
// console.log(mainHeading);
// const header = document.querySelector(".header");
// console.log(header);
// const navItem = document.querySelector(".nav-item");//here only the first item will be selected
// console.log(navItem);
// const navitems = document.querySelectorAll(".nav-item");//here all the elements will be selected
// console.log(navitems);

// ******* select element using query selector*********


//***********change text by text content**************

// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading.textContent);
// mainHeading.textContent = "I have changed this content";
// console.log(mainHeading.textContent);//text content will give you full text inside the element even though if you have hided text with span tag

//***********change text **************


//***********change the style of the element **********/

// const mainHeading = document.querySelector("#main-heading");
// mainHeading.style.backgroundColor = "red";
// mainHeading.style.border = "2px solid blue";
// console.log(mainHeading.style);//if you want to see all the style related key pair values  


//***********change the style of the element **********/


//*********** get and set attribute *********** */


// const link = document.querySelector("a");
// console.log(link);
// console.log(link.getAttribute("href"));
// link.setAttribute("href","https://www.youtube.com/");
// console.log(link.getAttribute("href"));

// const inputElement = document.querySelector(".form-todo input");
// console.log(inputElement.getAttribute("type"));

//*********** get and set attribute *********** */


//******get mulitple elements using getElements by class name
//********get mulitple elements using getElements by querySelectorAll

// const navItems = document.getElementsByClassName("nav-item");
// console.log(navItems);//we'll get html collections which are like arrays but not arrays exactly
// console.log(navItems[0]);
// console.log(Array.isArray(navItems));// to check if it is array or not

//query selector all

// const navItems = document.querySelectorAll(".nav-item");
// console.log(navItems);//NODE List 
// console.log(navItems[0]);


//******get mulitple elements using getElements by class name
//********get mulitple elements using getElements by querySelectorAll



//************iterate elemants HTML collections*************

//let navItems = document.getElementsByTagName("a");
//console.log(navItems);//these are array like objects
//array like objects are -------->indexing,lenght property will be there
// we cannot use foreach method to iterate through HTML collections, we need to convert it into arrays
//simple for loop
//for of loop
//foreach


//1st way for loop
// for(let i=0;i<navItems.length;i++){
//     console.log(navItems[i]);
//     navItems[i].style.border = "2px solid red";
// }


//2nd way for of loop
// for(let item of navItems){
//     console.log(item);
//     item.style.border = "2px solid red";
// }


//3rd way  for each method, to use for each we need to convert HTML collections into arrays
// navItems = Array.from(navItems);// this is how you convert HTML collections into arrays
// console.log(Array.isArray(navItems));
// navItems.forEach((item) => {
//     console.log(item);
//     item.style.border = "2px solid red";
//     item.style.fontWeight = 600;
// });


//************iterate elemants with HTML collections*************


//************iterate elemants with NODE LIST*************
//in node list we can use for of loop,for loop, foreach method
// let navItems = document.querySelectorAll("a");
// console.log(navItems);

//1st way for loop
// for(let i=0;i<navItems.length;i++){
//     console.log(navItems[i]);
//     navItems[i].style.border = "2px solid red";
// }


//2nd way for of loop
// for(let item of navItems){
//     console.log(item);
//     item.style.border = "2px solid red";
// }


//3rd way foreach method
// navItems.forEach((item)=>{
//     console.log(item);
//     item.style.border = "2px solid red";
//     item.style.fontWeight = 600;
// })


//if you want you can convert node list to array and then user array propertyies
// navItems = Array.from(navItems);
// navItems.pop();
// console.log(navItems);


//************iterate elemants with NODE LIST*************




//**********inner HTML **********/


// const headline = document.querySelector(".headline");
// console.log(headline.innerHTML);
// headline.innerHTML = `<h1>This is the replaced content</h1>`; 
// headline.innerHTML += "<button class=\"btn\">Learn More</button>";   


// \"------------> "

//**********inner HTML ********/



//************** DOM traversing*********** */

// const rootNode = document.getRootNode();
// console.log(rootNode);
// const htmlElementsNode = rootNode.childNodes[1];
// console.log(htmlElementsNode);
// const childNodes  = htmlElementsNode.childNodes; 
// console.log(childNodes);
// const bodyElementNode = childNodes[2];
// console.log(bodyElementNode);
// console.log(bodyElementNode.previousSibling);
// console.log(bodyElementNode.childNodes);
// console.log(bodyElementNode.childNodes[5]);



//************** DOM traversing*********** */



//********traversing upwords ************ */

// const h1 = document.querySelector("h1");
// const div = h1.parentNode;
// div.style.color = "#efefef";
// div.style.backgroundColor = "#333";

//********traversing upwords ************ */


//********traversing upwords ************ */

// const h1 = document.querySelector("h1");
// const body = h1.parentNode.parentNode.parentNode;
// console.log(body);
// body.style.backgroundColor = "red";

//********traversing upwords ************ */


// ******** class list add , remove, toggle **********


// const sectionTodo = document.querySelector(".section-todo");
// console.log(sectionTodo.classList);

// //to add class

// sectionTodo.classList.add('bg-dark');
// console.log(sectionTodo.classList);

// //to remove class 
// sectionTodo.classList.remove('bg-dark');
// console.log(sectionTodo.classList);


// //check if class exists
// console.log(sectionTodo.classList.contains('container'));

// //toggle class
// sectionTodo.classList.toggle("bg-dark");
// sectionTodo.classList.toggle("bg-dark");


// ******** class list add , remove, toggle **********



//***********Add new HTML elements to the page***********


// const todolist = document.querySelector(".todo-list");
// console.log(todolist.innerHTML);

// todolist.innerHTML += "<li>new task</li>";// if you want old data to be replaced just use todolist.innerHTML = "<li>New task</li>"
// //the above eg is wrong way, becuase each time it keeps on rendering


//***********Add new HTML elements to the page***********


//*********a better way to add new html elements ************
//document.create()
//append
//prepend
//remove


// const todolist = document.querySelector(".todo-list");
// const newtTodoItem = document.createElement("li");// new li element will be created
// const newTodoItemText = document.createTextNode("teach students");//you can also try newTodoItem.textContent = "teach student";
// console.log(newTodoItemText);
// newtTodoItem.appendChild(newTodoItemText);
// console.log(newtTodoItem);
// todolist.append(newtTodoItem);


// //prepend
// const ul = document.querySelector(".todo-list");
// const newli = document.createElement("li");
// newli.textContent = "New Task";
// console.log(newli);
// ul.prepend(newli);

// //remove 
// const ul = document.querySelector(".todo-list li");
// console.log(ul);
// ul.remove();


//*********a better way to add new html elements ************



//  ************elem.insertAdjacentHTML(where ,html)************
//beforebegin
//afterbegin
//beforeend
//afterend


// const todoList = document.querySelector(".todo-list");
// todoList.insertAdjacentHTML("beforeend","<li>Newly added</l1>");
// todoList.insertAdjacentHTML("afterend","<li>Newly added</l1>");

//  ************elem.insertAdjacentHTML(where ,html)************


//****************clone nodes****************

// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "new todo";
// const li2 = li.cloneNode(true);
// ul.prepend(li);
// ul.append(li2);

//****************clone nodes****************


//**************static list vs live list************

//
// const listItems = document.querySelectorAll(".todo-list li"); //query selector will give us the static list
//  const ul = document.querySelector(".todo-list");
//  const li = document.createElement("li");
//  li.textContent = "get up";
//  ul.append(li);
// // console.log(listItems); //here in the node list you will get only 5 elemenst, the newly added elemnent will not be displayed.

// //using getelementsByclass which gives us the live list
// const listItems = ul.getElementsByTagName("li"); // this will provide all 6 elements which were added newly
// console.log(listItems);// it will give you HTMLCollections


//**************static list vs live list************


//*********how to get the dimensions of the element ************ */
//height width


//  const sectionTodo  = document.querySelector(".section-todo");
//  console.log(sectionTodo.getBoundingClientRect()); //this will give dimensions of each element such as height, width etc
// console.log(sectionTodo.getBoundingClientRect().width);

//*********how to get the dimensions of the element ************ */


//***************events **************
//click
//button press
//Mouse Hover

//There are 3 ways to add an event


//1) <button class="btn btn-headline" onclick="alert(`you clicked me`) ">Learn More</button> Directly add the code in attribute

//2) Onlick event by selecting element

// const btn = document.querySelector(".btn-headline");
// btn.onclick = function(){
//     console.log("you clicked me");
// }


//3)add event listener

// const btn = document.querySelector(".btn-headline");

// function myfunc(){
//     console.log("you clicked me");      
// }

// btn.addEventListener("click",myfunc);

//you can also define function inside itself

//***************events **************





//***************add event listerner ***************
//here this refers to btn itself
// const btn = document.querySelector(".btn-headline");
// btn.addEventListener("click",function(){
//     console.log("you clicked me");
//     console.log("alue of this here is");
//     console.log(this);// it gives to button object itself 
//     //please note in case of arrow function the value of this is window object , one level upper
// });

//***************add event listerner ***************

// rest of the code is done in click_event.html and click_event.js

//After event capturing , event bubbling and event delegation we are startring on this form 


//**********to do task completion *************

const todoForm = document.querySelector(".form-todo");
const ul = document.querySelector(".todo-list");
const todo_list = document.querySelector(".todo-list");

todoForm.addEventListener("submit",function(e){
    e.preventDefault();
    const todo_input = todoForm.querySelector(".form-todo input[type='text']").value;
    const li = document.createElement("li");
    li.innerHTML = `<span>${todo_input}</span>
    <div class="todo-buttons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
    </div>`;
    console.log(li);
    ul.append(li);
    todoForm.querySelector(".form-todo input[type='text']").value = '';
  
});


todo_list.addEventListener("click",function(e){
    if(e.target.classList.contains("done")){
        const task = e.target.parentNode.previousElementSibling;
        task.style.textDecoration = "line-through";
    }

    if(e.target.classList.contains("remove")){
        e.target.parentNode.parentNode.remove();
    }
})

//**********to do task completion *************




