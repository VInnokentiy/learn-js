function createProgrammer(name) {
  const programmer = { name };
  return {
    ...programmer,
    ...canCode(programmer),
  };
}

function canCode({ name }) {
  return {
    code: () => console.log(`${name} is coding...`),
  };
}

function canAngular({ name }) {
  return {
    angular: () => console.log(`${name} is creating Angular app...`),
  };
}

function canNodeJS({ name }) {
  return {
    nodeJS: () => console.log(`${name} is programming on Node JS...`),
  };
}

function createFrontend(name) {
  const programmer = createProgrammer(name);
  return {
    ...programmer,
    ...canAngular(programmer),
  };
}

function createBackend(name) {
  const programmer = createProgrammer(name);
  return {
    ...programmer,
    ...canNodeJS(programmer),
  };
}

function createFullstack(name) {
  const programmer = createProgrammer(name);
  return {
    ...programmer,
    ...canNodeJS(programmer),
    ...canAngular(programmer),
  };
}

const programmer = createProgrammer("Inn");
programmer.code();

const frontend = createFrontend("Max");
frontend.code();
frontend.angular();

const backend = createBackend("Innokentiy");
backend.code();
backend.nodeJS();

const fullstack = createFullstack("Man");
fullstack.code();
fullstack.nodeJS();
fullstack.angular();
