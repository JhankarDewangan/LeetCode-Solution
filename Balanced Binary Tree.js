// Given a binary tree, determine if it is 
// height-balanced
// .

// Input: root = [3,9,20,null,null,15,7]
// Output: true

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
 * @return {boolean}
 */

 const height = (node) => {
    if (node === null) {
        return -1;
    }
    return 1 + Math.max(height(node.left), height(node.right));
}
var isBalanced = function(root) {
        if (root === null) {
        return true;
    } else {
        let diff = Math.abs(height(root.left) - height(root.right));
        return diff < 2
            && isBalanced(root.left)
            && isBalanced(root.right);
    }
};