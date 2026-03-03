/**
 * Problem: 1305. All Elements in Two Binary Search Trees
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

// Maximum size of the binary tree
const (
	MaxTreeSize = 5000
)

// getAllElements collects all values from both BSTs and returns them in sorted order
func getAllElements(root1 *TreeNode, root2 *TreeNode) []int {
	// Pre-allocate slices with initial capacity
	list1, list2 := make([]int, 0, MaxTreeSize), make([]int, 0, MaxTreeSize)

	// Perform in-order traversal to get sorted values from both trees
	inorderTraverse(root1, &list1)
	inorderTraverse(root2, &list2)

	// Pre-allocate result slice
	result := make([]int, 0, MaxTreeSize*2)

	// Merge two sorted lists using two pointers
	i, j := 0, 0

	// While there are still values to process
	for i < len(list1) && j < len(list2) {
		// If the second value is null or the first value is smaller
		if list1[i] < list2[j] {
			// Add the first value to the merged array
			result = append(result, list1[i])

			// Move to the next element in the first array
			i++
		} else {
			// Otherwise, add the second value to the merged array

			// Add the second value to the merged array
			result = append(result, list2[j])
			// Move to the next element in the second array
			j++
		}
	}

	// Append remaining elements from list1
	for i < len(list1) {
		// Add the first value to the merged array
		result = append(result, list1[i])
		// Move to the next element in the first array
		i++
	}

	// Append remaining elements from list2
	for j < len(list2) {
		// Add the second value to the merged array
		result = append(result, list2[j])
		// Move to the next element in the second array
		j++
	}

	// Return the merged array
	return result
}

// inorderTraverse performs in-order traversal to collect node values
func inorderTraverse(node *TreeNode, result *[]int) {
	// If the node is null, return
	if node == nil {
		return
	}

	// Traverse left subtree
	inorderTraverse(node.Left, result)

	// Visit current node
	*result = append(*result, node.Val)

	// Traverse right subtree
	inorderTraverse(node.Right, result)
}
