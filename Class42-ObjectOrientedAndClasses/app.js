// context btane k liye--> this keyword.

const user = {
    username: "sabeh",
    loginCount: 8,
    signIn: true,

    getUserDetails: function () {
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}

// global context mein this--> window object
console.log(user.username);
// console.log(user.getUserDetails());
console.log(this);

// Constructor function: har bar new instance deta ha, new is a constructor 

// const promiseOne = new Promise()
// const data = new Date()

function User(username, loginCount, isLoggedIn) {
    // Step 2: Constructor Function Call
    // Step 3: Properties Assignment
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
    }

    // Step 4: Implicit Return (this object is returned)
}

// const userOne =  User("hitesh", 12, true);
// const userTwo = User("ChaiAurCode", 11, false)
// console.log(userOne); // value overwritted.

// Step 1: Creation of an Empty Object
const userOne = new User("hitesh", 12, true);
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
console.log(userTwo);

/* When we use new keyword
step 1--> one empty object is created
step2--> constructor function is called
step3--> this keyword is injected.  */