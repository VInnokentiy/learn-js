function calcValues(a, b) {
  return [a + b, a - b, a * b, a / b];
}

//Массив
const [sum, sub = "Вычитания нет", mult, ...other] = calcValues(21, 17);
// const sum = result[0];
// const sub = result[1];

// const [sum, sub] = result;

// console.log(sum, mult, other, sub);

//Objects
const person = {
  name: "Max",
  age: 51,
  adress: {
    country: "RUS",
    city: "MSC",
  },
};

// const name = person.name
const {
  name: firstName,
  age,
  car = "dont have a car",
  adress: { city, country },
} = person;
// console.log(age, firstName, car, city, country);

function logPerson({ name, age }) {
  //можно сразу деструктуризировать значение
  console.log(name + " " + age);
}

logPerson(person);
