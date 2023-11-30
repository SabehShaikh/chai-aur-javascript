const user = {
  username: "sabeh",
  price: 999,

  welcomeMessage: function () {
    // console.log(`${this.username}, welcome to the website`);
    // console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this);

// function chai() {
//   let username = "sabeh";
//   console.log(this.username);
// }

// chai();

const chai = () => {
  let username = "sabeh";
  console.log(this.username);
};

// chai();

// const addTwo = (num1, num2) => num1 + num2;
// implicit return
// const addTwo = (num1, num2) => ( num1 + num2 );

const addTwo = (num1, num2) => ({ username: "sabeh" });
console.log(addTwo(3, 7));

// const myArray = [2,5,3,7,8];

// myArray.forEach()
