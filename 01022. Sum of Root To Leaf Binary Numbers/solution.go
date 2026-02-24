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
	// Initialize sum accumulator
	totalSum := 0

	// Define DFS function as a closure
	var dfs func(node *TreeNode, currentVal int)

	// DFS function to accumulate binary values
	dfs = func(node *TreeNode, currentVal int) {
		// Base case: null node does nothing
		if node == nil {
			return
		}

		// Update binary value: shift left (multiply by 2) and add current node's bit
		newVal := currentVal*2 + node.Val

		// If leaf node, add to total sum
		if node.Left == nil && node.Right == nil {
			totalSum += newVal
		}

		// Recursively traverse left and right subtrees
		dfs(node.Left, newVal)
		dfs(node.Right, newVal)
	}

	// Start DFS from root with initial value 0
	dfs(root, 0)

	// Return the total sum
	return totalSum
}
