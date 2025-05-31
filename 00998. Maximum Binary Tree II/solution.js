/**
 * Problem: 998. Maximum Binary Tree II
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Inserts a value into a maximum binary tree
 *
 * @param {TreeNode} root - Root of the max binary tree
 * @param {number} val - Value to insert
 *
 * @returns {TreeNode} - New root after insertion
 */
const insertIntoMaxTree = (root, val) => {
  // Create a new node if tree is empty or value is greater than root
  if (!root || val > root.val) {
    // Create a new node with the value and set the original tree as its left child
    const newRootNode = new TreeNode(val)
    newRootNode.left = root

    // Return the new node as the new root of the tree
    return newRootNode
  }

  // Recursively insert into right subtree since value is less than current node
  root.right = insertIntoMaxTree(root.right, val)

  return root
}
