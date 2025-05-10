/**
 * Problem: 21. Merge Two Sorted Lists
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Definition for singly-linked list
 *
 * @param {ListNode} list1 - First linked list
 * @param {ListNode} list2 - Second linked list
 *
 * @returns {ListNode} - Merged linked list
 */
const mergeTwoLists = (list1, list2) => {
  // Return list2 if list1 is empty
  if (!list1) return list2
  // Return list1 if list2 is empty
  if (!list2) return list1

  // If list1's value is smaller, connect it to the merged result of remaining lists
  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2)
    return list1
  }

  // If list2's value is smaller or equal, connect it to the merged result of remaining lists
  list2.next = mergeTwoLists(list1, list2.next)
  return list2
}
