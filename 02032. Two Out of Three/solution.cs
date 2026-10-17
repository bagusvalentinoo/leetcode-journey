/**
 * Problem: 2032. Two Out of Three
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public IList<int> TwoOutOfThree(int[] nums1, int[] nums2, int[] nums3)
  {
    // Count the distinct input arrays that contain each value
    byte[] count = new byte[101];
    // Record the most recent input array that contained each value
    byte[] lastSeenIn = new byte[101];
    Array.Fill(lastSeenIn, byte.MaxValue);
    // Store values found in at least two input arrays
    List<int> answer = new List<int>();

    // Process each input array and its index
    int[][] arrays = { nums1, nums2, nums3 };
    for (int arrayIndex = 0; arrayIndex < arrays.Length; arrayIndex++)
    {
      // Process each value in the current input array
      foreach (int number in arrays[arrayIndex])
      {
        // Skip values already counted for the current input array
        if (lastSeenIn[number] == arrayIndex) continue;

        // Mark the value as seen in the current input array
        lastSeenIn[number] = (byte)arrayIndex;
        // Count the current input array for the value
        count[number]++;

        // Record values as soon as they appear in a second input array
        if (count[number] == 2) answer.Add(number);
      }
    }

    // Return all values that occur in at least two input arrays
    return answer;
  }
}
