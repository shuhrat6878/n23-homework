/** 
1. Unikal soвЂzlar hisoblagichi:
   - Berilgan matndagi har bir soвЂz necha marta qatnashganini hisoblang.
   - Natijani Map koвЂrinishida qaytaring.
   - Masalan: "apple banana apple orange banana apple" в†’ Map { 'apple' => 3, 'banana' => 2, 'orange' => 1 }

2. Foydalanuvchi ID larini nomga bogвЂlash:
   - Berilgan foydalanuvchilar roвЂyxati: [{id: 1, name: 'Ali'}, {id: 2, name: 'Vali'}]
   - Har bir foydalanuvchining id sini Map kaliti qilib, ismni qiymat qilib saqlang.
   - Natija: Map { 1 => 'Ali', 2 => 'Vali' }

3. Mapdan qiymat boвЂyicha qidiruv:
   - Berilgan Map ichidan maвЂ™lum bir qiymatga mos keladigan kalitni toping.
   - Masalan: Map { 'a' => 1, 'b' => 2, 'c' => 3 }, qiymat: 2 в†’ chiqish: 'b'

4. Map elementlarini alfavit boвЂyicha saralash (kalit boвЂyicha):
   - Map ni kalitlar boвЂyicha alfavit tartibida saralang va yangi Map yarating.

5. Ikki Map ni birlashtirish:
   - Ikkita Map bor: map1 va map2.
   - Ikkalasini birlashtiring. Agar kalitlar bir xil boвЂlsa, map2 dagi qiymat ustunlik qiladi.

6. Belgilangan qiymatlarni koвЂpaytirish:
   - Map dagi faqat son (number) qiymatlarga ega elementlarni toping.
   - Ularning qiymatini 2 ga koвЂpaytirib, yangi Map yarating.

7. Map ni teskari qilish:
   - Har bir qiymatni kalit, kalitni qiymat sifatida yangi Map yarating.
   - Masalan: Map { 'x' => 1, 'y' => 2 } в†’ Map { 1 => 'x', 2 => 'y' }

8. Map orqali elementlar sonini hisoblash:
   - Berilgan Map da nechta kalit mavjudligini aniqlang.
   - Masalan: Map { 'a' => 1, 'b' => 2 } в†’ 2

9. Map ichidan faqat juft son qiymatlarni ajratish:
   - Map dagi qiymatlarni tekshirib, faqat juft sonlarga ega boвЂlgan elementlardan yangi Map yarating.

10. Sana boвЂyicha qiymatlarni Mapda saqlash va sortlash:
    - Mapda sana formatidagi kalitlar bor (masalan: '2023-06-01').
    - Map ni sanalarga qarab sortlab, yangi Map yarating.
    - Masalan: Map { '2023-06-01' => 100, '2021-01-01' => 80 } в†’ Map { '2021-01-01' => 80, '2023-06-01' => 100 }
*/


// // 1-masala

// function takrorsoz(matn) {
//     const sozlar = matn.split(' ')
//     const yangiMap = new Map();

//     for (const soz of sozlar) {
//         const kichik = soz.toLowerCase();
//         if (yangiMap.has(kichik)) {
//             yangiMap.set(kichik, yangiMap.get(kichik) + 1);
            
//         } else {
//             yangiMap.set(kichik, 1);
//         }

//     }
//     return yangiMap
// }
// const text = "apple banana apple orange banana apple";
// const result = takrorsoz(text);
// console.log(result)


// // 2- masala
// function ozgartir(arr) {
//     const yangiMap = new Map()
//     for (let box of arr) {
//         yangiMap.set(box.id, box.name);
//     }
//     return yangiMap
// }

// let person = [{ id: 1, name: 'Ali' },
//             {   id: 2, name: 'Vali'
//  }]

//  console.log(ozgartir(person));
 

// 3- masala

// function findKeyByValue(map, toValue) {
//   for (const [key, value] of map) {
//     if (value === toValue) {
//       return key;
//     }
//   }
//   return null;
// }


// let map = new Map([
//   ['a', 1],
//   ['b', 2],
//   ['c', 3]
// ]);
// const result = findKeyByValue(map, 2);
// console.log(result);

// // 5- masala


// function birlashtir(map1, map2) {
//   return new Map([...map1, ...map2]);
// }

// const map1 = new Map([
//   ['a', 1],
//   ['b', 2]
// ]);

// const map2 = new Map([
//   ['b', 20],
//   ['c', 3]
// ]);

// const res = birlashtir(map1, map2);
// console.log(res);

// 6- masala

// function kopaytma(map) {
//   const newMap = new Map();

//   for (const [key, value] of map) {
//     if (typeof value === 'number') {
//       newMap.set(key, value * 2);
//     }
//   }
//   return newMap;
// }

// const yangiMap = new Map([
//   ['a', 5],
//   ['b', 'hello'],
//   ['c', 10],
//   ['d', true]
// ]);

// const result = kopaytma(yangiMap);
// console.log(result);


// 7- masala

// function teskari(map) {
//   const reversed = new Map();

//   for (const [key, value] of map) {
//     reversed.set(value, key);
//   }
//   return reversed;
// }

// const map = new Map([
//   ['x', 1],
//   ['y', 2]
// ]);

// const res = teskari(map);
// console.log(res);

// 8- misoll

// function box(map) {
//   return map.size;
// }

// const map = new Map([
//   ['a', 1],
//   ['b', 2]
// ]);

// const res = box(map);
// console.log(res);

// 9- misoll


// function juftlar(map) {
//   const newMap = new Map();

//   for (const [key, value] of map) {
//     if (typeof value === 'number' && value % 2 === 0) {
//       newMap.set(key, value);
//     }
//   }
//   return newMap;
// }
// const map = new Map([
//   ['a', 1],
//   ['b', 2],
//   ['c', 3],
//   ['d', 4],
//   ['e', 'hello']
// ]);

// const result = juftlar(map);
// console.log(result);

// 10-masala


let map = new Map()
map.set('2020.12.01', 100)
map.set('2021.11.01', 80)
map.set('2022.10.01', 90)
map.set('2017.10.09',55)

const news = new Map(
   [...map.entries()].sort()
)
   
console.log(news);

















// let person ={
//   "Joel" : 32,
//   "Fred" : 44,
//   "Reginald" : 65,
//   "Susan" : 33,
//   "Julian" : 13
// };

// const afterNYears=(obj, year) =>{
    
//     for (i in obj) {
//         obj[i]+=year
//     }
//     return obj

// }
// console.log(afterNYears(person, 1));


// const input = "Every developer likes to mix kubernetes and javascript";

// const fn = (gap) => gap.split(" ").map((item) => item.length > 3 ? `${item[0]}${item.length - 2}${item[item.length - 1]}`:item).join(" ")
    

// const result = fn(input)
// console.log(result);


// console.log(2>3?'ha':10>2?'kjjh':'hjhj');

