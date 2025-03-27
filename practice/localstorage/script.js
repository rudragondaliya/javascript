let username = document.getElementById("username");
let password = document.getElementById("password");
let form = document.getElementById("myform");
let showData = document.querySelector('#table tbody');
let btn = document.getElementById("form-btn");
let users = [];
username.focus()

form.addEventListener('submit',(event) =>{
    event.preventDefault();

    let obj = {
        username: username.value,
        password: password.value,
    };

    users.push(obj);

      username.value = '';
      password.value = '';
      username.focus();

    display();
});

const display = ()=> {

    showData.innerHTML = '';

    users.forEach((user,index) => {
        let row = document.createElement('tr');

        row.innerHTML = `
           <td>${index +1}</td>
           <td>${user.username}</td>
           <td>${user.password}</td>
           <td>
            <button onclick ="editUser(${index})" class="btn btn-success">Edit</button>
            <button onclick ="deleteUser(${index})" class=" btn btn-danger">Delete</button>
            </td>
        `;
        showData.append(row);
    });
};

display();

const deleteUser = (index) =>{
 users.splice(index,1);
 display();
}
 
const editUser = (index)=>{
   let info = users.filter((_,idx)=> idx == index)[0];
   username.value = info.username;
   password.value = info.password;
   btn.innerText = "Update";
   btn.classList.add("btn-success");
   btn.classList.remove("btn-primary");
  
}