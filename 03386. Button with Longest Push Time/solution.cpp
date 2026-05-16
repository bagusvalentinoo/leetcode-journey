/**
 * Problem: 3386. Button with Longest Push Time
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int buttonWithLongestTime(vector<vector<int>> &events) {
    // Initialize variables: button index, maximum time taken, and previous
    // event time
    int buttonIndex = 0, maxTimeTaken = 0, previousEventTime = 0;

    // Iterate through each event in the events array
    for (auto &event : events) {
      // Calculate time difference from previous event
      int currentTimeDiff = event[1] - previousEventTime;

      // Check if current time difference is greater than max, or equal with
      // smaller button index
      if (currentTimeDiff > maxTimeTaken ||
          (currentTimeDiff == maxTimeTaken && event[0] < buttonIndex)) {
        // Update maximum time taken
        maxTimeTaken = currentTimeDiff;
        // Update button index
        buttonIndex = event[0];
      }

      // Update previous event time for next iteration
      previousEventTime = event[1];
    }

    // Return the button index with the longest press time
    return buttonIndex;
  }
};
