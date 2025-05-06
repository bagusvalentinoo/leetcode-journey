/**
 * Problem: 951. Flip Equivalent Binary Trees
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Determines if two binary trees are flip equivalent (can become identical by flipping subtrees)
 *
 * @param {TreeNode} root1 - First tree root
 * @param {TreeNode} root2 - Second tree root
 *
 * @returns {boolean} - True if trees are flip equivalent
 */
const flipEquiv = (root1, root2) => {
  // Return true if both nodes are null, false if only one is null
  if (!root1 || !root2) return !root1 && !root2
  // Return false if values don't match (can't be flip equivalent)
  if (root1.val !== root2.val) return false

  // Try without flipping - check if left-left and right-right match
  const noFlip =
    flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right)
  // Try with flipping - check if left-right and right-left match
  const withFlip =
    flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left)

  // Trees are flip equivalent if either configuration works
  return noFlip || withFlip
}
