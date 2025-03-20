// objects = A collection of related prperties and methods can represent real world 
// objects (people,products,places)
// object = {key value, 
//               function()}

const person1 = {
    firstName:"Rudra",
    lastName:"Gondaliya",
    age: 30,
    isEmployed:true,
    sayHello:function () {
        console.log("Hii i am a developer!")
    },
    eat: function() {
        console.log("i am eating fruits!")
    },
}

const person2 = {
    firstName:"jesu",
    lastName:"joy",
    age: 23,
    isEmployed:false,
    sayHello:function () {
        console.log("Hii i am a bro!")
    },
    eat: ()=> console.log("i am eating dhosa"),
}


// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.age);
// console.log(person1.isEmployed);

// console.log(person2.firstName);
// console.log(person2.lastName);
// console.log(person2.age);
// console.log(person2.isEmployed);

// person1.sayHello();
// person2.sayHello();

person1.eat();
person2.eat()
