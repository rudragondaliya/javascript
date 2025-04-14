let productName = document.getElementById("prodName");
const cart = JSON.parse(localStorage.getItem('cart')) || [];
let offcanvas = document.querySelector(".offcanvas tbody")
let quantity = document.getElementById("qty");
let price = document.getElementById("price");
let showData = document.querySelector("#table tbody")
let btn = document.getElementById("formBtn")
let editIndex = -1;
let users = JSON.parse(localStorage.getItem("users")) || [];
productName.focus();

let form = document.getElementById("form");

form.addEventListener("submit", (event)=>{
    event.preventDefault();

let obj = {

    productName: productName.value,
    quantity: quantity.value,
    price: price.value,
}
    
    if(editIndex == -1){
        users.push(obj);
    }
    else{
        users[editIndex] = obj;
        editIndex = -1;
    }

    localStorage.setItem("users",JSON.stringify(users))

    productName.value = '';
    quantity.value = '';
    price.value = '';
    productName.focus();
    btn.innerText = "Submit"
    formBtn.classList.add("btn-primary");
    formBtn.classList.remove("btn-success");
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
        <div class="quantity-count">
         <span class="minus">-</span>
         <span class="num">${user.quantity}</span>
         <span class="plus">+</span>
         </div>             
        </td>
      
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
    localStorage.setItem("users",JSON.stringify(users))
    display();
}

const editUser = (index) =>
{
   editIndex = index;
   let user = users[index];
   productName.value = user.productName;
   quantity.value = user.quantity;
   price.value = user.price;
   btn.innerText = "Update";
   btn.classList.add('btn-success')
   btn.classList.remove("btn-primary")
}

const addCart = (index) => {
 let user = users[index];
 cart.push(user)
 localStorage.setItem('cart',JSON.stringify(cart));
 console.log("Cart:",cart);
 displayCart();
 
}

const displayCart = () => {
    offcanvas.innerHTML = "";
    cart.forEach((item, index) => {
        let offRow = document.createElement("tr");
        offRow.innerHTML =
            `
        <td>${index + 1}</td>
        <td>${item.productName}</td>
        <td>${item.quantity}</td>
        <td>${item.price}</td>
        <td>
        <button onclick="deleteCartitem(${index})" class="btn"><i class="bi bi-x"></i></button>
        </td>
        `;
        offcanvas.append(offRow);
    });
};



const deleteCartitem = (index) =>
{
    cart.splice(index,1);
    localStorage.setItem('cart',JSON.stringify(cart));
    displayCart();
}



display();