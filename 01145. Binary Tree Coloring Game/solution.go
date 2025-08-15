/**
 * Problem: 1145. Binary Tree Coloring Game
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

// btreeGameWinningMove determines if the second player can win the Binary Tree Coloring Game.
// root: the root of the binary tree.
// n: total number of nodes in the tree.
// x: the value of the node chosen by the first player (red).
func btreeGameWinningMove(root *TreeNode, n int, x int) bool {
	// Find the node with value x (chosen by the first player).
	redNode := find(root, x)

	// Initialize counts for the three possible regions:
	// parent region (excluding subtree rooted at x), left subtree, and right subtree.
	parentRegionCount, leftSubtreeCount, rightSubtreeCount := 0, 0, 0

	// If the root is not the chosen node, count nodes excluding the subtree rooted at x.
	if root.Val != x {
		parentRegionCount = countExcl(root, x)
	}

	// Count nodes in the left and right subtrees of the chosen node.
	leftSubtreeCount = count(redNode.Left)
	rightSubtreeCount = count(redNode.Right)

	// The second player wins if any region has more than half of the nodes.
	return parentRegionCount > leftSubtreeCount+rightSubtreeCount ||
		leftSubtreeCount > parentRegionCount+rightSubtreeCount ||
		rightSubtreeCount > parentRegionCount+leftSubtreeCount
}

// find searches for the node with the given value in the binary tree.
// Returns a pointer to the node if found, otherwise nil.
func find(node *TreeNode, targetVal int) *TreeNode {
	if node == nil {
		return nil
	}
	if node.Val == targetVal {
		return node
	}
	// Search in the left subtree.
	if leftResult := find(node.Left, targetVal); leftResult != nil {
		return leftResult
	}
	// Search in the right subtree.
	if rightResult := find(node.Right, targetVal); rightResult != nil {
		return rightResult
	}
	// Node not found.
	return nil
}

// countExcl counts the number of nodes in the tree excluding the subtree rooted at exclVal.
// node: current node in traversal.
// exclVal: value of the node to exclude (and its subtree).
func countExcl(node *TreeNode, exclVal int) int {
	if node == nil {
		return 0
	}
	if node.Val == exclVal {
		// Exclude this node and its subtree.
		return 0
	}
	// Count nodes in left and right subtrees, plus the current node.
	return countExcl(node.Left, exclVal) + countExcl(node.Right, exclVal) + 1
}

// count returns the total number of nodes in the subtree rooted at node.
func count(node *TreeNode) int {
	if node == nil {
		return 0
	}
	// Count nodes in left and right subtrees, plus the current node.
	return count(node.Left) + count(node.Right) + 1
}
