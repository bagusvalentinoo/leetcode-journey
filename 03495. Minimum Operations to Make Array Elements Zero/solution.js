/**
 * Problem: 3495. Minimum Operations to Make Array Elements Zero
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 35 ms (Beats 100%)
 */

/**
 * Returns the minimum operations for each query range
 *
 * @param {number[][]} queries - Array of ranges
 *
 * @returns {number} - Minimum operations
 */
const minOperations = (queries) => {
  // Initialize an array to store the limits of each range, starting from 1
  const limits = [1]

  // Populate the limits array by multiplying the last element by 4 until it exceeds 1e9
  while (limits[limits.length - 1] <= 1e9)
    limits.push(limits[limits.length - 1] * 4)

  // Variable to accumulate the total minimum operations for all queries
  let totalOps = 0

  // Iterate over each query range [l, r] in the queries array
  for (const [l, r] of queries) {
    // Variable to accumulate the sum of steps for the current query
    let sumSteps = 0

    // Loop through each interval defined by the limits array
    for (let k = 1; k < limits.length; k++) {
      // Define the start and end of the current interval
      const start = limits[k - 1],
        end = limits[k] - 1

      // Skip this interval if it does not overlap with the query range
      if (r < start || l > end) continue

      // Calculate the overlapping range between the query and the current interval
      const overlapL = Math.max(l, start),
        overlapR = Math.min(r, end)

      // Calculate the number of elements in the overlapping range
      const count = overlapR - overlapL + 1

      // If there is an overlap, add the weighted count to sumSteps
      if (count > 0) sumSteps += count * k
    }

    // Add the minimum operations for the current query to the total, rounding up
    totalOps += Math.ceil(sumSteps / 2)
  }

  // Return the total minimum operations for all queries
  return totalOps
}
