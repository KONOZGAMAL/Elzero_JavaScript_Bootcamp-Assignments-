// -  Higher Order Functions - Map

/*
 Higher Order Functions - Map Practice
 -swap cases
 - inverted Numbers
 - ignore Boolean
*/
let swappingCases = "elZERo";

let str = swappingCases
  .split("")
  .map((e) => {
    return e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase();
  })
  .join("");
console.log(str);
/////////////
let invertedNumbers = [1, -10, -20, 15, 100, -30];

let num = invertedNumbers.map((a) => -a);
console.log(num);

let ignoreBoolean = "Elz123er4o";

let str1 = ignoreBoolean
  .split("")
  .map((el, i) => {
    return isNaN(parseInt(el)) ? el : "";
  })
  .join("");
console.log(str1);
/////////////////////

//- Higher Order Functions - Filter Practice

// filter words More than 4 characters
let sentence = "I love Foood code Too playing Much";

let str2 = sentence
  .split(" ")
  .filter((el) => {
    return el.length <= 4;
  })
  .join(" ");
console.log(str2);

/// Ignor Number
let IgnorNumber = "ELz123er4o";

let str5 = IgnorNumber.split("")
  .filter((e) => {
    return isNaN(parseInt(e));
  })
  .join("");
console.log(str5);

/////////////////////////////////////////

//filter string + Multiply

let mix = "A13BS2ZX";

let strFin = mix
  .split("")
  .filter((e) => {
    return !isNaN(parseInt(e));
  })
  .map((el) => el * el);

console.log(strFin);

//////////////////////////////////////////////////
// - Higher Order Functions - Reduce Practice

// Longest word

let theBiggest = ["Bla", "Propaganda", "other", "AAA", "Battery", "test"];

let str6 = theBiggest.reduce((a, c) => {
  return a.length > c.length ? a : c;
});
console.log(str6);

////////////////////////////////////////////////

let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

let str7 = removeChars
  .filter((e) => {
    return !e.includes("@");
  })
  .reduce((a, c) => {
    return `${a}${c}`;
  });
console.log(str7);

/////////////////////////////////////////////////////////////////
// - Higher Order Functions - ForEach And Practice

let arr = ["ahmed", "kareem", "esree", "sarah"];

let str8 = arr.forEach((e, idx) => {
  return e.startsWith("e") ? e : "";
});
console.log(str8);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log("_".repeat(20) + "Higher Order Functions - Challenge");

/*
you can Use
 - ,
 - _
 - space
 - true =>1 =>one time in the code

 you cannot use 
 -Numbers
 -Letters

 -you Must use [Filter + map + reduce + your Knowledge]
 - order is not important
 all in one chain
*/
let myString = "1,2,3,EE,l,z,e,r,o,_,w,e,b,_,s,c,h,o,o,l,2,0,z";

let solution = myString.split("").filter((e) => {
  return isNaN(parseInt(e))&& !e.includes(",") && !e.endsWith("z")
}).map((a)=>{
    return a.replace(/_/,'')
}).reduce((ac,cu)=>{
    return `${ac}${cu}`
}).slice(+true)
console.log(solution); //Elzero web school
