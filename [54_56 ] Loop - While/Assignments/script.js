console.log("_".repeat(20) + "taskOne" + "_".repeat(20));

let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;


let i = 0
while (i <friends.length) {
    i++
    if (typeof(friends[i]) === "number") {
        continue;
    }else if(friends[i][+false] === "A"){
        continue;
    }
    console.log(`"${counter += +true} => ${friends[i]}"`);
}
// Output
// "1 => Sayed"
// "2 => Mahmoud"



////////////
console.log("_".repeat(20) + "taskTwo" + "_".repeat(20));



