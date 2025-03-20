// constructor = special method for defining the
//               properties and methods of objects

function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
}

const Car1 = new Car("Mercedes", "G-63", 2025, "Glossy-black");
const Car2 = new Car("land rover", "Range rover", 2025, "Glossy-black");
const Car3 = new Car("bmw", "M5", 2025, "Glossy-black");

console.log(Car1.make);   // Outputs: Mercedes
console.log(Car1.model);  // Corrected from modek to model
console.log(Car1.year);   // Outputs: 2025
console.log(Car1.color);  // Outputs: Glossy-black