/**
 * Problem: 24. Swap Nodes in Pairs
 *
 * Difficulty: Medium
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func swapPairs(head *ListNode) *ListNode {
	// Create a dummy node and use prev pointer to track position before each pair
	dummy := &ListNode{Next: head}
	prev := dummy

	for prev.Next != nil && prev.Next.Next != nil {
		// Identify the two nodes to be swapped
		first := prev.Next
		second := prev.Next.Next

		// Rearrange the pointers to swap the nodes
		first.Next = second.Next
		second.Next = first
		prev.Next = second

		// Move prev pointer to the first node which is now in second position
		prev = first
	}

	// Return the new head (dummy.Next)
	return dummy.Next
}