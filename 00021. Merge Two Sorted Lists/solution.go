/**
 * Problem: 21. Merge Two Sorted Lists
 *
 * Difficulty: Easy
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {
	// Create a dummy node to build the merged list from
	dummy := &ListNode{}
	current := dummy
	
	// Merge nodes while both lists have elements
	for list1 != nil && list2 != nil {
		if list1.Val <= list2.Val {
			// Add the smaller value from list1
			current.Next = list1
			list1 = list1.Next
		} else {
			// Add the smaller value from list2
			current.Next = list2
			list2 = list2.Next
		}
		// Move to the newly added node
		current = current.Next
	}
	
	// Append remaining nodes from whichever list is not empty
	if list1 != nil {
		current.Next = list1
	} else {
		current.Next = list2
	}
	
	// Return merged list (skip the dummy node)
	return dummy.Next
}