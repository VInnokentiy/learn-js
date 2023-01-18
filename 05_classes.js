//КЛАССЫ ЭТО ОПРЕДЕЛЁННЫЙ НЕКИЙ СИНТАКСИС ДЛЯ УДОБНОГО СОЗДАНИЯ ОБЪЕКТОВ

// const animal = {
//   name: "Animal",
//   age: 10,
//   hasTail: true,
// };
// console.log(animal);

// class Animal {
//   static type = "Animal"; //статическая переменная доступна только у самого класса (Animal)

//   constructor(options) {
//     this.name = options.name;
//     this.age = options.age;
//     this.hasTail = options.hasTail;
//   }

//   voice() {
//     console.log("I am animal");
//   }
// }

// const lion = new Animal({
//   name: "Lion",
//   age: 20,
//   hasTail: true,
// });
// console.log(lion);

// class Cat extends Animal {
//   //наследование класса
//   static type = "CAT";

//   constructor(options) {
//     //также вызывает конструктор в дочернем классе, но и в родительском
//     super(options); // чтоб не возникало ошибок
//     this.color = options.color;
//   }

//   voice() {
//     super.voice(); //чтобы вызвать родительский метод, дочерний выведется
//     console.log("Родительские методы можно переписывать");
//   }

//   get ageCat() {
//     return this.age * 7;
//   }

//   set ageCat(newAge) {
//     this.age = newAge;
//   }
// }

// const cat = new Cat({
//   name: "cat",
//   age: 5,
//   hasTail: true,
//   color: "black",
// });

// console.log(cat);
// cat.voice();
// console.log(Cat.type);

class Component {
  constructor(selector) {
    this.$el = document.querySelector(selector); //через $ обозначают переменные которые содержут dom node
  }

  hide() {
    this.$el.style.display = "none";
  }

  show() {
    this.$el.style.display = "block";
  }
}

class Box extends Component {
  constructor(options) {
    super(options.selector);
    this.$el.style.width = this.$el.style.height = options.size + "px";
    this.$el.style.background = options.color;
  }
}

const box1 = new Box({
  selector: "#box1",
  size: 100,
  color: "lime",
});

const box2 = new Box({
  selector: "#box2",
  size: 80,
  color: "yellow",
});

class Circle extends Box {
  constructor(option) {
    super(option);
    this.$el.style.borderRadius = "50%";
  }
}

const c = new Circle({
  selector: "#circle1",
  size: 150,
  color: "gray",
});
