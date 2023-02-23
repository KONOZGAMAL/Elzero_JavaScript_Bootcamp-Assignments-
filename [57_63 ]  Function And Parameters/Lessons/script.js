// - Function Intro And Basic Usage

/*
Function
- What is function ?
- User Defined Vs BuiltIn
- syntax + Basic Usage 
- Example from real life
- parameter + Argument
- practical example

*/

/*
 - Function Advanced Examples
*/
function range(start,end,exclude) {
    for (let i = start; i <end; i++) {
        if (i === exclude) {
            continue
        }
        console.log(i);
    }
}
range(1998,2023,2020)

// - Function Return And Use Cases

/*
Return
Automatic semicolon insertion  [No line Terminator Allowed]
Interruptting
*/

function generate(start , end) {
    for (let i = 0; i <= end.length; i++) {
        console.log(end[i]);
        if (end[i] === "a") {
            return;
        }
        
    }
}
generate(9,["r","h","l","a","w"])
/////////////////////

// - Function Ultimate Practice

/*

*/

