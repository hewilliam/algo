// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     let reversed = "";
//     for(let i = str.length-1; i >= 0; i--) {
//         reversed += str[i]
//     }
//     return reversed
// }

// function reverse(str) {
//     //turn str into an array
//     const array = str.split('');
//     //call reverse array method
//     array.reverse();
//     //join array back into string
//     return array.join('');
//     //return string
// }

// function reverse (str) {
//     let reversed = ""
//     for(element of str) {
//         //add to the front
//         reversed = element + reversed;
//     }
//     return reversed;
// }

function reverse (str) {
    return str.split('').reduce((acc, letter)=>{
        return letter + acc
    },"")
    //split into array
    //use reduce to accumulate into a reversed string
}

console.log(reverse('asdf'))


module.exports = reverse;
