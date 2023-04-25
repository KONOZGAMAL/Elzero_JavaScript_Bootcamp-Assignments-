console.log("_".repeat(20) + "taskThree" + "_".repeat(20));




let only = document.querySelector('[name="dollar"]')

let result = document.querySelector('.result')

// let fin = only.value * 15.6
document.forms[0].addEventListener("input",function(){
  result.innerHTML = `[${only.value}] USD Dollar = [${(only.value * 15.6).toFixed(2)}] Egyptian Pound`
})



console.log("_".repeat(20)+"taskFour"+"_".repeat(20));

{/* <div class="one" title="two">Two</div>
    <div class="two" title="one">One</div>  */}

{/* <div class="one" title="one">One</div>
<div class="two" title="two">Two 2</div> */}

let one = document.querySelector('.one')
let two = document.querySelector('.two')

one.title="one" 
two.title="two" 

one.innerHTML="One"
two.innerHTML="Two"







