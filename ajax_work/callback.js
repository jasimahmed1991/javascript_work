

//start
//imageine this as server data

// const posts = [
// {title:'post one',body:'this is post one'},
// {title:'post two',body:'this is post two'}
// ];

// function createPost(post){
//     setTimeout(function(){
//         posts.push(post);
//     },3000);
// }

// function getPosts(){
//     setTimeout(function(){
//         let output = '';
//         posts.forEach(function(post){
//             output += `<li>${post.title}</li>`
//         });
//         document.body.innerHTML = output;
//     },1000)
// }

// createPost({title:'one',body:'body here'});
// getPosts();


//so whats happening here is before the post is created the get posts funtion is retriving the data
//so to deal with this we use callback functions

//end



//callback eg to deal with above eg start

const posts = [
    {title:'one',body:'body part 1'},
    {title: 'two',body:'this is part 2'}
];


//creating post or sendind data to server
function createPost(post,callback){
    setTimeout(function(){
        posts.push(post);
        callback();
    },3000)
}

function getPosts(){
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    },1000)
}

createPost({title:'three',body:'this is body three'},getPosts)

//callback eg to deal with above eg end