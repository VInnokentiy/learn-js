const people = [
  { name: "Innokentiy", age: 23, budget: 60000 },
  { name: "Maxim", age: 51, budget: 160000 },
  { name: "Daria", age: 20, budget: 50000 },
  { name: "Sveta", age: 51, budget: 120000 },
  { name: "Lika", age: 30, budget: 0 },
  { name: "Andrey", age: 30, budget: 80000 },
];

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i]);
// }

// for (let person of people) {
//   console.log(person);
// }

//ForEach - итерация по массиву
// people.forEach((person, i, peopleArr) => console.log(person));

//Map - создание новго массива в новую переменную
// const newPeople = people.map((person) => {
//   return `${person.name} ${person.age}`;
// });
// console.log(newPeople);

//Filter
// const young = people.filter((person) => person.age <= 50);
// console.log(young);

//Reduce - выполняет колбэк для кажого элемента массива
// const amount = people.reduce((total, person) => (total += person.budget), 0);
// console.log(amount);

//Find
// const sv = people.find((person) => person.name === "Sveta");
// console.log(sv);

//FindIndex
// const svIn = people.findIndex((person) => person.name === "Sveta");
// console.log(svIn);

const newPeople = people
  .filter((person) => person.budget >= 100000)
  .map((person) => {
    return {
      info: `${person.name} ${person.age}`,
      budget: person.budget,
    };
  })
  .reduce((total, person) => (total += person.budget), 0);
console.log(newPeople);
