const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

// delay(2000).then(() => console.log("2 sec"));

const url = "https://jsonplaceholder.typicode.com/todos";

// function fetchTodos() {
//   console.log("Fetch todo started");
//   return delay(2000)
//     .then(() => fetch(url))
//     .then((response) => response.json());
// }

// fetchTodos()
//   .then((data) => {
//     console.log("Data:", data);
//   })
//   .catch((e) => console.error(e));

// любая функция с await пишется через async
async function fetchAsyncTodos() {
  console.log("Fetch todo started");
  try {
    await delay(2000); // не будет перехода пока функция не зарезолвится
    const response = await fetch(url);
    const data = await response.json(); //возвращает массив
    console.log("Data:", data);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Finish");
  }
}

fetchAsyncTodos(); //вернёт промис
