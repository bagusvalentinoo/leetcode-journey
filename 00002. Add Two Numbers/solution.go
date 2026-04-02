/**
 * Problem: 2. Add Two Numbers
 *
 * Difficulty: Medium
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	// Initialize carry for addition
	carry := 0

	// Create dummy head to simplify result list construction
	dummyHead := &ListNode{}

	// Pointer to track current node in result list
	currentNode := dummyHead

	// Continue while there are digits in either list or carry exists
	for l1 != nil || l2 != nil || carry != 0 {
		// Start sum with carry from previous addition
		sum := carry

		// Add current node value from first list if exists
		if l1 != nil {
			sum += l1.Val
		}
		// Add current node value from second list if exists
		if l2 != nil {
			sum += l2.Val
		}

		// Update carry for next digit (integer division by 10)
		carry = sum / 10

		// Get current digit (remainder)
		digit := sum % 10

		// Create new node with calculated digit
		newNode := &ListNode{Val: digit}

		// Append new node to result list
		currentNode.Next = newNode
		// Move pointer to the new node
		currentNode = currentNode.Next

		// Move to next node in first list if exists
		if l1 != nil {
			l1 = l1.Next
		}
		// Move to next node in second list if exists
		if l2 != nil {
			l2 = l2.Next
		}
	}

	// Return the actual head of result list (skip dummy node)
	return dummyHead.Next
}
