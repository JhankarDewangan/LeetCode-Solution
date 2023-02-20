// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

// Input: n = 3
// Output: ["1","2","Fizz"]

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let res = []

   for (let i = 1; i <= n; i++){
       let string = ''
       if (i % 3 === 0) string += 'Fizz'
       if (i % 5 === 0) string += 'Buzz'

       if (string === '') string += i
       res.push(string)
   }


   return res
};