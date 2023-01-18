const requestURL = "https://jsonplaceholder.typicode.com/users";

// const xhr = new XMLHttpRequest();

// xhr.open("GET", requestURL); //указывается метод
// // get - получение данных
// // post - создание
// // delete - для удаления
// // patch - для частичного обновления
// // put - для полного обновления

// xhr.responseType = "json";

// xhr.onload = () => {
//   if (xhr.status >= 400) {
//     //-код более 400 - ошибка
//     console.error(xhr.response);
//   } else {
//     console.log(xhr.response);
//   }
//   //   console.log(xhr.response); - строка
//   //   console.log(JSON.parse(xhr.response)); - объект
// };

// xhr.onerror = () => {
//   // обработка ошибок, если нет, то автоматом попадёт в onload
//   console.log(xhr.response);
// };
// //response - ответ

// xhr.send();

function sendRequest(method, url, body = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);

    xhr.responseType = "json";
    xhr.setRequestHeader("Content-Type", "application/json"); // -установить хедеры, которые отправляются с запроса

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };

    xhr.onerror = () => {
      resolve(xhr.response);
    };

    xhr.send(JSON.stringify(body));
  });
}

// sendRequest("GET", requestURL)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

const body = {
  name: "Innokentiy",
  age: 23,
};

sendRequest("POST", requestURL, body)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
