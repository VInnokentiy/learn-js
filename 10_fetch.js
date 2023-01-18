const requestURL = "https://jsonplaceholder.typicode.com/users";

// Для метода GET
// function sendRequest(method, url, body = null) {
//   return fetch(url).then((response) => {
//     return response.json();
//   });
// }

// sendRequest("GET", requestURL)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

const body = {
  name: "Innokentiy",
  age: 23,
};

function sendRequest(method, url, body = null) {
  const headers = {
    "Content-Type": "application/json",
  };
  return fetch(url, {
    method,
    body: JSON.stringify(body),
    headers,
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return response.json().then((error) => {
      const e = new Error("WTF");
      e.data = error;
      throw e;
    });
  });
}

sendRequest("POST", requestURL, body)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
