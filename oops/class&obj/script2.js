// class 

class Product {

    constructor(name ,price)
    {
        this.name = name;
        this.price = price;
    }

    display() {
        console.log(`product: ${this.name}`);
        console.log(`price: $${this.price}`);
    }

    calculateTotal(saleTax)
    {
        return this.price + (this.price * saleTax)
    }

}

const saleTax = 0.05;

const product1 = new Product("Shirt",200);
const product2 = new Product("pants",400);

product1.display()
product2.display()

const total = product1.calculateTotal(saleTax);
console.log(`Total price (with tax): $${total.toFixed(2)}`);