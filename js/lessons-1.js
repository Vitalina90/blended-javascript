// !Завдання 2:
// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);
// const number = Number(prompt('Enter number'));
// const min = Math.floor(Math.random() * (59 - 0) + 0);
// if (min <= 15) {
//     alert (`${min} входить в 1 чверть`);
// } else if (min <=30) {
//     alert (`${min} входить в 2 чверть`);
// } else if (min <=45) {
//     alert (`${min} входить в 3 чверть`);
// } else {
//     alert (`${min} входить в 4 чверть`);
// }
// console.log(num);

// !Завдання 3:
// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// const num = prompt('Введіть значення від 1 до 4');
// let result = '';
// switch (num) {
//     case '1':
//         result = 'зима';
//         break;
//     case '2':
//         result = 'весна';
//         break;
//     case '3':
//         result = 'літо';
//         break;
//     case '4':
//         result = 'осінь';
//         break;
//     default:
//         result = 'Вибачте, але ви маєте ввести значення від 1 до 4 включно';
// }
// console.log(result);

// !Завдання 5:
// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples>

// let oclock = prompt("Введіть кількість хвилин");
// if (oclock !== null && !isNaN(oclock) && oclock.trim() !== "") {
//   oclock = Number(oclock);
//   let hours = Math.floor(oclock / 60);
//   let minutes = oclock % 60;
//   let formatHours = String(hours).padStart(2, 0);
//   let formatMinutes = String(minutes).padStart(2, 0);
//   console.log(`${formatHours}:${formatMinutes}`);
// } else {
//   console.log("Не коректне введення");
// }

// !Завдання 5:
// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

// *const login = prompt("Введіть Ваш логін");
// switch (login) {
//   case "Адмін":
//     const password = prompt("Введіть пароль");
//     switch (password) {
//       case "Я головний":
//         alert("Добрий день!");
//         break;
//       case null:
//       case "":
//         alert("Скасовано");
//         break;
//       default:
//         alert("Невірний пароль!");
//     }
//     break;
//   case null:
//   case "":
//     alert("Скасовано");
//     break;
//   default:
//     alert("Я вас не знаю");
// }

// if (login === "Адмін") {
//   const password = prompt("Введіть пароль");
//   if (password === "Я головний") {
//     alert("Добрий день!");
//   } else if (password === null || password === "") {
//     alert("Скасовано");
//   } else {
//     alert("Невірний пароль!");
//   }
// } else if (login === null || login === "") {
//   alert("Скасовано");
// } else {
//   alert("Я вас не знаю");
// }

// Завдання 1:
// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).
// 1
// function isAdult (age) {
//     if (age >= 18) {
//        return true;
//     } else {
//         const checkAge = confirm('Are you adult?');
//         return checkAge;
//     }
// }
// 2
// function isAdult (age) {
//     if (age >= 18) {
//        return true;
//     }
//     return confirm('Are you adult?');
// }
// 3
// function isAdult (age) {
//      return age >= 18 ? true: confirm('Are you adult?');

//      4
//     return age >= 18 || confirm('Are you adult?');
// }

// console.log(isAdult(25));

// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

// function min(a, b) {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         return 'Not a number!';
//     }
//     return Math.min(a, b);
// }
// console.log(min(5, 10));

// function min(a, b) {
//     return (typeof a !== 'number' || typeof b !== 'number') ? 'Not a number!': Math.min(a, b);
// }

// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

// function getNumbers(min, max) {
//     let sum = 0;
//     for (let i = max; i >= min; i--) {
//         console.log(i);
//         if (i % 2 === 0) {
//             sum += i;
//         }
//     }
//     return sum;
// }
// console.log(getNumbers(10, 15));

// *Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.

// let i = 0;
// while (i <= 20) {
//   console.log(i);
//   i++;
// }

// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

function min(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    if (a < b) {
      return a;
    } else if (a > b) {
      return b;
    } else {
      return "Not a number!";
    }
  }
}

console.log(min(5.5, 10));
