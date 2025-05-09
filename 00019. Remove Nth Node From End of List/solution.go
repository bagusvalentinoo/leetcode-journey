/**
 * Problem: 19. Remove Nth Node From End of List
 *
 * Difficulty: Medium
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func removeNthFromEnd(head *ListNode, n int) *ListNode {
	// Create a dummy node to handle edge cases
	dummy := &ListNode{0, head}

	// Initialize two pointers
	fast, slow := dummy, dummy

	// Move fast n+1 steps ahead to create the gap
	for i := 0; i <= n; i++ {
		fast = fast.Next
	}

	// Move both pointers until fast reaches the end
	for fast != nil {
		fast = fast.Next
		slow = slow.Next
	}

	// Remove the nth node from the end
	slow.Next = slow.Next.Next

	return dummy.Next
}