/**
 * Problem: 2807. Insert Greatest Common Divisors in Linked List
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution
{
public:
  ListNode *insertGreatestCommonDivisors(ListNode *head)
  {
    // If list is empty or has only one node, no insertion needed
    if (head == nullptr || head->next == nullptr)
      return head;

    // Pointer to traverse the linked list
    ListNode *currentNode = head;

    // Traverse until the second last node
    while (currentNode && currentNode->next != nullptr)
    {
      // Calculate GCD of current and next node values
      int gcdValue = gcd(currentNode->next->val, currentNode->val);

      // Create new node with GCD value
      ListNode *newNode = new ListNode(gcdValue);
      // Store reference to the next node
      ListNode *nextNode = currentNode->next;

      // Insert GCD node between current and next nodes
      currentNode->next = newNode;
      newNode->next = nextNode;

      // Move to the next original node (skip the inserted GCD node)
      currentNode = nextNode;
    }

    // Return the head of the modified list
    return head;
  }
};
