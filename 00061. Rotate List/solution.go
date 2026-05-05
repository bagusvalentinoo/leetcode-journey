/**
 * Problem: 61. Rotate List
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
func rotateRight(head *ListNode, k int) *ListNode {
	// Edge cases: empty list, single node, or no rotation needed
	if head == nil || head.Next == nil || k == 0 {
		return head
	}

	// Initialize length counter and pointer to find tail
	listLength := 1
	currentTail := head

	// Traverse to find the tail node and calculate list length
	for currentTail.Next != nil {
		// Move to next node
		currentTail = currentTail.Next
		// Increment length counter
		listLength++
	}

	// Reduce k to effective rotations needed (k % length)
	effectiveRotations := k % listLength

	// If no rotation needed after modulo, return original head
	if effectiveRotations == 0 {
		return head
	}

	// Connect tail to head to form a cycle
	currentTail.Next = head

	// Calculate steps to reach new tail (length - effectiveRotations)
	stepsToNewTail := listLength - effectiveRotations

	// Start from tail and move to new tail position
	newTailNode := currentTail

	// Move stepsToNewTail steps forward
	for stepsToNewTail > 0 {
		newTailNode = newTailNode.Next
		stepsToNewTail--
	}

	// New head is the node after new tail
	newHeadNode := newTailNode.Next

	// Break the cycle by setting new tail's next to nil
	newTailNode.Next = nil

	// Return the new head
	return newHeadNode
}
