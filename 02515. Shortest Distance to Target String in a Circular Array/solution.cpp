/**
 * Problem: 2515. Shortest Distance to Target String in a Circular Array
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int closestTarget(vector<string> &words, string target, int startIndex) {
    // Get length of words array
    int arrayLength = words.size();

    // Initialize answer to maximum value
    int minSteps = INT_MAX;

    // Iterate through all indices
    for (int i = 0; i < arrayLength; i++) {
      // Check if current word matches target
      if (words[i] == target) {
        // Calculate clockwise distance
        int clockwiseSteps = (i - startIndex + arrayLength) % arrayLength;
        // Calculate anticlockwise distance
        int anticlockwiseSteps = (startIndex - i + arrayLength) % arrayLength;

        // Update minimum steps
        minSteps = min(minSteps, min(clockwiseSteps, anticlockwiseSteps));
      }
    }

    // Return -1 if target not found, otherwise return minimum steps
    return minSteps == INT_MAX ? -1 : minSteps;
  }
};
