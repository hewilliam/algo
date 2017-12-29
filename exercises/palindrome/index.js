// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//     //reverse the string
//     let reversed = str.split("").reverse().join("")
//     //compare it
//     return reversed === str
//     //if its the same , return boolean
// }


//not the best because it runs more than necessary
function palindrome(str) {
    return str.split("").every((char, i) => {
        return char === str[str.length - i - 1]
    })
}

console.log(palindrome('ada'))

module.exports = palindrome;
