const person = {
  name: "Innokentiy",
};

function info(phone, email) {
  console.log(`Name: ${this.name}, Phone: ${phone}, Email: ${email}`);
}

info.bind(person)(11111, "sdmocmso"); //bind - возвращает функцию, её можно сразу же вызвать
info.bind(person, 11111, "sdmocmso")(); //первыф параметр - это указание контекста

// 1 способ
// function bind(fn, context, ...rest) {
//   return fn.bind(context, ...rest);
// }

// // 2 способ - без встроенных методов
// function bind(fn, context, ...rest) {
//   return function (...args) {
//     const uniqId = Date.now().toString();

//     context[uniqId] = fn;

//     const result = context[uniqId](...rest.concat(args));

//     delete context[uniqId];

//     return result;
//   };
// }

//3 способ ES6
function bind(fn, context, ...rest) {
  return function (...args) {
    return fn.call(context, ...rest.concat(args));
  };
}

// bind(info, person)(11111, "sdmocmso");
// bind(info, person, 11111)("sdmocmso");
// bind(info, person, 11111, "sdmocmso")();

//Call
function call() {}
