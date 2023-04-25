
console.log("_".repeat(20) + "taskFive" + "_".repeat(20));


const game = {
    title: "YS",
    developer: "Falcom",
    releases: {
      "Oath In Felghana": ["USA", "Japan"],
      "Ark Of Napishtim": {
        US: "20 USD",
        JAP: "10 USD",
      },
      Origin: "30 USD",
    },
  };
  
  let {title:t, developer:d,releases}=game;
  
  let obj1 = Object.keys(releases)

  let obj = Object.values(releases)

  console.log(obj1);
  console.log(obj);
 let [o,a,or]=obj1
   let [[u,j],{US:u_price,JAP:j_price}]=obj

  console.log(`My Favourite Games Style Is ${t} Style`);
  // My Favourite Games Style Is YS Style
  
  console.log(`And I Love ${d} Games`);
  // And I Love Falcom Games
  
  console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
  // My Best Release Is Oath In Felghana It Released in USA & Japan
  
  console.log(`Although I Love ${a}`);
  // Although I Love Ark Of Napishtim
  
  console.log(`${a} Price in USA Is ${u_price}`);
  // Ark Of Napishtim Price in USA Is 20 USD
  
  console.log(`${a} Price in Japan Is ${j_price}`);
  // Ark Of Napishtim Price in Japan Is 10 USD
  
  console.log(`Origin Price Is ${or}`);
  // Origin Price Is 30 USD

////////////////////////////////////////////


console.log("_".repeat(20) + "taskSex" + "_".repeat(20));

let chosen = 1;
// let chosen = 2;
// let chosen = 3;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];


for (let i = 0; i < myFriends.length; i++) {
    if (myFriends[i] === myFriends[chosen-1]) {
        ({title,age,available,skills:[one ,two]}=myFriends[i]);
        console.log(`your name ${title} your age ${age}  ${available?'available':'Not available'} your skils ${two}`);
    }
}
// Write Your Code Here

// If chosen === 1

// "Osama"
// 39
// "Available"
// "CSS"

// // If chosen === 2

// "Ahmed"
// 25
// "Not Available"
// "Django"

// // If chosen === 3

// "Sayed"
// 33
// "Available"
// "Laravel"