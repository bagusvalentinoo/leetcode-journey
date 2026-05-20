/**
 * Problem: 3285. Find Indices of Stable Mountains
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int[] StableMountains(int[] height, int threshold)
  {
    // List to store indices meeting the condition
    List<int> validIndices = new List<int>();

    // Iterate through heights starting from index 1 (need previous element)
    for (int currentIndex = 1; currentIndex < height.Length; currentIndex++)
    {
      // If previous mountain height exceeds threshold, add current index
      if (height[currentIndex - 1] > threshold)
        validIndices.Add(currentIndex);
    }

    // Return the array of valid indices
    return validIndices.ToArray();
  }
}
