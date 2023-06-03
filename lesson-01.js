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

// ======================================================================
// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// const num = prompt("Введіть число!");
// let result = '';
// switch (num) {
//   case '1':
//     result='зима';
//     break;

//   case '2':
//     result='весна';
//     break;

//   case '3':
//     result='літо';
//     break;

//   case '4':
//     result='осінь';
//     break;

//   default:
//     result='Введіть число від 1 до 4!';

// }
// alert(result)

// ******************===
//Напишіть код, який буде питати
//логін за допомогою prompt и логіровати результат
//в консоль браузера

//Якщо користувач вводить "Адмін",
//то prompt запрашує пароль.
//Якщо ничого не ввели чи нажата клавіша Esc
//вивести строку "Скасовано"
//В противному випадку вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введен пароль "Я головний",
//то вивести рядок "Вітаю!"
//в іншому випадку виводити рядок "Невірний пароль!"

// const userLogin = prompt("Введіть логін!");

// console.log(userLogin);
// if (userLogin === "Адмін") {
//   let userPassword = prompt("Введіть пароль");
//   // if (userPassword === "Я головний") {
//   //   alert("Вітаю!");
//   // } else {
//   //   alert("Невірний пароль!");
//   // }
//   alert(userPassword === "Я головний" ? "Вітаю!" : "Невірний пароль!");
// } else if (userLogin === "" || userLogin === null) {
//   alert("Скасовано");
// } else {
//   alert("Я вас не знаю");
// }
// switch (userLogin) {
//   case "Адмін":
//     let userPassword = prompt("Введіть пароль");
//     alert(userPassword === "Я головний" ? "Вітаю!" : "Невірний пароль!");
//     break;

//   case "":
//     case null:
//       alert("Скасовано");
//     break;

//   default:
//     alert("Я вас не знаю");
// }
// ---------------------------------------------
// task-06
//При завантаженні сторінки користувачу пропонується
//в prompt ввести число. Ввод додається к значенню
//змінної total.
//Операція вводу числа продовжується до тих пір,
//доки користувач не натисне кнопку Cancel в prompt.
//Після того як користувач закінчив ввод натиснувши на
//кнопку Cancel, показати alert з рядком "Загальна сумма введенних чисел дорівнює [число]."
//Робити перевірку,що користувач ввів саме число,
//а не довільний набір символів, не потрібно.
// let num = prompt("Введіть число!");
// let total = 0;
// while (num) {
//   total += Number(num);
//   num = prompt("Введіть число!");
// }
// alert(`Загальна сумма введенних чисел дорівнює ${total}.`);

// let num = prompt("Введіть число!");
// let total = 0;

// while (num) {
//   if (!Number.isNaN(Number(num))) {
//     total += Number(num);
//   }

//   num = prompt("Введіть число!");
// }
// alert(`Загальна сумма введенних чисел дорівнює ${total}.`);

// ===============================

//Напишіть цикл, який пропонує ввести
//число більше 100 через prompt.
//Якщо користувач ввів інше число - попросити
//ввести ще раз и так далі.
//Цикл повинен питати число, доки користувач не
//введе число більше 100, чи не натисне кнопку
//Cancel в prompt

// let num = prompt("Введіть число більше 100!");
// while (num <= 100) {
//   num = prompt("Введіть число більше 100!");
//   if (num === null) {
//     break;
//   }
// }
// if (num) {
//   alert(num);
// }

// -========== 08
// В змінній minuteValue є число від 0 до 59.
// Визначте до якої чверті години входить
// це число(в першу, другу, треттю чи четверту).

const minuteValue = Math.floor(Math.random() * (59 - 0) + 0);

// if (minuteValue <= 15) {
//   console.log(`${minuteValue } -  в першу чверть`);
// } else if ( minuteValue <=30) {
//   console.log(`${minuteValue } -  в другу чверть`);
// } else if ( minuteValue <=45) {
//   console.log(`${minuteValue } -  в треттю чверть`);
// } else  {
//   console.log(`${minuteValue } -  в четверту чверть`);
// }


// if (minuteValue >= 0 && minuteValue <= 15) {
//   console.log(`${minuteValue } -  в першу чверть`);
// } 

// if ( minuteValue > 15 && minuteValue <= 30) {
//   console.log(`${minuteValue } -  в другу чверть`);
// } 

// if ( minuteValue > 30 && minuteValue <= 45) {
//   console.log(`${minuteValue } -  в треттю чверть`);
// } 

// if (minuteValue > 45 ) {
//   console.log(`${minuteValue } -  в четверту чверть`);
// }

//// The End




// Напиши функцію, яка перебирає масив логінів і перевіряє
// чи є ім'я введене в інпут у цьому масиві і у разі,
// якщо є - виводить повідомлення "Доступ дозволено"
// в іншому випадку - "Користувач не знайден"

// const logins = ["Peter", "John", "Igor", "Sasha"];
