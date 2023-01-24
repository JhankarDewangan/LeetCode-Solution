// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return []
   
   const queue = [root] // initialize the queue with root
   const levels = [] // declare output array
   
   while(queue.length !== 0){
      const queueLength = queue.length // Get the length prior to dequeueing
      const currLevel = [] // Declare this level
      // loop through to exhaust all options and only to include nodes at currLevel
      for(let i = 0; i < queueLength; i++){
          // Get next node
          const current = queue.shift()
          
          if(current.left){
              queue.push(current.left)
          }
          if(current.right){
              queue.push(current.right)
          }
          // After we add left and right for current, we add to currLevel
          currLevel.push(current.val)
      }
      // Level has been finished. Push into output array
      levels.push(currLevel)
  }
   return levels
};