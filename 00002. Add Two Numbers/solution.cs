/**
 * Problem: 2. Add Two Numbers
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
  public ListNode AddTwoNumbers(ListNode l1, ListNode l2, int carry = 0)
  {
    // Base case: no more digits to process and no carry left
    if (l1 == null && l2 == null && carry == 0)
      return null;

    // Calculate sum of current digits plus carry
    int sum = carry;

    // Add value from first list if exists
    if (l1 != null)
      sum += l1.val;
    // Add value from second list if exists
    if (l2 != null)
      sum += l2.val;

    // Create current node with digit (remainder)
    ListNode result = new ListNode(sum % 10);

    // Recursively process next digits
    result.next = AddTwoNumbers(
      // Move to next node in first list if exists
      (l1 != null)
        ? l1.next
        : null,
      // Move to next node in second list if exists
      (l2 != null)
        ? l2.next
        : null,
      // Pass carry for next digit (integer division by 10)
      sum / 10
    );

    // Return the head of the result list
    return result;
  }
}
