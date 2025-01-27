
// ------------------------------------------------ES5 version --------------------------------------------------
// var x = 10;
// var y = 20;
// console.log(x + y);

// function add(a,b){
//     return a+b;
// }
// console.log(add(5,10));

// var name = "john";
// console.log("Hello ,"+ name + "!");


// ----------------------------------------------------ES6 version -------------------------------------------------
// let x = 20;
// let y = 30;
// console.log(x + y);

// const add = (a,b) => a + b;
// console.log(add(5,10));

// let name = "Rudra";
// console.log(`hello , ${name} !`);

class person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`hello, ${this.name}`);
    }
  
}

const person = new person("john");
person.greet();