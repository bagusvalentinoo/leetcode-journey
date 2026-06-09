/**
 * Problem: 1399. Count Largest Group
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution
{
public:
  int countLargestGroup(int n)
  {
    // Hash map to store frequency of each digit sum
    unordered_map<int, int> digitSumFrequency;

    // Track the maximum frequency found
    int maxFrequency = 0;

    // Calculate digit sums for all numbers from 1 to n
    for (int currentNum = 1; currentNum <= n; ++currentNum)
    {
      // Calculate sum of digits for current number
      int digitSum = 0, tempNum = currentNum;

      // Extract each digit and add to sum
      while (tempNum)
      {
        // Add last digit to sum
        digitSum += tempNum % 10;
        // Remove last digit
        tempNum /= 10;
      }

      // Increment frequency for this digit sum
      ++digitSumFrequency[digitSum];
      // Update maximum frequency if current is larger
      maxFrequency = max(maxFrequency, digitSumFrequency[digitSum]);
    }

    // Count how many digit sums have the maximum frequency
    int maxFrequencyCount = 0;

    // Iterate through all entries in the hash map
    for (auto &[digitSum, frequency] : digitSumFrequency)
    {
      // If current frequency equals max frequency, increment count
      if (frequency == maxFrequency)
        ++maxFrequencyCount;
    }

    // Return number of groups with the largest size
    return maxFrequencyCount;
  }
};
