//! Завдання 1:

//* Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
//* квадрати кожного елементу вхідного масиву.
//* Очікуваний результат: [1, 4, 9, 16, 25].

//? const numbers = [[1, 2, 3, 4, 5]]

//! Завдання 2:

//* Дано масив об'єктів. Створіть новий масив, що містить всі значення
//* з масивів values кожного об'єкту, збережених в одному масиві.
//* Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const newArray = data.flatMap(val);

//! Завдання 3:

//* Дано масив об'єктів.
//* Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
//* Очікуваний результат: true.

// const people = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const peopleAge = people.some((item) => item.age < 20);
// console.log(peopleAge);

//! Завдання 4:

//* Дано масив чисел [2, 4, 6, 8, 10].
//* Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// const result = numbers.every((number) => number % 2 === 0);
// console.log(result);

//! Завдання 5:

//* Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

// const evenNum = numbers.find((number) => number % 2 === 0);
// console.log(evenNum);

//! Завдання 6:

//* Відсортуйте масив чисел [4, 2, 5, 1, 3]
//* у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];

// const newArr = numbersArray.toSorted((a, b) => a - b);
// console.log(newArr);

//! Завдання 7:

//* Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//*  у порядку алфавіту.
//* Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ["banana", "orange", "apple", "pear"];

// const newString = stringArray.toSorted((a, b) => a.localeCompare(b));
// console.log(newString);

//! Завдання 8:

//*  Відсортуйте масив об'єктів за віком у порядку зростання.
//* Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const userAge = users.toSorted((a, b) => a.age - b.age);
// console.log(userAge);

//! Завдання 9:

//* Дано масив об'єктів.
//* Створіть новий масив, що містить тільки об'єкти, в яких
//* вік більше 20 років.
//* Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const users = user.filter((item) => item.age > 20);
// console.log(users);

//! Завдання 10:

//* Дано масив чисел [1, 2, 3, 4, 5].
//* Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];

// const total = numbers.reduce((sum, number) => sum + number, 0);
// console.log(total);

//! Завдання 11:

//* Створи клас для калькулятора, який має такі методи:
//* - метод number, який набуває початкового значення для наступних операцій
//* - метод getResult, який повертає фінальний результат усіх операцій, проведених із числом
//* - методи add, substruct, divide, multiply
//* Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

//! Завдання 12:

//* Напиши клас Client який створює об'єкт з властивостями login email.
//* Оголоси приватні властивості #login #email, доступ до яких зроби
//* через геттер та сеттер login email

// class Client {
//   #login;
//   #email;

//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const vitalina = new Client("Vitalina", "vitalina@gmail.com");

// vitalina.login = "Student Vitalina";
// vitalina.email = "student_vitalina@gmail.com";

// console.log(vitalina);
// console.log(vitalina.login);
// console.log(vitalina.email);

//! Завдання 13:

// *  Наслідування у класах!
// * Cтворіть клас `Person`, який містить наступні властивості:
// *  - `name` - ім'я людини;
// *  - `age`- вік людини;
// *  - `gender` - стать людини;
// *  - `email`- електронна пошта людини.

// * ##### Крім того, клас `Person` має мати метод `getDetails()`,
// * який повертає об'єкт з ім'ям, віком, статтю
// * та електронною поштою людини.

//* Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//*  - salary - зарплата співробітника;
//*  - department - відділ, в якому працює співробітник.
//*  ##### Крім того, клас `Employee` має мати метод `getEmployeeDetails()`,
//*  який повертає об'єкт з ідентифікатором співробітника,
//*  зарплатою та відділом, в якому працює співробітник.

// class Person {
//   constructor(name, age, gender, email) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.email = email;
//   }

//   getDetails() {
//     return {
//       name: this.name,
//       age: this.age,
//       gender: this.gender,
//       email: this.email,
//     };
//   }
// }

// class Employee extends Person {
//   constructor(name, age, gender, email, salary, department) {
//     super(name, age, gender, email); // Викликаємо конструктор батьківського класу
//     this.salary = salary;
//     this.department = department;
//     this.employeeId = Math.floor(Math.random() * 10000); // Генеруємо унікальний ID
//   }

// Метод для отримання деталей про працівника
//   getEmployeeDetails() {
//     return {
//       employeeId: this.employeeId,
//       salary: this.salary,
//       department: this.department,
//     };
//   }
// }

// const vitalina = new Person({
//   name: "Vitalina",
//   age: 34,
//   gender: "woman",
//   email: "vitalina@gmail.com",
// });

// const vitalina = new Person("Vitalina", 34, "woman", "vitalina@gmail.com");
// console.log(vitalina.getDetails());
// const anna = console.log(vitalina.getEmployeeDetails());
