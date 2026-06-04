/**
 * Problem: 3751. Total Waviness of Numbers in Range I
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  // Maximum value limit for array size
  private const int MAX = 100005;

  // DP array to store waviness count for each number
  private static int[] dp = new int[MAX];
  // Prefix sum array to efficiently calculate range sums
  private static int[] prefixSum = new int[MAX];

  // Static constructor to precompute waviness values
  static Solution()
  {
    // Precompute waviness for all numbers from 100 to MAX-1
    for (int number = 100; number < MAX; number++)
    {
      // Extract last digit (units place)
      int lastDigit = number % 10;
      // Extract middle digit (tens place)
      int middleDigit = (number / 10) % 10;
      // Extract first digit (hundreds place)
      int firstDigit = (number / 100) % 10;

      // Check if middle digit is a wave peak (greater than both neighbors)
      // or a wave valley (less than both neighbors)
      int isWavePoint = (middleDigit > Math.Max(firstDigit, lastDigit)) ||
                        (middleDigit < Math.Min(firstDigit, lastDigit)) ? 1 : 0;

      // DP recurrence: waviness of current number = waviness of number without last digit + wave check
      dp[number] = dp[number / 10] + isWavePoint;
      // Build prefix sum for range queries
      prefixSum[number] = prefixSum[number - 1] + dp[number];
    }
  }

  public int TotalWaviness(int startNumber, int endNumber)
  {
    // Returns total waviness sum for numbers in range [A, B]
    return prefixSum[endNumber] - prefixSum[startNumber - 1];
  }
}
