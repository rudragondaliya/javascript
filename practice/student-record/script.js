const firstName = document.getElementById("firstname")
const lastName = document.getElementById("lastname")
const form = document.getElementById("form")
const showData = document.querySelector("#table tbody")
let btn = document.getElementById("formBtn");
let users = [];
let editId = -1;
firstName.focus();

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    let obj = 
    {
        firstName: firstName.value,
        lastName: lastName.value,
    }

    if(editId == -1)
    {
        users.push(obj);
    }
    else{
        users[editId] = obj;
        editId = -1;
    }
    
    localStorage.setItem('users',JSON.stringify(users));
    

    display();

});

const display = () =>{
    
    showData.innerHTML = "";
     
    users.forEach((user,index)=>{
        let row = document.createElement("tr");
        row.innerHTML =
        `
        <td>${index+1}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>
        <button onclick="editUser(${index})" class="btn btn-warning">Edit</button>
        <button onclick="deleteUser(${index})" class="btn btn-danger">Delete</button>
        </td>

        `;
        showData.append(row)
        firstName.value = '';
        lastName.value = '';
        firstName.focus();
    })

}
display();

const deleteUser = (index) =>{
    users.splice(index,1);
    localStorage.setItem('users',JSON.stringify(users));
    display();
}

const editUser = (index)=>
{
   editId = index;
   let user = users[index];
   firstName.value = user.firstName;
   lastName.value = user.lastName;
   btn.innerText = "Update";
   btn.classList.add("btn-success");
   btn.classList.remove("btn-primary");


}