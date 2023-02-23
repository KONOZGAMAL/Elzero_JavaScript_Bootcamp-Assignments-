console.log("_".repeat(20) + "taskOne" + "_".repeat(20));

function sayHello(theName, theGender) {
  if (theGender === undefined) {
    return `Hello ${theName}`;
  } else if (theGender === "Male") {
    return `Hello Mr ${theName}`;
  } else if (theGender === "Female") {
    return `Hello Miss ${theName}`;
  }
}
console.log(sayHello("Konooz", "Female")); //Hello Miss Konooz
console.log(sayHello("Ahmed", "Male")); //Hello Mr Ahmed
console.log(sayHello("Ahmed")); //Hello Ahmed

console.log("_".repeat(20) + "taskTwo" + "_".repeat(20));

function calculate(firstNum, secondNum, operation) {
  if (secondNum === undefined && operation === undefined) {
    return `"Second Number Not Found"`;
  } else if (operation === undefined || operation === "add") {
    return firstNum + secondNum;
  } else if (operation === "subtract") {
    return firstNum - secondNum;
  } else if (operation === "multiply") {
    return firstNum * secondNum;
  }
}

// Needed Output
console.log(calculate(20)); // Second Number Not Found
console.log(calculate(20, 30)); // 50
console.log(calculate(20, 30, "add")); // 50
console.log(calculate(20, 30, "subtract")); // -10
console.log(calculate(20, 30, "multiply")); // 600

console.log("_".repeat(20) + "taskThree" + "_".repeat(20));
/////////////////
// let years = theAge,
// monthes = theAge * 12,
// weeks = (theAge * 365) / 7,
// days = theAge * 365,
// hours = theAge * 365 * 24,
// minutes = theAge * 365 * 24 * 60,
// secondes = theAge * 365 * 24 * 60 * 60;
//////////
function ageInTime(theAge) {
  if (theAge < 10 || theAge > 100) {
    return `"theAge => ${theAge} Out Of Range "`;
  } else {
    console.log(`${theAge} Years`);
    console.log(theAge * 12 + " " + "Months"); //276
    console.log(`${(theAge * 365) / 7} Weeks"`); //1199.2857142857142 Weeks
    console.log(`${theAge * 365} day"`); //8395
    console.log(`${theAge * 365 * 24} Hours"`); //201480
    console.log(`${theAge * 365 * 24 * 60} Minutes"`); //12088800
    console.log(`${theAge * 365 * 24 * 60 * 60} Seconds"`); //725328000
  }
}

// Needed Output
console.log(ageInTime(110)); // Age Out Of Range
console.log(ageInTime(23)); // Months Example => 456 Months

////////////////////
console.log("_".repeat(20) + "taskFour" + "_".repeat(20));
let arr = [];
let one = "";
let two = 0;
let three = true;
function checkStatus(a, b, c) {
  arr.push(a, b, c);
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      one = arr[i];
    } else if (typeof arr[i] === "number") {
      two = arr[i];
    } else if (typeof arr[i] === "boolean") {
      three = arr[i];
    }
    if (three === true) {
      three = "You Are Available For Hire";
    } else if (three === false) {
      three = "You Are Not Available For Hire";
    }
  }
  return `"Hello ${one}, Your Age Is ${two}, ${three}`;
}

// Needed Output
console.log(checkStatus("Osama", 38, true)); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
console.log(checkStatus(38, "Osama", true)); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
console.log(checkStatus(true, 38, "Osama")); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
console.log(checkStatus(false, "Osama", 38)); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

//////////////////////////
console.log("_".repeat(20) + "taskFive" + "_".repeat(20));

function createSelectBox(startYear, endYear) {
  document.write("<select>");
  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option value="${i}">${i}</option>`);
  }
  document.write("</select>");
}
createSelectBox(2000, 2021);

///////////

console.log("_".repeat(20) + "taskSix" + "_".repeat(20));

function multiply(...num) {
  let result = 1;
  for (let i = 0; i <num.length; i++) {
    if (typeof num[i] === 'string') {
     continue;
    } else {
      result = result* Math.trunc(num[i]);
    }
  }
 return result;
}
console.log(multiply(10, 20)); // 200
console.log(multiply("A", 10, 30)); // 300
console.log(multiply(100.5, 10, "B")); // 1000
