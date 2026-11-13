/**
 * Problem: 2389. Longest Subsequence With Limited Sum
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int[] AnswerQueries(int[] nums, int[] queries)
  {
    // Sort values so each shortest subsequence has the smallest possible sum
    Array.Sort(nums);

    // Build prefix sums for every possible subsequence length
    int[] prefixSums = new int[nums.Length + 1];

    // Append the sum of the smallest elements through each position
    for (int i = 0; i < nums.Length; i++) prefixSums[i + 1] = prefixSums[i] + nums[i];

    // Store the maximum valid length for every query
    int[] answer = new int[queries.Length];

    // Process each sum limit independently
    for (int i = 0; i < queries.Length; i++)
    {
      // Initialize the search with zero through all available elements
      int left = 0, right = nums.Length;

      // Binary search for the final prefix sum within the limit
      while (left < right)
      {
        // Test the upper middle length to retain a valid candidate
        int middle = (left + right + 1) / 2;

        // Keep this length when its smallest possible sum fits the limit
        if (prefixSums[middle] <= queries[i]) left = middle;
        // Otherwise, search shorter subsequences
        else right = middle - 1;
      }

      // Record the number of selected elements
      answer[i] = left;
    }

    // Return the maximum valid lengths
    return answer;
  }
}
