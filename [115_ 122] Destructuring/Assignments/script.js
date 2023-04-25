console.log("_".repeat(20) + "taskOne" + "_".repeat(20));


let myNumbers = [1, 2, 3, 4, 5];

[a, , , ,e ]= myNumbers

console.log(a * e); // 5

console.log("_".repeat(20) + "taskTwo" + "_".repeat(20));

let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

[a, b, c, [d, e, [f, g]]] = mySkills

console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

console.log("_".repeat(20) + "taskThree" + "_".repeat(20));


let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];


let arr=arr1.concat(arr2,arr3)
console.log(arr);

[c, , , , , , , a, b]= arr

// Write Your Destructuring Assignment Here

console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// My Best Friends: Shady, Mahmoud, Ahmed

console.log("_".repeat(20) + "taskFour" + "_".repeat(20));


const member = {
  age: 30,
  working: false,
  country: "Egypt",
  hobbies: ["Reading", "Swimming", "Programming"],
};

({age:a,working:w,country:c,hobbies: [h1, h2,h3],}=member)

console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
// My Age Is 30 And Iam Not Working

console.log(`I Live in ${c}`);
// I Live in Egypt

console.log(`My Hobbies: ${h1} And ${h3}`);
// My Hobbies: Reading And Programming



