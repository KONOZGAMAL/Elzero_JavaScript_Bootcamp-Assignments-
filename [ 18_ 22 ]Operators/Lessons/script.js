//  - Arithmetic Operators
// + Addition
//  - subtraction
// * Multiplication
//  / Division 
//  ** Exponentiation (ES7)
//  % Modulus (Division Remainder)
// ++ increment [post / pre]
// -- Decrement [post / pre]
console.log(10 +"amire");//10amire
console.log(10 -"amire");//NaN


// ++ ====> (post / pre)
// -- ====> (post / pre)
//post (increment)It prints first and then increment
let i=4
i++
console.log(i);

//pre (increment) increment the number and then prints

let x =4
++x
console.log(x);
/////////////
//post (Decrement) It prints first and then Decrement
let y=4
y--
console.log(y);
//pre (Decrement)//Decrement the number and then prints

let z =4
--z
console.log(z);
//////// - Type Coercion  (. ماوراء الكوليس )
/*Type Coercion refers to the process of automatic or implicit conversion of values from one data type to another. 
This includes conversion from Number to String, String to Number, Boolean to Number etc.
 when different types of operators are applied to the values.

In case the behavior of the implicit conversion is not sure,
 the constructors of a data type can be used to convert any value to that datatype, like the Number(),
  String() or Boolean() constructor.*/

//   String ======>(اقوي حاجه)=====>Number(متوسط)====> (اضعفهم)

let s ="10";
let v =10;
console.log(s+v);//return string (1010) حول الرقم ل string لان هو الاقوي

let a=10;
let b=true
console.log(a+b);/// return 11 // لان الرقم القوي من Boolean فحولها كرقم

/////////////////////////////////////////////////////////////////////- Operators Challenges/////////////////////////////////////////////////////////////////////////////
console.log("_".repeat(15)+"Operators Challenges"+"_".repeat(15));
// Challenge 1

/////////////////////
// Challenge 2
let D ="-100";
let E ="20";
let F =30;
let G =true;

console.log(-D*+E);//2000

console.log(+-(D++) + ++F + (++E * ++G));//173



