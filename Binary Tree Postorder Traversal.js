// Given the root of a binary tree, return the postorder traversal of its nodes' values.

// Input: root = [1,null,2,3]
// Output: [3,2,1]

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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const result = [];
  postorderTraversalHelper(root, result)
  return result;
 
};

const postorderTraversalHelper = (root, result) => {
  if(!root) return;
  postorderTraversalHelper(root.left, result)
  postorderTraversalHelper(root.right, result)
  result.push(root.val)
};