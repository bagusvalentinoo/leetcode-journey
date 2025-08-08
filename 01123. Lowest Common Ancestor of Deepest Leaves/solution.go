/**
 * Problem: 1123. Lowest Common Ancestor of Deepest Leaves
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

// search recursively finds the height of the deepest leaf and the lowest common ancestor (LCA) of the deepest leaves.
// It returns a tuple: (height of the deepest leaf, LCA node).
func search(root *TreeNode) (int, *TreeNode) {
	if root == nil {
		// Base case: If the node is nil, height is 0 and there is no LCA.
		return 0, nil
	}

	// Recursively search the left subtree.
	leftHeight, leftLCA := search(root.Left)
	// Recursively search the right subtree.
	rightHeight, rightLCA := search(root.Right)

	// If both subtrees have the same height, current node is the LCA.
	if leftHeight == rightHeight {
		return leftHeight + 1, root
	} else if leftHeight > rightHeight {
		// If left subtree is deeper, propagate the left LCA upwards.
		return leftHeight + 1, leftLCA
	} else {
		// If right subtree is deeper, propagate the right LCA upwards.
		return rightHeight + 1, rightLCA
	}
}

// lcaDeepestLeaves returns the lowest common ancestor of the deepest leaves in the binary tree.
func lcaDeepestLeaves(root *TreeNode) *TreeNode {
	// Call the search helper to get the LCA of the deepest leaves.
	_, lca := search(root)

	// Return the LCA found
	return lca
}