class Car {
  type = "car";
  constructor(brand) {
    this.brand = brand;
  }
  greet() {
    console.log(this.brand + " No Mercy");
  }
}

// const bmw = new Car("BMW");
// bmw.greet();
// console.log(bmw.type);
// console.log(bmw.__proto__ === Car.prototype);

class Racecar extends Car {
  //extend - наследование
  constructor(brand, track) {
    super(brand);
    this._track = track;
  }
  get track() {
    return this._track.toUpperCase();
  }
  set track(track) {
    if (track.length < 2) {
      throw new Error("Validation failed");
    } else {
      this._track = track;
    }
  }
  greet() {
    super.greet();
    console.log("Rewrite");
  }
}
const daytona = new Racecar("BMW", "Daytona");
// console.log(daytona.track);
// daytona.greet();
daytona.track = "NUrburgring";
// console.log(daytona.track);

// Stativ
class Util {
  static average(...args) {
    //static позволяет напрямую обращаться к классам и вызывать нужные методы
    return args.reduce((acc, i) => (acc += i), 0) / args.length;
  }
}

// const util = new Util(); // если нет static
// console.log(util.average(1, 1, 2, 3, 5, 8, 13, 21));
const res = Util.average(1, 1, 2, 3, 5, 8, 13, 21);
console.log(res);
