/**
 * Problem: 1110. Delete Nodes And Return Forest
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func delNodes(root *TreeNode, toDeleteVals []int) []*TreeNode {
	// Create a map to store the values to be deleted for O(1) lookup
	toDeleteMap := make(map[int]struct{})

	// Initialize a slice to store the resulting forest roots
	forest := make([]*TreeNode, 0)

	// Populate the map with values to delete
	for _, val := range toDeleteVals {
		toDeleteMap[val] = struct{}{}
	}

	// Define a recursive DFS function to traverse and modify the tree
	var dfs func(*TreeNode) *TreeNode
	dfs = func(node *TreeNode) *TreeNode {
		// Base case: if the node is nil, return nil
		if node == nil {
			return nil
		}

		// Recursively process left and right children
		node.Left = dfs(node.Left)
		node.Right = dfs(node.Right)

		// Check if the current node needs to be deleted
		if _, found := toDeleteMap[node.Val]; found {
			// If left child exists, add it to the forest as a new root
			if node.Left != nil {
				forest = append(forest, node.Left)
			}
			// If right child exists, add it to the forest as a new root
			if node.Right != nil {
				forest = append(forest, node.Right)
			}
			// Return nil to delete the current node
			return nil
		}

		// Return the current node if it is not deleted
		return node
	}

	// Start DFS traversal from the root
	rootAfterDeletion := dfs(root)

	// If the root is not deleted, add it to the forest
	if rootAfterDeletion != nil {
		forest = append(forest, rootAfterDeletion)
	}

	// Return the resulting forest
	return forest
}
