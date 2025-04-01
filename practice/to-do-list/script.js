
const input = document.getElementById("input-field");
const list = document.getElementById("todo-list");

const addBtn = ()=>{
    if(input.value === '')
    {
        alert("you must write something");

    }
    else
    {
        let li = document.createElement("li");
        li.className = "list-group-item";
        li.innerHTML = 
        `
        <input class="form-check-input me-1" type="checkbox" value="" id="checkbox">
        <label class="form-check-label" for="checkbox-${Date.now()}">${input.value}</label>
        `;
        list.appendChild(li);
        input.value = '';
    }
}

