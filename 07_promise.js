// console.log("request");

// setTimeout(() => {
//   console.log("preparing");

//   const backendData = {
//     server: "avs",
//     status: "working",
//     port: 5055,
//   };

//   setTimeout(() => {
//     backendData.modified = true;
//     console.log("Data received", backendData);
//   }, 3000);
// }, 2000);

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("preparing");
//     const backendData = {
//       server: "avs",
//       status: "working",
//       port: 5055,
//     };
//     reject(backendData);
//   }, 2000);
// });

// p.then((data) => {
//   return new Promise((resolve, reject) => {
//     //resolve - в случае успешного выполнения
//     //reject - в случае ошибки
//     setTimeout(() => {
//       data.modified = true;
//       resolve(data);
//     }, 2000);
//   });
// })
//   .then((clientData) => {
//     console.log("Data received", clientData);
//   })
//   .catch((e) => console.error("Error:", e))
//   .finally(() => console.log("Finnaly")); // произведёт действие независимо от результата, будет тшибка или нет

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

// sleep(1000).then(() => console.log("After 1 second"));
// sleep(2000).then(() => console.log("After 2 second"));
// sleep(3000).then(() => console.log("After 3 second"));

Promise.all([sleep(1000), sleep(4000)]).then(() =>
  console.log("Выводится сообщение только после выполнения всех промисов")
);

Promise.race([sleep(1000), sleep(4000)]).then(() =>
  console.log("Выводится cамое первое сообщение по скорости")
);
