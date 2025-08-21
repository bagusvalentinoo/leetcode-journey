/**
 * Problem: 1161. Maximum Level Sum of a Binary Tree
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func maxLevelSum(root *TreeNode) int {
	// Initialize a queue for BFS traversal, starting with the root node
	queue := []*TreeNode{root}
	// Position pointer for the current node in the queue
	pos := 0
	// Marks the end index of the current level in the queue
	levelEnd := 0

	// Stores the maximum sum found so far, initialized with root's value
	maxSum := root.Val
	// Stores the level with the maximum sum, initialized to level 1
	maxLevel := 1

	// Accumulates the sum of node values at the current level
	levelSum := 0
	// Tracks the current level number, starting from 1
	currentLevel := 1

	// Iterate through the queue using BFS
	for pos < len(queue) {
		node := queue[pos]
		// Add the current node's value to the level sum
		levelSum += node.Val

		// Enqueue left child if it exists
		if node.Left != nil {
			queue = append(queue, node.Left)
		}
		// Enqueue right child if it exists
		if node.Right != nil {
			queue = append(queue, node.Right)
		}

		// If we've reached the end of the current level
		if pos == levelEnd {
			// Update maxSum and maxLevel if the current level's sum is greater
			if levelSum > maxSum {
				maxSum = levelSum
				maxLevel = currentLevel
			}

			// Move to the next level
			currentLevel++
			// Reset the sum for the next level
			levelSum = 0
			// Update the end index for the next level
			levelEnd = len(queue) - 1
		}

		// Move to the next node in the queue
		pos++
	}

	// Return the level with the maximum sum
	return maxLevel
}
