/**
 * Problem: 2341. Maximum Number of Pairs in Array
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int[] NumberOfPairs(int[] nums)
  {
    // Count the occurrences of each possible number
    int[] counts = new int[101];

    // Record the frequency of every number in the input array
    foreach (int num in nums) counts[num]++;

    // Store the total number of pairs and leftover integers
    int pairs = 0, leftovers = 0;

    // Derive pairs and leftovers from every number's frequency
    foreach (int count in counts)
    {
      pairs += count / 2;
      leftovers += count % 2;
    }

    // Return the total pairs followed by the leftover integers
    return [pairs, leftovers];
  }
}
