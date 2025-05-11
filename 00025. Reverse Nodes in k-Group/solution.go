/**
 * Problem: 25. Reverse Nodes in k-Group
 *
 * Difficulty: Hard
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func reverseKGroup(head *ListNode, k int) *ListNode {
	// Handle edge cases where no reversal is needed
	if head == nil || k == 1 {
		return head
	}

	// Create a dummy node for easier handling of edge cases
	dummy := &ListNode{Next: head}
	prevGroupEnd := dummy

	for {
		// Identify the boundaries of the current k-group
		groupStart := prevGroupEnd.Next
		groupEnd := groupStart
		count := 0

		// Check if we have k nodes to reverse
		for count < k && groupEnd != nil {
			groupEnd = groupEnd.Next
			count++
		}

		// If fewer than k nodes remain, keep them as is
		if count < k {
			break
		}

		// Reverse the current k-group and get the new boundaries
		newGroupStart, newGroupEnd := reverseGroup(groupStart, k)

		// Connect the reversed group to the rest of the list
		prevGroupEnd.Next = newGroupStart
		prevGroupEnd = newGroupEnd
	}

	// Return the new head of the list
	return dummy.Next
}

func reverseGroup(start *ListNode, k int) (*ListNode, *ListNode) {
	// Initialize pointers for reversing the linked list
	var prev *ListNode
	current := start

	// Reverse k nodes in the group
	for i := 0; i < k; i++ {
		next := current.Next
		current.Next = prev
		prev = current
		current = next
	}

	// Connect the end of reversed group to the next group
	start.Next = current

	// Return new start and end of the reversed group
	return prev, start
}