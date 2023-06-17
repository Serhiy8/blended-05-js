// ----------------------------------------------task 01 -----------------------------
// THIS
// 1. Виправте помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };
// product.showPrice();

// ----------------------------------------------task 02 -----------------------------

// 2. Яким буде результат виклику функції?
// function f() {
//   console.log(this.name);
// }

// const foo = f.bind({ name: "Іван" }).bind({ name: "Петро" });

// foo();

// ----------------------------------------------task 03 -----------------------------

// 3. Виправте помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };

// function callAction(action) {
//   action();
// }
// callAction(product.showPrice.bind(product));

// ----------------------------------------------task 04 -----------------------------

// 4. Функція askPassword приймає 2 колбека і викликає 1 із них в залежності від password
// function askPassword(ok, fail) {
//   let password = prompt("Password?");
//   if (password === "admin") ok();
//   else fail();
// }
// Створи об 'єкт user з властивостю name і двома методами
// loginOk() і loginFail()
// ці методи виводять в консоль повідомлення у форматі
// "<name> logged in" та "<name> failed to log in" відповідно
// зроби виклик функції askPassword, прив'язавши в якості аргументів методи об'єкта

// const user = {
//   name: "Serhiy",
//   loginOk() {
//     console.log(`${this.name} logged in`);
//   },
//   loginFail() {
//     console.log(`${this.name} failed to log in`);
//   },
// };

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// ----------------------------------------------task 05 -----------------------------
// Колбек-функції!!!

//1. Напишіть дві функції
// letMeSeeYourName(callback) - питає ім'я користувача
//через prompt и викликає callback функцію
//greet(name) - коллбек, якій приймає ім'я та логірує в консоль
//рядок "Привіт, <name>"
//Реалізуй перевірку, що prompt не пустий
// якщо пустий - додай дефолтне значення

// function letMeSeeYourName(callback) {
//   let nameUser = prompt("What is your name :");
//   if (nameUser.trim() === "") {
//     nameUser = "гість";
//   }
//   callback(nameUser);
// }

// function greet(name) {
// //   if (name.trim() === "") {
// //     name = "гість";
// //   }
//   console.log(`Привіт, ${name}`);
// }
// letMeSeeYourName(greet);

// ----------------------------------------------task 06 -----------------------------
//2. Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товара, а також callback.
//Функція створює об'єкт товара, додавая йому унікальний
//ідентифікатор у властивість id та викликає callback
//передавая йому створений об'єкт.
//showProduct(product) - коллбек приймає об'єкт
//продукта і логірує його в консоль

// function  makeProduct(name, price, callback ) {
//    const product = {
//     name,
//     price,
//     id : Date.now(),
//    };
//  callback(product);
// };

// function showProduct(product) {
//   console.log(product);
// }

// makeProduct('apple', 10, showProduct);

// ----------------------------------------------task 06 -----------------------------

const users = [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    id: "249b6175-5c30-44c6-b154-f120923736f5",
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    id: "150b00fb-dd82-427d-9faf-2879ea87c695",
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    id: "e1bf46ab-7168-491e-925e-f01e21394812",
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

// Task 1

// Отримати масив імен усіх користувачів (поле name).
// console.log(getUserNames(usersData))
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// function getUserNames (users) {
//     return users.map(user => user.name)

// }
// console.log(getUserNames(users));

// Task 2

// Отримати масив об'єктів користувачей по кольору очей (поле eyeColor).
// console.log(getUsersWithEyeColor(users, 'blue')); // [об'є'кт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]

// function getUsersWithEyeColor(users, eye) {
//     return users.filter(user => user.eyeColor === eye);

// }
// console.log(getUsersWithEyeColor(users, 'blue'));

// function getUsersByProp(users, property, value) {
//     return users.filter(user => user[property] === value);

// }
// console.log(getUsersByProp(users, "eyeColor", "blue"));

// Task 3

// Отримати загальну суму баланса (поле balance) усіх користувачів.
// console.log(calculateTotalBalance(users)); // 20916

// function calculateTotalBalance(users) {
//     return users.reduce((total, user) => total + user.balance,0)

// }
// console.log(calculateTotalBalance(users));

// Task 5

// Отримати масив всіх навичок усіх користувачів (поле skills), при цьому не повинно бути
// повторювань навичок і вони мають бути відсортовані в алфавітному порядку.
// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

// function getSortedUniqueSkills(users) {
//     return users.flatMap(user => user.skills)
//         .filter((user, index, array) => array.indexOf(user) === index)
//     .sort((a,b) => a.localeCompare(b))

// }
// console.log(getSortedUniqueSkills(users));

// Task 7

//Створити статистику - об'єкт, у якому вказується кількість тегів
const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

// const stats = {};
// tweets
//   .flatMap((tweet) => tweet.tags)
//   .forEach((tag) => {
//     if (stats[tag]) {
//       stats[tag] += 1;
//     } else {
//       stats[tag] = 1;
//     }
//   });
// const stats = tweets
//   .flatMap((tweet) => tweet.tags)
//   .reduce((stats, tag) => {
//     return { ...stats, [tag]: stats[tag] ? stats[tag] + 1 : 1 };
//   }, {});
// console.log(stats);

// ------------------------------------------------------------------------
// Класи

//1. Створи клас User для створення користувача з такими властивостями:
//a. userName - ім'я, рядок
//b. age - вік, число
//c. numbersOfPost - кількість постів, число
//d. конструктор очікує 1 параметр - об'єкт налаштувань з однойменними властивостями
//Додай метод getInfo(), який повертає рядок:
//`Користувачеві ${} ${} років і в нього ${} публікацій.`

// class User {
//     constructor ({userName, age, numbersOfPost}) {
//         this.userName = userName;
//         this.age = age;
//         this.numbersOfPost = numbersOfPost;
//     }
//     getInfo() {
//         return `Користувачеві ${this.userName} ${this.age} років і в нього ${this.numbersOfPost} публікацій.`;
//     } 
// }

// const userOne = new User({userName : "Vasyl", age : 27, numbersOfPost :3});
// console.log(userOne);
// console.log(userOne.getInfo());

// ------------------------------------------------------------------------
//2. Напиши класс Client який створює об'єкт
//із властивостями login, email
//Об'яви приватні властивості #login і #email,
//доступ до яких зроби через геттер и сеттер:
// get getClientData() має повертати об'єкт з переліченими властивостями
// set changeEmail(newEmail) перезаписує пошту користувача

// class Client {
//     #login;
//     #email;
//     constructor (login, email) {
//         this.#login = login;
//         this.#email = email;
//     }

//     get getClientData() {
//         return {loginClient :  this.#login, emailClient : this.#email}
//     }

//     set changeEmail(newEmail) {
//         this.#email = newEmail;
//     }
// }


// const clientOne = new Client ('Admin', 'admin@email.com');

// console.log(clientOne);
// clientOne.changeEmail = 'owner@email.com';
// console.log(clientOne.getClientData);

// ------------------------------------------------------------
// 4. Створити клас Worker, у якого є властивості name, age, salary.
//У класу Worker є метод getSalary, який повертає повідомлення
//"Worker <name> has salary <salary> dollars"
//Створити клас TopLevelWorker, у якого є властивість position
//і який успадковує клас Worker, додаючи метод getPosition
// який повертає повідомлення "<name> works as <position>"


// class Worker {

//     constructor (name, age, salary) {
//         this.name = name;
//         this.age = age; 
//         this.salary = salary;
//     }

//     getSalary() {
//         return `Worker ${this.name} has salary ${this.salary} dollars`;
//     }
// }

// class TopLevelWorker extends Worker {
// constructor (name, age, salary, position) {
//     super(name, age, salary);
//     this.position = position;
// }

// getPosition() {
//     return `${this.name} works as ${this.position}`
// }
// };

// const workerOne = new TopLevelWorker('Ivan', 33, 1500, 'proger');

// console.log(workerOne );
// console.log(workerOne.getPosition());
// console.log(workerOne.getSalary());

// HOME WORKE !!! ----------------------- after 6 modul
// --- 1
//3. Напиши класс Notes який управляє коллекцієй нотаток у
//властивості items.
//Нотатка це  об'єкт з властивостями text, priority
//Додай класу статичну властивість Priopity,
//в якій буде зберігатись об'єкт з пріорітетами ("hight", "middle", "low").
//Додай методи addNote(note), removeNote(noteText)
//updatePriority(noteText, newPriority)
// --- 2
//  Написати клас, який буде представляти зоопарк тварин.
//  Створити загальний клас Animal для тварин.
// У зоопарку повинні бути різні типи тварин, такі як ссавці, птахи, рептилії тощо.
// Кожен тип тварин повинен мати свої властивості та методи, наприклад,
//  методи для отримання інформації про тварину та для годівлі тварин.
//  Крім того, зоопарк повинен мати метод для додавання тварин до списку та
// метод для виведення списку всіх тварин у зоопарку.
// --- 3
//  Написати клас, який буде представляти зоопарк тварин.
//  Створити загальний клас Animal для тварин.
// У зоопарку повинні бути різні типи тварин, такі як ссавці, птахи, рептилії тощо.
// Кожен тип тварин повинен мати свої властивості та методи, наприклад,
//  методи для отримання інформації про тварину та для годівлі тварин.
//  Крім того, зоопарк повинен мати метод для додавання тварин до списку та
// метод для виведення списку всіх тварин у зоопарку.
// ===================================================
// Reverse. Напишіть функцію, яка розгортає масив у зворотному порядку.
// Будь ласка, не використовуйте array.reverse(), щоб зробити завдання цікавішим.

// const data = [10, 20, 30, 40, 50, 60];
// const alphData = ["a", "b", "c", "d", "e"];
// --- 4
// Task 6
//
//Призначити знижку 20% на фрукти в масиві,
//Присвоїти ID для кожного продукту
//
// const fruits = [
//   { name: "apple", price: 200 },
//   { name: "orange", price: 300 },
//   { name: "grapes", price: 750 },
// ]; 
// --- 5
/// Даний словник із міст та дат виступів рок-групи

/// Необхідно перетворити словник (key-value) на масив із назв міст
/// Виведення міст має бути у хронологічному порядку
/// Міста у яких концерт вже пройшов потрібно виключити
/// Результат ["Умань", "Харків", "Одеса"]

// const concerts = {
//   Київ: new Date("2023-04-01"),
//   Умань: new Date("2023-07-02"),
//   Вінниця: new Date("2022-04-21"),
//   Одеса: new Date("2023-07-15"),
//   Хмельницький: new Date("2022-04-18"),
//   Харків: new Date("2023-07-10"),
// };