// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//     //returns a boolean
//     //ignore spaces and punctuation
//     stringA = stringA.toLowerCase().replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
//     stringB = stringB.toLowerCase().replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
//     //its called a character map
//     function createCounter(string) {
//         string = string.split("")
//         let storage = {};
//         for(element of string) {
//             if(storage[element] === undefined) {
//                 storage[element] = 1
//             } else {
//                 storage[element] ++
//             }
//         }
//         return storage
//     }


//     stringAobj = createCounter(stringA)
//     stringBobj = createCounter(stringB)

//     if(stringAobj.length !== stringAobj.length) {
//         return false
//     }
//     for(let key in stringAobj) {
//         if(stringAobj[key] !== stringBobj[key]){
//             return false
//         }
//     }
//     return true;


// }

function anagrams(stringA, stringB) {
    stringA = stringA.toLowerCase().replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").split('').sort().join("");
    stringB = stringB.toLowerCase().replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").split('').sort().join("");

    return stringA === stringB

    
}


console.log(anagrams('asdf', 'fdsa'))
module.exports = anagrams;
