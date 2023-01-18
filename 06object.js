const person = {
  name: "Innokentiy",
  age: 23,
  isProgrammer: true,
  language: ["en", "ru"],
  ["key_" + (20 + 1)]: "Computed key", //key_21
  greet() {
    console.log("greet from person");
  },
  info() {
    console.info("Information about:", this.name); //this - текущий объект
  },
};
// console.log(person["age"]);

// person.language.push("by");
delete person["key_21"]; // delete

// const name = person.name;
// const age = person.age;
// const language = person.language;
// const { name: firstName, age, language } = person; //смена названия пересенной, также можно через = добавить значение по умолчания
// console.log(firstName, age, language);

// console.log(person);

// for (let key in person) {
//   // опасен тем, что может зайти в прототип
//   if (person.hasOwnProperty(key)) {
//     // защита от проникновения в прототип
//     console.log("key:", key);
//     console.log("value:", person[key]);
//   }
// }

// Object.keys(person).forEach((key) => {
//   //правильный способ
//   console.log("key:", key);
//   console.log("value:", person[key]);
// });

const logger = {
  keys() {
    console.log("Object keys", Object.keys(this));
  },
  keysAndValues() {
    Object.keys(this).forEach((key) => {
      console.log(`"${key}:${this[key]}"`);
    });
  },
  withParams(top = false, beetwen = false, bottom = false) {
    if (top) {
      console.log("---START---");
    }
    Object.keys(this).forEach((key, index, Array) => {
      console.log(`"${key}:${this[key]}"`);
      if (beetwen && index !== Array.length - 1) {
        console.log("____________________");
      }
    });
    if (bottom) {
      console.log("---END---");
    }
  },
};

// const bound = logger.keys.bind(person);  //bind - говорит, что будет тем объектом который мы сами передадим
// bound();
// logger.keys.call(person);
logger.withParams.call(person, true, true, true);
logger.withParams.apply(person, [true, true, true]); //apply - принимает только два параметра
