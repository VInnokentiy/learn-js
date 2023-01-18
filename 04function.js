//function Declaration можно вызывать когда хочешь
// function greet(name) {
//   console.log("Привет - ", name);
// }
// greet("Даша");

//function Expression можно вызывать только после объявления
// const greet2 = function (name) {
//   console.log("Привет 2 - ", name);
// };
// greet2("Дарья");

// console.dir(greet);

// let counter = 0;
// const interval = setInterval(function () {
//   if (counter === 5) {
//     clearInterval(interval);
//   } else {
//     console.log(++counter);
//   }
// }, 1000);

//                                                 Стрелочные функции
// const arrow = () => {};
// const pow = (num) => num ** 3;
// console.log(pow(5));

// const sum = (a = 20, b = 1) => a + b;
// console.log(sum());

// function sumAll(...all) {
//   let result = 0;
//   for (let num of all) {
//     result += num;
//   }
//   return result;
// }

// console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 0));

//                                                  Замыкания;
function createMember(lastName) {
  return function (name) {
    console.log(name + lastName);
  };
}

const workWithName = createMember("Vinokurov");
console.log(workWithName("Darya"));
console.log(workWithName("Innokentiy"));

console.log(1);

const a = new Promise((resolve, reject) => resolve(console.log(2)));

a.then((res) => console.log(3));

setTimeout(() => {
  console.log(4);
}, 0);

console.log(5);
