const cars = ["Porshe", "Ford", "BMW", "Mercedes"];
function fibonaci(number) {
  let fib = [];
  fib[0] = 1;
  fib[1] = 1;
  for (let i = 2; i < number; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[number - 1];
}
const fib = fibonaci(28);
console.log(`Fibonacci - ${fib}`);

const people = [
  { name: "Innokentiy", budget: 5000 },
  { name: "Darya", budget: 4500 },
  { name: "Maxim", budget: 3000 },
];
// cars.push("Range Rover"); //добавление в конец
// cars.unshift("Opel"); //Добавление в начало

// const firstCar = cars.shift(); //delete first and return the first element
// const lastCar = cars.pop(); // delete and return last
// console.log(lastCar);
// console.log(firstCar);
// console.log(cars);

// console.log(cars.reverse());
// const text = "Привет, меня зовут иннокентий";
// const reverseText = text.split("").reverse().join(""); //join - объединение элементов      split - разбиение по элементу
// console.log(reverseText);

// const index = cars.indexOf("BMW");      //index заданного элемента
// cars[index] = "Tesla";
// console.log(cars);

// const index = people.findIndex(function (person) {
//   return person.budget === 4500;
// });
// const person = people.find((person) => person.budget === 4500);
// // console.log(index);
// console.log(person);
// let findedPerson;
// for (const person of people) {
//   if (person.budget === 3000) {
//     findedPerson = person;
//   }
// }
// console.log(findedPerson);

// console.log(cars.includes("Porshe")); // includes - проверяте наличие элемента в массиве

// const upperCaseCars = cars.map((car) => {
//map - в параметр получает функцию, возвращает новй массив
//   return car.toUpperCase();
// });
// console.log(upperCaseCars);

// const pow2 = (num) => num ** 2;
// const sqrrt = (num) => Math.sqrt(num);
// const pow2Fib = fib.map(pow2);
// const filteredFib = pow2Fib.filter((num) => {
//   //filter - return the new array
//   return num > 20;
// });
// console.log(pow2Fib);
// console.log(filteredFib);
// const sqrtFib = pow2Fib.map(sqrrt);
// console.log(sqrtFib);

// reduce - объединяет все значения массива в одно
// const allBudget = people
//   .filter((person) => person.budget > 3500)
//   .reduce((acc, person) => {
//     // if (person.budget > 3500) {
//     acc += person.budget;
//     // }
//     return acc;
//   }, 0);
// console.log(allBudget);
