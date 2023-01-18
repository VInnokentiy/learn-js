const getDefault = (c) => c ** 2;
const compute = (a = 10, b = getDefault(10)) => a + b;
console.log(compute(10));
