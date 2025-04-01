const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
let form =  document.getElementById("form");
let users = [];

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    let obj = {
        firstName: firstName.value,
        lastName: lastName.value,
    };

    console.log(obj)



})