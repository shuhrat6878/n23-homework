
// 1- masala

// const person1 = { name: "ali" };

// const days = new WeakMap();

// days.set(person, 12);

// function getSubscriptionDays(user) {
//   if (days.has(user)) {
//     return days.get(user);
//   } else {
//     return "user not found";
//   }
// }

// console.log(getSubscriptionDays(personn));
// console.log(getSubscriptionDays({ name: "ali" }));


// // // 2- masala


// const vali = { pasword: 12345 };
// const maxfiy = new Map();
// maxfiy.set(vali, vali.pasword);

// function getPassword(user) {
//   if (maxfiy.has(user)) {
//     return maxfiy.get(user);
//   } else {
//     return "access denied"
//   }
// }
// console.log(getPassword(vali));
// console.log(getPassword({pasword:121212}));


// 3-masala

// const person = { name: 'ali' }

// const yangiSet = new Set();
// yangiSet.add(person);


// function isLoggedln(user) {
//   if (yangiSet.has(user)) {
//     return true
//   } else {
//     return false
//   }
// }
// console.log(isLoggedln(person))
// console.log(isLoggedln({ name: "vali" }));


// 4-masala

// const massage = { ali: 'salom' };

// const newSet = new Set();

// newSet.add(massage);

// function hasSentMassage(user) {
//   if (newSet.has(user)) {
//     return true
//   } else {
//     return false
//   }
// }
//  console.log(hasSentMassage(massage));
//  console.log(hasSentMassage({vali:'salom'}));
 


// 5- masala

// const user = {
//     name: "Ali",
//     age: 25,
//     address: {
//         city: "Toshkent",
//         country: "O‘zbekiston"
//     }
// };

// const { age, name, address } = user;
// console.log(age,name,address);


// 6- masala

// const products = ["Noutbuk", "Telefon", "Planshet", "Smartwatch"];

// const [fristProduct, secondProduct, ...otherProduct] = products

// console.log(fristProduct);
// console.log(secondProduct);
// console.log(otherProduct);


// 7- maSALA

// const person = {
//   name: 'Shuxrat',
//   age: 26

// }
// const person2 = {
//   name:'Bobur'
// }
// function destreuctPerson({name, age=18}){
//   console.log(name);
//   console.log(age);
  
// }
// destreuctPerson(person)
// destreuctPerson(person2)


// 8- masala


// const company = {
//     name: "Tech Corp",
//     employees: {
//         manager: { name: "Shahzod", age: 30 },
//         developer: { name: "Sardor", age: 25 }
//     }
// };

// const { employees:
//   { manager: { name: managerName, age: managerAge } } } = company;

// console.log(managerName);
// console.log(managerAge);



































// const students = new Set([
//   { name: "Alice", scores: [90, 85, 92] },
//   { name: "Bob", scores: [100, 100, 100] },
//   { name: "Charlie", scores: [90, 95, 85] },
//   { name: "Jack", scores: [100, 100, 100] }
// ]);


// for (let i of students) {
//     let sum = i.scores.reduce((a, b) => (a += b) / i.scores.  length);

// }
// console.log(students)
