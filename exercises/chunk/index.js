// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//     let chunked = [];
//     for(let element of array) {
//         const last = chunked[chunked.length-1]
//         console.log(last)
//         if(!last || last.length === size) {
//             chunked.push([element])
//         } else {
//             last .push(element)
//         }
//     }
//     return chunked
// }




// function chunk(array, size) {
//     //have a chunked solution array
//     let chunked = [];
//     //iterate thru the array
//     for(let number of array) {
//         let lastchunk = chunked[chunked.length - 1]
//         if(!lastchunk || lastchunk.length === size) {
//             chunked.push([number])
//         } else {
//             lastchunk.push(number)
//         }
        
//     }
//     return chunked
//         //get the last element in chunk
//         //if the last elemeent in the chunk is undefined / or fills up to the SIZE
//             //push that subchunk to the big chunk
//         // else ,
//             //get the last element and add to that subchunk
// }

function chunk(array, size) {
    //get a slice of the array and keep chunking it
    let chunked = [];
    let index = 0;
    while(index < array.length) {
        chunked.push(array.slice(index, index+size))
        index = index + size
    }
    return chunked
}

console.log(chunk([1, 2, 3, 4], 2))

module.exports = chunk;
