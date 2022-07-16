// Используя функцию if...else,
//напишите код, который будет спрашивать:
//"Какое официальное название JavaScript?"
//Если пользователь вводит "ECMAScript",
//то показать через alert: "Верно!"
//в противном случае отобразить:"Не знаете? ECMAScript!"

// const question = prompt("Какое официальное название JavaScript?");

// const officialNameJs = prompt("Какое официальное название JavaScript?");
// if (officialNameJs === 'ECMAScript') {
//     alert("Верно!");
// } else {
//     alert("Не знаете? ECMAScript!");
// }

// console.log(officialNameJs);

// officialNameJs === "ECMAScript"
//   ? alert("Верно!")
//    : alert("Не знаете? ECMAScript!");

// let message = "Не знаете? ECMAScript!";
// message = officialNameJs === "ECMAScript" ? "Верно" : message;
// alert(message);

//2. Напишите программу, которая получит от пользователя
//число (количество минут) и выведет в консоль
//строку в формате часов и минут
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10

const number = Number(prompt('Введи минуты'));
console.log(number)
let hours = Math.floor(number / 60);
hours = String(hours).padStart(2, 0);

console.log(hours)
let minutes = number % 60
minutes = String(minutes).padStart(2, 0);
console.log(minutes)
console.log(`${hours}:${minutes}`)
