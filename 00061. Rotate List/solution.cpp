/**
 * Problem: 61. Rotate List
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
  ListNode *rotateRight(ListNode *head, int k) {
    // Edge cases: empty list, single node, or no rotation needed
    if (!head || !head->next || k == 0)
      return head;

    // Initialize length counter and pointer to find tail
    int listLength = 1;
    ListNode *currentTail = head;

    // Traverse to find the tail node and calculate list length
    while (currentTail->next) {
      // Move to next node
      currentTail = currentTail->next;
      // Increment length counter
      listLength++;
    }

    // Reduce k to effective rotations needed (k % length)
    int effectiveRotations = k % listLength;

    // If no rotation needed after modulo, return original head
    if (effectiveRotations == 0)
      return head;

    // Connect tail to head to form a cycle
    currentTail->next = head;

    // Calculate steps to reach new tail (length - effectiveRotations)
    int stepsToNewTail = listLength - effectiveRotations;

    // Start from tail and move to new tail position
    ListNode *newTailNode = currentTail;

    // Move stepsToNewTail steps forwar
    while (stepsToNewTail--)
      newTailNode = newTailNode->next;

    // New head is the node after new tail
    ListNode *newHeadNode = newTailNode->next;

    // Break the cycle by setting new tail's next to null
    newTailNode->next = nullptr;

    // Return the new head
    return newHeadNode;
  }
};
