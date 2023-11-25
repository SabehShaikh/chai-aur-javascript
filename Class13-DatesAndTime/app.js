// Dates

let myDate = new Date();
console.log(myDate.toString()); // Thu Nov 23 2023 09:47:02 GMT+0500 (Pakistan Standard Time)
console.log(myDate.toDateString()); // thu Nov 23 2023
console.log(myDate.toISOString()); // 2023-11-23T04:46:31.440Z
console.log(myDate.toLocaleString()); // 23/11/2023, 09:46:31
console.log(typeof myDate); // object

let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate); //Mon Jan 23 2023 00:00:00 GMT+0500 (Pakistan Standard Time)
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp); // miliseconds 1970 se

console.log(Math.floor(Date.now() / 1000));

console.log(myDate.getMonth()); // 10 --> Nov
console.log(myDate.getDay()); // 4 --> Thu
console.log(myDate.getDate()); // 23 --> nov
