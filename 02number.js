//Number

// const num = 21; //integer
// const float = 21.21; // float
// const pow = 10e3; //pow
// console.log(pow);

// console.log("MAX_SAFE_INTEGER", Number.MAX_SAFE_INTEGER);
// console.log("MIN_SAFE_INTEGER", Number.MIN_SAFE_INTEGER);
// console.log("MAX_SAFE_INTEGER", Number.MAX_SAFE_INTEGER);
// console.log("POW 53", Math.pow(2, 53) - 1);
// console.log("POSITIVE_INFINITY", Number.POSITIVE_INFINITY);
// console.log("NEGATIVE_INFINITY", Number.NEGATIVE_INFINITY);
// console.log(2 / 0);
// console.log(Number.NaN); //not a number
// console.log(2 / "q");

// const weird = 2 / undefined;
// console.log(isNaN(weird)); //true

// const stringInt = "21";
// const stringFloat = "21.21";
// console.log(parseInt(stringInt) + 2);
// console.log(+stringInt + 10);

// console.log(parseFloat(stringFloat) + 2);
// console.log(+stringFloat + 2);

// console.log(0.2 + 0.4);
// console.log(+(0.2 + 0.4).toFixed(1));

// console.log(typeof 900719925474099199999999n); // DIGINT

// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.sqrt(121));
// console.log(Math.abs(-42));
// console.log(Math.max(2, 58, 5, 8, 54, 8, 468, 4));
// console.log(Math.floor(4.9)); //округляет в меньшую сторону
// console.log(Math.ceil(4.9)); //округляет в большую сторону
// console.log(Math.round()); //нормальное округление
// console.log(Math.trunc());
// console.log(Math.random());

function getRandomBetween(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

console.log(getRandomBetween(1, 10));
