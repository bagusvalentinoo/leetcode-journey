/**
 * Problem: 1080. Insufficient Nodes in Root to Leaf Paths
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func sufficientSubset(root *TreeNode, limit int) *TreeNode {
	// If the current node is nil, return nil (base case for recursion)
	if root == nil {
		return nil
	}
	
	// Subtract the value of the current node from the limit
	limit -= root.Val

	// If the current node is a leaf node (no left or right child)
	if root.Left == nil && root.Right == nil {
		// If the remaining limit is greater than 0, this path is insufficient; prune the node
		if limit > 0 {
			return nil
		}
		// Otherwise, keep the leaf node
		return root
	}

	// Recursively process the left subtree with the updated limit
	root.Left = sufficientSubset(root.Left, limit)
	// Recursively process the right subtree with the updated limit
	root.Right = sufficientSubset(root.Right, limit)
	
	// If both left and right children are pruned, prune the current node as well
	if root.Left == nil && root.Right == nil {
		return nil
	}

	// Return the current node if it has at least one sufficient child
	return root
}
