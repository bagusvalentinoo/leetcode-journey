/**
 * Problem: 1450. Number of Students Doing Homework at a Given Time
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int BusyStudent(int[] startTime, int[] endTime, int queryTime)
  {
    // Initialize counter for busy students
    int busyCount = 0;

    // Iterate through each student's time range
    for (int studentIndex = 0; studentIndex < startTime.Length; studentIndex++)
    {
      // Check if queryTime falls within the student's interval (inclusive)
      if (startTime[studentIndex] <= queryTime && endTime[studentIndex] >= queryTime)
        busyCount++;
    }

    // Return total number of students studying at queryTime
    return busyCount;
  }
}
