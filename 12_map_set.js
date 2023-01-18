const map = new Map([["a", 1]]);
map.set("b", 2).set(NaN, "Number").set(21, 21); // set - добавляет ключи
// console.log(map.get("a"));
// console.log(map);
// console.log(map.get(NaN));
// // map.clear(); //отчистка
// console.log(map);
// console.log(map.has(21)); //проверка наличия ключа
// map.delete("b"); //удаление ключа, возвращает boolean
// console.log(map.size); //размер map
// console.log(map.keys());
// console.log(map.entries());
// console.log(map.values());

//SET - удаляет дубликаты
const set = new Set([1, 1, 2, 3, 5, 8, 13, 21, 21, 13, 8, 5, 3, 2, 1, 1]);
console.log(set);
console.log(set.size);
set.add(34);
// set.clear()
set.delete(8); //удаляет по значению
console.log(set.values());
console.log(set.entries());
console.log(set.keys());
