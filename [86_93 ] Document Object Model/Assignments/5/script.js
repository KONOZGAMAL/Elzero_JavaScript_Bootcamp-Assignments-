console.log("_".repeat(20) + "taskFive" + "_".repeat(20));

let imgs =document.querySelectorAll('img')
console.log(imgs);

for (let i = 0; i <imgs.length; i++) {
  console.log(imgs[i]);
  if (imgs[i].hasAttribute('alt')) {
    imgs[i].alt ="Old"
  }else{
    imgs[i].alt ="Elzero New"

  }
  
}

/*
getAttributes
setAttributes
hasAttribute
hasAttributes
*/




