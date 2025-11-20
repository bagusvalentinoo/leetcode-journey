/**
 * Problem: 757. Set Intersection Size At Least Two
 *
 * Difficulty: Hard
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution
{
public:
  int intersectionSizeTwo(vector<vector<int>> &intervals)
  {
    // Sort the intervals based on their ending points in ascending order
    sort(intervals.begin(), intervals.end(),
         [](const vector<int> &a, const vector<int> &b)
         {
           return a[1] < b[1];
         });

    // Initialize the first two elements of the set
    int prev1 = intervals[0][1] - 1; // Second last element in the first interval
    int prev2 = intervals[0][1];     // Last element in the first interval

    // Initialize the count of elements in the set
    int count = 2;

    // Iterate through the remaining intervals
    for (int i = 1; i < intervals.size(); i++)
    {
      // Extract the start and end points of the current interval
      int start = intervals[i][0];
      int end = intervals[i][1];

      // Check if the current interval is disjoint from the set
      if (prev2 < start)
      {
        // Add two new elements from the current interval
        prev1 = end - 1;
        prev2 = end;
        count += 2;
      }
      // Check if the current interval overlaps with only one element in the set
      else if (prev1 < start)
      {
        // Add one new element from the current interval
        if (end == prev2)
          prev1 = end - 1; // Adjust prev1 to maintain order
        else
          prev1 = end;

        // Ensure prev1 is always less than prev2
        if (prev1 > prev2)
          std::swap(prev1, prev2);

        count += 1;
      }
    }

    // Return the total count of elements in the set
    return count;
  }
};