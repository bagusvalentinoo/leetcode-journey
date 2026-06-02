/**
 * Problem: 3633. Earliest Finish Time for Land and Water Rides I
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates minimum finish time for one sequence of operations
 *
 * @param firstStartTime - Available start times for first operation
 * @param firstDuration - Durations for first operation
 * @param secondStartTime - Available start times for second operation
 * @param secondDuration - Durations for second operation
 *
 * @returns Minimum completion time for this sequence
 */
const calculateMinTime = (
  firstStartTime: number[],
  firstDuration: number[],
  secondStartTime: number[],
  secondDuration: number[]
): number => {
  // Get number of options for first operation
  const firstOptionsCount: number = firstStartTime.length

  // Find minimum completion time for first operation across all options
  let minFirstCompletion: number = Infinity

  // Iterate through all first operation choices
  for (
    let optionIndex: number = 0;
    optionIndex < firstOptionsCount;
    optionIndex++
  ) {
    minFirstCompletion = Math.min(
      minFirstCompletion,
      firstStartTime[optionIndex] + firstDuration[optionIndex]
    )
  }

  // Get number of options for second operation
  const secondOptionsCount: number = secondStartTime.length

  // Initialize minimum total completion time to infinity
  let minTotalCompletion: number = Infinity

  // Case 1: Second operation can start at or before first operation completes
  for (
    let optionIndex: number = 0;
    optionIndex < secondOptionsCount;
    optionIndex++
  ) {
    if (secondStartTime[optionIndex] <= minFirstCompletion) {
      minTotalCompletion = Math.min(
        minTotalCompletion,
        minFirstCompletion + secondDuration[optionIndex]
      )
    }
  }

  // Case 2: Second operation must wait for its own start time
  for (
    let optionIndex: number = 0;
    optionIndex < secondOptionsCount;
    optionIndex++
  ) {
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
 * @param landStartTime - Available start times for land operation
 * @param landDuration - Durations for land operation
 * @param waterStartTime - Available start times for water operation
 * @param waterDuration - Durations for water operation
 *
 * @returns Minimum possible overall finish time
 */
const earliestFinishTime = (
  landStartTime: number[],
  landDuration: number[],
  waterStartTime: number[],
  waterDuration: number[]
): number => {
  // Calculate minimum time for land-first sequence
  const landFirstTime: number = calculateMinTime(
    landStartTime,
    landDuration,
    waterStartTime,
    waterDuration
  )

  // Calculate minimum time for water-first sequence
  const waterFirstTime: number = calculateMinTime(
    waterStartTime,
    waterDuration,
    landStartTime,
    landDuration
  )

  // Return the better of the two sequences
  return Math.min(landFirstTime, waterFirstTime)
}
