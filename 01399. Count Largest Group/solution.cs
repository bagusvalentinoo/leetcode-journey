/**
 * Problem: 1399. Count Largest Group
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int CountLargestGroup(int n)
  {
    // Frequency array for digit sums (max sum for numbers up to 9999 is 36)
    int[] digitSumFrequency = new int[37];

    // Calculate digit sum for each number from 1 to n
    for (int currentNumber = 1; currentNumber <= n; currentNumber++)
    {
      // Initialize sum of digits
      int digitSum = 0;

      // Temporary variable to process digits
      int tempNumber = currentNumber;

      // Extract and sum each digit
      while (tempNumber > 0)
      {
        // Get last digit
        int remainder = tempNumber % 10;

        // Add digit to sum
        digitSum += remainder;
        // Remove last digit
        tempNumber = tempNumber / 10;
      }

      // Increment frequency for this digit sum
      digitSumFrequency[digitSum]++;
    }

    // Track the largest frequency found
    int maxFrequency = 0;
    // Count how many digit sums have the largest frequency
    int maxFrequencyCount = 0;

    // Iterate through all frequencies
    foreach (var frequency in digitSumFrequency)
    {
      // Skip empty groups (frequency = 0)
      if (frequency == 0)
        continue;

      // If current frequency is larger than previous max
      if (frequency > maxFrequency)
      {
        // Update max frequency
        maxFrequency = frequency;
        // Reset count to 1
        maxFrequencyCount = 1;
      }
      // If current frequency equals max frequency
      else if (frequency == maxFrequency)
        // Increment count
        maxFrequencyCount++;
    }

    // Return number of groups with the largest size
    return maxFrequencyCount;
  }
}
