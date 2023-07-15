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