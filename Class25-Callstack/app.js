// JavaScript execution context

/* 
1. Global execution context
2. Function execution context
3. Eval
*/

let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);

console.log(result1);
console.log(result2);

/*2 . memory phase (first cycle)
val1 --> undefined
val2 --> undefined
addNum --> function reference
result1 --> undefined
result2 --> undefined

3. Execution phase
val1 --> 10
val2 --> 5

function invoked, creates new execution thread.

memory phase
val1 --> undefined
val2 --> undefined
total --> undefined

execution context 
num1--> 10
num2--> 5
total --> 15 return to global execution context

(execution context is popped off the call stack when the function completes its execution)

function invoked at last line again, creates new execution thread.

memory phase
val1 --> undefined
val2 --> undefined
total --> undefined

execution context 
num1--> 10
num2--> 5
total --> 12 return to global execution context
(now new execution thread is deleted)
*/
