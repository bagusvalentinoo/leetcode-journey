/**
 * Problem: 1038. Binary Search Tree to Greater Sum Tree
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func bstToGst(root *TreeNode) *TreeNode {
	var sum int

	// Helper function to traverse the tree in reverse in-order
	var traverse func(node *TreeNode)
	traverse = func(node *TreeNode) {
		if node == nil {
				return
		}

		// Traverse the right subtree first (greater values)
		traverse(node.Right)

		// Update the current node's value with the accumulated sum
		sum += node.Val
		node.Val = sum

		// Traverse the left subtree (smaller values)
		traverse(node.Left)
	}

	// Start the traversal from the root
	traverse(root)

	return root
}
