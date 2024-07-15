function getposts()
{
    console.log("Call get post");
    let request =new XMLHttpRequest;
    request.open("GET","https://jsonplaceholder.typicode.com/posts")
    request.send();
    request.onload=function(){
        console.log(request.status);//200 ok , 500 server error , 400 client error
            if(request.status>=200&& request.status<300)
            {
                console.log(" Done ");
                console.log(typeof request.status);
                let allposts = JSON.parse(request.response)
                console.log(document.getElementById("posts"));
                let divposts = document.getElementById("posts")
                for ( post of allposts) {
                   let posttext = `
                <div class="post">
                    <p>${post.title}</p>
                    <hr>
                    <p>${post.body}</p>
                </div>`
                divposts.innerHTML =  divposts.innerHTML  +    posttext; 
                }
               
            }
            
            else{
                console.log(" Error ");
            }
    }
}
getposts();


function getusers()
{
    console.log("Call get Users");
    let request =new XMLHttpRequest;
    request.open("GET","https://jsonplaceholder.typicode.com/users")
    request.send();
    request.onload=function(){
        console.log(request.status);//200 ok , 500 server error , 400 client error
            if(request.status>=200&& request.status<300)
            {
                console.log(" Done ");
                console.log(typeof request.status);
                let allusers = JSON.parse(request.response)
                console.log(document.getElementById("users"));
                let divposts = document.getElementById("users")
                for ( user of allusers) {
                   let usertext = `
                <div class="user" onclick="clickuser(${user.id},this)">
                    <p>${user.name}</p>
                    <hr>
                    <p>${user.email}</p>
                </div>`
                divposts.innerHTML =  divposts.innerHTML  +    usertext; 
                }
               
            }
            
            else{
                console.log(" Error ");
            }
    }
}
getusers();

function clickuser(id,element){
    //alert(`user is ${id}`)
    console.log("onclick");
    getposts(id);
    console.log(element);
    let alluserselected=document.getElementsByClassName("selected")
    for (userselected  of alluserselected) {
        userselected.classList.remove("selected")
    }
    element.classList.add("selected")
    console.log(element);
}
