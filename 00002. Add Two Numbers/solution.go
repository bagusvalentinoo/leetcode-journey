/**
 * Problem: 2. Add Two Numbers
 *
 * Difficulty: Medium
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	// Initialize a dummy node to build the result list and a carry variable for overflow
	dummy := &ListNode{}
	current := dummy
	carry := 0

	// Iterate through both lists and handle carry until all digits are processed
	for l1 != nil || l2 != nil || carry != 0 {
		// Calculate the sum of current digits and carry
		sum := carry

		// Add value from l1 if available
		if l1 != nil {
			sum += l1.Val
			l1 = l1.Next
		}
		// Add value from l2 if available
		if l2 != nil {
			sum += l2.Val
			l2 = l2.Next
		}

		// Update carry for the next iteration
		carry = sum / 10
		// Create a new node with the current digit and move the pointer
		current.Next = &ListNode{Val: sum % 10}
		current = current.Next
	}

	// Return the result list starting from the next of dummy node
	return dummy.Next
}