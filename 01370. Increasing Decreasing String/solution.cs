/**
 * Problem: 1370. Increasing Decreasing String
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public string SortString(string s)
  {
    // Stack-allocated array to count frequencies of 26 letters
    Span<int> letterCounts = stackalloc int[26];

    // Linked list to store (letter index, remaining count) pairs
    LinkedList<(int index, int count)> letterList = new();

    // Count frequency of each character in the input string
    foreach (char character in s)
      letterCounts[character - 'a']++;

    // Add non-zero counts to linked list in ascending order
    for (int i = 0; i < 26; i++)
    {
      // Only add letters that appear in the string
      if (letterCounts[i] > 0)
        letterList.AddLast((i, letterCounts[i]));
    }

    // StringBuilder to build the result string efficiently
    StringBuilder result = new();

    // Direction flag: true for forward (smallest to largest), false for backward (largest to smallest)
    bool isForward = true;

    // Continue until all letters have been used
    while (letterList.Count > 0)
    {
      // Start from first node if forward, last node if backward
      var currentNode = isForward ? letterList.First : letterList.Last;

      // Traverse in current direction
      while (currentNode is not null)
      {
        // Append current character to result
        result.Append((char)('a' + currentNode.Value.index));

        // If this is the last occurrence of this letter
        if (currentNode.Value.count == 1)
        {
          // Store reference to node to be removed
          var nodeToRemove = currentNode;

          // Move to next node in current direction
          currentNode = isForward ? currentNode.Next : currentNode.Previous;
          // Remove the node from linked list
          letterList.Remove(nodeToRemove);
        }
        // If there are more occurrences
        else
        {
          // Decrease the count by 1
          currentNode.Value = (currentNode.Value.index, currentNode.Value.count - 1);
          // Move to next node in current direction
          currentNode = isForward ? currentNode.Next : currentNode.Previous;
        }
      }

      // Toggle direction for next pass
      isForward = !isForward;
    }

    // Return the final sorted string
    return result.ToString();
  }
}
