/**
 * Problem: 998. Maximum Binary Tree II
 *
 * Difficulty: Medium
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func insertIntoMaxTree(root *TreeNode, val int) *TreeNode {
	// If root is nil or val > root.Val, create new node with val and make original tree its left child
	if root == nil || val > root.Val {
		return &TreeNode{Val: val, Left: root}
	}

	// Recursively insert the value into the right subtree
	root.Right = insertIntoMaxTree(root.Right, val)

	// Return the modified root
	return root
}
