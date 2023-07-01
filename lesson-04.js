// TASK 01
// Створити список
// Створити кнопки Add, Remove, які будуть змінювати склад списку
// Створити input, з якого отримаємо значення, що буде передано в li
// Парним лі вказати жовтий фон, непарним синій
// Використовуй createElement

// const listElement = document.createElement("ol");
// const btnAddElement = document.createElement("button");
// btnAddElement.textContent = "add";
// const btnRemoveElement = document.createElement("button");
// btnRemoveElement.textContent = "remove";
// const inputElement = document.createElement("input");

// document.body.append(
//   inputElement,
//   btnAddElement,
//   btnRemoveElement,
//   listElement
// );

// btnAddElement.addEventListener("click", addItem);
// function addItem() {
//   const inputValue = inputElement.value;
//   if (inputValue === "") {
//    return;
//   }
//   const itemElement = document.createElement("li");
//   itemElement.textContent = inputValue;
//   listElement.append(itemElement);
//   inputElement.value = "";
//   const lengthList =listElement.children.length;
// //   if(lengthList%2 !== 0 ){
// //     itemElement.style.backgroundColor = "blue";
// //   } else{
// //     itemElement.style.backgroundColor = "yellow";
// //   }
// itemElement.style.backgroundColor = lengthList%2 !== 0 ? "blue" : "yellow";

// }

// btnRemoveElement.addEventListener("click", removeItem);
// function removeItem() {
//   const lastItemElement = listElement.lastChild;
//   // if(!lastItemElement){
//   //     return;
//   // }
//   if (lastItemElement) {
//     lastItemElement.remove();
//   }
// }

