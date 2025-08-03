/**
 * Problem: 1104. Path In Zigzag Labelled Binary Tree
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func pathInZigZagTree(label int) []int {
	// Initialize the leftmost node value and level counter
	l, lvl := 1, 1

	// Find the level of the given label in the binary tree
	for l<<1 <= label {
		l, lvl = l<<1, lvl+1
	}

	// Prepare the result slice to store the path, and pointer for insertion
	res, p := make([]int, lvl), lvl-1

	// Traverse from the label up to the root, reconstructing the path
	for label > 0 {
		// Store the current label in the result and move to the parent
		res[p], p = label, p-1
		// Calculate the parent label in zigzag order and update leftmost node value
		label, l = l-1 - label>>1 + l>>1, l>>1
	}
	
	// Return the path from root to the given label
	return res
}
