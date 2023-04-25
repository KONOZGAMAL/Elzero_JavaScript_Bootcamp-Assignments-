console.log("_".repeat(20) + "taskSex" + "_".repeat(20));

let elements = document.querySelector('[name="elements"]');

let texts = document.querySelector('[name="texts"]');

let sub = document.querySelector("[type='submit']");
let types = document.getElementsByName("type")[0];;

let results = document.querySelector(".results");

console.log(elements);
console.log(texts);
console.log(types);
console.log(results);

sub.onclick  = function (e) {
  let count = elements.value;
  let main = "";
  console.log(count);
  results.innerHTML = ``;
  results.setAttribute("style", "display: flex; gap: 10px; flex-wrap: wrap;")
  for (let i = 0; i < count; i++) {
    if (types === "Div") {
      let n = document.createElement("div");
      let t = document.createTextNode(`${texts.value}`);
      n.appendChild(t);
      n.setAttribute(  "style",
      "background-color: red; padding:20px 30px; flex-basis: 200px;")
      n.className="box"
      n.title = 'element'
      n.id = `id-${i}`
      results.appendChild(n)
    }else{
      let j = document.createElement("Section");
      let t = document.createTextNode(`${texts.value}`);
      j.appendChild(t);
      j.setAttribute(  "style",
      "background-color: red; padding:20px 30px; flex-basis: 200px;")
      j.className="box"
      j.title = 'element'
      j.id = `id-${i}`
      results.appendChild(j)
    }

  }
 
  e.preventDefault();
}
window.onload = function () {
  elements.focus();
};
