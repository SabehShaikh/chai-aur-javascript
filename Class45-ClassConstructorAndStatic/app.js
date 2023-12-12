// ES6 

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abc`
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`
    }

}

const sabeh = new User("sabeh", "sabeh@gmail.com", "123")
console.log(sabeh.encryptPassword());
console.log(sabeh.changeUsername());

// behind the scene

function MyUser(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

MyUser.prototype.encryptPassword = function () {
    return `${this.password}abc`
}

MyUser.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`

}
const tea = new MyUser("tea", "tea@gmail.com", "456")
console.log(tea.encryptPassword());
console.log(tea.changeUsername());


// inheritance.js

class NewUser {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME IS: ${this.username}`);
    }
}

class Teacher extends NewUser {
    constructor(username, email, password) {
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@gmail.com", "123")
chai.logMe()

const masalaChai = new NewUser("masalaChai")
masalaChai.logMe()

console.log(chai instanceof Teacher) // true
console.log(chai instanceof NewUser) // true

// static.js

class oldUser {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    // Static method to create a static ID (not accessible from instances)
    // Static methods are associated with the class itself, not instances
    static createId() {
        return `123`;
    }
}

const hitest = new oldUser("hitest")
// Attempting to call createId() on an instance results in an error
// console.log(hitest.createId()) --> error

class Student extends oldUser {
    constructor(username, email) {
        super(username)
        this.email = email;
    }
}

const iphone = new Student("iphone", "i@phone.com")
iphone.logMe()
// iphone.createId() --> error

// access static value without creating new instances:

// If you want to access a static method or property without creating an instance,
// you can do so directly using the class name. In your case, you want to access the static
//  method createId. Here's how you can do it:

// class oldUser {
//     constructor(username) {
//         this.username = username;
//     }

//     logMe() {
//         console.log(`Username: ${this.username}`);
//     }

//     static createId() {
//         return `123`;
//     }
// }

// // Accessing the static method directly without creating an instance
// const staticId = oldUser.createId();
// console.log(staticId); // Output: 123