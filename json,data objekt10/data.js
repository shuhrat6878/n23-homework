// 1-masala

// let datee1 = new Date(2019, 11, 13)
// let datee2 = new Date(2023, 10, 13)

// function Kunlar(a, b) {
//     if (a > b) {
//         let kun = a - b;
//         natija = kun / (24 * 60 * 60 * 1000)
//         return natija
//     }
//     if (b > a) {
//         let kun = b - a;
//         natija = kun / (24 * 60 * 60 * 1000)
//         return natija
//     }
    
// }
// let box =Kunlar(datee1,datee2)
// console.log(`${box}-kun`)

// 2-masala


// let data ="1999-11-5"

// function haftanikorsat(sana) {
//     let kun = new Date(sana);
//     let yil2025 = 2025;


//     kun.setFullYear(yil2025);
//     let haftalar = ['yakshanba', 'dushanba', 'seshanba', 'chorshanba', 'payshanba', 'juma', 'shanba'];

//     let hafatIndex = kun.getDay()
//     return haftalar[hafatIndex];


// }
// const haftakuni = haftanikorsat(data)
// console.log(`DEN RAJDENYA 2025 yil ${haftakuni} kuni boladi.`);

// 3-masala

// let person = {
//     name: 'Shuxrat',
//     age: 26,
//     city: 'Tashkent'
// }

// let obj = JSON.stringify(person)
// console.log(obj);

// 4-maSAALA

// let user = {
//     ism: "Shuxrat",
//     yosh: 26,
//     manzil: {
//         shahar: "Toshkent",
//         kocha: "quyosh"
//     }
// };

// let copy = JSON.parse(JSON.stringify(user));

// user.ism = "Shahboz";
// user.manzil.shahar = "xorazim";

// console.log( user);
// console.log( copy);

// // 5- masala


// function hisoblash(...sonlar) {
//     let jami = 0;
//     for (let son of sonlar) {
//         jami += son;
//     }
//     return jami;
// }
// console.log(hisoblash(1,2,3,4,5,6,7,8,9,10))


