// Loop - For And Concept Of Loop

/*
 Loop - For
 For([1] [2] [3]){
    Block of code
 }
 [1]=> initazalition
 [2]=> condition
 [3]=> update
*/

//  Looping On Sequences

//Nested Loops And Trainings

/*
Loop Control 
- Break,
- Continue, 
- Label
*/

//Loop - For Advanced Example

// let products = ["keyboard", "mouse", "pen", "pad", "monitor", "iphone"];
// let i = 0;
// for (;;) {
//   console.log(products[i]);
//   i++;
//   if (i === products.length) {
//     break;
//   }
// }

// Practice - Add Products To Page

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let colors = ["Red", "Green", "Blue"];
let showCount = 5;

document.write(`<h1>Show ${showCount} Products</h1>`);

for (let i = 0; i < showCount; i++) {
  document.write(`<div>`);
  document.write(`<h3>[${i + 1}]- ${products[i]}</h3>`);
  for (let j = 0; j < colors.length; j++) {
    document.write(`<p> ${colors[j]}</p>`);
  } // You Can Delete It And Depend On The Next Code That I Made It With [join() Method]
  document.write(`<p>${colors.join(" | ")}</p>`); // You Can Do It For Styling Or Delete It If You Want
  document.write(`</div>`);
}

