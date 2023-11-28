// var c = 300;
let a = 300;

if (true) {
  let a = 10;
  const b = 10;
  console.log("INNER-->", a);
  //   var c = 30;
}

console.log("outer-->", a);
// console.log(b);
// console.log(c); // 30

// nested scope

function one() {
  //   const username = "sabeh";

  function two() {
    // const website = "youtube";
    // console.log(username);
  }
  //   console.log(website);
  //   two();
}
// one();

if (true) {
  const username = "sabeh";
  if (username === "sabeh") {
    const website = " youtube";
    // console.log(username + website);
  }
  //   console.log(website);
}

// console.log(username);

// ++++++++++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5));
function addone(num) {
  return num + 1;
}

// function expression
addTwo(5);
const addTwo = function (num) {
  return num + 2;
};
