// if

const isUserloggedIn = true;
const temperature = 41;

if (temperature === 40) {
  console.log("Less than 50");
} else {
  console.log("greater than 50");
}
/// === checks type as well
// conditional < , > , <= , >= , ==, != , ===

const score = 200;

if (score > 100) {
  const power = "fly";
  console.log(`user power: ${power}`);
}

// console.log(`user power: ${power}`);

// short hand notation

const balance = 1000;

// if (balance > 500) console.log("test");

if (balance < 500) {
  console.log("less than 500");
} else if (balance < 750) {
  console.log("less than 750");
} else if (balance < 900) {
  console.log("less than 750");
} else {
  console.log("less than 1200");
}

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoggle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
  console.log("Allow to buy course");
}

if (loggedInFromGoggle || loggedInFromEmail) {
  console.log("User logged in");
}

// Switch case

// switch (key) {
//   case value:
//     break;

//   default:
//     break;
// }

const month = "march";

switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("Feb");
    break;
  case "march":
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;

  default:
    console.log("default case!");
    break;
}

// truthy falsy

const userEmail = [];

if (userEmail) {
  console.log("got user email");
} else {
  console.log("Don't have user email");
}

/* falsy values -->
false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

truthy --> 
"0"  ,  'false' , " " , [] , {} , function()
*/

if (userEmail.length === 0) {
  console.log("Array is empty");
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("object is empty");
}

// Nullish Coalescing operator(??): null undefined

let val1;
// val1 = 5 ?? 10;

// val1 = null ?? 10;

// val1 = undefined ?? 15;

val1 = null ?? 10 ?? 20;

console.log(val1); // 10

// Terniary operator

// conditon ? true : false

const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
