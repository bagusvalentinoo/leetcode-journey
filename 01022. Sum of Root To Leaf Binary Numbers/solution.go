/**
 * Problem: 1022. Sum of Root To Leaf Binary Numbers
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func sumRootToLeaf(root *TreeNode) int {
	// Performs depth-first traversal to accumulate binary values
	var dfs func(node *TreeNode, currentValue int) int
	dfs = func(node *TreeNode, currentValue int) int {
		if node == nil {
			return 0
		}

		// Left shift current value and add current node's bit
		newValue := (currentValue << 1) | node.Val
		// If leaf node, return the accumulated binary value
		if node.Left == nil && node.Right == nil {
			return newValue
		}

		// Recursively process left and right subtrees
		return dfs(node.Left, newValue) + dfs(node.Right, newValue)
	}

	return dfs(root, 0)
}
