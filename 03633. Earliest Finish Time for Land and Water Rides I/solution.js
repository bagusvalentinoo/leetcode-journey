/**
 * Problem: 3633. Earliest Finish Time for Land and Water Rides I
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates minimum finish time for one sequence of operations
 *
 * @param {number[]} firstStartTime - Available start times for first operation
 * @param {number[]} firstDuration - Durations for first operation
 * @param {number[]} secondStartTime - Available start times for second operation
 * @param {number[]} secondDuration - Durations for second operation
 *
 * @returns {number} Minimum completion time for this sequence
 */
const calculateMinTime = (
  firstStartTime,
  firstDuration,
  secondStartTime,
  secondDuration
) => {
  // Get number of options for first operation
  const firstOptionsCount = firstStartTime.length

  // Find minimum completion time for first operation across all options
  let minFirstCompletion = Infinity

  // Iterate through all first operation choices
  for (let optionIndex = 0; optionIndex < firstOptionsCount; optionIndex++) {
    minFirstCompletion = Math.min(
      minFirstCompletion,
      firstStartTime[optionIndex] + firstDuration[optionIndex]
    )
  }

  // Get number of options for second operation
  const secondOptionsCount = secondStartTime.length

  // Initialize minimum total completion time to infinity
  let minTotalCompletion = Infinity

  // Case 1: Second operation can start at or before first operation completes
  for (let optionIndex = 0; optionIndex < secondOptionsCount; optionIndex++) {
    if (secondStartTime[optionIndex] <= minFirstCompletion) {
      minTotalCompletion = Math.min(
        minTotalCompletion,
        minFirstCompletion + secondDuration[optionIndex]
      )
    }
  }

  // Case 2: Second operation must wait for its own start time
  for (let optionIndex = 0; optionIndex < secondOptionsCount; optionIndex++) {
    if (secondStartTime[optionIndex] > minFirstCompletion) {
      minTotalCompletion = Math.min(
        minTotalCompletion,
        secondStartTime[optionIndex] + secondDuration[optionIndex]
      )
    }
  }

  // Return the minimum total completion time
  return minTotalCompletion
}

/**
 * Calculates earliest finish time for land and water operations
 *
 * @param {number[]} landStartTime - Available start times for land operation
 * @param {number[]} landDuration - Durations for land operation
 * @param {number[]} waterStartTime - Available start times for water operation
 * @param {number[]} waterDuration - Durations for water operation
 *
 * @returns {number} Minimum possible overall finish time
 */
const earliestFinishTime = (
  landStartTime,
  landDuration,
  waterStartTime,
  waterDuration
) => {
  // Calculate minimum time for land-first sequence
  const landFirstTime = calculateMinTime(
    landStartTime,
    landDuration,
    waterStartTime,
    waterDuration
  )

  // Calculate minimum time for water-first sequence
  const waterFirstTime = calculateMinTime(
    waterStartTime,
    waterDuration,
    landStartTime,
    landDuration
  )

  // Return the better of the two sequences
  return Math.min(landFirstTime, waterFirstTime)
}
