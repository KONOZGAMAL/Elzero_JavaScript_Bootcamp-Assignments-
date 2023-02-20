// Array Big Introduction

/*
Arrays
 - create Arrays [Two Methods] new Array () + []
 -Access Arrays Elements 
 - Nested Arrays
 - Change Arrays Elements
 - check for Array Array.isArray(arr)
*/

//  - Add And Remove From Array

/*
Arrays Methods [Adding And Removing]
- Unshift ("" , "") add element to the first
-push (" " , "") add element to the end
- shift ()remove first element from Array
- pop ()remove last element from Array
*/

let myFriends = ["ahmed", "ali", "aya", "alaa"];

console.log(myFriends.shift());
console.log(myFriends.pop());
console.log(myFriends.unshift("lolo"));
console.log(myFriends.push("koko"));
console.log(myFriends);

// - Searching Array
// Arrays Methods [search]
/*
- indexOf (search element , from index [opt])
- lastIndexOf (search element , from index [opt])
-includes (valueTofind,fromindex [opt]) [ES7]
*/

let myFriends1 = ["ahmed", "ali", "aya", "alaa"];
console.log(myFriends1.indexOf("aya")); //2
console.log(myFriends1.lastIndexOf("alaa")); //3
console.log(myFriends1.includes("ahmed")); //true

///////////Arrays Methods [sort]
/*
-sort(function [opt])
-reverse()
*/
let myFriends2 = [10, "ahmed", "ali", "27", "aya", 90, "alaa", -11];

console.log(myFriends2);
console.log(myFriends2.sort());
console.log(myFriends2.reverse());

//////////////////////////////////////////////////
console.log("_".repeat(20) + " Array Challenge" + "_".repeat(20));

let zero = 0;
let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

//Write code Here

console.log(my.slice(zero, counter+ +true).reverse()); //["Osama","Elham","Mazero","Ahmed"]
console.log(my.slice(zero+ +true, counter).reverse()); //["Elham","Mazero"]
my.push("Elzero")
let one =zero+ +true
console.log(my[my.length-one]); //"Elzero"

let num=my[my.length-one][++counter] 
let num2=my[my.length-one][++counter].toUpperCase() 
console.log(num+num2); //"rO"

// Elzero_JavaScript_Bootcamp(assignments)
