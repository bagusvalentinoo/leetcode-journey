/**
 * Problem: 3740. Minimum Distance Between Three Equal Elements I
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int minimumDistance(vector<int> &nums) {
    // Get length of input array
    int arrayLength = nums.size();

    // If array has less than 2 elements, no distance can be found
    if (arrayLength < 2)
      return -1;

    // Array to store previous positions (packed as [previous, current])
    vector<int> lastPositions(arrayLength, 0);

    // Initialize result with maximum possible value
    int minDistance = 300;

    // Iterate through each element in the array
    for (int i = 0; i < arrayLength; i++) {
      // Convert 1-indexed value to 0-indexed for array access
      int valueIndex = nums[i] - 1;

      // Current position (1-indexed)
      int currentPos = i + 1;

      // Retrieve packed data: low 8 bits = previous position
      int packedData = lastPositions[valueIndex];
      int previousPos = packedData & 255;
      int _currentPos = packedData >> 8; // Not used

      // Store current position in high bits, keep previous in low bits
      lastPositions[valueIndex] = _currentPos | (currentPos << 8);

      // Update minimum distance if we have a previous position
      if (previousPos != 0)
        minDistance = min(minDistance, (currentPos - previousPos) << 1);
    }

    // Return -1 if no distance found, otherwise return minDistance
    return minDistance == 300 ? -1 : minDistance;
  }
};
