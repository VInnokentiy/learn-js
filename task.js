const evenNumb = (a, b) => {
  if (a < 100 && a % 2 == 0) {
    b += a;
    return b;
  }
  console.log(b);
};

const multiplicityCalculation = (n, maxNum) => {
  let number = [];
  for (let i = 1; i <= maxNum; i++) {
    if (i % n === 0) {
      number.push(i);
    }
  }
  return number;
};

const sum = multiplicityCalculation(2, 100).reduce(
  (partialSum, a) => partialSum + a,
  0
);
console.log(sum);
