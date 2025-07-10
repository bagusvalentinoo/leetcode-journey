/**
 * Problem: 1026. Maximum Difference Between Node and Ancestor
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func maxAncestorDiff(root *TreeNode) int {
	// Initialize the maximum difference found so far to 0
	var maxDiff int

	// Define a recursive helper function that performs depth-first search
	// Parameters: current node, minimum value seen in current path, maximum value seen in current path
	var dfs func(node *TreeNode, minVal, maxVal int)
	
	// Implementation of the DFS function
	dfs = func(node *TreeNode, minVal, maxVal int) {
		// Base case: if current node is nil, return immediately
		if node == nil {
			return
		}

		// Update minimum value if current node's value is smaller
		if node.Val < minVal {
			minVal = node.Val
		}
		// Update maximum value if current node's value is larger
		if node.Val > maxVal {
			maxVal = node.Val
		}

		// Calculate the difference between max and min values in current path
		diff := maxVal - minVal
		// Update global maximum difference if current difference is larger
		if diff > maxDiff {
			maxDiff = diff
		}

		// Recursively traverse left subtree with updated min/max values
		dfs(node.Left, minVal, maxVal)
		// Recursively traverse right subtree with updated min/max values
		dfs(node.Right, minVal, maxVal)
	}

	// Start DFS from root node with initial min and max values set to root's value
	dfs(root, root.Val, root.Val)

	return maxDiff
}
