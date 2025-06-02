/**
 * Problem: 1008. Construct Binary Search Tree from Preorder Traversal
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func bstFromPreorder(preorder []int) *TreeNode {
	// Track our position in the preorder traversal array
	currIndex := 0
	
	// Recursive function to build BST with boundary constraints
	var buildTree func(upperBound int, lowerBound int) *TreeNode
	buildTree = func(upperBound int, lowerBound int) *TreeNode {
		// Base case: if we've processed all nodes or current value is out of bounds
		if currIndex >= len(preorder) || preorder[currIndex] < lowerBound || preorder[currIndex] > upperBound {
			return nil
		}

		// Create node from current preorder value
		root := &TreeNode{Val: preorder[currIndex]}
		
		// Move to next element in preorder array
		currIndex++

		// Recursively build left subtree (values must be less than root.Val)
		root.Left = buildTree(root.Val, lowerBound)
		// Recursively build right subtree (values must be greater than root.Val)
		root.Right = buildTree(upperBound, root.Val)

		return root
	}
	
	// Start building tree with maximum possible bounds
	return buildTree(math.MaxInt, math.MinInt)
}