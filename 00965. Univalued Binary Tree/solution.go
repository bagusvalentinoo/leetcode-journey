/**
 * Problem: 965. Univalued Binary Tree
 *
 * Difficulty: Easy
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func isUnivalTree(root *TreeNode) bool {
	// Empty tree is considered univalued
	if root == nil {
		return true
	}

	// Value that all nodes must match
	uniVal := root.Val
	// Use a slice as a queue (FIFO)
	queue := []*TreeNode{root}

	for len(queue) > 0 {
		// Dequeue the first element
		currentNode := queue[0]
		queue = queue[1:]

		// Check if current node's value matches
		if currentNode.Val != uniVal {
			return false
		}

		// Enqueue left child if exists
		if currentNode.Left != nil {
			queue = append(queue, currentNode.Left)
		}

		// Enqueue right child if exists
		if currentNode.Right != nil {
			queue = append(queue, currentNode.Right)
		}
	}

	// All nodes matched
	return true
}