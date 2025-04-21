/**
 * Problem: 2. Add Two Numbers
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 1 ms (Beats 99.74%)
 */

/**
 * Adds two numbers represented by linked lists
 *
 * @param {ListNode} l1 - The first linked list
 * @param {ListNode} l2 - The second linked list
 *
 * @returns {ListNode} - The sum of the two linked lists
 */
const addTwoNumbers = (l1, l2) => {
  let carry = 0 // The carry value
  let l1Current = l1 // The current node of the first linked list
  let l2Current = l2 // The current node of the second linked list
  let prev = null // The previous node of the result linked list
  let root = null // The root of the result linked list

  // Iterate through the linked lists
  while (l1Current || l2Current) {
    // Get the value of the current node of the first linked list
    const l1CurrentVal = l1Current?.val || 0
    // Get the value of the current node of the second linked list
    const l2CurrentVal = l2Current?.val || 0

    // Calculate the sum of the current nodes and the carry
    const res = (l1CurrentVal + l2CurrentVal + carry) % 10
    // Create a new node with the sum
    const resNode = new ListNode(res)

    // If there is a previous node, set the next node to the result node
    if (prev) prev.next = resNode
    // If there is no previous node, set the root to the result node
    else root = resNode

    // Move to the next node
    l1Current = l1Current?.next
    l2Current = l2Current?.next
    prev = resNode

    // If the sum is greater than or equal to 10, set the carry to 1
    if (l1CurrentVal + l2CurrentVal + carry >= 10) carry = 1
    // If the sum is less than 10, set the carry to 0
    else carry = 0
  }

  // If there is a carry, add it to the result linked list
  if (carry === 1) prev.next = new ListNode(1)

  // Return the root of the result linked list
  return root
}
