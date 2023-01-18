//значения могут быть только объекты
const users = [{ name: "Daria" }, { name: "Alex" }, { name: "Taras" }];

const visits = new WeakSet();

visits.add(users[0]).add(users[1]);
users.splice(1, 1); //удаление

console.log(visits.has(users[0]));
console.log(visits.has(users[1]));
