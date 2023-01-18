//  старые варинаты
// function sum(a, b) {
//   return a + b;
// }
// function cube(a) {
//   return a ** 3;
// }

// новые (лямбда -функции)
// const sum = (a, b) => a + b;
// console.log(sum(20, 1));
// const cube = (a) => a ** 3;
// console.log(cube(3));

function log() {
  //есть свой собственный контекст
  console.log(this);
}
const arrowLog = () => console.log(this); //arrow не имеет контекст, обращается на уровень выше

const person = {
  name: "inn",
  age: "26",
};

person.log();
