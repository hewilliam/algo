// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3
//   fib(2) === 1

function fib(n) {
    let array = [0, 1]
    let index = 2;

    if(n === 0) {
        return 0
    } 
    if(n === 1 ) {
        return 1
    }

    while(n >= index) {
        array.push(array[index-1] + array[index-2])
        index++
    }
    
    return array[n]

    // if(n === index) {
    //     console.log('ran')
    //     return array[index]
    // } 

}

console.log(fib(6))

module.exports = fib;
