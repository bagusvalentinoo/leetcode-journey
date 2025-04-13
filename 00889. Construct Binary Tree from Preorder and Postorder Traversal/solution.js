/**
 * Problem: 889. Construct Binary Tree from Preorder and Postorder Traversal
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

// Global variables for preorder and postorder traversal
let preIndex = 0
let postIndex = 0

/**
 * Constructs a binary tree from preorder and postorder traversals
 *
 * @param {number[]} preorder - The preorder traversal of the binary tree
 * @param {number[]} postorder - The postorder traversal of the binary tree
 *
 * @returns {TreeNode | null} - The root of the reconstructed binary tree
 */
const constructFromPrePostTraversal = (preorder, postorder) => {
  // Create the root node
  const root = new TreeNode(preorder[preIndex])
  // Move to the next node in preorder
  preIndex += 1

  // If the current node is not the last node in postorder
  if (root.val !== postorder[postIndex])
    root.left = constructFromPrePostTraversal(preorder, postorder)

  // If the current node is not the last node in postorder
  if (root.val !== postorder[postIndex])
    root.right = constructFromPrePostTraversal(preorder, postorder)

  // Move to the next node in postorder
  postIndex++

  return root
}

/**
 * Constructs a binary tree from preorder and postorder traversals
 *
 * @param {number[]} preorder - The preorder traversal of the binary tree
 * @param {number[]} postorder - The postorder traversal of the binary tree
 *
 * @returns {TreeNode | null} - The root of the reconstructed binary tree
 */
const constructFromPrePost = (preorder, postorder) => {
  preIndex = 0 // Initialize the index for preorder traversal
  postIndex = 0 // Initialize the index for postorder traversal

  // If the preorder array has only one element, return a new TreeNode with that value
  if (preorder.length === 1) return new TreeNode(preorder[0])

  // Construct the binary tree from preorder and postorder traversals
  return constructFromPrePostTraversal(preorder, postorder)
}
