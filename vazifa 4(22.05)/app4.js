/**Declaration function
1. Berilgan ikki sondan kattasini topish
input: findMax(10, 25)
output: 25

2. Belgini unli yoki undosh harf ekanligini aniqlash
input: isVowel("a")
output: "Unli harf"

3. Foydalanuvchining yoshiga qarab toifasini aniqlash
input: ageCategory(16)
output: "O'smir"

4. Son 3 ga va 5 ga bo‘linishini tekshirish
input: checkDivisibility(15)
output: "3 va 5 ga bo‘linadi"

5. Berilgan sonning raqamlari faqat o‘sish tartibida joylashgan bo‘lsa, "Raqamlar o'sish tartibida" deb qaytaring, aks holda "Raqamlar tartibsiz" deb qaytaring.
input: checkIncreasingOrder(1234)
output: "Raqamlar o'sish tartibida"
input: checkIncreasingOrder(1243)
output: "Raqamlar tartibsiz"
*/

// ----declaration function------
// 1-masala

// function findMax(a, b) {
//     if (a > b) {
//         return a;
//     } else if (a < b) {
//         return b;
//     } else {
//         return "ikkisi teng"
//     }
// }
// console.log(findMax(10,15));


// 2-masala

// function isVowel(harf) {
//     let matn = 'aeiou';
   
//         if (matn.includes(harf)) {
//             return 'unli harf';
//         } else {
//             return 'unli emas';
//         }
    
// }
// console.log( isVowel('a'));


// 3-masala

// function ageCategory(yosh) {
//     if (yosh>0 && yosh <=12 ) {
//         return 'yosh bola'
//     } else if(yosh > 12 && yosh <= 18){
//         return 'osmir';

//     }else {
//         return 'katta'
//     }
// }
// console.log( ageCategory(16));
// console.log( ageCategory(29));
// console.log( ageCategory(1));


// 4-masala


// function chackDivisibility(num) {
//     if (num % 3 == 0 && num % 5 == 0) {
//         return "3 va 5 ga bo'linadi"
//     } else {
//         return 'son 3 va 5 ga bolinmaydi'
//     }
// }
// console.log( chackDivisibility(15));


// 5- masala

// function checkIncreasingOrder(num) {
//     let raqam = num.toString();
//     for (let i = 0; i < raqam.length - 1; i++){
//         if (raqam[i] >= raqam[i + 1]) {
//             return 'raqamlar tartibsiz'
//         }
//     }
//     return " raqamlar tartiblangan"
// }

// console.log( checkIncreasingOrder(1234));
/** 
Expression function

Masala 1: Berilgan sonni 10 ga bo'ling. Agar qoldiq 0 bo'lsa, sonni 2 ga bo'ling, aks holda 3 ga ko'paytiring.
Input: 50
Output: 25 (50 ning qoldiqi 0, shuning uchun 50 ni 2 ga bo'lamiz, natija 25 bo'ladi.)

Masala 2: Sonni boshidan va oxiridan tekshirish
Vazifa: Agar berilgan sonning bosh va oxirgi raqami teng bo'lsa, "True" qaytaring, aks holda "False" qaytaring.
Input: 121
Output: True
Masala 3: To'g'ri burchakli uchburchakning perimetrini hisoblash
Vazifa: To'g'ri burchakli uchburchakning ikki katetini bilgan holda uning perimetrini hisoblang.
Input: Katetlar: 5, 12
Output: 30
*/
//-------- exsperesion function------------------

// 1-masala

// let zor = function (num) {
//     if (num % 10 == 0) {
//         return num / 2;
//     } else {
//         return num * 3;
//     }
// }
// console.log( zor(49));


// 2-masala

// let tenglik = function (son) {
//     let raqam = son.toString();
//     let birinchi = raqam[0];
//     let oxirgi = raqam[raqam.length - 1];
//     return birinchi === oxirgi;
// }

// console.log(tenglik(121));
// console.log(tenglik(123));

// 3- masala

// let uchburchak = function (a, b) {
//     let c = Math.sqrt(a * a + b * b)
//     console.log(`gipateniza`,c);
//     console.log('peremetr',a+b+c);
    
// }
// uchburchak(12,5)

/** 
Arrow function

Masala 1: Sonni teskari tartibda chiqarish
Vazifa: Berilgan sonni teskari tartibda chiqarish.
Input: 12345
Output: 54321

Masala 2: Kuchli Sonni aniqlash (oddiy variant)
Berilgan sonning kuchli son ekanligini aniqlang. Kuchli son — bu son o'zining raqamlarining kubining yig'indisiga teng bo'lgan son.
Input: 153
Output: true

Masala 3: Raqamlar yig'indisini hisoblash
Berilgan sonning raqamlar yig'indisini hisoblang.
Input: 1234
Output: 10
*/

// ----------arrow function-------------

// 1- masala

// const teskari = (num) => {
//     let box = 0;
//     while (num > 0) {
//         let son = num % 10
//         box = (box * 10) + son
//         num= +(num/10)
//     }
//     return box
    
// }
// console.log( teskari(1234));

// 3- masala

// const yigindi = (num) => {
//     let raqam = num.toString();
//     let yigndi =0
//     for (let i = 0; i < raqam.length; i++){
//         yigndi += +raqam[i];
//     }
//     return yigndi; 
// }
// console.log(yigindi(1234));


