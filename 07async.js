//Event Loop
// const timeout = setTimeout(() => {
//   console.log("timeout");
// }, 2000);
// clearTimeout(timeout); //отмена таймаута

// const interval = setInterval(() => {
//   console.log("interval");
// }, 1000);
// clearInterval(interval);

// const delay = (callback, wait = 1000) => {
//   setTimeout(callback, wait);
// };

// delay(() => {
//   console.log("After 2 sec");
// }, 2000);

const delay = (wait = 1000) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Что-то пошло не так");
    }, wait);
  });
  return promise;
};

// delay(3000)
//   .then(() => {
//     console.log("After 3 sec");
//   })
//   .catch((err) => console.error("Error:", err))
//   .finally(() => console.log("Finally"));

const getData = () =>
  new Promise((resolve) => resolve([1, 1, 2, 3, 5, 8, 13, 21]));
// getData().then((data) => console.log(data));

async function asyncExample() {
  try {
    await delay(2000);
    const data = await getData();
    console.log("Data ", data);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("finish");
  }
}

asyncExample();
