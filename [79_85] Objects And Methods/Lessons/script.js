//  - Object - Introduction

/*
 Object
 -Intro and what is object
 -Testing window object 
 -Accessing object

*/
let obj = {
  the_Name: "Konooz",
  theAge: 22,
  sayHello: function () {
    return `SayHello`;
  },
};
console.log(obj.the_Name);
console.log(obj.theAge);
console.log(obj.sayHello());

///////////// - Nested Object And Advanced Trainings

let obj2 = {
  name: "koko",
  age: 23,
  // available:false,
  available: true,
  obj3: {
    name_: "lolo",
    skills: ["html", "css", "javascript"],
  },
  check: function () {
    if (obj2.available === true) {
      return `"available"`;
    } else {
      return `"Not available"`;
    }
  },
};
// if (obj2.available === true) {
//   console.log(`"available"`);
//  }else{
//    console.log(`"Not available"`);
//  }

console.log(obj2.obj3);
console.log(obj2.obj3.name_);
console.log(obj2.obj3.skills);
console.log(obj2.obj3.skills[2]);
console.log(obj2.obj3.skills.includes("html")); //true
console.log(obj2.check());

/////////- Create Object With New Keyword

let obj5 = {};
obj5.myFrinds = ["alla", "ola", "maner"];
obj5.hi = function () {
  return `Hi !!!`;
};
console.log(obj5.myFrinds);
console.log(obj5.myFrinds[0]);
console.log(obj5.hi());

let obj4 = new Object({
  name: "Ali",
  age: 20,
  country: "Egypt",
  address: new Object({
    one: "Alx",
    two: "cairo",
  }),
  skill: ["HTML", "Css", "JS"],
});
console.log(obj4);
console.log(obj4.name);
console.log(obj4.age);
console.log(obj4.address);
console.log(obj4.address.one);
console.log(obj4.skill.join("_"));
////////////////////// - This Keyword
let a = "b";
let b = "a";
let c = { a: 7 };
console.log(c["a"]); ///7

function add() {
  //  console.log(this);
  return this;
}
console.log(add() == window);
add();

////////////create object with create methods

let obj6 = new Object({
  name:"Ahmed",
  age:5,
  double:function(){
    return this.age * 2
  }
})
obj6["a"]=100
console.log(obj6);
console.log(obj6.name);
console.log(obj6.age);
console.log(obj6.double());
console.log(obj6.a);

let obj7 = Object.create(obj6)
obj7.age =10
console.log(obj7);
console.log(obj7.double());
///////// Create Object With Assign Method


  ///////////////
  console.log("_".repeat(20) + "Higher Order Functions - Challenge");
