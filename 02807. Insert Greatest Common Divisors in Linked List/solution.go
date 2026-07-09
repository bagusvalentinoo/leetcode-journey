/**
 * Problem: 2807. Insert Greatest Common Divisors in Linked List
 *
 * Difficulty: Medium
 *
 * Language: Golang
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
func insertGreatestCommonDivisors(head *ListNode) *ListNode {
	// Helper function to calculate GCD using Euclidean algorithm
	gcd := func(a, b int) int {
		// Continue until remainder is 0
		for b != 0 {
			// Store b in temporary variable
			temp := b

			// Set b to remainder of a divided by b
			b = a % b
			// Set a to the previous b value
			a = temp
		}

		// Return the GCD
		return a
	}

	// Pointer to traverse the linked list
	currentNode := head

	// Traverse until the second last node
	for currentNode != nil && currentNode.Next != nil {
		// Get the next node
		nextNode := currentNode.Next
		// Calculate GCD of current and next node values
		gcdValue := gcd(currentNode.Val, nextNode.Val)
		// Create new node with GCD value
		newNode := &ListNode{Val: gcdValue}

		// Insert GCD node between current and next nodes
		currentNode.Next = newNode
		newNode.Next = nextNode

		// Move to the next original node (skip the inserted GCD node)
		currentNode = nextNode
	}

	// Return the head of the modified list
	return head
}
