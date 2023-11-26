// +++++++++++++++++ Numbers ++++++++++++++++++++++++

const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;
console.log(hundreds.toLocaleString());

// +++++++++++++++++++++++++++ Maths ++++++++++++++++++++++

console.log(Math);

console.log(Math.abs(-4)); // change negative into positive
console.log(Math.round(4.5));
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.8)); // 4

console.log(Math.max(4, 6, 8, 9, 15, 3, 2)); // 15

console.log(Math.random() * 10 + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);