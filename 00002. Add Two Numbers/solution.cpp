/**
 * Problem: 2. Add Two Numbers
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
class Solution {
public:
  ListNode *addTwoNumbers(ListNode *l1, ListNode *l2) {
    // Initialize carry for addition
    int carry = 0;

    // Create dummy head to simplify result list construction
    ListNode *dummyHead = new ListNode();

    // Pointer to track current node in result list
    ListNode *currentNode = dummyHead;

    // Continue while there are digits in either list or carry exists
    while (l1 != nullptr || l2 != nullptr || carry != 0) {
      // Calculate sum of current digits plus carry
      int sum =
          (l1 != nullptr ? l1->val : 0) + (l2 != nullptr ? l2->val : 0) + carry;

      // Update carry for next digit (integer division by 10)
      carry = sum / 10;

      // Get current digit (remainder)
      int digit = sum % 10;

      // Create new node with calculated digit
      ListNode *newNode = new ListNode(digit);

      // Append new node to result list
      currentNode->next = newNode;
      // Move pointer to the new node
      currentNode = currentNode->next;

      // Move to next nodes in input lists if they exist
      l1 = l1 != nullptr ? l1->next : nullptr;
      l2 = l2 != nullptr ? l2->next : nullptr;
    }

    // Return the actual head of result list (skip dummy node)
    return dummyHead->next;
  }
};
