let username = document.getElementById("username");
let password = document.getElementById("password");
let form = document.getElementById("myform");
let showData = document.querySelector('#table tbody');
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
        `;
        showData.append(row);
    });
};

display();