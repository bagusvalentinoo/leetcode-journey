/**
 * Problem: 865. Smallest Subtree with all the Deepest Nodes
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func subtreeWithAllDeepest(root *TreeNode) *TreeNode {
	// Declare DFS function using closure
	var dfs func(*TreeNode) (int, *TreeNode)

	dfs = func(node *TreeNode) (int, *TreeNode) {
		// Base case: null node has depth 0 and no subtree
		if node == nil {
			return 0, nil
		}

		// Recursively find deepest nodes in left and right subtrees
		leftDepth, leftNode := dfs(node.Left)
		rightDepth, rightNode := dfs(node.Right)

		// Left subtree has deeper nodes
		if leftDepth > rightDepth {
			return leftDepth + 1, leftNode
		}

		// Right subtree has deeper nodes
		if rightDepth > leftDepth {
			return rightDepth + 1, rightNode
		}

		// Both subtrees have deepest nodes at same depth
		// Current node is the lowest common ancestor
		return leftDepth + 1, node
	}

	// Execute DFS and return the result node
	_, result := dfs(root)
	return result
}
