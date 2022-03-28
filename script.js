const api_url="https://api.github.com/users/";
let users;
let url;
let data;

//hide the core
document.getElementById('prop').style.display='none';

    
function opra(){
   users = document.getElementById('username').value;
   url=api_url+users;
    
   getapi(url);
}

async function getapi(url) {
    
        const response = await fetch(url);
        data = await response.json();
        if(data.name===undefined){
            error();
        }
        else{
            show(data);
        }
    
}

function error(){
    document.getElementById('prop').style.display='none';
    
    document.getElementById("forError").innerHTML="user not found"
}

function show(data) {
    document.getElementById('prop').style.display='block';
    document.getElementById('name').innerHTML = data.name;
    document.getElementById('image').src=data.avatar_url;
    document.getElementById('bio').innerHTML=data.bio;
    document.getElementById('loc').innerHTML=" "+data.location;
    document.getElementById('fl').innerHTML=" "+data.followers;
    document.getElementById('fo').innerHTML=" "+data.following;
}
