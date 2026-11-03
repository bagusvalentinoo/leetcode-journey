/**
 * Problem: 3736. Minimum Moves to Equal Array Elements III
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int minMoves(vector<int> &nums) {
    // Find the maximum value in the array
    int maxVal = nums[0];

    // Iterate through the array to find the maximum value
    for (int num : nums) {
      if (num > maxVal)
        maxVal = num;
    }

    // Accumulate total moves required to bring all elements to maxVal
    int totalMoves = 0;

    // Calculate difference from maximum element for each number
    for (int num : nums)
      totalMoves += maxVal - num;

    // Return the minimum total number of moves
    return totalMoves;
  }
};
