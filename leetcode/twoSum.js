
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

var twoSum = function(nums, target) {
    let solutions = [];
    for(let i = 0; i < nums.length; i++) {
      for(let j = i + 1; j < nums.length; j++) {
        if(nums[i] + nums[j] === target) {
          solutions.push(i, j)
        }
      }
    }
    return solutions
};