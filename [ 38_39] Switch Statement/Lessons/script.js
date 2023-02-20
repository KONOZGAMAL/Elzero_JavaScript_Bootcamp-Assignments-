// Switch Statement

/*
switch (expression) {
  case 1:
    //code Block
    break;
 case 2:
    //code Block
    break;
  default:
    //code Block
    break;
}
--Default ordering
--Multiple Match
*/

//////////////////////////////////////////////////
console.log(
  "_".repeat(20) + " - Switch And If Condition Challenge" + "_".repeat(20)
);

console.log("_".repeat(5)+"TaskOne"+"_".repeat(5));
// let job = "Manager";
let job = "Developer";
let salary = 0;

if (job === "Manager") {
 console.log( salary = 8000);
} else if (job === "IT" || job === "Support") {
 console.log( salary = 6000);
} else if (job === "Developer" || job === "Designer") {
 console.log( salary = 7000);
} else {
  console.log( salary = 4000)
}
/*
If challenge
*/

switch (job) {
  case "Manager":
   console.log(salary = 8000);
    break;
  case "IT":
  case "Support":
   console.log(salary = 6000);
    break;
  case "Developer":
  case "Designer":
    console.log(salary = 7000);
    break;
  default:
    console.log(salary = 4000);
    break;
}
//////////////////
console.log("_".repeat(5)+"TaskTwo"+"_".repeat(5));

// let holidays =0;
let holidays =3;
let money =0;

switch (holidays) {
  case 0:
    money =5000
    console.log(`My Money is ${money}`);
    break;
    case 1:
      case 2:
      money =3000
      console.log(`My Money is ${money}`);
      break;
      case 3:
    money =2000
    console.log(`My Money is ${money}`);
    break;
    case 4:
    money =1000
    console.log(`My Money is ${money}`);
    break;
    case 5:
      money =0
      console.log(`My Money is ${money}`);
      break;
  default:
    money =0
    console.log(`My Money is ${money}`);
    break;
}

if (holidays == 0) {
  money =5000
  console.log(`My Money is ${money}`);
}else if(holidays == 1 ||holidays == 2 ){
  money =3000
      console.log(`My Money is ${money}`);
}else if(holidays == 3 ){
  money =2000
  console.log(`My Money is ${money}`);
}else if(holidays == 4 ){
  money =1000
  console.log(`My Money is ${money}`);
}else if(holidays == 5 ){
  money = 0
  console.log(`My Money is ${money}`);
}else{
  money =0
  console.log(`My Money is ${money}`);
}