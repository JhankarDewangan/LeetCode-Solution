// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Input: root = [3,9,20,null,null,15,7]
// Output: 3

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
 * @return {number}
 */
var maxDepth = function(root) {
    let depth=0;
    depthTraverse(root)
    function depthTraverse(root,nodeDepth=1){
    if(!root)
    return;
    if(nodeDepth>depth){
        depth=nodeDepth;
    }
    depthTraverse(root.left,nodeDepth+1)
    depthTraverse(root.right,nodeDepth+1)
    }
    return depth;
}
