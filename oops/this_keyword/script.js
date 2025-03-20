// this = reference to the object where THIS is used 
//        (the object depends on the immediate context)
//         person.name = this.name


const person1 = {
    name: "Rudra",
    favFood : "pizza",
    sayhello: function() {
        console.log(`Hello i am  ${this.favFood}`)
    },
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}

person1.sayhello()
person1.eat()