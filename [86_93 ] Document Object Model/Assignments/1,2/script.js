console.log("_".repeat(20) + "taskOne" + "_".repeat(20));

let theWay_1 =document.getElementById('elzero')
console.log(theWay_1);
let theWay_2 =document.getElementsByClassName('element')[0]

console.log(theWay_2);

let theWay_3 = document.getElementsByTagName('div')[0]

console.log(theWay_3);

let theWay_4 = document.getElementsByName("js")[0]

console.log(theWay_4);

let theWay_5 = document.querySelector('[name="js"]')

console.log(theWay_5);
let theWay_6 = document.querySelector('.element')

console.log(theWay_6);

let theWay_7 = document.querySelector("#elzero")

console.log(theWay_7);
let theWay_8 = document.querySelector('div')

console.log(theWay_8);

let theWay_9 = document.querySelectorAll("div")[0]

console.log(theWay_9);

let theWay_10 = document.querySelectorAll('#elzero')[0]

console.log(theWay_10);

let theWay_11 = document.querySelectorAll('.element')[0]

console.log(theWay_11);

let theWay_12 = document.querySelectorAll('[name="js"]')[0]

console.log(theWay_12);

let theWay_13 = document.children[0]

console.log(theWay_13);

let theWay_14 = document.firstElementChild

console.log(theWay_14);

let theWay_15 = document.childNodes[0]

console.log(theWay_15);


console.log("_".repeat(20) + "taskTwo" + "_".repeat(20));

{/* <div>
<img decoding="async" src="#" alt="" />
</div> */}
{/* <div>
  <img decoding="async" src="https://elzero.org/wp-content/themes/elzero/imgs/logo.png" alt="Elzero Logo">
</div> */}

let imgs = document.querySelectorAll('img')

let m = document.images

for (let i = 0; i <m.length; i++) {
  m[i].alt="Elzero"
  m[i].src="https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
}





























console.log("_".repeat(20) + "taskThree" + "_".repeat(20));


console.log("_".repeat(20) + "taskFour" + "_".repeat(20));
