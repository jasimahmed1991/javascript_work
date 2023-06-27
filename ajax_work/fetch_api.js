const text_button = document.getElementById("text_button"); //to get text button
const user_button = document.getElementById("user_button");
const api_button = document.getElementById("api_posts");

console.log(text_button);

text_button.addEventListener("click",loadText);//for loading text
user_button.addEventListener("click",loadUser);//for loading user data
api_button.addEventListener("click",loadApiData);//for loading API data

//load text start
function loadText(){
    console.log("laoding..");
    var returned_data = fetch("sample.txt");
    returned_data.then(function(data){
        if(data.ok){
            return data.text();
        }
    }).then(function(data){
        console.log(data);
        document.getElementById("text_data").innerHTML = data;
    })

}

//load text end



//load user start
function loadUser(){
    console.log("Loading user....");
    fetch("user.json")
    .then(function(response){
        if(response.ok){
            console.log(response);
            return response.json();
        }
    }).then(function(response){
        console.log(response);
        var output = '';
        output += `<ul>
        <li>${response.id}</li>
        <li>${response.name}</li>
        <li>${response.email}</li>
        `;
        document.getElementById("user_data").innerHTML = output;
    })
}

//load user start



//load API Dats_post start
function loadApiData(){
    console.log("loading API data....");
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function(response){
        if(response.ok){
            return response.json();
        }
    }).then(function(response){
        console.log(response);
        var api_output = '';
        response.forEach(function(post){
            api_output += `<div>
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            </div>
            `;
            
        });
        document.getElementById("api_data").innerHTML = api_output;
    })
}

//load API Dats_post end