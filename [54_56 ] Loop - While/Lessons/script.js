//  Loop - Challenge

let myAdmins = ["Ahmed", "Osama", "Sayed", "stop", "samera"];

let myEmployees = [
  "Amged",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
];

let arr = [];
let c =1;
for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "stop") {
    break;
  }
  arr.push(myAdmins[i]);
}

document.write(`<h2>We Have ${arr.length} Admins </h2>`);
let arr1 = [];
for (let x = 0; x < myEmployees.length; x++) {
  arr1.push(myEmployees[x]);
}
let line = document.createElement("hr");
document.body.appendChild(line);
for (let z = 0; z < arr.length; z++) {
  document.write(`<div>the Admin for team ${z + 1} Is ${arr[z]} </div>`);
  document.write(`<h3>Team Member : </h3>`);
  for (let a = 0; a < arr1.length; a++) {
    if (arr[z][+false] === arr1[a][+false]) {
      document.write(`<p>- ${c} ${arr1[a]} </p>`);
      c++;

    }
  }
  c = 1
  document.write("<hr/>")
}
