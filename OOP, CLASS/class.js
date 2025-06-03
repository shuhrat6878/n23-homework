// 1- masala



// function Car(brand, model, year) {
//     this.brand = brand,
//     this.model = model,
//     this.year =year

// }
// Car.prototype.getInfo = function () {
//     console.log(`"Brand":${this.brand}, Model:${this.model}, Year:${this.year}`)
// }
// let cobalt = new Car("Chevralet","Cobalt",2025 )
// let Tayota = new Car("Tayota","Camry",2020 )
// let nexia2 = new Car("Chevralet", "Nexia 2", 2024)

// cobalt.getInfo()
// Tayota.getInfo()
// nexia2.getInfo()

// 2- masala

// let Animal={
//     makeSound(){
//         console.log("Some sound");
        
//     }
// }

// let Dog = {
//     bark() {
//         console.log("wolf");
        
//     }
// }
// Dog.__proto__ = Animal;


// Dog.makeSound()
// Dog.bark()


// 3- masala


// function arr(num) {
//     this.num =num
// }

// arr.prototype.sum = function () {
//     let res =0
//     for (let i = 0; i < this.num.length; i++){
//         res += this.num[i];
//     }
    
    
//     return res
// }

// let son = new arr([1, 2, 3, 4, 5])
// console.log(son.sum())



// 4-masala

// function Person(name) {
//     this.name = name;
// }

// Person.prototype.greet = function () {
//     console.log("Hello, my name is " + this.name);
// };

// function Employee(name, age) {
//     Person.call(this, name);
//     this.age = age;
// }

// Employee.prototype = Object.create(Person.prototype);

// Employee.prototype.constructor = Employee;

// let emp = new Employee("Shuxrat", 45);

// emp.greet();

// console.log(emp);



// 5- masala

let Car = {
    brand: "nexia 2",
    speed: 100,
    drive: function () {
        console.log(this.brand + " is driving at " + this.speed + " km/h");
    }
};
let sportsCar = Object.create(Car);
sportsCar.brand = "malibu 2";
sportsCar.speed = 200;

sportsCar.drive(); 
console.log(sportsCar); 

