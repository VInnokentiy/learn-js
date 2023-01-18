// window.alert("1");

// window.prompt();
// confirm();
const heading = document.getElementById("21");
// const heading2 = document.getElementsByTagName("h2")[0];                 // Поиск по тегу
// const heading2 = document.getElementsByClassName("h2-class")[0];         // Поиск по классу
const heading2 = document.querySelector(".h2-class"); // Поиск по чему угодно, возвращает всегда 1 элемент (первый попавшийся)
// const heading3 = heading2.nextElementSibling;
const h2List = document.querySelectorAll("h2");
const heading3 = h2List[1];
// console.log(h2List);
// console.log(heading3);
// console.dir(heading3.textContent);

setTimeout(() => {
  addStyles2(heading, "РОЛИС");
}, 1000);

setTimeout(() => {
  addStyles2(heading2, "Гори в аду", "gray");
}, 2000);

const link = heading3.querySelector("a");
link.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("link", event.target.getAttribute("href"));
  const url = event.target.getAttribute("href");
  window.location = url;
});
setTimeout(() => {
  addStyles2(heading3.children[0], "ZAEBAL", "red", (fontSize = "3rem"));
}, 3000);

function addStyles2(node, text, color = "blue", fontSize) {
  node.textContent = text;
  node.style.color = color;
  node.style.textAlign = "center";
  node.style.backgroundColor = "lime";
  node.style.padding = "2rem";
  node.style.width = "100%";
  node.style.display = "block";
  if (fontSize) {
    node.style.fontSize = fontSize;
  }
}

heading.onclick = () => {
  if (heading.style.background === "lime") {
    heading.style.background = "yellow";
    heading.style.color = "blue";
  } else {
    heading.style.background = "lime";
    heading.style.color = "aquamarine";
  }
};

heading2.addEventListener("dblclick", () => {
  // надо разобраться
  if (heading2.style.background === "lime") {
    heading2.style.color = "white";
    heading2.style.background = "pink";
  } else {
    heading2.style.background = "lime";
    heading2.style.color = "black";
  }
});
