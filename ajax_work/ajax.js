// BASIC THEORY 

// AJAX : asynchronous javascript and XML

// HTTP request

// is a set of "web development techniques" 
// using many web technologies on the "client-side "
// to create asynchronous web applications. 


// With Ajax, web applications can send and retrieve 
// data from a server asynchronously (in the background) 
// without interfering with the display and 
// behaviour of the existing page

// We don't use data in XML format anymore. 
// we use JSON now. 


// we have 3 most common ways to create and send request to server
// 1.) xmlHTTPRequest (old way of doing)
// 2.) fetch API (new way of doing)
// 3.) axios (this is third party library)


//**************** xmlHTTPRequest (old way of doing) ***************

// const URL = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();
// console.log(xhr);

// xhr.open("GET",URL);//takes 3 parameter first is method, second is url, third is boolean value
// xhr.onreadystatechange = function(){
//     console.log(xhr.readyState);
//     if(xhr.readyState === 4){
//         console.log(xhr);
//         const response = xhr.response;
//         const data = JSON.parse(response);
//         console.log(data);
//         console.log(data[0].title);
//     }
// }
// xhr.send();


//this is basic way to call a http request
//**************** xmlHTTPRequest (old way of doing) ***************


//**************** xmlHTTPRequest another example ***************

// const URL = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();
// xhr.open("GET",URL);
// //this part is replacement of checking readystate to 4 insted .onload runs only if ready state is 4
// xhr.onload = function(){
//     console.log(xhr.readyState);
//     const response = xhr.response;
//     const data = JSON.parse(response);
//     console.log(data);
//     console.log(data[0].title);
// }
// xhr.onerror = function(){
//     console.log("error occured");
// }
// xhr.send();

//**************** xmlHTTPRequest another example ***************





//**************** xmlHTTPRequest another example ***************

// const URL = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();
// xhr.open("GET",URL);
// //this part is replacement of checking readystate to 4 insted .onload runs only if ready state is 4
// xhr.onload = function(){
//     if(xhr.status >=200 && xhr.status <=300){
//         console.log(xhr.readyState);
//     const response = xhr.response;
//     const data = JSON.parse(response);
//     console.log(data);
//     console.log(data[0].title);
//     }else{
//         console.log("something went wrong");
//     }
// }
// xhr.onerror = function(){
//     console.log("network error"); //this is related to internet connection
// }
// xhr.send();

//**************** xmlHTTPRequest another example ***************






//**************** xmlHTTPRequest another example to get id and again call the URL ***************
//this is a loop process

// const URL = "https://jsonplaceholder.typicode.com/posts";

// const xhr = new XMLHttpRequest();

// xhr.open("GET", URL);
// xhr.onload = () => {
//     if(xhr.status >= 200 && xhr.status < 300) {
//         const data = JSON.parse(xhr.response);
//         console.log(data);
//         const id = data[3].id;
//         const xhr2 = new XMLHttpRequest();
//         const URL2 = `${URL}/${id}`
//         console.log(URL2);
//         xhr2.open("GET", URL2);
//         xhr2.onload = () => {
//             const data2 = JSON.parse(xhr2.response);
//             console.log(data2);
//         }
//         xhr2.send();
//     }
//    else{
//        console.log("something went wrong");
//    }
// }

// xhr.onerror = () => {
//     console.log("network error");
// }
// xhr.send();

//**************** xmlHTTPRequest another example to get id and again call the URL ***************





//**************** xmlHTTPRequest using promises to make task easy ***************v
//promises


// const URL = "https://jsonplaceholder.typicode.com/posts";

// function call_http(method,url){
    
//  return new Promise(function(resolve, reject){
//         const xhr = new XMLHttpRequest();
//         xhr.open(method,url);
//         xhr.onload = () => {
//             if(xhr.status >= 200 && xhr.status <= 300){
//                 const data = JSON.parse(xhr.response);
//                 resolve(data); 
//             }else{
//                 reject("Could not load the data");
//             }
//         }
//         xhr.onerror = () => {
//                 console.log("network error");
//             }
//         xhr.send();
//     })
// }


// call_http("GET","https://jsonplaceholder.typicode.com/posts").
// then(function(data){
//     console.log(data);
//     const id = data[0].id;
//    return call_http("GET","https://jsonplaceholder.typicode.com/posts/1");
// }).then(function(data){
//     console.log(data);
// })


//**************** xmlHTTPRequest using promises to make task easy ***************v






// *****************  xmlHTTPRequest using promises to make task easy 2nd way********

// const URL = "https://jsonplaceholder.typicode.com/posts";

// function sendRequest(method, url) {
//     return new Promise(function(resolve, reject) {
//         const xhr  = new XMLHttpRequest();
//         xhr.open(method, url);
//         xhr.onload = function() {
//             if(xhr.status >= 200 && xhr.status < 300){
//                 resolve(xhr.response);
//             }
//             else{
//                 reject(new Error("Something Went wrong"));
//             }
//         }

//         xhr.onerror = function() {
//             reject(new Error("Something went wrong"));
//         }

//         xhr.send();
//     })
// }

// sendRequest("GET", URL)
//     .then(response => {
//         const data = JSON.parse(response);
//         // console.log(data)
//         return data;
//     })
//     .then(data=>{
//         const id = data[3].id;
//         return id;
//     })
//     .then(id=>{
//         const url = `${URL}/${id}`;
//         return sendRequest("GET", url);
//     })
//     .then(newResponse => {
//         const newData = JSON.parse(newResponse);
//         console.log(newData);
//     })
//     .catch(error =>{
//         console.log(error);
//     })



//*************fetch ************** */
//v imp topic
//in case of fecth promise will always be resolved, if there is an issue that is alwats because on connectivity

// const URL = "https://jsonplaceholder.typicode.com/postsss";
// const returned = fetch(URL);
// console.log(returned);

// returned
// .then(function(response){
//     if(response.ok){
//     const data = response.json();
//     return data; //this will internally print like resolve(data), which can be collected by  .then();
//     }else{
//         console.log("error");
//         throw new Error("Something went wrong");
//     }
// }).then(function(data){
//     console.log(data);
// }).catch(function(error){
//     console.log(error);
// })

//
//*************fetch ************** */









//************ fetch eg 2 POST data */


// const URL = "https://jsonplaceholder.typicode.com/posts";

// fetch(URL,{
//     method : 'POST',
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//       }),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
// }).then(function(data){
//     return data.json();
// }).then(function(data){
//     console.log(data);
// })


//************ fetch eg 2 POST data */




//part 1
// ***************brad travery ajax class ****************
// basics of ajax request and types


// document.getElementById("button").addEventListener("click",loadText);
// function loadText(){

// //create xhr object
// const xhr = new XMLHttpRequest();
// console.log(xhr);
// //OPEN type, url or file , async or not
// xhr.open('GET','sample.txt',true);
// // xhr.onload = function(){
// //     console.log(this.responseText);
// // }
// xhr.onreadystatechange = function(){
//     if(this.readyState == 4 && this.status == 200){
//         //console.log(this.responseText);
//         document.getElementById("text").innerHTML = this.responseText;
//     }else if(this.status == 404){
//         document.getElementById("text").innerHTML = "Could not found";
//     }
// }

// xhr.onprogress = function(){
//     console.log(xhr.readyState);
// }

// xhr.onerror = function(){
//     console.log("reuest error.....");
// }


// //SENDS REQUEST 
// xhr.send();

// }


//end of basics of ajax request
// ***************brad travery ajax class ****************
//part 1



//****************part2 start******************

// const user = document.getElementById("user");
// console.log(user);
// user.addEventListener("click",loadUser);
// function loadUser(){
//     console.log("User data loading.......");
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET","user.json",true);
//     xhr.onload = function(){
//         if(xhr.status == 200){
//             var user = JSON.parse(xhr.response);
//             var output = '';
//             output += '<ul>'+
//             '<li>'+user.id+'</li> '+
//             '<li>'+user.name+'</li> '+
//             '<li>'+user.email+'</li> '+
//             '</ul>';
//             document.getElementById("user_data").innerHTML = output;

//         }
//     }
//     xhr.send();

// }


//****************part2 end******************






//**************part3 ********************

const button = document.getElementById("users");
console.log(button);
button.addEventListener("click",load_users);
function load_users(){
    console.log("laoding users data.......");
    var xhr = new XMLHttpRequest();
    xhr.open("GET","users.json",true);
    xhr.onload = function(){
        if(xhr.status == 200){
            var users  = JSON.parse(xhr.response);
            console.log(users);
            console.log(Array.isArray(users));
            var output = '';
            users.forEach(function(user){
            output += '<ul>'+
            '<li>'+user.id +'</li>'+
            '<li>'+user.name +'</li>'+
            '<li>'+user.email +'</li>'+
            '</ul>';
         });
         document.getElementById("users_data").innerHTML = output;
        }
    }
    xhr.send();

}


//**************part3 ********************




