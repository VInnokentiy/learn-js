// идея промисов - оборачивать асинхронный код и проще с ним взаимодействовать, убирая уровень вложенности
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Success");
//   }, 1000);
// });

const delay = (ms) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Done! ${ms}`);
    }, ms);
  });
// delay(1000)
//   .then((data) => delay(500))
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("Finish"));

// async function asyncDelay() {
//   try {
//     const data = await delay(2000);
//     console.log(data);
//   } catch (e) {
//     console.log("Error: ", e);
//   }
// }
// asyncDelay();

Promise.all([delay(1000), delay(1500), delay(500)]).then(
  (
    data // all - ждёт пока выполняться все промисы и только потом выведет data
  ) => console.log(data)
);

Promise.race([delay(1000), delay(1500), delay(500)]).then(
  (
    data // race - выводит самый быстрый промис
  ) => console.log(data)
);
