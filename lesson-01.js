//Використовуя функцію if...else,
//напишіть код, який буде питати:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
//то показати через alert: "Вірно!"
//в противному випадку відобразити:"Не знаєте? ECMAScript!"

const jsName = prompt("Яка офіційна назва JavaScript?");

// if (jsName === "ECMAScript") {
//   alert("Вірно!");
// } else {
//   alert("Не знаєте? ECMAScript!");
// }

alert(jsName === "ECMAScript" ? "Вірно!" : "Не знаєте? ECMAScript!");
