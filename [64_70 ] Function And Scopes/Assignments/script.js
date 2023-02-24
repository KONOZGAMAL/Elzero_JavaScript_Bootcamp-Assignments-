console.log("_".repeat(20) + "taskOne" + "_".repeat(20));

function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    // Write Your Code Here
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
    let str = zName.split(" ");
    return `Hello ${str[0]} ${str[1][0].toUpperCase()}`;
  }
  function ageWithMessage(zAge) {
    return `Your Age Is ${parseInt(zAge)}`;
  }
  function countryTwoLetters(zCountry) {
    return `You Live In ${zCountry.slice(0, 2).toUpperCase()}`;
  }
  function fullDetails() {
    // Write Your Code Here
    return `${namePattern(zName)}., ${ageWithMessage(
      zAge
    )} , ${countryTwoLetters(zCountry)}`;
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

/////////////////////////////////////////

console.log("_".repeat(20) + "taskTwo" + "_".repeat(20));

let itsMe = () => `Iam A Normal Function`;
console.log(itsMe()); // Iam A Normal Function

/////////////////////
let urlCreate=(protocol, web, tld)=> {
    return `${protocol}://www.${web}.${tld}`;
  }
  
  console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org


console.log("_".repeat(20) + "taskThree" + "_".repeat(20));

let checker=(zName)=> (status)=>(salary)=>
     status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;


  
  console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
  console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

console.log("_".repeat(20) + "taskFour" + "_".repeat(20));



function specialMix(...data) {
    let result = 0
   for (let i = 0; i <data.length; i++) {
    if (!isNaN(parseInt(data[i]))=== true) {
        result += parseInt(data[i])
    }
    
   }
   if (result == 0) {
     return "All Is Strings"
   }
   return result
  }
  
  console.log(specialMix(10, 20, 30)); // 60
  console.log(specialMix("10Test", "Testing", "20Cool")); // 30
  console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
  console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
