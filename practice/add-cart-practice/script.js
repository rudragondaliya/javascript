let productName = document.getElementById("prodName");
let quantity = document.getElementById("qty");
let price = document.getElementById("price");
let showData = document.querySelector("#table tbody")
let users = [];
productName.focus();

let form = document.getElementById("form");

form.addEventListener("submit", (event)=>{
    event.preventDefault();

let obj = {

    productName: productName.value,
    quantity: quantity.value,
    price: price.value,
}
    users.push(obj);
    productName.value = '';
    quantity.value = '';
    price.value = '';
    productName.focus();

    display();

})

const display = () =>{{

    showData.innerHTML = "";

    users.map((user,index)=>{

        let row = document.createElement("tr");
         row.innerHTML=
     `
        <td>${index+1}</td>
        <td>${user.productName}</td>
        <td>${user.quantity}</td>
        <td>${user.price}</td>
        <td>
        <button onclick="editUser(${index})" class="btn btn-warning">edit</button>
        <button onclick="deletetUser(${index})" class="btn btn-danger">Delete</button>
        <button onclick="addCart(${index})" class="btn btn-success">Add to cart</button>
        </td>
     `;
       
       showData.append(row)
       productName.value = '';
       quantity.value = '';
       price.value = '';
       
    })
    
    

}}

const deletetUser = (index) =>
{
    users.splice(index,1);
    display();
}




display();