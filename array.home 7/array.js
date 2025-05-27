/**1. for loop masalasi
Masala:
Berilgan sonlar massivida faqat juft sonlarni ajratib, yangi massivga joylashtiring.
Misol:
Input: [1, 4, 7, 10, 3, 8]  
Output: [4, 10, 8]


2. forEach masalasi
Masala:
Berilgan massivdagi har bir elementni kvadratga oshirib ekranga chiqaring.
Misol:
Input: [2, 3, 5]  
Output: 4, 9, 25


3. includes masalasi
Masala:
Berilgan massivda "olma" so‘zi bor yoki yo‘qligini tekshiring.
Misol:
Input: ["banan", "shaftoli", "olma", "gilos"]  
Output: true

4. length masalasi
Masala:
Berilgan massivdagi elementlar sonini qaytaruvchi funksiya yozing.
Misol:Input: [3, 7, 1, 9] Output: 4

5. shift masalasi
Masala:
Berilgan massivning birinchi elementini olib tashlang va yangilangan massivni qaytaring.
Misol:
Input: [10, 20, 30]  
Output: [20, 30]

6. unshift masalasi
Masala:
Berilgan massivning boshiga yangi element qo‘shing va yangilangan massivni qaytaring.
Misol:
Input: ([5, 10, 15], 2)  
Output: [2, 5, 10, 15]

7.  pop masalasi
Masala:
Berilgan massivning oxirgi elementini o‘chiring va yangi massivni qaytaring.
Misol:
Input: [1, 2, 3, 4]  
Output: [1, 2, 3]


8. push masalasi
Masala:
Berilgan massivning oxiriga yangi element qo‘shing va yangi massivni qaytaring.
Misol:
Input: ([8, 9], 10)  
Output: [8, 9, 10]

9. splice masalasi
Masala:
Berilgan massivning 2- va 3-elementlarini o‘chiring va yangilangan massivni qaytaring.
Misol:
Input: [1, 2, 3, 4, 5]  
Output: [1, 4, 5]

10. slice masalasi
Masala:
Berilgan massivdan 3-chi indeksdan boshlab oxirigacha bo‘lgan qismini oling.
Misol:
Input: [10, 20, 30, 40, 50]  
Output: [40, 50]


11. concat masalasi
Masala:
Berilgan ikkita massivni birlashtiring va natijani qaytaring.
Misol:
Input: ([1, 2], [3, 4])  
Output: [1, 2, 3, 4]

12. indexOf masalasi
Masala:
Berilgan massivda ma'lum bir element qaysi indeksda joylashganligini topuvchi funksiya yozing. Agar element bo‘lmasa, -1 qaytaring.
Misol:
Input: ([5, 10, 15, 20], 15)  
Output: 2

13. lastIndexOf masalasi
Masala:
Berilgan massivda bir xil elementlardan oxirgisining indeksini topuvchi funksiya yozing.
Misol:
Input: ([3, 7, 3, 1, 3], 3)  
Output: 4
*/

// 1-masala


// let arr= [1, 4, 7, 10, 3, 8]
// for (let i = 0; i< arr.length; i++){
//     if (i % 2 ) {
//         console.log(arr[i]);
//     }
// }

// 2-mASALA


// let arr = [2, 3, 5]
// arr.forEach((i) => console.log(i ** 2));

// // 3- masala


// let arr = ["banan", "shaftoli", "olma", "gilos"];
// console.log(arr.includes("olma"))


// 4- masala

// let arr = [3, 7, 1, 9]
// console.log(arr.length);


// 5- masala


// let arr = [10,20, 30]
// arr.shift()
// console.log(arr);

// 6- masala


// let arr = [5, 10, 15]
// arr.unshift(2)
// console.log(arr);

// 7- masala

// let arr = [1,2,3,4]
// arr.pop()
// console.log(arr);


// 8- masala


// let arr = [8,9]
// arr.push(10)
// console.log(arr);


// 9-msasla


// let arr = [1,2,3,4,5]
// arr.splice(1,2)
// console.log(arr);

// 10-msala


// let arr = [10,20,30,40,50]
// let newarr=arr.slice(3)
// console.log(newarr);

// 11- masala

// let arr = [1,2]
// let arr2 = [3,4,]
// console.log(arr.concat(arr2))

// 12-msalaa

// let arr = [5, 10,15, 20]
// let arr2 = arr.indexOf(15)
// console.log(arr2);


// 13-masala

// let arr = [3, 7, 3, 1, 3]
// let arr2=arr.lastIndexOf(3)
// console.log(arr2);














// -----------o'shimcha:--------------
/**
1:

Nechta true borligini chiqarish

countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0

2:

Array ichidagi sonlarini tashqaridagi argumentga ko'paytirish:

multiply([1, 2, 3])(2) ➞ [2, 4, 6]

multiply([4, 6, 5])(10) ➞ [40, 60, 50]

multiply([1, 2, 3])(0) ➞ [0, 0, 0]

3:

Array ichidagi sonlarini cubini bir-biriga qo'shish:

sumOfCubes([1, 5, 9]) ➞ 855

// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

sumOfCubes([3, 4, 5]) ➞ 216

sumOfCubes([2]) ➞ 8

sumOfCubes([]) ➞ 0

4:

spelling("bee") ➞ ["b", "be", "bee"]

spelling("happy") ➞ ["h", "ha", "hap", "happ", "happy"]

spelling("eagerly") ➞ ["e", "ea", "eag", "eage", "eager", "eagerl", "eagerly"]

5:

Guruhda necha kishi online ekanini ko'rsatish

chatroomStatus([]) ➞ "no one online"

chatroomStatus(["paRIE_to"]) ➞ "paRIE_to online"

chatroomStatus(["s234f", "mailbox2"]) ➞ "s234f and mailbox2 online"

chatroomStatus(["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91"]) ➞ "pap_ier44, townieBOY and 4 more online"
 
*/



































// 1-misolll

// let meva = ['olma', " nok"]

// meva.push("banan");
// console.log(meva);


// 2-misoll

// let arr = ["olma", "banan", "anjir"]
// arr.pop()
// console.log(arr);

// arr.unshift("it")
// console.log(arr);

// arr.shift()
// console.log(arr)

// console.log(arr.length);
// console.log(arr);


// let arr = [];
// arr.push("arra","banan","olma")
// console.log(arr);

// arr.unshift("qizil", "yashil")
// console.log(arr);

// while (arr.length > 0) {
//     arr.pop()
// }
// console.log(arr);


// const arr =[1, 2, 3, 4, 5]

// for (let i = 0; arr.length > i; i++){
//     console.log(arr[i]);
    
// }


// const arr = [1, 2, 3, 4, 5, 6];

// if (arr.length > 5) {
//     console.log('katta');
    
// } else {
//     console.log("kichik");
    
// }

// const arr = [1, 2, 3, 4, 5, 6];

// while (arr.length > 3) {
//     arr.shift();
// }

// console.log(arr); 

