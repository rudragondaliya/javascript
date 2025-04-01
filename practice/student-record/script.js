const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
let form =  document.getElementById("form");
let showData = document.querySelector("#table tbody")
let users = [];
let editId = -1

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    let obj = {
        firstName: firstName.value,
        lastName: lastName.value,
    };

     users.push(obj);
     firstName.value = '';
     lastName.value = '';

     display();

});

const display = ()=>{

    showData.innerHTML = '';
    
    users.forEach((user,index)=>{
        let row = document.createElement("tr");

        row.innerHTML =
        `
        <td>${index+1}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>
        <button onclick="deleteUser(`${index}`)" class="btn btn-danger">Delete</button>
        <button onclick="editUser()" class="btn btn-warning">Edit</button>
        </td>
        `;
        showData.append(row);
    })
}

const deleteUser = (index) =>
{
    users.splice(index,1);
    display();
}

const editUser = (index) => {
    editId = index;
    let users = user[index];
    firstName = user.firstName;
    lastName = user.lastName;
}