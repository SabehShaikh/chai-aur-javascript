let score = "sabeh";
console.log(typeof score); // string

let valueInNumber = Number(score);
console.log(typeof valueInNumber); //  number
console.log(valueInNumber); // NaN

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = "sabeh";

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1=> true; 0=> false
// "" => false
// "sabeh" => true

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber); // string

// ************************ Operations ***************************

let value = 3;
let negValue = -value; // convert value to negative
console.log(negValue);

// console.log(2**3) power

let str1 = "hello";
let str2 = " world";

let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32
console.log("1" + "2" + 5); //125

console.log(+true); // 1
console.log(+""); // 0

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);
