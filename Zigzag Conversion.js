// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);
 

// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:

// Input: s = "A", numRows = 1
// Output: "A"
 

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) return s

  const result = Array.from({length: numRows}, () => [])

  let isMovingDown = true;
  let currRow = 1

  for (let i = 0; i < s.length; i++) {
      result[currRow - 1].push(s[i])

      if (isMovingDown) {
          currRow++

          if (currRow > numRows){
              isMovingDown = false
              currRow = numRows - 1
          }
      } else {
          currRow--

          if(currRow < 1) {
              currRow = 2
              isMovingDown = true
          }
      }
  }

  return result.map(zig => zig.join("")).join("")
};


