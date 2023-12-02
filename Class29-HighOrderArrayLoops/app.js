// for of

// ["", ""]
// [({}, {}, {})];

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  //   console.log(num);
}

const greetings = "Hello world";

for (const greet of greetings) {
  //   console.log(`Each char is ${greet}`);
}

// Maps

// const map = new Map();

// map.set("PK", "Pakistan");
// map.set("USA", "United States of America");
// map.set("UK", "United Kingdom");

// console.log(map);

// for (const [key, value] of map) {
//   //   console.log("key-->", key, "value-->", value);
// }

const myObject = {
  game1: "NFS",
  game2: "Valorant",
  game3: "GTA-V",
};

// for (const [key,value] of myObject) {
//     console.log("key-->" , key , "value-->" , value);  //  TypeError: myObject is not iterable
// }

// for in loop:
const myObj = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  py: "python ",
};

for (const key in myObj) {
  console.log(`${key} shortcut is for ${myObj[key]}`);
}

const programming = ["js", "rb", "py", "cpp", "java"];

for (const key in programming) {
  console.log(programming[key]);
}

// const map = new Map();

// map.set("PK", "Pakistan");
// map.set("USA", "United States of America");
// map.set("UK", "United Kingdom");

// for (const key in map) {
//   console.log(key); // not iterable
// }

// For Each Loop

const coding = ["js", "rb", "java", "python", "cpp"];

// coding.forEach((item)=> {
// console.log(item);
// })

// function printMe(item) {
//   console.log(item);
// }

// coding.forEach(printMe); // only ref dena ha, not execution

// coding.forEach((item, index, arr) => {
//   console.log("item-->", item, "index-->", index, "arr-->", arr);
// });

const myCoding = [
  {
    languageName: "JavaScript",
    languageFileName: "js",
  },
  {
    languageName: "Java",
    languageFileName: "java",
  },
  {
    languageName: "Python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});
