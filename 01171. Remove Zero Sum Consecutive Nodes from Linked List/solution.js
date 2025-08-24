/**
 * Problem: 1171. Remove Zero Sum Consecutive Nodes from Linked List
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Removes consecutive nodes in a linked list whose sum is zero
 *
 * @param {ListNode} head - Head of the linked list
 *
 * @returns {ListNode} - Modified list with zero-sum sequences removed
 */
const removeZeroSumSublists = (head) => {
  // Return the head if the list is empty
  if (!head) return head

  // Initialize the running prefix sum to zero
  let prefixSum = 0

  // Map to store prefix sum and corresponding node
  const prefixSumMap = new Map()
  // Create a dummy node to simplify edge cases
  const dummyNode = new ListNode(-1)

  // Link dummy node to the head of the list
  dummyNode.next = head

  // Start traversal from the dummy node
  let currentNode = dummyNode

  // First pass: record the last occurrence of each prefix sum
  while (currentNode !== null) {
    // Update prefix sum with current node's value
    prefixSum += currentNode.val
    // Map the current prefix sum to the current node
    prefixSumMap.set(prefixSum, currentNode)
    // Move to the next node
    currentNode = currentNode.next
  }

  // Reset traversal to dummy node for second pass
  currentNode = dummyNode
  // Reset prefix sum to zero
  prefixSum = 0

  // Second pass: remove zero-sum sublists
  while (currentNode !== null) {
    // Update prefix sum with current node's value
    prefixSum += currentNode.val
    // Skip nodes between current and last occurrence of this prefix sum
    currentNode.next = prefixSumMap.get(prefixSum).next
    // Move to the next node
    currentNode = currentNode.next
  }

  // Return the modified list, skipping the dummy node
  return dummyNode.next
}
