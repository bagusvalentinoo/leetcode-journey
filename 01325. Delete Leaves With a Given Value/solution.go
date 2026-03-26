/**
 * Problem: 1325. Delete Leaves With a Given Value
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

func removeLeafNodes(root *TreeNode, target int) *TreeNode {
	// Base case: null node returns null
	if root == nil {
		return nil
	}

	// Recursively process left subtree
	root.Left = removeLeafNodes(root.Left, target)
	// Recursively process right subtree
	root.Right = removeLeafNodes(root.Right, target)

	// If current node becomes a leaf with target value, remove it
	if root.Val == target && root.Left == nil && root.Right == nil {
		return nil
	}

	// Otherwise keep the node
	return root
}
