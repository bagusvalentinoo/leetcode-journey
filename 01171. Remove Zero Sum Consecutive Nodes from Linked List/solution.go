/**
 * Problem: 1171. Remove Zero Sum Consecutive Nodes from Linked List
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func removeZeroSumSublists(head *ListNode) *ListNode {
	// Create a dummy node to simplify edge cases and point its Next to head
	dummy := &ListNode{Val: 0, Next: head}
	// Map to store prefix sum and corresponding node
	prefixSumToNode := make(map[int]*ListNode)
	// Variable to keep track of the running prefix sum
	prefixSum := 0
	
	// Traverse the linked list starting from dummy node
	for current := dummy; current != nil; current = current.Next {
		// Update the prefix sum with current node's value
		prefixSum += current.Val

		// Check if this prefix sum has been seen before
		if prevNode, found := prefixSumToNode[prefixSum]; found {
			// If found, nodes between prevNode and current sum to zero and should be removed
			nodeToRemove := prevNode.Next
			tempSum := prefixSum

			// Remove all intermediate prefix sums from the map
			if nodeToRemove != nil {
				tempSum += nodeToRemove.Val
			}
			for nodeToRemove != nil && tempSum != prefixSum {
				delete(prefixSumToNode, tempSum)
				nodeToRemove = nodeToRemove.Next

				if nodeToRemove != nil {
					tempSum += nodeToRemove.Val
				}
			}
			
			// Link prevNode to the node after current, effectively removing zero-sum sequence
			prevNode.Next = current.Next
		} else {
			// Otherwise, store the current prefix sum and node in the map
			prefixSumToNode[prefixSum] = current
		}
	}

	// Return the modified list, skipping the dummy node
	return dummy.Next
}
