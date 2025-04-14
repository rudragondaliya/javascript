// // Initialize an empty cart
// let cart = [];

// // Function to add item to cart
// function addToCart(productId, productName, productPrice) {
//     // Check if the product is already in the cart
//     const existingProduct = cart.find(item => item.id === productId);
    
//     if (existingProduct) {
//         // If it exists, increase the quantity
//         existingProduct.quantity += 1;
//     } else {
//         // If it doesn't exist, add it to the cart
//         cart.push({
//             id: productId,
//             name: productName,
//             price: productPrice,
//             quantity: 1
//         });
//     }
    
//     // Update the cart display
//     updateCartDisplay();
// }

// // Function to update the cart display
// function updateCartDisplay() {
//     const cartContainer = document.getElementById('cartContainer');
//     let subtotal = 0;
    
//     // Clear the current cart display
//     cartContainer.innerHTML = '';

//     // Populate the cart display
//     cart.forEach((item, index) => {
//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td class="text-success">${index + 1}</td>
//             <td class="text-success">${item.name}</td>
//             <td class="text-success">
//                 <button class="btn btn-sm btn-outline-secondary" onclick="changeQuantity(${item.id}, -1)">-</button>
//                 ${item.quantity}
//                 <button class="btn btn-sm btn-outline-secondary" onclick="changeQuantity(${item.id}, 1)">+</button>
//             </td>
//             <td class="text-success">$${(item.price * item.quantity).toFixed(2)}</td>
//         `;
//         cartContainer.appendChild(row);
//         subtotal += item.price * item.quantity;
//     });

//     document.querySelectorAll(".totalbill").forEach((el) => {
//         el.innerText = `$${subtotal.toFixed(2)}`;
//       });
    

// }

// // Function to change the quantity of an item in the cart
// function changeQuantity(productId, change) {
//     const product = cart.find(item => item.id === productId);
    
//     if (product) {
//         product.quantity += change;

//         // Remove the product if quantity is 0
//         if (product.quantity <= 0) {
//             cart = cart.filter(item => item.id !== productId);
//         }
        
//         // Update the cart display
//         updateCartDisplay();
//     }
// }

// // Event listeners for "Add to Cart" buttons
// document.querySelectorAll('.add-to-cart').forEach(button => {
//     button.addEventListener('click', function() {
//         const productId = parseInt(this.getAttribute('data-product-id'));
//         const productName = this.closest('.card-body').querySelector('.card-title').innerText;
//         const productPrice = parseFloat(this.closest('.card-body').querySelector('.fw-bold').innerText.replace('$', ''));

//         addToCart(productId, productName, productPrice);
//     });
// });

let cart = [];

function addToCart(productId, productName, productPrice) {

    const existingProduct = cart.find(item => item.id === productId);
    
    if (existingProduct) {
      
        existingProduct.quantity += 1;
    } else {
      
        cart.push({
            id: productId,
            name: productName,
            price: productPrice,
            quantity: 1
        });
    }
    
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartContainer = document.getElementById('cartContainer');
    let subtotal = 0;
    
    cartContainer.innerHTML = '';

    cart.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="text-success">${index + 1}</td>
            <td class="text-success">${item.name}</td>
            <td class="text-success">
                <button class="btn btn-sm btn-outline-secondary" onclick="changeQuantity(${item.id}, -1)">-</button>
                ${item.quantity}
                <button class="btn btn-sm btn-outline-secondary" onclick="changeQuantity(${item.id}, 1)">+</button>
            </td>
            <td class="text-success">$${(item.price * item.quantity).toFixed(2)}</td>
        `;
        cartContainer.appendChild(row);
        subtotal += item.price * item.quantity;
    });

    document.querySelectorAll(".totalbill").forEach((el) => {
        el.innerText = `$${subtotal.toFixed(2)}`;
    });
    
}

function changeQuantity(productId, change) {
    const product = cart.find(item => item.id === productId);
    
    if (product) {
        product.quantity += change;

        if (product.quantity <= 0) {
            cart = cart.filter(item => item.id !== productId);
        }
        
        updateCartDisplay();
    }
}


document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productId = parseInt(this.getAttribute('data-product-id'));
        const productName = this.closest('.card-body').querySelector('.card-title').innerText;
        const productPrice = parseFloat(this.closest('.card-body').querySelector('.fw-bold').innerText.replace('$', ''));

        addToCart(productId, productName, productPrice);
    });
});