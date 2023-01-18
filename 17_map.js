const obj = {
  name: "Innokentiy",
  age: 23,
  job: "frontend",
};

const entries = [
  ["name", "Innokentiy"],
  ["age", 26],
  ["job", "frontend"],
];

// console.log(Object.entries(obj)); //приведение объекта к массиву
// console.log(Object.fromEntries(entries)); //приведение массива к объекту

const map = new Map(entries);
//В Map ключами могут быть разные значения, в том числе объекты
map.set("newField", 21).set(obj, "Value of object").set(NaN, "Nan??");

// console.log(map);
// console.log(map.get(NaN));

// map.delete(obj);
// console.log(map.has(obj));
// console.log(map.size);
// map.clear() //полная чистка мар

// for (let [key, value] of map) {
//   console.log(key, value);
// }
// for (let value of map.values()) {
//   console.log(value);
// }
// for (let key of map.keys()) {
//   console.log(key);
// }

// map.forEach((value, key, m) => console.log(value, key));

const array = [...map];
// console.log(array);

const user = [{ name: "Daria" }, { name: "Alex" }, { name: "Taras" }];

const visits = new Map();

visits
  .set(user[0], new Date())
  .set(user[1], new Date(new Date().getTime() + 1000 * 60))
  .set(user[2], new Date(new Date().getTime() + 5000 * 60));

function lastVisit(user) {
  return visits.get(user);
}

console.log(lastVisit(user[0]));
