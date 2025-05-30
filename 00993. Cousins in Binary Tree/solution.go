/**
 * Problem: 993. Cousins in Binary Tree
 *
 * Difficulty: Easy
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func isCousins(root *TreeNode, x int, y int) bool {
	// Find depth and parent for node with value x
	depthX, parentX := findNodeInfo(root, x, 0, nil)
	// Find depth and parent for node with value y
	depthY, parentY := findNodeInfo(root, y, 0, nil)

	// Check if nodes have different parents
	hasDifferentParents := parentX != nil && parentY != nil && parentX.Val != parentY.Val 

	// Nodes are cousins if they're at the same depth but have different parents
	if depthX == depthY && hasDifferentParents {
		return true
	}

	return false
}

func findNodeInfo(root *TreeNode, target int, depth int, parent *TreeNode) (int, *TreeNode) {
	// Base case: return zero depth and nil parent if node doesn't exist
	if root == nil {
		return 0, nil
	}

	// Return current depth and parent if target value is found
	if root.Val == target {
		return depth, parent
	}

	// Search in left subtree
	leftDepth, leftParent := findNodeInfo(root.Left, target, depth + 1, root)
	// Search in right subtree
	rightDepth, rightParent := findNodeInfo(root.Right, target, depth + 1, root)

	// Return results from left subtree if target was found there
	if leftDepth > 0 {
		return leftDepth, leftParent
	}

	// Return results from right subtree (found or not)
	return rightDepth, rightParent
}