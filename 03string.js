// const age = 23;

// const output = "Привет, меня зовут " + name + " и мой возраст " + age;

// function getAge() {
//   return age;
// }

// const output = `Привет меня зовут ${name} и мой возраст ${
//   age < 20 ? "A" : "B"
// }`;

// const name = "Иннокентий";
// firstName = name.toLowerCase();

// console.log(firstName.charAt(0));
// console.log(firstName.indexOf("о"));
// console.log(firstName.startsWith("инн"));
// console.log(firstName.endsWith("j"));
// console.log(firstName.repeat(5));

// const string = "     password      ";
// console.log(string.trim()); //удаление пробелов ' '
// console.log(string.trimLeft());
// console.log(string.trimRight());

function logPerson(s, name, age) {
  if (typeof age != "number" || age < 0) {
    age = "Это не число или ещё не родился";
  }
  return `${s[0]}${name}${s[1]}${age}${s[2]}`;
}

const personName = "Иннокентий";
const personAge = 23;
const output = logPerson`Name ${personName}, Age ${personAge}!`;
console.log(output);
console.log(typeof personAge);
