/**
 * Problem: 2807. Insert Greatest Common Divisors in Linked List
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
  public ListNode InsertGreatestCommonDivisors(ListNode head)
  {
    // Pointer to traverse the linked list
    ListNode currentNode = head;

    // Traverse until the second last node
    while (currentNode.next != null)
    {
      // Get the next node
      ListNode nextNode = currentNode.next;

      // Store current and next node values for GCD calculation
      int a = currentNode.val, b = nextNode.val;

      // Create new node with placeholder value 1
      ListNode newNode = new ListNode(1, null);

      // Calculate GCD using Euclidean algorithm
      while (b != 0)
      {
        // Calculate remainder of a divided by b
        int remainder = a % b;

        // Swap values: a becomes b, b becomes remainder
        a = b;
        b = remainder;
      }

      // Set GCD value to the new node
      newNode.val = a;

      // Insert GCD node between current and next nodes
      currentNode.next = newNode;
      newNode.next = nextNode;

      // Move to the next original node (skip the inserted GCD node)
      currentNode = nextNode;
    }

    // Return the head of the modified list
    return head;
  }
}
