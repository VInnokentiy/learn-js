const cityField = "city";
const job = "frontend";

const person = {
  age: 23,
  name: "Innokentiy",
  [cityField]: "SPB",
  job, //если ключ и переменная совпадает, то можно сократить
  countryLive: "Russia",
  print: () => "Person",
  toString() {
    return Object.keys(this) //Object.keys(this) - обращается к ключам данного объекта
      .filter((key) => key !== "toString" && key !== "print")
      .map((key) => this[key])
      .join("  ");
  },
};
// console.log(person.toString());
// console.log(person.print());
// console.log(person);

// Методы
const first = { a: 1 };
const second = { b: 2 };

// console.log(Object.assign(first, second)); //в данном случае меняется первый объект
// console.log(first);
// console.log(Object.is(20, 10));  //метод is проверяет эквивалентность
// console.log(Object.assign({}, first, second)); //здесь идёт мутация пустого, заданные остаются неизменными

const obj = Object.assign({}, first, {
  c: 3,
  d: 4,
});
console.log(obj);
console.log(Object.entries(obj)); //получаем двумерный массив
console.log(Object.keys(obj));
console.log(Object.values(obj));
