/**
 * Problem: 1404. Number of Steps to Reduce a Number in Binary Representation to One
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int NumSteps(string s)
  {
    // Track total steps and carry from operations
    int steps = 0,
      carry = 0;

    // Process bits from right to left, excluding the first bit
    for (int i = s.Length - 1; i > 0; i--)
    {
      // Get current bit (0 or 1)
      int bit = s[i] - '0';

      // Each position needs:
      // 1 step for the operation itself
      // Additional steps based on XOR of bit and carry
      steps += 1 + (bit ^ carry);

      // Update carry for next position
      carry |= bit;
    }

    // Add final carry to total steps
    return steps + carry;
  }
}
