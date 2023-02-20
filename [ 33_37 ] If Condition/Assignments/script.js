console.log("_".repeat(20) + "taskOne" + "_".repeat(20));
// Test Case 1
let num = 9; // "009"
console.log(`00${num}`); //"009"
// Test Case 2
let num1 = 20; // "020"
console.log(`0${num1}`); //"020"
// Test Case 3
let num2 = 110; // "110"
console.log(num2.toString()); //"110"

console.log("_".repeat(20) + "taskTwo" + "_".repeat(20));

let num3 = 9;
let str = "9";
let str2 = "20";

if (num3 == str) {
  console.log(`${num3} Is The Same Value As ${str}`);
}
if (num3 == str && typeof num3 != typeof str) {
  console.log(`${num3} Is The Same Value As ${str} But Not The Same Type`);
}
if (num3 !== str2) {
  console.log(`${num3} Is Not The Same Value Or The Same Type As ${str2}`);
}
if (str != str2 && typeof str === typeof str2) {
  console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`);
}
////////
// Output
// "{num1} Is The Same Value As {str}"
// "{num1} Is The Same Value As {str} But Not The Same Type"
// "{num1} Is Not The Same Value Or The Same Type As {str2}"
// "{str} Is The Same Type As {str2} But Not The Same Value"

console.log("_".repeat(20) + "taskThree" + "_".repeat(20));

let num4 = 10;
let num5 = 30;
let num6 = "30";
if (+num6 > num4 && typeof num6 !== typeof num5) {
  console.log(
    `${num5}Is Larger Than ${num4} And Type string Not The Same Type As number`
  );
}
if (num6 > num4 && num6 == num5 && typeof num6 !== typeof num5) {
  console.log(
    `${num5} Is Larger Than ${num4} And Value Is The Same As 30 And Type string Not The Same Type As number`
  );
}
if (num6 !== num4 && typeof num6 !== typeof num5) {
  console.log(
    `${num6} Value And Type Is Not The Same As ${num4} And Type Is Not The Same As ${num5}`
  );
}
/////////
// Write with ternary if syntax
console.log("_".repeat(5)+"ternary"+"_".repeat(5));
+num6 > num4 && typeof num6 !== typeof num5
  ? console.log(
      `${num5}Is Larger Than ${num4} And Type string Not The Same Type As number`
    )
  : num6 > num4 && num6 == num5 && typeof num6 !== typeof num5
  ? console.log(
      `${num5} Is Larger Than ${num4} And Value Is The Same As 30 And Type string Not The Same Type As number`
    )
  : num6 !== num4 && typeof num6 !== typeof num5
  ? console.log(
      `{num6} Value And Type Is Not The Same As {num4} And Type Is Not The Same As {num5}`
    )
  : console.log(`Unknown`);
//////////////
console.log("_".repeat(5)+"If"+"_".repeat(5));
if (
  +num6 > num4 &&
  typeof num6 !== typeof num5 &&
  num6 > num4 &&
  num6 == num5 &&
  typeof num6 !== typeof num5 &&
  num6 !== num4 && typeof num6 !== typeof num5
) {
 console.log(`"30 Is Larger Than ${num4} And Type string Not The Same Type As number"\n
"${num6} Is Larger Than ${num4} And Value Is The Same As ${num6} And Type string Not The Same Type As number"\n
"{num6} Value And Type Is Not The Same As {num4} And Type Is Not The Same As {num5}`)  
}

// Needed Output
// "30 Is Larger Than 10 And Type string Not The Same Type As number"
// "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
// "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"

////////
console.log("_".repeat(20) + "taskFour" + "_".repeat(20));

// Edit What You Want Here

let _num1 = 10;
let _num2 = 9;
let _num3 = 10;
let _num4 = 32;
/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/
// Condition 1
if (_num1 > _num2) {
  console.log("True");
} else {
  console.log("False");
}
// Condition 2
if (_num1 > _num2 && _num1 < _num4) {
  console.log("True");
} else {
  console.log("False");
}
// Condition 3

if (_num1 > _num2 && _num1 === _num3) {
  console.log("True");
} else {
  console.log("False");
}
// Condition 4
if ((_num1 + _num2) < _num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((_num1 + _num3) < _num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((_num1 + _num2 + _num3) < _num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (_num4 - (_num1 + _num3) + _num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}
