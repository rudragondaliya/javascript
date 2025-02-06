let form = document.getElementById('form');
let form1 = document.getElementById('form1')
form1.style.display = "none";
document.getElementById('card').style.display = "none";

let u_name;
let u_email;
let u_password;

form.addEventListener('submit',function(event)
{
    event.preventDefault();

    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;


    u_name = username;
    u_email = email;
    u_password = password;
    formHide();

});

function formHide()
{
    document.getElementById('form').style.display = "none";
    document.getElementById('form1').style.display = "block";
}

form1.addEventListener('submit',function(event)
{
    event.preventDefault();

    let username1 = document.getElementById('username1').value;
    let email1 = document.getElementById('email1').value;
    let password1 = document.getElementById('password1').value;

    if(username1 === u_name && email1 === u_email && password1 === u_password)
    {
        displayCard();
    }
    else
    {
       alert("Invalid Email or Password");
    }
});

function displayCard()
{
    document.getElementById('card').style.display = "block";
    document.getElementById('form1').style.display = "none";
    document.getElementById('name').innerText = u_name;
    document.getElementById('email-text').innerText = u_email;  
}