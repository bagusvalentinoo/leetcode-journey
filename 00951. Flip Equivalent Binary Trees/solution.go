/**
 * Problem: 951. Flip Equivalent Binary Trees
 *
 * Difficulty: Medium
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func flipEquiv(root1 *TreeNode, root2 *TreeNode) bool {
	// Check if both trees are empty - they're equivalent
	if root1 == nil && root2 == nil {
		return true
	}
	// Check if only one tree is empty - they can't be equivalent
	if root1 == nil || root2 == nil {
		return false
	}
	// Check if node values are different - they can't be equivalent
	if root1.Val != root2.Val {
		return false
	}
	
	// Try without flipping - check if subtrees match in normal order
	noFlip := flipEquiv(root1.Left, root2.Left) && flipEquiv(root1.Right, root2.Right)
	// Try with flipping - check if subtrees match when swapped
	flip := flipEquiv(root1.Left, root2.Right) && flipEquiv(root1.Right, root2.Left)
	
	// Trees are equivalent if either normal order or flipped order works
	return noFlip || flip
}