// REST
const average = (a, ...args) => {
  //... - оператор rest
  return args.reduce((acc, i) => (acc += i), 0) / args.length;
};
// console.log(average(10, 20, 30, 40, 50, 60, 70));

//Spread
const array = [1, 1, 2, 3, 5, 8, 13, 21];
// console.log(Math.max(...array)); //разворачивает массив (убирает) скобки
// console.log(Math.min(...array));
// const fib = [0, ...array];
// console.log(fib);

//Desructuring
// const [a, b = 21, ...c] = array;
// const [a, , c] = array;
// console.log(a, c);

// Object
const addres = {
  country: "rus",
  city: "SPB",
  street: "Lenina",
  concat: function () {
    return `${this.country}, ${this.city}, ${this.street}`;
  },
};

// const { city, country, street = "Не указано", concat: addresConcat } = addres;  //переименование через :
// console.log(addresConcat.call(addres)); //call - вызывает функция со значением this

const { city, ...rest } = addres;
console.log(city);
console.log(rest);
const newAddres = { ...addres, street: "    ", mail: 135 };
console.log(newAddres);
