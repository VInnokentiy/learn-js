const symbol = Symbol("demo"); //каждый символ уникален
const another = Symbol("demo");
// console.log(symbol);
// console.log(another);
// console.log(symbol === another); //false

const obj = {
  name: "Darya",
  [symbol]: "meta",
  demo: "DEMO",
};
// console.log(obj[symbol]);
// console.log(obj[another]);

for (let key in obj) {
  console.log(key);
}
console.log(obj.demo);
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Symbol
