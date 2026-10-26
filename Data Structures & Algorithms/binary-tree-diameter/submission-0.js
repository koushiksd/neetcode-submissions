/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxheight(root) {
        if (!root) return 0
        return 1 + Math.max(this.maxheight(root.left), this.maxheight(root.right))
    }
    diameterOfBinaryTree(root) {
        if (root == null) return 0
        let leftHeight = this.maxheight(root.left)
        let rightHeight = this.maxheight(root.right)
        let diameter = leftHeight + rightHeight

        let sub = Math.max(this.diameterOfBinaryTree(root.left), this.diameterOfBinaryTree(root.right))
        return Math.max(diameter, sub)

    }
}
