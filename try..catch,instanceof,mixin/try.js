// 1- masala


// class Student {
//     constructor(name, age, grade) {
//         this.name = name;
//         this.age = age;
//         this.grade = grade;
//     }

//     getInfo() {
//         return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
//     }
// }

// let talaba = new Student('Shuxrat', 34, 'A');

// console.log(talaba.getInfo());



// 2- masala

// class Car {
//     constructor(brand, model, year) {
//         this.brand = brand;
//         this.model = model;
//         this.year = year
//     }
//     getCarAge(year) {
//         return 2025 - this.year;
//     }
//     isOlderCar(year) {
//         let res = 2025 - this.year;
//         if (res > 10) return "eski mashina";
//         if(res<10)return "yangi mashina"
        
//     }
// }

// let mashina = new Car("chevralet","taxo",2020);

// mashina.isOlderCar()
// console.log(mashina.getCarAge());
// console.log(mashina.isOlderCar());


// 3- masala

// class BankAccount {
//   constructor(owner, boshlangich = 0) {
//     this.owner = owner;
//     this.#balance = boshlangich > 0 ? boshlangich : 0;
//   }

//   #balance;

//   deposit(amount) {
//     if (amount > 0) {
//       this.#balance += amount;
//       console.log(`${amount} so'm qoshildi`);
//     } else {
//       console.log(" musbat son kiriting");
//     }
//   }

//   withdraw(amount) {
//     if (amount <= this.#balance) {
//       this.#balance -= amount;
//       console.log(`${amount} som yechildi`);
//     } else {
//       console.log("yetarli mablag yoq");
//     }
//   }

//   getBalance() {
//     return this.#balance;
//   }

//   get balance() {
//     return this.#balance;
//   }

//   set balance(amount) {
//     if (amount >= 0) {
//       this.#balance = amount;
//     } else {
//       console.log("balans musbat bolishi kerak");
//     }
//   }
// }

// const account = new BankAccount("Shuxrat", 1000);

// console.log(account.owner);
// console.log(account.getBalance());

// account.deposit(500);
// console.log(account.balance);

// account.withdraw(2000);
// account.withdraw(300);
// console.log(account.getBalance());

// account.balance = -100;
// account.balance = 2000;
// console.log(account.balance);


// 4-masala

// class Animal {
//     constructor(name, sound) {
//         this.name = name;
//         this.sound = sound;
//     }

//     makeSound() {
//         console.log(this.sound);
//     }
// }
// class Dog extends Animal { }
// let dog1 = new Dog("bobik", "wof");
// dog1.makeSound();
// console.log(dog1);


// class Cat extends Animal { }
// let cat1 = new Cat("jery", "meow");
// cat1.makeSound();
// console.log(cat1);


// 5-masala


// class Technology {
//   constructor(brand, price) {
//     this.brand = brand;
//     this.price = price;
//   }
//   getInfo() {
//     return `Brand: ${this.brand}, Price: ${this.price} $ `;
//   }
// }

// class Computer extends Technology {
//   constructor(brand, price, processor) {
//     super(brand, price);
//     this.processor = processor;
//   }

//   getInfo() {
//     return `${super.getInfo()}, Processor: ${this.processor}`;
//   }
// }

// class Laptop extends Computer {
//   constructor(brand, price, processor, batteryLife) {
//     super(brand, price, processor);
//     this.batteryLife = batteryLife;
//   }

//   getInfo() {
//     return `${super.getInfo()}, Battery Life: ${this.batteryLife} soat`;
//   }
// }

// const tech = new Technology("samsung", 300);
// console.log(tech.getInfo());

// const comp = new Computer("asus", 500, "rayzen 5 ");
// console.log(comp.getInfo());

// const lap = new Laptop("asus", 900, "intel i7", 10);
// console.log(lap.getInfo());


// 6-masala


// class Vehicle {
//   constructor(name, speed) {
//     this.name = name;
//     this.speed = speed;
//   }
//   move() {
//     console.log(`${this.name} harakatlanmoqda.`);
//   }
// }

// class Car extends Vehicle {
//   move() {
//     console.log(`${this.name} yolda harakatlanmoqda`);
//   }
// }

// class Boat extends Vehicle {
//   move() {
//     console.log(`${this.name} suvda harakatlanmoqda`);
//   }
// }

// class Airplane extends Vehicle {
//   move() {
//     console.log(`${this.name} havoda uchmoqda`);
//   }
// }

// const transport1 = new Vehicle("Transport", 60);
// transport1.move();

// const car = new Car("Mashina", 100);
// car.move();

// const boat = new Boat("Kema", 40);
// boat.move();

// const airplane = new Airplane("Samoloyot", 900);
// airplane.move();


// bunus


try {
    class Calculator {
        divide(a, b) {
            if (b == 0) {
                throw new Error("nolga bolish mumkinmas")
            } else {
                return a/b
            }
        }
        sqrtt(n){
             if (n < 0) {
                     throw new Error("manfiy son ildizi mavjudmas")
            
            } else {
                 return Math.sqrt(n)
            }
        }
    }
    
    let sum = new Calculator()
    console.log(sum.divide(25, 9));
    
    let ildiz = new Calculator()
    console.log(ildiz.sqrtt(-49))

} catch(error) {
    console.error(error);
    
}
