// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//     let vowels = ['a', 'e', 'i','o','u'];
//     let counter = 0;
//     let array = str.toLowerCase().split("")
//     console.log(array)

//     for(char of array){
//         for(vowel of vowels){
//             if(vowel === char) {
//                 counter++
//             }
//         }
//     }
//     return counter
// }

function vowels(str) { //using includes
    let vowels = 'aeiou';
    let counter = 0;
    let array = str.toLowerCase().split('')

    for(char of array){
        if(vowels.includes(char)) {
            counter++
        }
    }
    return counter
}

console.log(vowels("Hello My Name is William"))

module.exports = vowels;
