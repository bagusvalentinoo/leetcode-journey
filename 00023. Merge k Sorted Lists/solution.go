/**
 * Problem: 23. Merge k Sorted Lists
 *
 * Difficulty: Hard
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func mergeKLists(lists []*ListNode) *ListNode {
	// Handle empty list case
	if len(lists) == 0 {
		return nil
	}
	
	// Start divide and conquer from the first to the last list
	return mergeLists(lists, 0, len(lists)-1)
}

func mergeLists(lists []*ListNode, left, right int) *ListNode {
	// Base case: single list just return it
	if left == right {
		return lists[left]
	}

	// Find midpoint to divide the lists into two halves
	mid := left + (right-left)/2
	// Recursively merge the left half
	l1 := mergeLists(lists, left, mid)
	// Recursively merge the right half
	l2 := mergeLists(lists, mid+1, right)

	// Combine the two merged halves
	return mergeTwoLists(l1, l2)
}

func mergeTwoLists(l1, l2 *ListNode) *ListNode {
	// Create a dummy node to serve as the head of the merged list
	dummy := &ListNode{}
	current := dummy

	// Compare nodes from both lists and link the smaller one to the result
	for l1 != nil && l2 != nil {
		if l1.Val < l2.Val {
			current.Next = l1
			l1 = l1.Next
		} else {
			current.Next = l2
			l2 = l2.Next
		}
		
		// Move the pointer forward in the result list
		current = current.Next
	}

	// Attach any remaining nodes from either list
	if l1 != nil {
		current.Next = l1
	} else {
		current.Next = l2
	}

	// Return the merged list (excluding the dummy head)
	return dummy.Next
}