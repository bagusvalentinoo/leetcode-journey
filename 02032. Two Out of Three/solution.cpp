/**
 * Problem: 2032. Two Out of Three
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  vector<int> twoOutOfThree(vector<int> &nums1, vector<int> &nums2,
                            vector<int> &nums3) {
    // Count the distinct input arrays that contain each value
    array<uint8_t, 101> count{};
    // Record the most recent input array that contained each value
    array<uint8_t, 101> lastSeenIn;
    lastSeenIn.fill(-1);
    // Store values found in at least two input arrays
    vector<int> answer;

    // Process each input array and its index
    array<vector<int> *, 3> arrays = {&nums1, &nums2, &nums3};
    for (int arrayIndex = 0; arrayIndex < arrays.size(); arrayIndex++) {
      // Process each value in the current input array
      for (int number : *arrays[arrayIndex]) {
        // Skip values already counted for the current input array
        if (lastSeenIn[number] == arrayIndex)
          continue;

        // Mark the value as seen in the current input array
        lastSeenIn[number] = arrayIndex;
        // Count the current input array for the value
        count[number]++;

        // Record values as soon as they appear in a second input array
        if (count[number] == 2)
          answer.push_back(number);
      }
    }

    // Return all values that occur in at least two input arrays
    return answer;
  }
};
