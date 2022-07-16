// Используя функцию if...else,
//напишите код, который будет спрашивать:
//"Какое официальное название JavaScript?"
//Если пользователь вводит "ECMAScript",
//то показать через alert: "Верно!"
//в противном случае отобразить:"Не знаете? ECMAScript!"

// const question = prompt("Какое официальное название JavaScript?");

const officialNameJs = prompt("Какое официальное название JavaScript?");
if (officialNameJs === 'ECMAScript') {
    alert("Верно!");
} else {
    alert("Не знаете? ECMAScript!");
}

console.log(officialNameJs);

