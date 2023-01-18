const person = Object.create(
  //1 -прототип, 2 - описание объекта
  {
    calcAge() {
      console.log("Age:", new Date().getFullYear() - this.birthYear);
    },
  },
  {
    name: {
      value: "Innokentiy",
      enumerable: true, // по умолчанию значение false
      writable: true, //можно ли изменять объект по умолч. false
      configurable: true, // можно ли удалять ключ из объекта (false)
    },
    birthYear: {
      value: 1998,
      enumerable: true,
    },
    age: {
      get() {
        //выполняемые действия без значения
        return new Date().getFullYear() - this.birthYear;
      },
      set(value) {
        //выполняемые действия при получение значения
        document.body.style.background = "blue";
      },
    },
  }
);
// console.log(person);
// person.name = "Max";
// delete person.name;

for (let key in person) {
  if (person.hasOwnProperty(key)) {
    //hasOwnProperty - позволяет не пробегаться по прототипу
    console.log("key", key, person[key]);
  }
}

person.calcAge();
// person.age = 65;
