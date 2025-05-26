// ----------call--------------

// 1-masala

// function great() {
//     console.log(`Salom ,mening ismim ${this.name}`);
// }
// const user = { name: 'Ali' };

// great.call(user, this.name);


// // 2-masala

// function introduce(age, job) {
//     console.log(`Men ${this.name}, yoshim ${age}, kasbim ${job}.`);
// }
// const person = {
//     name: "Shahzod",
    
//  };
// introduce.call(person,25,"dasturchi");

// 3- masala


// const teacher = {
//     name: "Asad",
//     subject: 'Matematika',
//     introduce() {
//         console.log(`Men ${this.name}, ${this.subject} o'qituvchiman`);
//     }
// };
// const anotherTeacher = {
//     name: "Karim",
//     subject: "Fizika"
// }

// teacher.introduce.call(anotherTeacher, this.name, this.subject);


// ----------------Apply-----------------------------

// function calculate(a, b) {
//     console.log(`${this.operation} natijasi:${a + b}`);
// }

// const math = {
//     operation: "qoshish"
// }

// calculate.apply(math,[25,12])


// 2-masala

// function displayInfo(age, city) {
//     console.log(`Ism:${this.name}, Yoshi:${age}, Shahar:${city}`);
// };

// const user = {
//     name: "Dilshod"
// };
// displayInfo.apply(user, [25, "Toshket"]);


// 3- masala

// const teacher = {
//     name: "Asad",
//     subject: "Matematika",
//     introduce() {
//         console.log(`Men ${this.name}, ${this.subject} o‘qituvchisiman.`);
//     }
// };
// const anotherTeacher = { name: "Karim", subject: "Fizika" };

// teacher.introduce.apply(anotherTeacher,[this.name, this.subject])



// -------------Bind---------


// 1- masala

// function sayHello() {
//     console.log(`salom, men ${this.name}man`);
// }

// const user = {
//     name:"Begzod"
// }

// let salomlash = sayHello.bind(user)
// salomlash()


// 2- masala


// function introduce(age, job) {
//     console.log(`Men ${this.name}, yoshim ${age}, kasbim ${job}.`);
// }

// const person = { name: "Shahzod" };


// let newperson = introduce.bind(person);
// newperson(25, "Dasturchi");


// 3-masala

// const mathOperations = {
//     add(a, b) {
//         console.log(`${this.operation} natijasi: ${a + b}`);
//     }
// };

// const calculator = { operation: "Qo‘shish" };

// let qoshamiz = mathOperations.add.bind(calculator);

// qoshamiz(22,45)


// -------Number-------------------

// 1- misoll


// let son = 1234.456467

// console.log(son.toFixed(2))


// 2-misoll

// let son = 12.34535
// console.log(son.toPrecision(4))


// 3- misoll

// let son = 15
// console.log(Number(son).toString(16))


// 4- misoll

// let son = "42px"
// let num =parseInt(son)
// console.log(num);

// 5- misoll

// let son = "3.14m"

// console.log(parseFloat(son))

// 6- misoll

// let matn = "salom"
// if (isNaN(matn)) {
//     console.log('bu son emas');
// } else {
//     console.log("bu son");
// }


// 7- masala

// let son = 2434
// if (isFinite(son)) {
//     console.log("bu cheksiz son")
// } else {
//     console.log("yoq")
    
// }

// 8- masala

// let son = -12121
// console.log(Math.abs(son))

// 9- misoll

// let a = 2, b = 4

// console.log(Math.pow(a,b  ))


// 10 misoll


// let son = 81
// console.log(Math.sqrt(son));

// 11- misoll

// let soz = "Assalom"
// console.log(soz.charAt(3))

// 12-misoll

// let soz = "salomaleykum"
// console.log(soz.toUpperCase())

// 13- misoll

// let soz ="AASALOM"
// console.log(soz.toLowerCase());

// 14- misoll

// let soz = "  asasallom     "
// console.log(soz.trim())

// 15- moisoll

// let soz = "assalom"

// console.log(soz.slice(3,6));


// // 16- misoll

// let soz=  "asalllom"

// console.log(soz.substring(2,7))

// 17- misoll

// let soz = "assalom dunyo"

// let matn =soz.replace("dunyo", "shuxrat")
// console.log(matn)


// 18- misoll


// let soz = "dunyo"
// console.log(soz.indexOf("n"))


// 19- misoll

// let soz = "assalom dunyo "
// if (soz.includes("dunyo")) {
//     console.log("bor");
// } else {
//     console.log("yoq");
    
// }

// // 20- misoll

// let soz = "olma, anor, uzum"
// console.log(soz.split(","))



// ---------Number+++++++++++

// 21- isoll

// let son = 2.65
// console.log(Math.ceil(son));

// 22-misoll

// let son = 2.65
// console.log(Math.floor(son));

// 23-misoill

// let son = 2.65
// console.log(Math.round(son));

// 24- misoll

// let son = 2.65
// console.log(Math.trunc(son));

// 25- misoll

// let son = Math.random()
// console.log(son);

// 26- misoll
// let a = 33, b=44, c=66
// console.log(Math.max(a,b,c));


// 27- misoll
// let a = 33, b=44, c=66
// console.log(Math.min(a,b,c));

// 28- misoll


// let son = 2.45;


// if (Number.isInteger(son)) {
//     console.log('butun son');
// } else {
//     console.log('kasr son');
// }

// -----------String++++

// 29-  misoll

// let soz ="assalom"
// console.log(soz.repeat(3));

// 30- misoll

// let raqam = 23
// let box = raqam.padStart(5, '0');
// console.log(box);

// 31- misoll

// let raqam = 45
// let box = raqam.padEnd(5, '0');
// console.log(box);

// 32- misoll

// let soz = "assalom"
// let harf ="a"
// if (soz.startsWith(harf)) {
//     console.log('ha ');
    
// } else {
//     console.log('yoq');
    
// }


// 33-misoll

// let soz = "assalom"
// let harf ="m"
// if (soz.endsWith(harf)) {
//     console.log('ha ');
    
// } else {
//     console.log('yoq');
    
// }

// 34- misoll

// let soz1= 'assalom', soz2 = 'aleykum'
// console.log(soz1.concat( soz2));


// 35- misoll

let soz= "assalom"
console.log(soz.lastIndexOf("s"));












// function greet() {
//     console.log(`salom-${this.name} ahvollar yaxshimi`);
// };

// let person1 = {
//     name: 'Shuxrat'
// };

// let person2 = {
//     name: 'Jamshid'
// };

// greet.call(person1)
// greet.call(person2)



// function showInfo() {
//     console.log(this.nomi,this.son)
// }
// let client1 = {
//     nomi: 'gul',
//     son: 5
// };

// let client2 = {
//     nomi: 'pul',
//     son: 50000
// };
// showInfo.apply(client1,[this.nomi,this.son]);
// showInfo.apply(client2,[this.nomi,this.son]);



// function getFullName() {
//     console.log(this.ismi, this.familiyasi);
// };

// let employee = {
//     ismi: "Shuxrat",
//     familiyasi: "Anorboyev"
// };

// let grtEployee = getFullName.bind(employee);
// grtEployee()

// ------------------------
// const user = 1

// let com = Math.round(Math.random() * 3);
// if (com == 1) {
//     console.log('tow')
// } else if (com==2){
//     console.log('qaychi')
// } else {
//     console.log('qogoz');
// }

// function play(user, com) {
//     if (com==user) {
//         console.log('durang');
//     } else {
//         console.log("yana bosing");
//     }
// };

// play()