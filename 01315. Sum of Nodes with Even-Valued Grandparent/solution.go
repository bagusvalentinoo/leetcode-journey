/**
 * Problem: 1315. Sum of Nodes with Even-Valued Grandparent
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

// Helper function to sum values of direct children of a nodes
func sumOfChildren(node *TreeNode) int {
	// Base case: null node has no children
	if node == nil {
		return 0
	}

	// Initialize accumulator for child values
	total := 0

	// Add left child value if exists
	if node.Left != nil {
		total += node.Left.Val
	}
	// Add right child value if exists
	if node.Right != nil {
		total += node.Right.Val
	}

	return total
}

func sumEvenGrandparent(root *TreeNode) int {
	// Base case: null node contributes nothing
	if root == nil {
		return 0
	}

	// If current node has even value, include its grandchildren
	if root.Val%2 == 0 {
		return sumOfChildren(root.Left) +
			sumOfChildren(root.Right) +
			sumEvenGrandparent(root.Left) +
			sumEvenGrandparent(root.Right)
	}

	// If current node value is odd, just recurse without adding grandchildren
	return sumEvenGrandparent(root.Left) + sumEvenGrandparent(root.Right)
}
