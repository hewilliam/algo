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

// function fib(n) {
//     let array = [0, 1]
//     let index = 2;

//     while(n >= index) {
//         array.push(array[index-1] + array[index-2])
//         index++
//     }
    
//     return array[n]
// }

// function fib(n) {
//     let array = [0,1]

//     for(i = 2; i <= n; i++) {
//         let a = array[i-1]
//         let b = array[i-2]
//         array.push(a+b)
//     }
//     return array[n]
// }

function fib(n) { //2^n exponential time
    if( n < 2 ) {
        return n
    }

    return fib(n-2) + fib(n-1)
}

function memoize(fn) {
   const cache = {};

   return function(...args) {
      if (cache[args]) {
          return cache[args]
      }

      const result = fn.apply(this, args);
      cache[args] = result;

      return result;
   }
}

console.log(fib(4))

module.exports = fib;
