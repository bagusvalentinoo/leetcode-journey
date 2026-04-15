/**
 * Problem: 2515. Shortest Distance to Target String in a Circular Array
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int ClosestTarget(string[] words, string target, int startIndex)
  {
    // Get length of words array
    int arrayLength = words.Length;

    // Initialize answer to maximum value
    int minSteps = int.MaxValue;

    // Iterate through all indices
    for (int i = 0; i < arrayLength; i++)
    {
      // Check if current word matches target
      if (words[i] == target)
      {
        // Calculate clockwise distance
        int clockwiseSteps = (i - startIndex + arrayLength) % arrayLength;
        // Calculate anticlockwise distance
        int anticlockwiseSteps = (startIndex - i + arrayLength) % arrayLength;

        // Update minimum steps
        minSteps = Math.Min(minSteps, Math.Min(clockwiseSteps, anticlockwiseSteps));
      }
    }

    // Return -1 if target not found, otherwise return minimum steps
    return minSteps == int.MaxValue ? -1 : minSteps;
  }
}
