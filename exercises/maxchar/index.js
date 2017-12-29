// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let newObj = {};
    let highestVal = 0;
    let maxletter = "";
    str.split("").forEach((ele)=>{
        if(newObj[ele] === undefined) {
            newObj[ele] = 1
        } else {
            newObj[ele] ++
        }
    })
    console.log(newObj)

    for(let key in newObj) {
        if(highestVal < newObj[key]) {
            highestVal = newObj[key]
            maxletter = key;
        }
    }
    return maxletter
}

console.log(maxChar('asddddf'))

module.exports = maxChar;
