
let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let genderVal = document.querySelectorAll('input[name ="gender"]');
let hobbyVal = document.querySelectorAll('input[type="checkbox"]');
let cityVal = document.querySelector('#select');
let Phone = document.getElementById("Phone");
let showData = document.querySelector("#table tbody");
let form = document.getElementById("myform");
let btn = document.getElementById("formBtn");
let user = JSON.parse(localStorage.getItem("users")) || [];
let editId = -1;
let users = [];
firstName.focus();

form.addEventListener('submit',(event) =>{
    event.preventDefault();
  
    let gender = "";
    if(genderVal[0].checked){
         gender = genderVal[0].value;
    }
    else
    {
        gender = genderVal[1].value;
    }

    let hobby = [];
    for(let i = 0; i<hobbyVal.length;i++){  
        if(hobbyVal[i].checked){
            hobby.push(hobbyVal[i].value);
        }
    }

    let city = [];
    for(let i= 0;i<cityVal.length;i++)
        if(cityVal[i].selected){
            city.push(cityVal[i].value)
        }


    let obj = {
        firstName: firstName.value,
        lastName:  lastName.value,
        genderVal: gender,
        hobbyVal:  hobby,
        cityVal:  city,
        Phone: Phone.value
    }

    if(editId == -1){
        users.push(obj);

    }else{

        users[editId] = obj;
        editId = -1;
    }

    localStorage.setItem("users",JSON.stringify(users));
    firstName.value = "";
    lastName.value = "";
    genderVal.value = "";
    hobbyVal.value = "";
    cityVal.value = "";
    Phone.value = "";
    



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
               <td>${user.genderVal}</td>
               <td>${user.hobbyVal}</td>
               <td>${user.cityVal}</td>
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