const name = "sabeh";
const repoCount = 50;

// console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("sabeh-ss");

console.log(gameName[0]);
// console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); // b
console.log(gameName.indexOf("e")); // 3

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "      sabeh            ";
console.log(newStringOne);
console.log(newStringOne.trim()); // removes starting ending space.

const url = "https://sabeh.com/sabeh%20shaikh";

console.log(url.replace("%20", "-")); // replace %20 with -

console.log(url.includes("s")); // true

console.log(gameName.split(""));
