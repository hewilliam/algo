// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(str) {
//     let words = str.split(" ")
//     console.log(words)
//     let capWords = words.map((word) => {
//         return word[0].toUpperCase() + word.slice(1,word.length)
//     })
//     return capWords.join(" ")
// }

function capitalize(str) {
    let final = "";
    let array = str.split("");
    for(let i = 0; i < array.length; i++) {
        if(array[i] === array[0] || array[i-1] === " ") {
            array[i] = array[i].toUpperCase()
            final = final + array[i]
        } else {
            final = final + array[i]
        }
    }
    return final
}


console.log(capitalize('hi there, how is it going?'))

module.exports = capitalize;
