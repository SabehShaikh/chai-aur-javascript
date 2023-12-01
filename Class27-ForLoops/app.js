// For loop

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    console.log("5 is best number");
  }
  //   console.log(element);
}

// console.log(element);

for (let j = 1; j <= 10; j++) {
  //   console.log(`Outer loop value: ${j}`);
  for (let k = 1; k <= 10; k++) {
    // console.log(`Inner loop value: ${k} and inner loop ${j}`);
    // console.log(j + "*" + k + " = " + j * k);
  }
}

let myArray = ["flash", "batman", "superman"];

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  console.log(element);
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if(index == 5) {
//         console.log('detected 5');
//         break;
//     }
//   console.log(`Value of i is ${index}`);
// }

for (let s = 1; s <= 20; s++) {
  if (s == 5) {
    console.log("detected 5");
    continue;
  }
  console.log(`Value of i is ${s}`);
}
