// //Використовуя функцію if...else,
// //напишіть код, який буде питати:
// //"Яка офіційна назва JavaScript?"
// //Якщо користувач вводить "ECMAScript",
// //то показати через alert: "Вірно!"
// //в противному випадку відобразити:"Не знаєте? ECMAScript!"

// const jsName = prompt("Яка офіційна назва JavaScript?");

// // if (jsName === "ECMAScript") {
// //   alert("Вірно!");
// // } else {
// //   alert("Не знаєте? ECMAScript!");
// // }

// alert(jsName === "ECMAScript" ? "Вірно!" : "Не знаєте? ECMAScript!");

// *******======// *******======// *******======// *******======
// Напишіть программу, яка отримує від користувача
// число (кількість хвилин) и виводить у консоль
// рядок у форматі годин та хвилин
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10

// const number = prompt("Введіть число!");
// let hours = Math.floor(number / 60);
// hours = String(hours).padStart(2, 0);
// let minutes = number % 60;
// minutes = String(minutes).padStart(2, 0);

// console.log(`${hours}:${minutes}`);

// Task-3

//Напишіть цикл, який виводить в консоль
//числа от max до min по зменьшенню
//Виведіть в консоль суму усіх парних чисел

// const min = 1;
// const max = 10;

// let sum = 0;

// // for (let i = max; i >= min; i -= 1) {
// //   console.log(i);

// //   if (i % 2 === 0) {
// //     sum += i;
// //   }
// // }

// for (let i = max; i >= min; i -= 1) {
//   console.log(i);

//   if (i % 2 !== 0) {
//     continue;
//   }

//   sum += i;
// }
// console.log(sum);
