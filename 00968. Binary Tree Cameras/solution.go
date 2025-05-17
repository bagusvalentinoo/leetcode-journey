/**
 * Problem: 968. Binary Tree Cameras
 *
 * Difficulty: Hard
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minCameraCover(root *TreeNode) int {
	// Count of cameras needed
	cameras := 0

	// DFS function to evaluate node states:
	// 0: uncovered, 1: covered, 2: has camera
	var dfs func(*TreeNode) int

	dfs = func(node *TreeNode) int {
		// Null nodes are considered covered (optimization)
		if node == nil {
			return 1 // covered
		}

		// Process child nodes first (post-order traversal)
		left := dfs(node.Left)
		right := dfs(node.Right)

		// If any child is uncovered, we must place a camera here
		if left == 0 || right == 0 {
			cameras++
			return 2 // has camera
		}

		// If any child has a camera, this node is automatically covered
		if left == 2 || right == 2 {
			return 1 // covered
		}

		// Node is uncovered, needs a camera from its parent
		return 0 // uncovered
	}

	// Process the tree and get the root's state
	rootState := dfs(root)

	// If root is uncovered, we need one more camera
	if rootState == 0 {
		return cameras + 1
	}

	return cameras
}