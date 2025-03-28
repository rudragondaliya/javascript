
let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let Phone = document.getElementById("Phone");
let showData = document.querySelector("#table tbody");
let form = document.getElementById("myform");
let btn = document.getElementById("formBtn");
let editId = -1;
let users = [];
firstName.focus();

form.addEventListener('submit',(event) =>{
    event.preventDefault();

    let obj = {
        firstName: firstName.value,
        lastName:  lastName.value,
        Phone: Phone.value
    }

    if(editId == -1){
        users.push(obj);

    }else{

        users[editId] = obj;
        editId = -1;
    }

    firstName.focus();
   
    resetForm();
    display();
});

const display = ()=> {

        showData.innerHTML = '';
    
        users.forEach((user,index) => {
            let row = document.createElement('tr');
    
            row.innerHTML = `
               <td>${index +1}</td>
               <td>${user.firstName}</td>
               <td>${user.lastName}</td>
               <td>${user.Phone}</td>
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
firstName.value = info.firstName;
lastName.value = info.lastName;
Phone.value = info.Phone;
btn.innerText = "Update";
btn.classList.add("btn-success");
btn.classList.remove("btn-primary");

editId = index;

}

function resetForm(){

    firstName.value = "";
    lastName.value = "";
    Phone.value = "";
    formBtn.textContent = "Register";
    formBtn.classList.add("btn-primary");
    formBtn.classList.remove("btn-success");
    firstName.focus();

}