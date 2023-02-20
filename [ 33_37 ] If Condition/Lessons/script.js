// Nullish Coalescing Operator And Logical Or
/*
Logical or ||
--Null + undefined + Any falsy value ("",0,false,null,undefined)
Nullish coalescing operator ??
--Null + Undefined
*/

console.log("_".repeat(15) + "If Condition Challenge" + "_".repeat(15));
console.log("_".repeat(15) + "TaskOne" + "_".repeat(15));

let a = 10;
if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a < 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}

// Write with ternary if syntax

a < 10
  ? console.log(10)
  : a >= 10 && a <= 40
  ? console.log("10 To 40")
  : a < 40
  ? console.log("> 40")
  : console.log("Unknown");
///////////
console.log("_".repeat(15) + "TaskTwo" + "_".repeat(15));

let st = "Elzero web school";


if (st.length + st.length === +"34") {
  console.log("Good");
}

//w poition may change
// if (st.s ==="w") {
if (st[st.indexOf("w")].toLowerCase() === "w") {
  console.log("Good");
}

if (!typeof st !== "string") {
  console.log("Good");
}
if (typeof(st.length + st.length) === "number") {
  console.log("Good");
}
if (st.slice(0,6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}
