/**
 * Problem: 3542. Minimum Operations to Convert All Elements to Zero
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 21 ms (Beats 100%)
 */

public class Solution
{
  public int MinOperations(int[] nums)
  {
    // Initialize a list to keep track of the current sequence
    var sequence = new List<int>();
    // Initialize a variable to count the minimum operations
    int operationsCount = 0;

    // Iterate through each number in the input array
    foreach (int number in nums)
    {
      // Remove elements from the sequence that are greater than the current number
      while (sequence.Count > 0 && sequence[sequence.Count - 1] > number)
        sequence.RemoveAt(sequence.Count - 1);

      // Skip the current number if it is zero
      if (number == 0)
        continue;

      // If the sequence is empty or the last element is less than the current number
      if (sequence.Count == 0 || sequence[sequence.Count - 1] < number)
      {
        // Increment the operations count as a new operation is needed
        operationsCount++;
        // Add the current number to the sequence
        sequence.Add(number);
      }
    }

    // Return the total number of operations performed
    return operationsCount;
  }
}