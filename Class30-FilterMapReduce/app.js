// const coding = ["js", "java", "python", "ruby", "react"];

// for each do not return any value
// const values = coding.forEach((item) => {
// //   console.log(item);
//   return item;
// });

// console.log(values);

// filter
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => {
//   return num > 4;
// });

const newNums = [];

myNums.forEach((num) => {
  if (num > 4) {
    newNums.push(num);
  }
});

console.log(newNums);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

// const userBooks = books.filter((bk) => {
//   return bk.genre === "History";
// });

const userBooks = books.filter((bk) => {
  return bk.publish >= 1995 && bk.genre === "History";
});

console.log(userBooks);

// Map
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNumbers = myNumbers.map((num) => {
//   return num + 10;
// });

// chaining
const newNumbers = myNumbers
  .map((num) => {
    return num * 10;
  })
  .map((num) => {
    return num + 2;
  })
  .filter((num) => {
    return num >= 50;
  });

console.log(newNumbers);

// Reduce

// acc mei initial value hui..
const array1 = [1, 2, 3, 4];

const inititalValue = 0;

const sumWithInitial = array1.reduce((acc, curr) => {
  console.log(`acc: ${acc} and currval: ${curr}`);
  return acc + curr;
}, inititalValue);

console.log(sumWithInitial);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "python course",
    price: 3999,
  },
  {
    itemName: "app course",
    price: 999,
  },
  {
    itemName: "data science course",
    price: 4999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => {
  return acc + item.price;
}, 0);

console.log(priceToPay);


/* 
If curr is greater than acc, then the value of the 
expression is curr.
If curr is not greater than acc, then the value
 of the expression is acc.
*/
const numbers = [10, 5, 8, 20, 3];
const max = numbers.reduce(
  (acc, curr) => (curr > acc ? curr : acc),
  numbers[0]
);

console.log(max); // Output: 20
