/**
 * Problem: 971. Flip Binary Tree To Match Preorder Traversal
 *
 * Difficulty: Medium
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func flipMatchVoyage(root *TreeNode, voyage []int) []int {
	// Return empty array if we have a nil root and empty voyage (valid match)
	if root == nil {
		if len(voyage) == 0 {
			return []int{}
		}
		// Mismatch if we have nil root but non-empty voyage
		return []int{-1}
	}

	// Track flipped nodes and initialize stack with root node
	flipped := make([]int, 0)
	stack := []*TreeNode{root}
	i := 0

	// Process nodes iteratively using a stack
	for len(stack) > 0 {
		node := stack[len(stack)-1]
		stack = stack[:len(stack)-1]

		if node == nil {
			continue
		}

		// If current node doesn't match voyage value, return -1 (impossible)
		if node.Val != voyage[i] {
			return []int{-1}
		}

		i++

		// If left child exists but doesn't match next voyage value, flip children
		if node.Left != nil && node.Left.Val != voyage[i] {
			flipped = append(flipped, node.Val)
			stack = append(stack, node.Left)
			stack = append(stack, node.Right)
		} else {
			// Process right child then left child (normal order)
			stack = append(stack, node.Right)
			stack = append(stack, node.Left)
		}
	}

	// Return list of nodes where we flipped children
	return flipped
}