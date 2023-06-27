const button = document.getElementById("button");
console.log(button);

button.addEventListener("click",loadProfiles);

function loadProfiles(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET","https://api.github.com/users",true);
    xhr.onload = function(){
        if(xhr.status == 200){
            var profiles = JSON.parse(xhr.response);
            var output = "";
            profiles.forEach(profile => {
                output += '<div class="users">'+
                '<img src = "'+profile.avatar_url+'" width="70"  height = "70">'+
                '<ul>'+
                '<li>id: '+profile.id +' </li>'+
                '<li>Login: '+profile.login +' </li>'+
                '</ul>'+
                '</div>';
            });
            document.getElementById("users").innerHTML = output;
        }
    }
    xhr.send();
}