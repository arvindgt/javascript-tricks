/**
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

 */

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
 var isValidBST = function(root) {
    if(root === null) return true;
  
  const stack = [{ node: root, minimum: -Infinity, maximum: Infinity }];
  
  while(stack.length) {
    const { node, minimum, maximum } = stack.pop();
    if(node.val <= minimum || node.val >= maximum) return false;
    
    if(node.left !== null) {
      stack.push({ node: node.left, minimum, maximum: node.val });
    }   
    
    if(node.right !== null) {
      stack.push({ node: node.right, minimum: node.val , maximum });
    }
  }
  
  return true;
};
