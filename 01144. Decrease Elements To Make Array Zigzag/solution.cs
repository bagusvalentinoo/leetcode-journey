/**
 * Problem: 1144. Decrease Elements To Make Array Zigzag
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int MovesToMakeZigzag(int[] nums)
  {
    // Helper function to calculate moves for a given zigzag pattern
    int CalcMoves(bool peakAtEven)
    {
      // Initialize total moves counter
      int moves = 0;

      // Store array length for reuse
      int n = nums.Length;

      // Iterate through each element in the array
      for (int i = 0; i < n; i++)
      {
        // Get left and right neighbor value or int.MaxValue if out of bounds
        int left = i > 0 ? nums[i - 1] : int.MaxValue,
          right = i < n - 1 ? nums[i + 1] : int.MaxValue;

        // Determine if current index should be a peak or valley
        if ((i % 2 == 0) != peakAtEven)
        {
          // Find the smaller neighbor value
          int minNeighbor = Math.Min(left, right);

          // If current value is not less than minNeighbor, calculate required moves
          if (nums[i] >= minNeighbor)
            moves += nums[i] - (minNeighbor - 1);
        }
      }

      // Return total moves for this zigzag pattern
      return moves;
    }

    // Return the minimum moves required for either zigzag pattern
    return Math.Min(CalcMoves(true), CalcMoves(false));
  }
}
