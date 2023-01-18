const citiesRussia = ["Санкт-Петербург", "Москва", "Краснодар", "Сочи"];
const citiesEurope = ["Бяла", "София", "Рига", "Прага"];

const citiesRussiaWithPopulation = {
  Moscow: 20,
  SaintPetersburg: 9,
  Krasnodar: 2,
  Sochi: 4,
};

const citiesEuropeWithPopulation = {
  Byala: 0.01,
  Sofia: 5,
  Riga: 5,
  Praha: 3,
};

//Spread ... - разворачивает массив
// console.log(...citiesRussia);

const allCities = [...citiesRussia, ...citiesEurope]; //копирование и сложение массивов в новый
// const citieees = citiesEurope.concat(citiesRussia); //старый метод объединения массивов
// console.log(citieees);
// console.log(allCities);

// console.log({ ...citiesEuropeWithPopulation }); //с объектами spread работает через {}
// console.log({ ...citiesEuropeWithPopulation, ...citiesRussiaWithPopulation });

// const numbers = [5, 37, 21, 42, 17];
// console.log(Math.max(5, 37, 21, 42, 17));
// console.log(Math.max(...numbers));

//Rest - собирает оставшиеся (неупомянутые) параметры массивов и объектов
const sum = (a, b, ...rest) => a + b + rest.reduce((a, i) => a + i, 0);
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//SPREAD!!!
console.log(sum(...numbers));
// const a = numbers[0];
// const b = numbers[1];

const [a, b, ...other] = numbers;
console.log(a, b, other);

const person = {
  name: "Max",
  age: 51,
  city: "SPB",
  country: "RUS",
};

const { name, age, ...place } = person;
console.log(name, age, place);
