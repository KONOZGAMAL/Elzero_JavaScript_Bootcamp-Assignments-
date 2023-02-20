 console.log("_".repeat(20) + "taskOne" + "_".repeat(20));
// Add Variables Here
let Number_One = "10";
let Number_Two = "20";
// Ouput
console.log(Number_One + Number_Two); // Normal Concatenate => 1020
console.log(typeof (Number_One + Number_Two)); // Normal Concatenate => String
console.log(`${Number_One + Number_Two}`); // Template Literals Way => 1020
console.log(`${typeof(Number_One + Number_Two)}`); // Template Literals Way => String

 console.log(Number_One+ "\n"+Number_Two);
/*
  Normal Concatenate
  20
  10
*/

console.log(`${Number_One} "\n"${Number_Two}`);
/*
  Template Literals Way
  20
  10
*/
console.log("_".repeat(20) + "taskTwo" + "_".repeat(20));

console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

console.log("_".repeat(20) + "taskThree" + "_".repeat(20));
// `I'm In
// \\
// Love \\ """ '''
// ++ With ++
// \"""\"""
// ""JavaScript""``
console.log(
    "`I'm In",
    "\n",
    "\\\\",
    "\n",
    "love \\\\ \"\"\" '''",
    "\n",
    '\\"""\\"""',
    "\n",
    '""JavaScript""``'
  );

console.log("_".repeat(20) + "taskFour" + "_".repeat(20));
let a = 21;
let b = 20;

console.log(`${a}_${b}`.repeat(4)); // _21_2021_2021_2021_20_
