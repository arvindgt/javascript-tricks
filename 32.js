/**
Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    //set root as LCA
   //trace tree together
   //as soon as they diverge, thats LCA
   
   let lca = root    
   let current = root
   while (current != null) {
               lca = current
               console.log("adding "+current.val)
               if (p.val > current.val && q.val > current.val) {
                   current = current.right                
               } else if (p.val < current.val && q.val < current.val) {             
                   current = current.left
               } else {
                   console.log("found! LCA is "+lca.val) 
                   break
               }
               
   } //while
   console.log("LCA is "+lca.val) 
   return lca;
};

console.log(lowestCommonAncestor([6,2,8,0,4,7,9,null,null,3,5],2,8));
