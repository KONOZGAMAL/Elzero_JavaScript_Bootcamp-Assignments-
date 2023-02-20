console.log("_".repeat(20) + "taskOne" + "_".repeat(20));
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(1e5); // 100000
console.log(1_000_00); // 100000
console.log(10 ** 5); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(10000 * 10); // 100000
console.log(200000 / 2); // 100000
console.log(200000 - 100000); // 100000
console.log(Math.max(122, 234, 100000, 23423, 23)); // 100000
console.log(1_00_00_0); // 100000
console.log(Math.trunc(100000.8766666666)); // 100000

console.log("_".repeat(20) + "taskTwo" + "_".repeat(20));
let num = Number.MIN_SAFE_INTEGER //return negative value
console.log(-num); // 9007199254740991
console.log("_".repeat(20) + "taskThree" + "_".repeat(20));

let nums = Number.MAX_SAFE_INTEGER.toString()
console.log(nums.length); // 16
console.log("_".repeat(20) + "taskFour" + "_".repeat(20));
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(Number( parseFloat(myVar).toFixed(2))); // 100.57


console.log("_".repeat(20) + "taskFive" + "_".repeat(20));

let num8 = 10;
let w = Number.isInteger(num8)
let q = Number.isInteger(num8)
console.log(+w + +q); // 2
console.log("_".repeat(20) + "tasksix" + "_".repeat(20));
let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(+flt.toFixed()); // 10
console.log(Number.parseInt(flt)); // 10

console.log("_".repeat(20) + "taskseven" + "_".repeat(20));


console.log(Math.floor(Math.random() * 4) + 1); // 0 || 1 || 2 || 3 || 4



