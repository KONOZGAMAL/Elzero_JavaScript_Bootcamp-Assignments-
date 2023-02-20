console.log("_".repeat(20) + "taskOne" + "_".repeat(20));

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;
let zero = myFriends.indexOf("Ahmed")
// Method 1
console.log(myFriends.slice(zero,num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.pop()
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

console.log("_".repeat(20) + "taskTwo" + "_".repeat(20));

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.pop()
friends.shift()
console.log(friends); // ["Eman", "Osama"]

console.log("_".repeat(20) + "taskThree" + "_".repeat(20));

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [...arrOne.concat(...arrTwo).sort().reverse()];

// Write One Single Line Of Code

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

console.log("_".repeat(20) + "taskFour" + "_".repeat(20));

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];


console.log(words[2][0].slice(2).toUpperCase()); // ZERO

console.log(words.pop()[0].slice(words.length).toUpperCase()); // ZERO


console.log("_".repeat(20) + "taskFive" + "_".repeat(20));

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.includes(needle)) {
    console.log("Found");
}

if (haystack[1].includes(needle)) {
    console.log("Found");
}
if (haystack.slice(1,2).includes(needle)) {
    console.log("Found");
}

/////
console.log("_".repeat(20) + "taskSix" + "_".repeat(20));

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [arr2[arr1.length-true],
arr1[arr1.length-true],arr2[arr2.length-true]];



console.log(allArrs.join("").toLowerCase()); // fxy
