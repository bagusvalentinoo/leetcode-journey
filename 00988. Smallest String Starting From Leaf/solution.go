/**
 * Problem: 988. Smallest String Starting From Leaf
 *
 * Difficulty: Medium
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func smallestFromLeaf(root *TreeNode) string {
	// Track the lexicographically smallest string from any leaf to root
	var result string
	// Store characters along current path from root to current node
	var currentPath []rune

	dfs(root, &currentPath, &result)

	return result
}

func dfs(node *TreeNode, path *[]rune, smallestStr *string) {
	// Early return if node is nil
	if node == nil {
		return
	}

	// Convert node value to corresponding character ('a' + val) and add to path
	*path = append(*path, rune(node.Val)+'a')

	// Check if current node is a leaf (no children)
	if node.Left == nil && node.Right == nil {
		// Create path string by reversing characters
		reversedPath := string(reverse(*path))

		// Update smallest string if empty or new path is lexicographically smaller
		if *smallestStr == "" || reversedPath < *smallestStr {
			*smallestStr = reversedPath
		}
	}

	// Recursively explore left and right subtrees
	dfs(node.Left, path, smallestStr)
	dfs(node.Right, path, smallestStr)

	// Backtrack: remove current node from path before returning up the tree
	*path = (*path)[:len(*path)-1]
}

func reverse(runes []rune) []rune {
	// Create a new slice of the same length to store the reversed runes
	result := make([]rune, len(runes))

	// Swap elements from opposite ends of the slice until we reach the middle
	for i, j := 0, len(runes)-1; i <= j; i, j = i+1, j-1 {
		result[i], result[j] = runes[j], runes[i]
	}
	
	return result
}