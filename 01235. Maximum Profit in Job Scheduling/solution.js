/**
 * Problem: 1235. Maximum Profit in Job Scheduling
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 26 ms (Beats 100%)
 */

/**
 * Job scheduling with maximum profit
 *
 * @param {number[]} startTime - Job start times
 * @param {number[]} endTime - Job end times
 * @param {number[]} profit - Job profits
 *
 * @returns {number} - Maximum profit
 */
const jobScheduling = (startTime, endTime, profit) => {
  // Helper function to perform binary search to find the rightmost index where array[index] <= target
  const bisectRight = (array, target) => {
    // Initialize left and right pointers
    let left = 0,
      right = array.length

    // Standard binary search loop
    while (left < right) {
      // Bitwise shift for floor division by 2
      const mid = (left + right) >>> 1

      // Move right if mid value is <= target
      if (array[mid] <= target) left = mid + 1
      // Otherwise, move left
      else right = mid
    }

    // Return the insertion point
    return left
  }

  // Combine startTime, endTime, and profit into a single array of job objects
  const jobs = startTime
    .map((start, index) => ({
      start: start,
      end: endTime[index],
      profit: profit[index]
    }))
    .sort((a, b) => {
      return a.end - b.end // Sort jobs by end time in ascending order
    })

  // Extract sorted end times for binary search
  const endTimeSorted = jobs.map((job) => job.end)

  // Initialize DP array to store the maximum profit up to each job
  const maxProfits = Array(jobs.length + 1).fill(0)

  // Iterate through each job to compute the maximum profit
  for (let i = 1; i < maxProfits.length; i++) {
    const currentJob = jobs[i - 1] // Get the current job
    // Find the latest job that doesn't conflict with the current job
    const nonConflictIndex = bisectRight(endTimeSorted, currentJob.start)

    // Choose the maximum between skipping or taking the current job
    maxProfits[i] = Math.max(
      maxProfits[i - 1], // Skip current job
      currentJob.profit + maxProfits[nonConflictIndex] // Take current job and add profit from last non-conflicting job
    )
  }

  // Return the maximum profit achievable
  return maxProfits[maxProfits.length - 1]
}
