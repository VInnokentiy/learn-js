// this - указывает на тот объект, в контексте которого он был вызван
function hello() {
  console.log("Hello", this);
}

const person = {
  name: "Max",
  age: 25,
  greet: hello,
  greetGlobal: hello.bind(globalThis), //bind - указывает на контекст
  logInfo: function (job, phone) {
    console.group(`${this.name}`);
    console.log(`Name is ${this.name} 
age: ${this.age}
job is ${job}
phone: ${phone}`);
    console.groupEnd();
  },
};

// console.log(person);
// console.log(person.greetGlobal());
// console.log(hello());
// person.logInfo();

const darya = {
  name: "Businka",
  age: 20,
};

person.logInfo.bind(darya, "SMM", "Iphone")(); // в bind можно передавать значения для функции, пустые скобки - для вызова функции
person.logInfo.call(darya, "SMM", "Iphone"); //call - указывает контекст и сразу вызывает функции ()- НЕ НУЖНЫ
person.logInfo.apply(darya, ["SMM", "Iphone"]); //apply - всегда принимает в себя ДВА аргумента

const array = [1, 2, 3, 4, 5];
Array.prototype.mult = function (n) {
  return this.map(function (i) {
    return i * n;
  });
};
console.log(array.mult(2));
