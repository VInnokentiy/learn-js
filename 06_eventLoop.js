console.log("Start");

setTimeout(() => {
  console.log("Finish");
}, 2000);

console.log("Start 2");

function delay3sec() {
  console.log("Delay 3 sec");
}

setTimeout(delay3sec, 3000);

//обработка setTimeout перекладывается в отдельную очередь
//setTimeout 0 - отработает после консоль логов
