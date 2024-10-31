// ? 1-misol
// ! Massiv elementlari yig‘indisi: Raqamlar massividagi barcha elementlarning yig‘indisini hisoblash uchun rekursiv funktsiyani yozing.

// let num = [2, 5, 12, 37, 44];
// let sum = 0;

// for (let i = 0; i < num.length; i++) {
//   sum += num[i];
// }
// console.log(sum);


// ? 2-misol
// ! Maslahat: Birinchi elementdan boshlang va massivning qolgan qismining yig'indisini
// ! rekursiv ravishda qo'shing. Quvvatni hisoblash: n (ya'ni, x") darajasiga ko'tarilgan
// ! 2 ni hisoblash uchun rekursiv funktsiyani yozing.

// function factorial(a, b) {
//   if (b === 0) {
//     return 1;
//   }
//   return a * factorial(a, b - 1);
// }
// console.log(factorial(4, 2));

// ? 2-misol tugadi

// ? 3-misol
  // ! Maslahat: Power(x, n) = xx power(z, n-1) dan asosiy quvvat(x, 0) = 1 bilan foydalaning.

// function power(a, b) {
//   if (b === 0) {
//     return 1;
//   }
//   return a * power(a, b - 1);
// }
// console.log(power(3, 3));

// ? 3-misol tugadi

// ? 4-misol 
// ! Maslahat: Birinchi belgini oling va uni satrning qolgan qismining teskari tomoniga qo'shing.

// function teskariString(str) {

//   if (str === "") {
//     return "";
//   } else {
//     return teskariString(str.slice(1)) + str[0];
//   }
// }

// console.log(teskariString("hello"));
