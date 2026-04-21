/**
 * Problem: 1144. Decrease Elements To Make Array Zigzag
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int movesToMakeZigzag(vector<int> &nums) {
    // Helper function to calculate moves for a given zigzag pattern
    auto calcMoves = [&](bool peakAtEven) -> int {
      // Initialize total moves counter
      int moves = 0;

      // Store array length for reuse
      int n = nums.size();

      // Iterate through each element in the array
      for (int i = 0; i < n; i++) {
        // Get left and right neighbor value or INT_MAX if out of bounds
        int left = i > 0 ? nums[i - 1] : INT_MAX,
            right = i < n - 1 ? nums[i + 1] : INT_MAX;

        // Determine if current index should be a peak or valley
        if ((i % 2 == 0) != peakAtEven) {
          // Find the smaller neighbor value
          int minNeighbor = min(left, right);

          // If current value is not less than minNeighbor, calculate required
          // moves
          if (nums[i] >= minNeighbor)
            moves += nums[i] - (minNeighbor - 1);
        }
      }

      // Return total moves for this zigzag pattern
      return moves;
    };

    // Return the minimum moves required for either zigzag pattern
    return min(calcMoves(true), calcMoves(false));
  }
};
