/*
String Methods
-- Access with index 
--Access with charAt()
--length
--trim()
--toUpperCase()
--toLowerCase()
--chain Methods
*/

let varName =" Amire";
///By the index
console.log(varName);
console.log(varName[2]);

//By the methods ==> charAt()

console.log(varName.charAt(2));
console.log(varName.charAt(1)+varName.charAt(5));

///count character => By the length

console.log(varName.length);
// trim()==

console.log(varName.trim());
console.log(varName.trimStart());
console.log(varName.trimEnd());

// --toUpperCase()
console.log(varName.toUpperCase());

// --toLowerCase()

console.log(varName.toLowerCase());

//////the last

console.log(varName.trim().charAt(1).toUpperCase());

//  - String Methods Part 2
/*
--indexOf(value [mand],start [opt] 0)
-- lastIndexOf(value [mand],start [opt] length)
--slice(start [mand],End [opt] Not include End)
--repeat(times)[ES6]
--split (separator [opt] , limit [opt])
*/
// 1)indexOf()===>return position the first
let a ="ElZero web school"
console.log(a.indexOf('z'.toUpperCase()));//2
console.log(a.indexOf('z'.toUpperCase(),0));//2
console.log(a.indexOf('z'.toUpperCase(),9));//-1

// 2)lastIndexOf()===>return position the End
console.log(a.lastIndexOf("c"));//2
console.log(a.lastIndexOf("c",2));//2

//3) slice(start [mand],End [opt] Not include End)

console.log(a.slice());//ElZero web school
console.log(a.slice(6));//web school
console.log(a.slice(6,13));//web sc
console.log(a.slice(-6,-4));//sc

//4)repeat()
console.log( a.repeat(2));

// 5) split()
console.log(a.split(""));//['E', 'l', 'Z', 'e', 'r', 'o', ' ', 'w', 'e', 'b', ' ', 's', 'c', 'h', 'o', 'o', 'l']
console.log(a.split(" "));//['ElZero', 'web', 'school']
console.log(a.split(" ",2));//['ElZero', 'web']

// String Methods Part 3
/*
--subString (start [Mand] , End [opt] Not including end)
--start > end will swap
--start< 0 it start from 0
--use lenght to get last character
--substr (start [Mand] , characters to extract)
---start >= length = ""
---Negative start from End
-includes (value [Mand] , start [opt] Default 0)[ES6]
-startWith (value [Mand] , start [opt] Default 0)[ES6]
-endWith (value [Mand] , length [opt] Default full length)[ES6]

*/
let z ="ElZero web school"
console.log(z.slice());//ElZero web school
console.log(z.slice(6));//web school
console.log(z.slice(6,13));//web sc
console.log(z.slice(-6,-4));//sc
////////////////
console.log(z.substring());//ElZero web school
console.log(z.substring(6));//web school
console.log(z.substring(6,13));//web sc

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("_".repeat(20)+"string challenge");

let chain1 ="Elzero web school"

//Include this Methods in your solution [slice , chartAt]
 console.log(chain1.charAt(2).toUpperCase()+chain1.slice(3,6));//zero

//  8 H
console.log(chain1.slice(13,14).toUpperCase().repeat(8));//HHHHHHHH

//Return Array 
console.log(chain1.split(" ",1));//['Elzero']

// use only "substr"Method + template literals in your solution 
console.log(`${chain1.substr(0,6)} ${chain1.substr(11)}`);//Elzero school

//solution must be Dynamic and string may change 
console.log(chain1.charAt(0).toLowerCase()+chain1.slice(1,chain1.length-1).toUpperCase()+chain1.charAt(chain1.length-1).toLowerCase());//elZERO WEB SCHOOl
