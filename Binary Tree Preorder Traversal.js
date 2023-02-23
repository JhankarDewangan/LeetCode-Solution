// Given the root of a binary tree, return the preorder traversal of its nodes' values.

// Input: root = [1,null,2,3]
// Output: [1,2,3]

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
var preorderTraversal = function(root) {
    var target = []
   
   function dfs(node){
       if (!node){
           return;
       }
       target.push(node.val)
       dfs(node.left)
       dfs(node.right)
   }
   dfs(root)
   return target
};