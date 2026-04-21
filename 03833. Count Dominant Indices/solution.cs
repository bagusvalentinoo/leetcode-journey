/**
 * Problem: 3833. Count Dominant Indices
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int DominantIndices(int[] nums)
  {
    // Get length of the array
    int n = nums.Length;

    // Counter for dominant indices found
    int count = 0;

    // Calculate total sum of all elements in the array
    int totalSum = 0;

    // Sum all elements in the array
    for (int i = 0; i < n; i++)
      totalSum += nums[i];

    // Initialize suffix sum as total sum (will subtract elements as we go)
    int suffixSum = totalSum;

    // Iterate through each element except the last one
    for (int i = 0; i < n - 1; i++)
    {
      // Remove current element from suffix sum (elements to the right)
      suffixSum -= nums[i];

      // Calculate number of elements to the right of current index
      int suffixLength = n - i - 1;

      // Check if current element multiplied by suffix length is greater than suffix sum
      // This is equivalent to nums[i] > suffixSum / suffixLength
      if (nums[i] * suffixLength > suffixSum)
        count++;
    }

    // Return the count of dominant indices
    return count;
  }
}
