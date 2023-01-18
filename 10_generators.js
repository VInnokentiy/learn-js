// const array = [1, 2, 3, 4, 5];
// const str = "Hello!";

// console.log(array[Symbol.iterator]);
// console.log(str[Symbol.iterator]);

// const item = str[Symbol.iterator]();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// for (let item of array) {
//   console.log(item);
// }
// for (let item of str) {
//   console.log(item);
// }

// const country = {
//   values: ["ru", "by", "ua", "kz"],
//   [Symbol.iterator]() {
//     let i = 0;
//     return {
//       next: () => {
//         const value = this.values[i];
//         i++;
//         return {
//           done: i > this.values.length,
//           value,
//         };
//       },
//     };
//   },
// };

// for (let item of country) {
//   console.log(item);
// }

// GENERATOR спец знак обозначения *
function* gen(num = 21) {
  for (let i = 0; i < num; i++) {
    try {
      yield i;
    } catch (error) {
      console.log("eRROR:", error);
    }
  }
}
const iter = gen(3);
console.log(iter.next());
console.log(iter.throw("My Error"));
console.log(iter.next());
console.log(iter.next());

for (let i of gen(4)) {
  console.log(i);
}
