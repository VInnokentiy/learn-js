//Objects
const person = {
  name: "Darya",
  age: 20,
  job: "SMM",
};

const op = new Proxy(person, {
  get(target, prop) {
    console.log(`Getting prop ${prop}`);
    return target[prop];
  },
  set(target, prop, value) {
    if (prop in target) {
      target[prop] = value;
    } else {
      throw new Error(`No ${prop} field in target`);
    }
  },
  has(target, prop) {
    return ["name", "age", "job"].includes(prop);
  },
  deleteProperty(target, prop) {
    console.log(`Deleting - ${prop}`);
    delete target[prop];
    return true;
  },
});

//Function
const log = (text) => `Log: ${text}`;

const fp = new Proxy(log, {
  apply(target, thisArg, args) {
    console.log("Calling fn...");

    return target.apply(thisArg, args).toUpperCase();
  },
});

//Classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const Pp = new Proxy(Person, {
  construct(target, args) {
    console.log("Consrtuct...");
    return new target(...args);
  },
});
// const p = new Pp("Inn", 23);

//Practice
//Wrapper
const withDefaultValue = (target, defaultValue = 0) =>
  new Proxy(target, {
    get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue),
  });

const position = withDefaultValue(
  {
    x: 21,
    y: 42,
  },
  0
);
console.log(position);

// Hidden properties
const witHiddenProps = (target, prefix = "_") =>
  new Proxy(target, {
    has: (obj, prop) => prop in obj && !prop.startsWith(prefix),
    ownKeys: (obj) => Reflect.ownKeys(obj).filter((p) => !p.startsWith(prefix)),
    get: (obj, prop, receiver) => (prop in receiver ? obj[prop] : void 0),
  });

const data = witHiddenProps({
  name: "Innokentiy",
  age: 23,
  _sex: "Love big ass",
});

//Optimization
// const userData = [
//   { id: 1, name: "innokentiy", job: "Frontend", age: 23 },
//   { id: 2, name: "daria", job: "SMM", age: 20 },
//   { id: 3, name: "svetlana", job: "Bookkeaper", age: 51 },
//   { id: 4, name: "maxim", job: "Builder", age: 51 },
// ];

const IndexArray = new Proxy(Array, {
  construct(target, [args]) {
    const index = {};
    args.forEach((item) => (index[item.id] = item));

    return new Proxy(target(...args), {
      get(arr, prop) {
        switch (prop) {
          case "push":
            return (item) => {
              index[item.id] = item;
              arr[prop].call(arr, item);
            };
          case "findById":
            return (id) => index[id];
          default:
            return arr[prop];
        }
      },
    });
  },
});

const users = new IndexArray([
  { id: 1, name: "innokentiy", job: "Frontend", age: 23 },
  { id: 2, name: "daria", job: "SMM", age: 20 },
  { id: 3, name: "svetlana", job: "Bookkeaper", age: 51 },
  { id: 4, name: "maxim", job: "Builder", age: 51 },
]);
