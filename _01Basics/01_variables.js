const myPhone = 7303093135;

let simProvider = "airtel";
var plan = "pre-paid";

let loginId = "maheshwar9791@gmail.com";
let phoneLock = 730309;

// myPhone = 8285779649; NOT ALLOWED error----: TypeError: Assignment to constant variable.

simProvider = "jio";

phoneLock = 207821; // In javascript we can declare and assign value to variable without tell the type, it can automatic decides data type like let, var, string or number. but this is not recommended or good practice.

// We can Define variable by using two types let and Var,
//  but var is not used in new version as it have an issue related to Scope, i.e block scope and functional scope. var not follow scope.

let batteryPercentage;
let missedCalls = null;

console.log(myPhone);

console.log(simProvider);
console.log(phoneLock);

/* 
Output:
7303093135
jio
207821

*/

// Print array [ ]

console.table([
  myPhone,
  simProvider,
  plan,
  loginId,
  phoneLock,
  batteryPercentage,
  missedCalls,
]);

/*
Each value becomes a row

Index (0,1,2…) becomes the key

You lose variable names

*/

// Print Object { }, Key-value

console.table({
  myPhone,
  simProvider,
  plan,
  loginId,
  phoneLock,
  batteryPercentage,
  missedCalls,
});

/*
Keys become column labels
Values stay mapped to names
Much more readable & debuggable
*/

// console.table([
//   typeof (myPhone,
//   simProvider,
//   plan,
//   loginId,
//   phoneLock,
//   batteryPercentage,
//   missedCalls),
// ]);

/*
Your syntax is incorrect because:

typeof works on one expression only

You mixed commas inside typeof (…)
console.table() expects an array or object
*/

console.table({
  myPhone: typeof myPhone,
  simProvider: typeof simProvider,
  plan: typeof plan,
  loginId: typeof loginId,
  phoneLock: typeof phoneLock,
  batteryPercentage: typeof batteryPercentage,
  missedCalls: typeof missedCalls,
});

//Modern JS --> Shortcut

const vars = {
  myPhone,
  simProvider,
  plan,
  loginId,
  phoneLock,
  batteryPercentage,
  missedCalls,
};

console.table(
  Object.fromEntries(Object.entries(vars).map(([k, v]) => [k, typeof v]))
);

// key, value and type all in one table

const data = {
  myPhone,
  simProvider,
  plan,
  loginId,
  phoneLock,
  batteryPercentage,
  missedCalls,
};

console.table(
  Object.entries(data).map(([key, value]) => ({
    key,
    value,
    type: typeof value,
  }))
);

/*

What’s happening (simple words)

{ key: value } → stores variable names
Object.entries() → converts object to array
["myPhone", "iPhone"]


.map() → transforms each entry into a row
console.table() → prints everything neatly

*/
