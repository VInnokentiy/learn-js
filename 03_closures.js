//замыкания нужны для того чтобы положить в какую-то функции дефолт значние

// function createCalcFunction(n) {
//   return function () {
//     console.log(1000 * n);
//   };
// }
// const calc = createCalcFunction(21);
// calc();

// function createIncementor(n) {
//   return function (num) {
//     return n + num;
//   };
// }
// const addOne = createIncementor(1);
// const addTen = createIncementor(10);
// console.log(addOne(20));
// console.log(addTen(11));

// function urlGenerator(domain) {
//   return function (url) {
//     return `https://${url}.${domain}`;
//   };
// }

// const comUrl = urlGenerator("com");
// const ruUrl = urlGenerator("ru");
// console.log(comUrl("google"));
// console.log(comUrl("vk"));
// console.log(ruUrl("drive2"));

function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job} `);
}

const personOne = { name: "Inn", age: 23, job: "Frontend" };
const personTwo = { name: "Dar", age: 20, job: "SMM" };

function bind(context, fn) {
  return function (...args) {
    fn.apply(context, args);
  };
}

bind(personOne, logPerson)();
bind(personTwo, logPerson)();
