/**
 * Problem: 1019. Next Greater Node In Linked List
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

func nextLargerNodes(head *ListNode) []int {
	// Store all linked list values in an array
	nodeValues := []int{}
	// Stack to track indices of elements waiting for their next greater element
	indexStack := []int{}

	// Initialize result array to store next greater values
	nextGreaterValues := []int{}

	// Traverse linked list and collect all values
	for head != nil {
		nodeValues = append(nodeValues, head.Val)
		head = head.Next
	}

	// Initialize result array with zeros (default when no greater element exists)
	nextGreaterValues = make([]int, len(nodeValues))

	// Process each element to find next greater elements
	for i := 0; i < len(nodeValues); i++ {
		// Pop indices from stack while current element is greater than stack top element
		for len(indexStack) > 0 && nodeValues[i] > nodeValues[indexStack[len(indexStack)-1]] {
			previousIndex := indexStack[len(indexStack)-1]
			indexStack = indexStack[:len(indexStack)-1]

			// Set next greater element for the popped index
			nextGreaterValues[previousIndex] = nodeValues[i]
		}

		// Push current index to stack
		indexStack = append(indexStack, i)
	}

	return nextGreaterValues
}