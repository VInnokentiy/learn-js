const set = new Set([1, 2, 3, 3, 3, 4, 5, 5, 6]);
set.add(10).add(7).add(11);

// console.log(set.has(21));
// console.log(set.size);
// console.log(set.delete(10));
// set.clear();
// console.log(set);

// console.log(set.keys());
// for (let key of set) {
//   console.log(key);
// }

function uniqValues(array) {
  return [...new Set(array)];
}
console.log(uniqValues([1, 1, 2, 2, 4, 4, 8, 8, 8, 51, 15]));
