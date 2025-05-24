/** 

1. // Berilgan obyektning barcha kalitlarini chiqaradigan kod yozing.
 let user = { name: "Ali", age: 25, city: "Toshkent" };
 // Natija: 
// name 
// age // 
city

2. Berilgan obyektning barcha qiymatlarini chiqaradigan kod yozing.
 let product = { name: "Laptop", price: 1200, brand: "Apple" };
// Natija:
// Laptop 
// 1200 
// Apple

3. Obyektdagi har bir kalit va qiymatni "kalit: qiymat" ko'rinishida chiqaradigan kod yozing. 
let car = { model: "Malibu", year: 2022, color: "Black" }; 
// Natija: 
// model: Malibu 
// year: 2022 
// color: Black

4. Obyektdagi faqat son qiymatlarga ega xususiyatlarni chiqaradigan kod yozing.
 let employee = { name: "Javohir", age: 30, salary: 5000, position: "Engineer" };
 // Natija: 
// 30 
// 5000

5. Berilgan foydalanuvchi obyektining nusxasini yarating.
 let user = { name: "Ali", age: 25 }; 
// Natija: 
// userCopy ham xuddi shunday ma'lumotlarga ega bo‘lishi kerak.

6. Obyektni nusxalash uchun `Object.assign()` dan foydalaning. 
let car = { model: "Malibu", year: 2022 }; 
// Natija:
// carCopy nomli yangi obyekt hosil bo‘lishi kerak.

7. Spread operator (`...`) yordamida obyektning nusxasini oling. 
let product = { name: "iPhone", price: 1200 }; 
// Natija: 
// productCopy obyektga ega bo‘lishi kerak.

*/


// 1- masala

// let user = {
//     name: "Ali",
//     age: 25,
//     city: "Toshkent"
// };

// for (let i in user) {
//     console.log(i);
    
// }

// 2- vazifa

// let product = { name: "Laptop", price: 1200, brand: "Apple" };


// for (let i in product) {
//     console.log(product[i]);
    
// }


// 3- vazifa


// let car = { model: "Malibu", year: 2022, color: "Black" };

// for (let i in car) {
//     console.log(i, car[i]);
    
// }


// 4- vazifa

// let employee = { name: "Javohir", age: 30, salary: 5000, position: "Engineer" };

// for (let i in employee) {
    
//     if (typeof employee[i] === "number") {
//         console.log(i,employee[i]);
        
//     }
// }


// 5- masala

// let user1 = {
//     name: "ali",
//     age: 25
// }
// let userCopy = user1;
// console.log(user1)
// console.log(userCopy)

// 6- masala


// let car = {
//     name: "malibu",
//     year: 2022
// }

// let carCopy = Object.assign({}, car)
// console.log(carCopy)


// 7- masala


// let product = { name: "iPhone", price: 1200 };

// let productCopy = {...product}
// console.log(productCopy);



/**
---------------qo'shimcha:--------------

Sudda calculator objectini yasash.

+,-,*,/, darajaga oshirish, ildiz chiqarish, sonni tub emaslikka teshkirish funksiyalari bo'lsin.

Foydalanish: calculator.add(2, 3) // 5

Foydalanish: calculator.sqrt(81) // 9

Foydalanish: calculator.daraja(2, 3) // 8

... h.k.z

*/


//  hozir davom etaman ...................