/**
 * Problem: 1437. Check If All 1's Are at Least Length K Places Away
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public bool KLengthApart(int[] nums, int k)
  {
    // Initialize a variable to store the index of the previous '1' encountered.
    // Set it to -1 initially to indicate no '1' has been found yet.
    int previousOneIndex = -1;

    // Iterate through the array to check the positions of '1's.
    for (int currentIndex = 0; currentIndex < nums.Length; currentIndex++)
    {
      // Check if the current element is '1'.
      if (nums[currentIndex] == 1)
      {
        // If a previous '1' has been found, check the distance between
        // the current '1' and the previous '1'. If the distance is less
        // than 'k', return false as the condition is violated.
        if (previousOneIndex != -1 && (currentIndex - previousOneIndex - 1) < k)
        {
          return false;
        }

        // Update the index of the previous '1' to the current index.
        previousOneIndex = currentIndex;
      }
    }

    // If the loop completes without returning false, all '1's are at least
    // 'k' places apart. Return true.
    return true;
  }
}