class Student {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello  ${this.name}`);
  }
}

// const student = new Student("Inn"); //старый способ
class PrortoStudent {
  university = "SUITD";
}
const student = Reflect.construct(Student, ["Igor"]);
// console.log(student.__proto__ === PrortoStudent.prototype);

// Reflect.apply(student.greet, { name: "Tester" }, []);
// console.log(Reflect.ownKeys(student));
Reflect.preventExtensions(student); //блокировка модификации
console.log(Reflect.isExtensible(student)); //проверка блокировки (false - есть, true - нет)

student.age = 25;
console.log(student);
