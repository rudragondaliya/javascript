let root = document.getElementById("root");
let cartContainer = document.querySelector("#table tbody");
let cart = JSON.parse(localStorage.getItem("cart"))||[];

async function fetchdata() {
    
    try
    {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json();
        root.innerHTML = "";

    data.forEach((product)=>{
        const col = document.createElement("div");
        col.classList.add("col-md-3")

        col.innerHTML = 
        `
       <div class="card shadow" style="width: 18rem; height: 90%;">
       <img src="${product.image}" class="card-img-top " alt="..." style="height: 200px; width: auto; object-fit: contain;">
       <div class="card-body d-flex flex-column justify-content-between" style="height: 250px;">
        <div>
            <h5 class="card-title" style="font-size: 16px; height: 48px; ">${product.title}</h5>
            <p class="card-text mt-4 fw-bold">$${product.price}</p>
            
        </div>
        <div class="addbtn">
            <button class="btn btn-primary cartBtn mt-auto w-100">Add to cart</button>
        </div>
       </div>
     </div>  
     `;

        root.append(col);

        document.querySelectorAll(".cartBtn").forEach((btn)=>{
            btn.addEventListener("click",(e)=>{
                e.preventDefault();
            
            const card = btn.closest(".card");
            const itemImg = card.querySelector("img").src;
            const itemTitle = card.querySelector(".card-title").innerText;
            const itemPrice = parseFloat(card.querySelector(".card-text").innerText.replace(/[^0-9.]/g, ""));
        
            const existingItem = cart.find((item)=> item.name === itemTitle)
            {
                if(existingItem){
                    existingItem.quantity = 1;
                }
                else{
                    cart.push({
                        image: itemImg,
                        name: itemTitle,
                        price: itemPrice,
                        quantity: 1,
                    })
                }
            }
        
               updateCart();
            });
        
          
        });
        
    })
       
    }
    catch(error){
        console.log(error)
    }
}

fetchdata();




const updateCart = ()=>{
    cartContainer.innerHTML = '';
    let subtotal = 0;

    cart.forEach((item,index)=>{
        let row = document.createElement("tr");
        row.innerHTML =
        `
        <td>${index+1}</td>
           <td>
             <div class="product d-flex align-items-center gap-2">
               <img src="${item.image}" alt="${item.name}" width = "50">
               <span class="fw-semibold">${item.name}</span>
             </div>
           </td>
           <td>
             <h5 class="text-secondary">$${item.price.toFixed(2)}</h5>
           </td>
           <td>
             <div class="qty-count d-flex just-content-center align-items-center fs-5">
               <button class="btn minus text-dark" data-index = ${index}>-</button>
               <span class="mx-2">${item.quantity}</span>
               <button class="btn plus text-dark" data-index = ${index}>+</button>
             </div>
           </td>
           <td>$${(item.price * item.quantity).toFixed(2)}</td>

        `;

        cartContainer.append(row);
        subtotal += item.price * item.quantity;

    })

    document.querySelectorAll(".totalbill").forEach((el)=>{
        el.innerText = `$${subtotal.toFixed(2)}`
    })
    
    localStorage.setItem("cart",JSON.stringify(cart));

    count();
}


const count = ()=>{
    document.querySelectorAll(".plus").forEach((btn)=>{
        btn.addEventListener("click",()=>{
            const index = btn.getAttribute("data-index");
            cart[index].quantity++;
            updateCart();
        })
    })

    document.querySelectorAll(".minus").forEach((btn)=>{
        btn.addEventListener("click",()=>{
            const index = btn.getAttribute("data-index");
            if(cart[index].quantity>1){
                cart[index].quantity--;
            }
            else{
                cart.splice(index,1)
            }
            updateCart();
        })
    })
}


updateCart()



console.log(cart);
