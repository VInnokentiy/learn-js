// Прототип это объект, который присутсвует у родительских сущностей
// const person = {
//   name: "Max",
//   age: 25,
//   greet: function () {
//     console.log("Greet!");
//   },
// };

const person = new Object({
  name: "Max",
  age: 25,
  greet: function () {
    console.log("Greet!");
  },
});
// console.log(person);
// console.log(person.toString());

Object.prototype.sayHello = function () {
  //изменение прототипа, добавление метода(глобального объекта)
  console.log("Hello");
};
// console.log(person.sayHello());

const darya = Object.create(person); //передача прототипа новому объекту
darya.name = "Bublik";
console.log(darya.name);
console.log(darya.greet());

const str = new String("I am string");
console.log(str.bold);
