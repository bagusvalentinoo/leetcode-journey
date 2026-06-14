/**
 * Problem: 1450. Number of Students Doing Homework at a Given Time
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts students studying at a given query time
 *
 * @param {number[]} startTime - Array of start times
 * @param {number[]} endTime - Array of end times
 * @param {number} queryTime - Time to check
 *
 * @returns {number} Number of students studying at queryTime
 */
const busyStudent = (startTime, endTime, queryTime) => {
  // Initialize counter for busy students
  let busyCount = 0

  // Iterate through each student's time range
  for (let studentIndex = 0; studentIndex < startTime.length; studentIndex++) {
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
