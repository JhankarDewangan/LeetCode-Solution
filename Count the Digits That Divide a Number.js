// Given an integer num, return the number of digits in num that divide num.

// An integer val divides nums if nums % val == 0.

// Input: num = 7
// Output: 1
// Explanation: 7 divides itself, hence the answer is 1.

/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let count = 0
  let arr = num.toString().split('')
  for(let x of arr){
      if(num % x == 0) count++
  }
  return count
};