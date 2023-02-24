// - Function And Scopes

/*
Function
-Anonymous function
- calling Named function vs Anonymous function
-Argument to other function
-Task witheout name
-setTimout

*/

add(2, 8); //hoistion

function add(one, two) {
  console.log(one * two);
}

// ano(2,8)//no hoisting in Anonymous function
// let ano =function (one_ ,two_){
//    console.log(one_ * two_);
// }

// -

function add(num, age) {
  let mass = "Hello";
  function add1() {
    return `${mass} ${num} ${age}`;
  }
  return add1();
}
console.log(add("Amire", 23));

/////////////////////

// -  - Arrow Function Challenges
console.log("_".repeat(20)+"one");

//[1] one statement in functon
// [2] convert to Arrow function
// [3] print the output [Arguments may change]

let names = function (...num) {
  return `Sting[${num.join("], [")}]=>Done !`;
};
/////////////
let name =(...num)=>  `Sting[${num.join("], [")}]=>Done !`;
  console.log(names("osama", "mohamed", "ali", "ibrahim"));
  console.log(name("osama", "mohamed", "ali", "ibrahim"));

// sting [osama],[mohamed],[ali],[ibrahim]=>Done !


console.log("_".repeat(20)+"two");

//[1] Replace ??? in return statement to get the output
// [2] create the same function with regular syntax
// [3] use array inside the argument to get output

let myNumber = [20,50,10,60]

let calc = (one ,two , ...nums)=> one + two + +nums;

console.log(calc(10,myNumber[+false],myNumber[+true]));//80


/////////////////
function calc1(one ,two , ...nums) {
    return one + two + +nums;
}
console.log(calc1(10,myNumber[+false],myNumber[+true]));//80



