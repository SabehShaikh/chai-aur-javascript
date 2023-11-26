// singleton--> jab constructor se bnega
// Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Sabeh",
  "full name": "Sabeh Shaikh",
  [mySym] : "mykey1" ,
  age: 19,
  location: "Karachi",
  email: "sabeh@goggle.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym])


JsUser.email = "sabeh@chatgpt.com"
console.log(JsUser.email);

// Object.freeze(JsUser) // freeze object, changes cannot be made now.

JsUser.email = "sabeh@microsoft.com"
console.log(JsUser.email);

console.log(JsUser)

JsUser.greeting = function() {
    console.log("Hello JS User!" , JsUser.name)
    return JsUser.name;
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`)
    return JsUser.name;
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());