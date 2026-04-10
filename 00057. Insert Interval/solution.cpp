/**
 * Problem: 57. Insert Interval
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  vector<vector<int>> insert(vector<vector<int>> &intervals,
                             vector<int> &newInterval) {
    // Store result intervals
    vector<vector<int>> mergedIntervals;

    // Destructure new interval into start and end values
    int start = newInterval[0], end = newInterval[1];

    // Initialize pointer for iteration
    int index = 0;

    // Get total number of intervals
    int totalIntervals = intervals.size();

    // Add all intervals that end before the new interval starts
    while (index < totalIntervals && intervals[index][1] < start) {
      // Push interval that doesn't overlap
      mergedIntervals.push_back(intervals[index]);

      // Move to next interval
      index++;
    }

    // Merge all intervals that overlap with the new interval
    while (index < totalIntervals && intervals[index][0] <= end) {
      // Update start to the minimum value among overlapping intervals
      start = min(start, intervals[index][0]);
      // Update end to the maximum value among overlapping intervals
      end = max(end, intervals[index][1]);

      // Move to next interval
      index++;
    }

    // Add the merged interval
    mergedIntervals.push_back({start, end});

    // Add all remaining intervals that start after the merged interval ends
    while (index < totalIntervals) {
      // Push remaining interval
      mergedIntervals.push_back(intervals[index]);

      // Move to next interval
      index++;
    }

    // Return the final merged intervals array
    return mergedIntervals;
  }
};
