// You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

// For each index i, names[i] and heights[i] denote the name and height of the ith person.

// Return names sorted in descending order by the people's heights.

// Input: names = ["Mary","John","Emma"], heights = [180,165,170]
// Output: ["Mary","Emma","John"]
// Explanation: Mary is the tallest, followed by Emma and John.

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    if (names.length === 1) return names
  let nameHeightMatrix = []
  let result = []

  for (let i = 0; i < names.length; i++) {
      nameHeightMatrix.push([names[i], heights[i]])
  }

  nameHeightMatrix.sort((a, b) => b[1] - a[1])

  for (let [name, height] of nameHeightMatrix) {
      result.push(name)
  }

  return result
};