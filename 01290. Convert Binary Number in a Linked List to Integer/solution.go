/**
 * Problem: 1290. Convert Binary Number in a Linked List to Integer
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func getDecimalValue(head *ListNode) int {
	// Initialize decimal value to 0 - this will store our final result
	val := 0

	// Traverse the linked list from head to tail
	for head != nil {
		// Left shift current value by 1 bit and OR with current node's binary digit
		// This effectively multiplies val by 2 and adds the current bit
		val = (val << 1) | head.Val
		
		// Move to the next node in the linked list
		head = head.Next
	}
	
	// Return the computed decimal value
	return val
}
