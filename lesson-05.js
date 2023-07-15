// TASK 01
//TODO:======================
// Завдання 16
//  При натисканні на будь-який рядок у табличці відобразіть
//  повідомлення з назвою продукту та його ціною.
//  "Ви вибрали <product> за <price>".

// const tableEl = document.querySelector("#productTable");
// const containerEl = document.querySelector("#productDetails");

// tableEl.addEventListener('click', onClickTable);
// function onClickTable(event){
//     if(event.target.nodeName !== "TD") return;
//     const parentEl = event.target.parentNode;
//     const productName = parentEl.firstElementChild.textContent;
//     const productPrice = parentEl.lastElementChild.textContent;
//     const markup = `Ви вибрали ${productName} за ${productPrice}`;
//     containerEl.innerHTML = markup;
// }

// TASK 02
//TODO:==============================================
/*
Завдання 8
При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
За натисканням на кнопку "Вивести результат" виводиться сума значення, а також статистика з
інформацією про те, яка кнопка була натиснута скільки разів.
*/

// const divEl = document.querySelector('.statList');
// const btnEl = document.querySelector('#resultButton');
// const textEl = document.querySelector('#resultSection');

// divEl.addEventListener('click', onBtnClick);
// btnEl.addEventListener('click', onResult);

// let sum = 0;

// let objBtn = {};

// function onBtnClick(event) {
//     if (event.target.nodeName !== 'BUTTON') return;
//     const number = Number(event.target.dataset.number);
//     sum += number;

//     const btnName = event.target.textContent;
//     if (!objBtn[btnName]) {
//         objBtn[btnName] = 1;
//     } else {
//         objBtn[btnName] += 1;
//     }
// };

// function onResult() {
//     let markup = `Загальна сума ${sum}`;
//     for (const key in objBtn) {
//         if (Object.hasOwnProperty.call(objBtn, key)) {
//            markup += `<br>${key} натиснута ${objBtn[key]} разів`         
//         }
//     }
//     textEl.innerHTML = markup;
//     sum = 0;
//     objBtn = {};
// }



