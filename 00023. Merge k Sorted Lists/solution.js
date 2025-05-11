/**
 * Problem: 23. Merge k Sorted Lists
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 2 ms (Beats 99.69%)
 */

/**
 * Merges k sorted linked lists into one sorted linked list
 *
 * @param {ListNode[]} lists - Array of linked lists
 *
 * @returns {ListNode} - Merged linked list
 */
const mergeKLists = (lists) => {
  // Handle empty list case
  if (!lists?.length) return null

  // Keep merging pairs until only one list remains
  while (lists.length > 1) {
    const mergedLists = []

    // Process lists in pairs (two at a time)
    for (let i = 0; i < lists.length; i += 2) {
      const l1 = lists[i]
      // If odd number of lists, the last list has no pair
      const l2 = i + 1 < lists.length ? lists[i + 1] : null

      // Merge current pair and add to results
      mergedLists.push(mergeLists(l1, l2))
    }

    // Replace original lists with merged results for next iteration
    lists = mergedLists
  }

  // Return the final merged list
  return lists[0]
}

/**
 * Merges two sorted linked lists into one sorted linked list
 *
 * @param {ListNode} l1 - First list
 * @param {ListNode} l2 - Second list
 *
 * @returns {ListNode} - Merged list
 */
const mergeLists = (l1, l2) => {
  // Create a dummy node to serve as the starting point of our merged list
  const dummy = new ListNode()

  // Current pointer to build the merged list
  let curr = dummy
  // Merge nodes as long as both lists have elements
  while (l1 && l2) {
    // Take the smaller value node and connect it to our merged list
    if (l1.val <= l2.val) {
      curr.next = l1
      l1 = l1.next
    } else {
      curr.next = l2
      l2 = l2.next
    }

    // Move the pointer forward
    curr = curr.next
  }

  // Attach any remaining nodes (if one list is longer than the other)
  curr.next = l1 ? l1 : l2

  // Return the merged list (skip the dummy node)
  return dummy.next
}
