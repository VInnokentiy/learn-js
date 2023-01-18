// const title = "Welcome";
// const isVisible = () => Math.random() > 0.5;
// const template = `
// ${isVisible() ? `<p>Visible</p>` : "   "}
// <h1 style="color: red">${title}</h1>
// `;
// console.log(template);

// Method string
const str = "Hello!";
console.log(str.startsWith("H"));
console.log(str.startsWith("e"));
console.log(str.endsWith("H"));
console.log(str.endsWith("!"));
console.log(str.includes("ll"));
console.log(str.repeat(10));
console.log(str.trim()); //удаление пробелов
console.log(str.trimEnd());
console.log(str.trimStart());
console.log(str.padStart(20, "123456")); // указане длинны строки, недостающие символы добавляет пробелами в начало
console.log(str.padEnd(20, "12")); // добавляет символы в конец
