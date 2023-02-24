console.log("_".repeat(20) + "taskOne" + "_".repeat(20));

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let str = mix
  .map((e) => {
    return isNaN(parseInt(e)) ? e : "";
  })
  .reduce((a, c) => {
    return `${a}${c}`;
  });
console.log(str); // Elzero

console.log("_".repeat(20) + "taskTwo" + "_".repeat(20));

let myString = "EElllzzzzzzzeroo";

let str1 = myString
  .split("")
  .filter((e, idx) => {
    return myString.indexOf(e) == idx;
  })
  .join("");
console.log(str1); // Elzero

console.log("_".repeat(20) + "taskThree" + "_".repeat(20));

let myArray = ["E", "l", "z", ["e", "r"], "o"];

let str2 = myArray
  .reduce((a, c) => {
    return a + c;
  })
  .replace(/,/, "");

console.log(str2); // Elzero

console.log("_".repeat(20) + "taskFour" + "_".repeat(20));
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let str3 = numsAndStrings
  .filter((e) => {
    return !isNaN(parseInt(e));
  })
  .map((e) => {
    return -e;
  });

console.log(str3); // [-1, -10, 10, 20, -5, -3]

/////////////
console.log("_".repeat(20) + "taskFive" + "_".repeat(20));

let nums = [2, 12, 11, 5, 10, 1, 99];
let str4 = nums.reduce((a, c) => {
  return c % 2 !== 0 ? a + c : a * c;
}, 1);
console.log(str4); // 500

