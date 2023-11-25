// array

const myArr = [0, 1, 2, 3, 4, 5, 6, true, "sabeh"];

const myHeroes = ["batman", "spidermen"];
const myArr2 = new Array(4, 5, 6);

console.log(myArr[0]);

// array methods

myArr.push(7); // add in end
myArr.push(8); // add in start
myArr.pop(); // removes from end

myArr.unshift(9); //  add in start
myArr.shift(); // removes from start

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join();
console.log(newArr);
console.log(typeof newArr); // string

console.log(myArr);

const marvel_heroes = ["thor", "ironman", "spiderman"];
const dc_heroes = ["superman", "flash", "batman"];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]); // flash

const allHeroes = marvel_heroes.concat(dc_heroes);
console.log(allHeroes);

// spread operator

const all_new_heroes = [...marvel_heroes, ...dc_heroes];
console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


console.log(Array.isArray("sabeh")) // false
console.log(Array.from("sabeh")) // ['s', 'a', 'b', 'e', 'h']


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)); // [100, 200, 300]

