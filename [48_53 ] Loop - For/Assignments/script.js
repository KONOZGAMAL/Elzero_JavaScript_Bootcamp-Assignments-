console.log("_".repeat(20) + "taskOne" + "_".repeat(20));

let start = 10;
let end = 100;
let exclude = 40;
let i = start;
for (; i <= end; i += start) {
  if (i === exclude) {
    continue;
  }
  console.log(i);
}
// Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100

console.log("_".repeat(20) + "taskTwo" + "_".repeat(20));

let start1 = 10;
let end1 = 0;
let stop = 3;
for (let i = start1; i > end1; i--) {
  if (i === start1) {
    console.log(`${i}`);
  }
  console.log(`${end1}${i - +true}`);
  if (i === stop) {
    break;
  }
}
// Output
10;
09;
08;
07;
06;
05;
04;
03;

console.log("_".repeat(20) + "taskThree" + "_".repeat(20));

let start2 = 1;
let end2 = 6;
let breaker = 2;
for (let i = start2; i <= end2; i++) {
  console.log(i);
  for (let x = breaker; x < end2; x += breaker) {
    console.log(`-- ${x}`);
  }
}
// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4

console.log("_".repeat(20) + "taskFour" + "_".repeat(20));

let index = 10;
let jump = 2;
let end4 = 0;
let z = index;
for (;;) {
  // Write Your Code Here
  console.log(z);
  if (z === end4) {
    break;
  }
  z -= jump;
  if (z === jump) {
    break;
  }
}

// Output
// 10
// 8
// 6
// 4

console.log("_".repeat(20) + "taskFive" + "_".repeat(20));
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let count = +true;

for (let i = 0; i < friends.length; i++) {
  if (friends[i].startsWith(letter.toUpperCase())) {
    continue;
  }
  console.log(`" ${count++} => ${friends[i]} "`);
}
// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"

console.log("_".repeat(20) + "taskSix" + "_".repeat(20));
let start6 = 0;
let swappedName = "elZerO";
let arr = [];
for (let i = start6; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toLowerCase()) {
    arr.push(swappedName[i].toUpperCase());
  } else if (swappedName[i] === swappedName[i].toUpperCase()) {
    arr.push(swappedName[i].toLowerCase());
  }
}
console.log(arr.join(""));
// Output
// "ELzERo"

console.log("_".repeat(20) + "taskSeven" + "_".repeat(20));


let start7 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
for (let i = 0; i <mix.length; i++) {
    if (mix[i]=== mix[start7]) {
        continue;
    }
    if (typeof(mix[i]) === "string") {
        continue;
    }
    console.log(mix[i]);
}
// Output
// 2
// 3
// 4