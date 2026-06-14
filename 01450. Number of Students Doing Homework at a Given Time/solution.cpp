/**
 * Problem: 1450. Number of Students Doing Homework at a Given Time
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
  int busyStudent(vector<int> &startTime, vector<int> &endTime, int queryTime)
  {
    // Initialize counter for busy students
    int busyCount = 0;

    // Iterate through each student's time range
    for (int studentIndex = 0; studentIndex < startTime.size(); studentIndex++)
    {
      // Check if queryTime falls within the student's interval (inclusive)
      if (startTime[studentIndex] <= queryTime && endTime[studentIndex] >= queryTime)
        busyCount++;
    }

    // Return total number of students studying at queryTime
    return busyCount;
  }
};
