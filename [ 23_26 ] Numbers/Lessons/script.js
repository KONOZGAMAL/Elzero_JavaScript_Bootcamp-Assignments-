
/// Numbers
///Numbers methods
// 1) toString()// return of number ==>string
console.log((10).toString());

//2) toFixed()//return of number ==>string
console.log((10).toFixed());

// 3)parseInt()//return number in string
console.log(parseInt("10"));
console.log(parseInt("10Amire"));
console.log(Number("10Amire"));//NaN

// 4)parseFloat()//return number in string 
console.log(parseInt("10.65Amire"));
console.log(parseFloat("10.65Amire"));

//5)isInteger() // return boolean(true | false)==> question [ES6]

console.log(Number.isInteger(11));
console.log(Number.isInteger(11.988));

//6) isNaN() => question=(the result)==> return boolean(true | false)
console.log(Number.isNaN("ossdfd"/20));
console.log(Number.isNaN("11.988"));
console.log(Number.isNaN(4));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  - Math Object
 
// 1) round() => Numbers are rounded to the highest value and the smallest value according to the data

console.log(Math.round(99.3));//99
console.log(Math.round(99.5));//100

// 2) ceil() => Numbers are rounded to the highest value
console.log(Math.ceil(99.3));//100
console.log(Math.ceil(99.5));//100
// 3) floor() => Numbers are rounded to the smallest value
console.log(Math.floor(99.3));//99
console.log(Math.floor(99.5));//99
//4) min
console.log(Math.min(9 ,5));//5
// 5)max 
console.log(Math.max(9 ,5));//9

//6)pow
console.log(Math.pow(9,2));//9

//7) random()
console.log(Math.random());

//8)trunc() ==> return the integral part[ES6]
console.log(Math.trunc(99,8));

// 9)sqrt() ==> return squared islands 

console.log(Math.sqrt(9));

//10)abs() ==> return Positive value
console.log(Math.abs(-2));

///////////////////////////////////////////////////////////////////////////////////////////// - Number Challenge////////////////////
console.log("_".repeat(20)+"Number Challenge");

let a = 1_00;
let b=2_00.5;
let c =1e2;
let d =2.4;
//find smallest number in All variables and return integer
let all=Math.min(a,b,c,d)
console.log(Math.floor(all));//output ==> 2

//Use variables a+d one time to get the needed output 
let num_1=Math.floor(d);
let num1 = Math.pow(a,num_1)
console.log(Math.ceil(num1));//10000

////////////

// Get integer "2" from d variable with 4 methods
console.log(Math.round(d));
console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(Number(d.toFixed()));

///Use variables b + d to get this values
let s = Math.floor(b)/Math.ceil(d)
console.log(s.toFixed(2));//66.67==>string
console.log(Number(s.toFixed()));//67 ===>number

