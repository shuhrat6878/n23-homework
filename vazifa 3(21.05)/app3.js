// // 1-vazifa
// let n = 567
// let yigindi = 0

// while (n > 0) {
//     let son = n % 10;
//     yigindi += son;
//     n = Math.floor(n / 10);
// }
// console.log(yigindi)


// // 2-masala

// let n = 12345
// let box = 0
// while (n > 0) {
//     let son = n % 10
//     box = (box * 10) + son
//     n= Math.floor(n/10)
// }
// console.log(box);


// 3-masala

// let son = ''
// let parol = '1234'
// while (son !== parol) {
//     son = prompt('parol yoz')
//     if (son == parol) {
//         console.log('xush kelibsiz');
//         break;
//     } else {
//         console.log('notogri.qayta urunub koring ');
//         break;
//     }
// }
    
// // 4-masala
// let n = 1
// let fak = 1
// while (n <= 5) {
//     fak *= n
//     n++
// }
// console.log(fak)


// 5-masala

// let son =prompt('son kiriting');
// let tub = true;

// if (son > 1) {
//   let i = 2;
//   while (i < son) {
//     if (son % i === 0) {
//       tub = false;
//       break;
//     }
//     i++;
//   }
// } else {
//   tub = false;
// }

// if (tub) {
//   console.log("tub son");
// } else {
//   console.log("tub son emas");
// }

// ---------for----------
// 1-masala
// let n = 5, yigindi=0

// for (let i = 0; i <= n; i++){
//     yigindi+=i
// }
// console.log(yigindi);


// 2-masala

// let n = 12
// for (let i = 1; i <= 12; i++){
//     if (n % i == 0) {
//         console.log(i);
        
//     }
// }

// 3- maala

// let n = 35724//prompt('n ta son kiriting')
// let matn = n.toString()
// let raqam =matn.split('')
// let yigndi =0
// for (let i = 0; i < raqam.length ; i++){
//     yigndi+=+raqam[i]
// }
// console.log(yigndi);

// 4-masala
// let n= prompt('n ta qiymat kirt')
// for (let i = 1; i <= n; i++){
//     let a = prompt('son', [i]);
//     if (a % 2 == 0) {
//         console.log(a);
        
//     }
// }

// 5-masala

// let n = 4

// for (let i = 1; i <= n; i++){
//     let kub = i ** 3;
//     console.log(kub);
    
// }

// ------------do-while----------

// 1-masala

// let N = 4;

// let i = 1;
// let box = "";

// do {
//   let kvadrat = i * i;
//   box += `${i} -> ${kvadrat}`;
//   if (i < N) {
//     box += ", ";
//   }
//   i++;
// } while (i <= N);

// console.log(box);

// 2-masala

// let n = 234;
// let kopaytma = 1;

// while (n > 0) {
//   let raqam = n % 10;
//   kopaytma *= raqam;
//   n = Math.floor(n / 10);
// }
// console.log(`Raqamlar ko'paytmasi: ${kopaytma}`);

// 3-masala

// let n = 1
// do {
//     if (n % 2 != 0) {
//         console.log(n);
//     }
//     n++;

// } while (n <= 9);

// 4-masala

// let n = 86941
// let son = n.toString();
// let katta=0
// for (let i = 0; i < son.length; i++){
//     let raqam = +son[i]
//     if (raqam > katta) {
//         katta = raqam;
//     }
// }
// console.log(katta);



// 5-masala

// let n = '86941'
// let bel = '5'
// let raqam = n.split('');
// do {
    
//     if (raqam == bel) {
//         console.log('5 ga teng');
        
//     }
// }while(n.length-1>=0)



// --------------qopshimcha-------------------------------

// 111111111111111

// for (let i = 0; i < 5; i++){
//     let a=''
//     for (let j = 0; j < 5; j++){
//         a+=' * '
//     }
//     console.log(a);
    
// }

// 2222222222222222222222
// let n = 3
 
// for (let i = 1; i <= n; i++) {
//     let son = ''
//     for (j = 1; j <= n; j++){
//         for(let g=1;g<=n;g++){
//             console.log(i,j,g)
//         }
//     }
// }