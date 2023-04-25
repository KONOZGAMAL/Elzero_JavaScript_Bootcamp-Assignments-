// Destructuring Arrays Part1

/*
Destructuring 
'is a javascript expression that allows us to extract data from arrays ,
objects , and maps and set them into new , distinct variables'
Destructuring Arrays
*/

//Destructuring Arrays Part 2

/*
Destructuring Arrays advanced examples
*/

let myFriends = [
  "Ahmed",
  "Sayed",
  "Ali",
  ["Shady", "Amr", ["Mohammed", "Gamal"]],
];

let [, , , [a, , [, b]]] = myFriends;

console.log(a); //shady
console.log(b); //Gamal

///////////// Destructuring Arrays Part 3 - Swap Variables

//Destructuring
/*
Destructuring Arrays => swapping variables
*/

let book = "Video";

let video = "Book";
[book, video] = [video, book];

console.log(video); //Video
console.log(book); //Book

/////////Destructuring Objects Part 1
/*
Destructuring Objects 
*/

let obj = {
  name: "osama",
  age: 39,
  theTitle: "Developer",
  theCountry: "Egypt",
};

//////////Destructuring Objects Part 2

/*
 - Destructuring Objects 
 --- Naming the variables 
 --- Add New property
 --- Nested object
 --- Destructuring the Nasted object only
*/

///Destructuring Function Parameters

/*
Destructuring Function Parameters
*/

function objec({ name: n, age: a, theCountry: c } = param) {
  //  return `your name is ${param.name} your age is ${param.age} ==> ${param.theCountry}`
  return `your name is ${n} your age is ${a} ==> ${c}`;
}
console.log(objec(obj));

//// Destructuring Mixed Content

/*
 Destructuring Mixed Content
*/

let obj2 = {
  name: "osama",
  age: 39,
  skills: ["html", "css", "javascript"],
  addresses: {
    egypt: "cairo",
    ksa: "Riyadh",
  },
};



//////////////////////////////////////
console.log(
  "_".repeat(20) + " -  Destructuring Challenge" + "_".repeat(20)
);

let chosen = 2;

let myFriend = [
  {title:'osama',age:39 , available:true , skills : ["HTML",'CSS']},
  {title:'Ahmed',age:25 , available:false , skills : ["python",'Django']},
  {title:'Sayed',age:33 , available:true , skills : ["PHP",'Laravel']},
]

for (let i = 0; i <myFriend.length; i++) {
   if (myFriend[i] === myFriend[chosen - 1]) {
     console.log(myFriend[i]);
     let {title,age ,available, skills : [,two]}= myFriend[i]
     console.log(`your name ${title} your age ${age} ${available == true ? 'available':"Not available"} your skills ${two}`);
   }
}