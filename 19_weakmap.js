//корзина
//В труктуре WeakMap ключами могут быть только ОБЪЕКТЫ
//get set delete has
const obj = { name: "weakMap" };
const weakMap = new WeakMap([[obj, "obj data"]]);
// console.log(weakMap.has(obj));
// console.log(weakMap.get(obj));

const cache = new WeakMap();

function cacheUser(user) {
  if (!cache.has(user)) {
    cache.set(user, Date.now());
  }
  return cache.get(user);
}

let daria = { name: "Daria" };
let sveta = { name: "Svetlana" };

cacheUser(daria);
cacheUser(sveta);

daria = null;

console.log(cache.has(daria));
console.log(cache.has(sveta));
