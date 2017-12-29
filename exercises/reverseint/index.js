// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//     //if n is negative

//     let reversedNum = n.toString().split("").reverse()
//     if (reversedNum[reversedNum.length-1] === "-") {
//         reversedNum.splice(reversedNum.length-1)
//         return -1*parseInt(reversedNum.join(''))
//     }

//     return parseInt(reversedNum.join(""))
//         //return a negative
//     //reverse the number
//     //return it
// }

function reverseInt(n) {
    let reversed = n.toString().split("").reverse().join("")

    return parseInt(reversed) * Math.sign(n)
}

console.log(reverseInt(-51))

module.exports = reverseInt;
