/**
 * Problem: 1636. Sort Array by Increasing Frequency
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int[] FrequencySort(int[] nums)
  {
    // Use fixed array for constraint -100 <= nums[i] <= 100 with offset for negatives
    const int offset = 100;
    int[] frequency = new int[201];

    // Populate frequency map with occurrence counts
    foreach (int num in nums) frequency[num + offset]++;

    // Sort by frequency ascending, then by value descending for ties
    Array.Sort(nums, (a, b) => frequency[a + offset] == frequency[b + offset] ? b - a : frequency[a + offset] - frequency[b + offset]);

    // Return the sorted array
    return nums;
  }
}
