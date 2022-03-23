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
    // Storing response
    const response = await fetch(url);
    // Storing data in form of JSON
    data = await response.json();
    console.log(data);
    
    show(data);
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
