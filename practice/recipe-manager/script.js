let recipe = document.getElementById("recipe")
let ingridents = document.getElementById("ingridents")
let time = document.getElementById("time")
let form = document.getElementById("form")
let showData = document.querySelector("#table tbody")
let btn = document.querySelector(".formBtn");
let dish = JSON.parse(localStorage.getItem("dish")) || [];
let editId = -1
recipe.focus();

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    let obj = {
        recipe:recipe.value,
        ingridents:ingridents.value,
        time:time.value,
    }

   if(editId === -1){
    dish.push(obj)
   }
   else
   {
    dish[editId] = obj;
    editId = -1
   }
    
    recipe.value = '';
    ingridents.value = '';
    time.value = '';
    btn.innerText = "Submit";
    btn.classList.add("btn-primary")
    btn.classList.remove("btn-success")
    recipe.focus();

    localStorage.setItem("dish",JSON.stringify(dish));

    displayDish();
})


const displayDish = () =>{
    showData.innerHTML = '';
    dish.forEach((item,index)=>{
        let row = document.createElement("tr");

        row.innerHTML =
        `
            <td>${index+1}</td>
            <td>${item.recipe}</td>
            <td>${item.ingridents}</td>
            <td>${item.time}</td>
            <td>
            <button onclick="editUser(${index})" class="btn btn-warning">Edit</button>
            <button onclick="deleteUser(${index})" class="btn btn-danger">delete</button>
            </td>

        `;

        showData.append(row)
    })
}

displayDish();


const deleteUser = (index)=>{
    dish.splice(index,1);
    localStorage.setItem("dish",JSON.stringify(dish));
    displayDish();
}

const editUser = (index)=>{
    editId = index;
    let plate = dish[index];
    recipe.value = plate.recipe;
    ingridents.value = plate.ingridents;
    time.value = plate.time;
    btn.innerText = "update";
    btn.classList.add("btn-success")
    btn.classList.remove("btn-primary")

}



