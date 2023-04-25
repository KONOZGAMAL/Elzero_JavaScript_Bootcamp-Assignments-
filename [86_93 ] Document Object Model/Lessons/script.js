//  - What Is DOM And Select Elements

/*
DoM
- what is Dom
dom selectors
--find element by id
--find element by tag name
--find element by class name
--find element by css selector
--find element by collection
-------title
-------body
-------images
-------forms
-------links

*/
// let el = document.getElementById("")
// let ele = document.getElementsByName("")
// let elem = document.getElementsByClassName("")
// let eleme = document.getElementsByTagName('')
// let elemen = document.querySelector("")
// let elements = document.querySelectorAll('')

//////////////////////////////// Check Attributes And Examples

// DOM  [Check Attributes]

/*
- ELement.Attributes ==>return list all Attributes 
- ELement.hasAttribute ==> single question => boolean value true or false
- ELement.hasAttributes ==> all attributes  question => boolean value true or false
- ELement.removeAttributes ==> remove attributes from element
*/

///////////////// Create And Append Elements

//DOM  [Create Elements]
/*
- Create Elements
- Create Comment
- Create TextNode
- Create Attribute
- appendChild
*/

// let p = document.createElement('p')
// let text = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, officiis. Veniam magnam at hic, ut sequi itaque, impedit voluptatibus, tempore qui voluptates neque! Ut quisquam, debitis amet facere quasi tenetur.')
//  let comm = document.createComment("this is comment")
//  let altt =document.createAttribute('title')

//  p.appendChild(comm)
// p.classList = "pragr"
// // p.className = "pragr3"
// p.setAttributeNode(altt)
// p.appendChild(text)

// document.body.appendChild(p)

////////////////////////////Product With Title And Description Practice

//DOM  [Create Elements]

/*
---practice product with heading and paragraph
*/

let main = document.createElement("div");
let text2 = document.createTextNode("this is text");
main.className = "product";

for (let i = 0; i < 100; i++) {
  main.innerHTML += `<h3>product ${i + 1}</h3>
<p>${i + 1}- this is product</p>`;
}
document.body.appendChild(main);

console.log(main);
/////////////////////////////////Deal With Children's
// DOM [Deal With Children's]
/*
- children ==> return children  Those who are in this father (collection) [index] [only element]
- childNodes ==> return  every all(Attribute || element || space || text || comment || span) [index]
- firstChild
- lastchild
- firstElementChild
- lastElementchild
*/

///////////// DOM Events
// DOM [Events]

/*
 - Use Events on HTML 
 - Use Events on JS
 --- onclick
 --- oncontextmenu
 --- onmouseenter
 --- onmouseleave


 -- onload
 -- onscroll
 -- onresize

 -- onfocus
 -- onblur
 -- onsubmit 

*/
let btn = document.querySelector("button");

// btn.onclick = function(){
//   console.log("this is button");
// }
//////////////////////
// btn.onmouseenter = function(){
//   console.log("this is button");
// }
///////////
// btn.onmouseleave = function(){
//   console.log("this is button");
// }
/////////////

// window.onscroll = function(){
//   console.log('scroll ');
// }
/////////////
/////- Validate Form And Prevent Default

// DOM [Events]
/*
- validate from practice
- prevent Default
*/

document.links[0].onclick = function (e) {
  // console.log(e);
  e.preventDefault();
};

// document.forms[0].onsubmit = function(e) {
//   e.preventDefault()
//   console.log(e);
// }
// document.forms[0].onclick = function(e) {
//   // e.preventDefault()
//   console.log(e);
// }

// let name2 = document.querySelector("[name='username']");
// let age = document.querySelector("[name='age']");


// document.forms[0].onsubmit = function (e) {
//   let validName = false;
// let validAge = false;
  
//   if (name2.value !== "" && name2.value.length <= 10) {
//     // console.log(name2.value.length);
//     validName = true;
//   }

//   if (age.value !== "") {
//     validAge = true;
//   }

//   if (validName == false || validAge == false) {
//     e.preventDefault();
//   }
// };
/////////////////////////////////////////
let name2 = document.querySelector("[name='username']");
let age = document.querySelector("[name='age']");

document.forms[0].onsubmit= function (e) {
  let validName = false
  let validAge = false

  if (name2.value !== "" && name2.value.length <= 10) {
    validName =true
  }
  if (age !== "") {
    validAge =true
  }
  if (validName == false || validAge == false) {
    e.preventDefault()
  }
}
console.log("_".repeat(20) + "No_ Challenge");
