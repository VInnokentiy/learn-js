class Programmer {
  constructor(name) {
    this.name = name;
  }

  code() {
    console.log(`${this.name} is coding...`);
  }
}

class Frontend extends Programmer {
  angular() {
    console.log(`${this.name} is creating Angular app...`);
  }
}

class Backend extends Programmer {
  nodejs() {
    console.log(`${this.name} is programming on Node JS...s`);
  }
}

// class Fullstack extends

const programmer = new Programmer("inn");
// programmer.code();

const frontend = new Frontend("INn");
frontend.code();
frontend.angular();

const backend = new Backend("Max");
backend.code();
backend.nodejs();
