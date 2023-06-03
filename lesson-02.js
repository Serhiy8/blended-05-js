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
// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };
 
// user.mood = 'happy';

// user.hobby = 'skydiving';

// user.premium = false;

// const userKeys = Object.keys(user);
// for (const key of userKeys) {

//   console.log(`${key} : ${user[key]}`);

// }


// ------------------- TASK 07 -----------------------------

//3. Напишіть ф-цію calcTotalPrice(stones, stonesName),
//яка приймає массив об'єктів і
//рядок з назвами каміння.
//Функція рахує і повертає загальну вартість каменів
//з таким ім'ям, ціною та кількістю з об'єкта

// const stones = [
//     { name: "Смарагд", price: 1300, quantity: 4 },
//     { name: "Діамант", price: 2700, quantity: 6 },
//     { name: "Сапфір", price: 400, quantity: 7 },
//     { name: "Щебінь", price: 150, quantity: 100 },
//   ];
  
// function  calcTotalPrice(stones, stonesName) {}

//2. У нас є об'єкт, в якому зберігаються зарплати
//нашої команди
//Напишіть код для додавання усіх зарплат та
//збережіть його результат в змінній sum.
//Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
//   };

// const salarisItems = Object.values(salaries);

// let sum = 0;
// for (const item of salarisItems  ) {
// sum += item;
// }

// console.log(sum)

// ************************************gfgd

// 7. Напишіть скрипт керування особистим кабінетом інтернет банка
//Є об'єкт account в якому необхідно реалізувати
//методи для работи з балансом та історією транзакцій

//Типів транзакцій всього два.
//Можна покласти або зняти гроші з рахунка
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};




//Кожна транзакція це об'єкт з властивостями id, type, amount

const account = {
  //поточний баланс рахунка
  balance: 0,

  //Історія транзакцій
  transactions: [],

  //Метод створює і повертає об'єкт транзакцій
  //Приймає сумму і тип транзакцій
  createTransaction(type, amount) {
    return {
      type,
      amount,
    };
  },

  
  //Метод відповідає за додавання сумми к балансу.
  //Приймає сумму транзакціи.
  //Визиває createTransaction для створення об'єкта транзакціи
  //після чого додає його в історію транзакцій
  deposit(amount) {
    this.balance += amount;
    const transaction = this.createTransaction(Transaction.DEPOSIT, amount);
    this.transactions.push({ ...transaction, id: Number(Math.random().toFixed(4)) });
  },
//Метод відповідає за зняття сумми з балансу.
  //Приймає сумму транзакціи.
  //Визиває createTransaction для створення об'єкта транзакціи
  //після чого додає йогого в історю транзакцій
  //Якщо amount більше ніж поточний баланс, виводимо повідомлення про те,
  //що недостатньо коштів на рахунку
  withdraw(amount) {
    if (this.balance < amount) {
      alert("Грошей недостатньо!");
      return;
    }

    this.balance -= amount;
    const transaction = this.createTransaction(Transaction.WITHDRAW, amount);
    this.transactions.push({ ...transaction, id: 1 });
  },
//Метод повертає поточний баланс
  getBalance() {
     console.log(`На вашому рахунку ${this.balance} грн`);
  },
//Метод шукає і повертає об'єкт транзакціи по id
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
    return "Такої транзакції немає"
  },
//Метод повертає кількіств коштів вказаного типу
  //транзакціи зі всієї історії транзакцій
  getTransactionType(type) {
    let totalSum = 0;

    for (const transaction of this.transactions) {
    
      if (transaction.type === type) {
        totalSum += transaction.amount;
      }
    }
    return totalSum;
  },
} 

account.deposit(400);
console.log(account.transactions);

account.withdraw(200);
console.log(account.transactions);

// account.withdraw(600);

account.getBalance()

console.log(account.getTransactionDetails(1));

console.log(account.getTransactionType(Transaction.DEPOSIT));

//HOMEWORK:
// 1. Напишіть функцію min(a, b), яка повертає
// меньше з чисел a, b
//Додати перевірку, що функція отримує числа

// 2. Написати ф-цію, яка прибиратиме з масиву всі значення, які перетворюються на false
// undefined, null, false, '', 0, NaN

// const array = [
//   1,
//   0,
//   54,
//   "doc",
//   null,
//   "jpg",
//   undefined,
//   "",
//   "png",
//   "exe",
//   false,
//   "mp4",
//   NaN,
//   "hbs",
// ];

// 3. напиши функцію яка сумуватиме сусідні числа і пушити в новий масив
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

//4. Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

//5. Створіть об'єкт calculator з трьомя методами
//read(a, b) - приймає два аргумента і зберігає їх
//як властивості об'єкта
//sum() повертає сумму збереженних значень (з перевіркою на наявніст властивостей в об'єкті)
//mult() перемножає збереженні значення і повертає результат

//6. Напишіть функцію, яка приймає як параметр об'єкт
//і формує об'єкти в новому масиві у форматі [key, value]

const user6 = {
  name: "John",
  surName: "Stones",
  age: 20,
  hobby: "tenis",
  haveCar: true,
  merried: false,
};