// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = "") {
    if(n === row) {
        return;
    }

    if(n === stair.length) {
        console.log(stair);
        return steps(n, row + 1);
    }

    const add = stair.length <= row ? "#" : " ";
    steps(n, row, stair + add);
}

steps(2)

// function steps(n) {
//     for(let i = 0; i < n; i++) {
//         let stair = "";
//         for(let h = 0; h < n; h++) {
//             if(h <= i) {
//                 stair += "#"
//             } else { //add spaces for the rest of the line
//                 stair = stair + " "
//             }
//         }
//         console.log(stair)
//     }
// }

// steps(2)

// function printNumber(n) {
//     //identify basecase and stop(return)
//     if(n === 0) {
//         return
//     } 
//     //run the function
//     console.log(n)
//     //call printNumber and change the arguments so it does not go into infinite loop
//     printNumber(n - 1)
// }

// printNumber(2)

//Recursion Tip
//1. Figure out the bare minimum pieces of information to represent your probelms 
    //*(n-1) */
//2. Give reasonable defaults to the bare minimum pieces of inf
//3. check the base case. is there any work left to do? if not return
//4. do some work. call your function again, make sure the arguments changed in some way.

module.exports = steps;
