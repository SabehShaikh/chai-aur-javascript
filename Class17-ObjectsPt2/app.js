// const tiktokUser = new Object()

const tiktokUser = {};

tiktokUser.id = "123abc";
tiktokUser.name = "Alex";
tiktokUser.isLoggedIn = false;

// console.log(tiktokUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "sabeh",
      lastname: "shaikh",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj4 = { 5: "e", 6: "f" };

// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign({}, obj1, obj2, obj4);

const obj3 = { ...obj1, ...obj2, ...obj4 };

console.log(obj3);

const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {},
];

users[1].email;
console.log(tiktokUser);

// Log the keys of the tiktokUser object
console.log(Object.keys(tiktokUser));

// Log the values of the tiktokUser object
console.log(Object.values(tiktokUser));

// Log an array of key-value pairs of the tiktokUser object
console.log(Object.entries(tiktokUser));

// Check if the tiktokUser object has a property named "IsLoggedIn" and log the result
console.log(tiktokUser.hasOwnProperty("IsLoggedIn"));

/*  Object de-structure and JSON API intro :  */

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};

// course.courseInstructor

const { courseInstructor: instructor } = course;
console.log(instructor);
