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



