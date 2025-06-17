
// 1- masala

// function umumiy(son,son1){
//   const qoshish = son.filter((el) => son1.includes(el));
//   console.log(qoshish)
  
// }
// son = [1, 2, 3];
// son1 = [2, 3, 4]

// umumiy(son, son1);


// 2-masala

// function takror(arr) {
//     res = []
//     for (let i = 0; i < arr.length - 1; i++){
//         for (let j = i+1; j<arr.length; j++){
//             if (arr[i] == arr[j]) {
//                 res.push(arr[i])
//             }
//         }
//     }
//     return [... new Set(res)]
// }
// const mas = [1, 2, 2, 3, 3, 4, 5]
// console.log(takror(mas));




// 3- masala

// function telnomer(raqam) {
//     let raqamlar = `${raqam.slice(0, 3).join('')} - ${raqam.slice(3, 6).join('')} - ${raqam.slice(6).join('')}`
//     console.log(raqamlar);
    
// }

// tel = [9, 0, 1, 7, 5, 4, 3, 2, 1, 1]
// telnomer(tel)



// 4- masala

// function yigindi(son) {
//     let sonlar = son.toString().split('').map(Number).reduce((a, b) => a + b, 0);
//     return sonlar
    

// }
// let son = 4567

// console.log(yigindi(son));


// 5-masala



// function takror(arr) {
//      let res = []

//     for (let i = 0; i < arr.length ; i++){
//         let box = 0
//         for (let j = 0; j<arr.length; j++){
//             if (arr[i] === arr[j]) {
//                 box++
//             }
//         }
//         if (box ===1) {
//             res.push(arr[i])
//         }
//     }
//     return res
// }
// const mas = [1, 2, 2, 3, 3, 4, 5]
// console.log(takror(mas));

// 6-masala


// function Polindromlar(matn) {
//     let res = matn.filter(el => el=== el.split('').reverse().join(''))
//     return res
// }
// matn =  ['olma', 'non', 'kitob', 'alla']
// console.log(Polindromlar(matn));



// 7-masala


// function boshHarf(soz) {
//     let natija = soz.split(' ').map(e => e[0].toUpperCase())
//     return natija.join('')
// }
// matn = "National Aeronautics Space Administration";
// console.log(boshHarf(matn))

// 8-masala

// function teskari( matn){
//     const soz = matn.split(' ').reverse().join(' ');
//     return soz
// }
// soz = "Men JavaScript organmoqdaman";
// console.log(teskari(soz));



// 9- masala

// function raqamlar(str) {
//     let son = str.split('').every(el => !isNaN(el))
//     return son
// }
// son = '12345'
// son2 ='12d23'
// console.log(raqamlar(son));
// console.log(raqamlar(son2));

// 10-masala


// let obj = [
//     { name: "Ali", age: 22 },
//     { name: "Vali", age: 19 },
//     { name: "Sami", age: 25 }]

// function yoshboyicha(arr) {
//     const matn = arr.sort((a, b) => a.age - b.age)
//     return matn
// }
// console.log(yoshboyicha(obj));


// // 11-misoll


// function tub(son) {
//     if (son < 2) {
//         return false
//     }
//     for (let i = 2; i<Math.sqrt(son); i++) {
//         if (son % i === 0) {
//             return false
//         }
//     }
//     return  true
        
// }
// son = 7
// console.log(tub(son));

// 12- misoll

// function maxx(arr) {
//     let box = arr.sort((a, b) => b - a)
//     for (let i = 0; i < arr.length - 1; i++){
//         box[i] < box[i + 1]
//         return box[i+1]
//     }
// }
// son = [3, 5, 7, 2, 8];
// console.log(maxx(son));


// 13-masala




// 14-masala


// function juft(arr) {
//     let yigindi =0
//     for (let res of arr) {
//         if (res % 2 == 0) {
//            yigindi+=res
//        }
//     }
//     return yigindi
// }
// son = [1, 2, 3, 4, 5, 6]
// console.log(juft(son));

// 15-masala

// function Unli(str) {
//     let unlilar = 'aouie'
//     let res = ''
//     for (let i of str.split("")) {
//         if (unlilar.includes(i))
//             res+=i
//     }
//     return res
// }
// matn  ='salom dunyo'
// console.log(Unli(matn));



// 16-masala


// function boshiga(arr, n) {
//     for (let i = 1; i<= n; i++){
//         let box = arr.splice(arr.length - 1, 1);
//         arr.unshift(box[0]);
//     }
//     return arr
// }

// console.log(boshiga([1,2,3,4,5],2));
