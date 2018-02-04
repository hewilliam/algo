// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output:  321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only hold integers within the 32-bit signed integer range. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.


var reverse = function(x) {
    //check if number is negative
        //if it is return a solutions that is negative
    //convert number to string
    //loop the string backwards
    

    let string = x.toString()

    let result = ""
    for(let i = string.length-1; i >= 0; i--) {
        result += string[i]
    }

    result = parseInt(result)
    if(x < 0) {
        result = -1 * result
    }
    
    var max32BitInteger = 2147483647;
    if (result > max32BitInteger) return 0;
    if(result < -max32BitInteger) return 0;
    return result

    
    
};
