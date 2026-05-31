/**
 * Problem: 1365. How Many Numbers Are Smaller Than the Current Number
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
  vector<int> smallerNumbersThanCurrent(vector<int> &nums)
  {
    // Frequency array for numbers 0-100
    vector<int> frequency(101, 0);

    // Result vector to store counts for each position
    vector<int> result(nums.size(), 0);

    // Count occurrences of each number
    for (int i = 0; i < nums.size(); i++)
      frequency[nums[i]]++;
    // Build prefix sum to get count of numbers <= current value
    for (int value = 1; value < 101; value++)
      frequency[value] += frequency[value - 1];

    // For each element, count numbers strictly smaller than it
    for (int i = 0; i < nums.size(); i++)
    {
      // Get current value at index i
      int currentValue = nums[i];

      // If value is 0, no numbers are smaller
      if (currentValue == 0)
        result[i] = 0;
      // Otherwise, get count of numbers <= (currentValue - 1)
      else
        result[i] = frequency[currentValue - 1];
    }

    // Return the result vector with counts of smaller numbers
    return result;
  }
};
