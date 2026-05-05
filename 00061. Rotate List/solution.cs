/**
 * Problem: 61. Rotate List
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution
{
  public ListNode RotateRight(ListNode head, int k)
  {
    // Edge cases: empty list, single node, or no rotation needed
    if (head == null || head.next == null || k == 0)
      return head;

    // Initialize length counter and pointer to find tail
    int listLength = 1;
    ListNode currentTail = head;

    // Traverse to find the tail node and calculate list length
    while (currentTail.next != null)
    {
      // Move to next node
      currentTail = currentTail.next;
      // Increment length counter
      listLength++;
    }

    // Reduce k to effective rotations needed (k % length)
    int effectiveRotations = k % listLength;

    // If no rotation needed after modulo, return original head
    if (effectiveRotations == 0)
      return head;

    // Connect tail to head to form a cycle
    currentTail.next = head;

    // Calculate steps to reach new tail (length - effectiveRotations)
    int stepsToNewTail = listLength - effectiveRotations;

    // Start from tail and move to new tail position
    ListNode newTailNode = currentTail;

    // Move stepsToNewTail steps forward
    while (stepsToNewTail-- > 0)
      newTailNode = newTailNode.next;

    // New head is the node after new tail
    ListNode newHeadNode = newTailNode.next;

    // Break the cycle by setting new tail's next to null
    newTailNode.next = null;

    // Return the new head
    return newHeadNode;
  }
}
