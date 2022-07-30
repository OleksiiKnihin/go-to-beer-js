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

// const number = Number(prompt('Введи минуты'));
// console.log(number)
// let hours = Math.floor(number / 60);
// hours = String(hours).padStart(2, 0);

// console.log(hours)
// let minutes = number % 60
// minutes = String(minutes).padStart(2, 0);
// console.log(minutes)
// console.log(`${hours}:${minutes}`)

//Напишите цикл, который выводит в консоль
//числа от max до min по убыванию
// Додайте все четные числа от min до max
// const max = 50;
// const min = 23;
// let total = 0;
// for (let i = max; i >= min; i -= 1) {

//     if (i % 2 !== 0) {
//         continue;
//     }
//     console.log(i);
//     total += i;
// }
// console.log(total);

// При загрузке страницы пользователю предлагается
//в prompt ввести число. Ввод добавляется к значению
//переменной total.
//Операция ввода числа продолжается до тех пор,
//пока пользователь не нажмет кнопку Cancel в prompt.
//После того как пользователь прекратил ввод нажав на
//кнопку Cancel, показать alert со строкой "Общая сумма введенных чисел равна [число]."
//Делать проверку,что пользователь ввел именно число,
//а не произвольный набор символов, не нужно.

// let number = Number(prompt("ВВедите число!!!"));
// let total = 0;

// while(number){
// total +=number;
// number = Number(prompt("ВВедите число!!!"));

// }
// console.log(total);

// Напишите цикл, который предлагает ввести
//число больше 100 через prompt.
//Если посетитель ввёл другое число - попросить
//ввести ещё раз и так далее.
//Цикл должет спрашивать число, пока посетитель не
//введёт число больше 100, либо не нажмет кнопку
//Отмена в prompt

// let number = Number(prompt("ВВедите число больше 100!!!"));
// while (number < 100 && number !== null) {
//   number = Number(prompt("ВВедите число больше 100!!!"));
// }
// console.log(number);

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const potion of this.potions) {
      if (newPotion.name === potion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1){
      
      if (this.potions[i].name === potionName) {
        
        this.potions.splice(i, 1)
        return;
      }
      
    }
return `Potion ${potionName} is not in inventory!`;
 
  },
  updatePotionName(oldName, newName) {
    for (const potion of this.potions) {
      if (potion.name === oldName) {
        potion.name = newName
        return;
      } 
    }
      return `Potion ${oldName} is not in inventory!`;
    

   
  },
  // Change code above this line
};
 
atTheOldToad.removePotion("Dragon breath")
