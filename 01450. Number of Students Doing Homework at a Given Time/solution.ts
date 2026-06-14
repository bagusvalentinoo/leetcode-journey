/**
 * Problem: 1450. Number of Students Doing Homework at a Given Time
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts students studying at a given query time
 *
 * @param startTime - Array of start times
 * @param endTime - Array of end times
 * @param queryTime - Time to check
 *
 * @returns Number of students studying at queryTime
 */
const busyStudent = (
  startTime: number[],
  endTime: number[],
  queryTime: number
): number => {
  // Initialize counter for busy students
  let busyCount: number = 0

  // Iterate through each student's time range
  for (
    let studentIndex: number = 0;
    studentIndex < startTime.length;
    studentIndex++
  ) {
    // Check if queryTime falls within the student's interval (inclusive)
    if (
      startTime[studentIndex] <= queryTime &&
      endTime[studentIndex] >= queryTime
    )
      busyCount++
  }

  // Return total number of students studying at queryTime
  return busyCount
}
