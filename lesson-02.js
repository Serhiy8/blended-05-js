// Створіть масив styles з елементами 'Джаз' і 'Блюз'
//Додайте в кінець 'Рок-н-ролл'
//Заменіть значення 'Блюз' на 'Класика'
//Видаліть перший елемент масива та виведіть його в консоль
// Додайте 'Реп' та 'Реггі' на початок списку.

// const styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-ролл");

// const index = styles.indexOf("Блюз");
// // styles[index] = "Класика";
// styles.splice(index, 1, "Класика");
// console.log(styles.shift());
// styles.unshift("Реп", "Реггі");

// console.log(styles);

// **************task_02_02

// Напиши функцію, яка перебирає масив логінів і перевіряє
// чи є ім'я введене в інпут у цьому масиві і у разі,
// якщо є - виводить повідомлення "Доступ дозволено"
// в іншому випадку - "Користувач не знайден"

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(arr) {

//     let loginValue = prompt("Введіть логін");

//     if (arr.includes(loginValue)) {
//         alert("Доступ дозволено");
//     } else {
//         alert("Користувач не знайден")
//     }
// }

// checkLogin(logins);

// -------task_03 -----

// Напишіть функцію logItems (array), яка приймає
// масив і використовує цикл for, який для кожного елемента
//буде виводити повідомлення у форматі:
//<номер елемента> - <значення елемента>
//Нумерація має починатись з 1

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function logItems(array) {

//     for (let i = 0; i < array.length; i += 1) {

//         console.log(`${i + 1} - ${array[i]}`);
//     }

// }

// logItems(logins);

// --------------- TASK 04
// Наступна функція повертає true, якщо параметр age більше 18.
// В іншому випадку вона запитує підтвердження через confirm і повертає його результат:
// Ext: code spell checker

//const age = prompt("Enter your age");

//function checkAge(age) {
//  if (age >= 18) {
//     return true;
//  }

//  const check18 = confirm('Вам дійсно 18+?');
//  return check18;

//if (age < 18) {
//    return confirm('Вам дійсно 18+?')
//}

//return age >= 18;

//}

//console.log(checkAge(age))

//-----------task 05

//Напишіть функції для роботи з масивом
//add(name) додає ім'я до кінця колекції
//remove(name) видаляє ім'я із колекції
//update(oldName, newName) змінює ім'я на нове

// const names = ["Alla", "Petro", "Max", "Olena", "Boris"];

// function add(name) {
//   names.push(name);
//   return names;
// }
// console.log(add("Anna"));

// function remove(name) {
//   const index = names.indexOf(name);
//   if (index === -1) {
//     return "Не знайдено";
//   }

//   names.splice(index, 1);
//   return names;
// }
// console.log(remove("Anna"));
// console.log(remove("Kolya"));

// function update(oldName, newName) {
//   const index = names.indexOf(oldName);
//   if (index === -1) {
//     return "Не знайдено";
//   }
//   names.splice(index, 1, newName);
//   return names;
// }
// console.log(update("Boris", "Sunaki"));


//-------------TASK 06----------

//Напиши скрипт, який для об'єкту user,
//послідовно:
//1 додасть поле mood зі значенням 'happy'
//2 замінить hobby на 'skydiving'
//3 замінить значення premium на false
//4 виводить зміст об'єкта users у форматі
//ключ:значення використовуя Object.keys() та for...of
const user = {
  name: "John",
  age: 20,
  hobby: "tenis",
  premium: true,
};
 
user.mood = 'happy';

user.hobby = 'skydiving';

user.premium = false;

const userKeys = Object.keys(user);
for (const key of userKeys) {

  console.log(`${key} : ${user[key]}`);

}



