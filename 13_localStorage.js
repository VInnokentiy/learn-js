//local storage - данные будут сохраняться даже после перезагрузки страницы
//только браузерный API

//ОСНОВНЫЕ ОТЛИЧИЯ ОТ ПЕЧЕНЕК
//1 LOCAL STORAGE НАМНОГО ОБЪЁМНЕЕ (5 мб)
//2 Печеньки сразу улетают с запросами на сервер, а локал никуда не летит

const myNumber = 21;

localStorage.setItem("number", myNumber.toString()); //запись значения
// console.log(localStorage.getItem("number")); // получение
localStorage.removeItem("number"); //удаление элемента
localStorage.clear(); //полная чистка

const person = {
  firstName: "Max",
  age: 51,
};

//работает только со строками
localStorage.setItem("person", JSON.stringify(person));

const raw = localStorage.getItem("person");
const person1 = JSON.parse(raw);
person1.firstName = "Innokentiy";

// console.log(person1);
