//Determine whether an integer is a palindrome. Do this without extra space.

var isPalindrome = function(x) {
    if(x < 0) {
        return false
    }
    
    let newString = parseInt(x.toString().split("").reverse())
    return newString === x
    
};