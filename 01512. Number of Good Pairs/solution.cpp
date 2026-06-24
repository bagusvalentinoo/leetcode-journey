/**
 * Problem: 1512. Number of Good Pairs
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
  int numIdenticalPairs(vector<int> &nums)
  {
    // Unordered map to store frequency of each number
    unordered_map<int, int> frequencyMap;

    // Counter for identical pairs
    int pairsCount = 0;

    // Iterate through each element in the array
    for (int currentNumber : nums)
    {
      // Get current frequency of this number (default to 0)
      int currentFrequency = frequencyMap[currentNumber];

      // Add current frequency to pair count (pairs with previous occurrences)
      pairsCount += currentFrequency;
      // Update frequency map with incremented count
      frequencyMap[currentNumber] = currentFrequency + 1;
    }

    // Return the total number of identical pairs found in the array
    return pairsCount;
  }
};
