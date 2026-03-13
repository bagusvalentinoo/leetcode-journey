/**
 * Problem: 3296. Minimum Number of Seconds to Make Mountain Height Zero
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 20 ms (Beats 100%)
 */

/**
 * Calculates minimum seconds needed for workers to clear mountain height
 *
 * @param mountainHeight - Height to clear
 * @param workerTimes - Time each worker takes for first unit
 *
 * @returns Minimum seconds required
 */
const minNumberOfSeconds = (
  mountainHeight: number,
  workerTimes: number[]
): number => {
  // Find the time of the fastest worker
  const fastestWorkerTime: number = Math.min(...workerTimes)

  // Upper bound for binary search: if fastest worker does all work alone
  const maxSearchSeconds: number =
    (fastestWorkerTime * mountainHeight * (mountainHeight + 1)) / 2

  // Checks if mountain can be cleared within target seconds
  const canClearMountainWithin = (targetSeconds: number): boolean => {
    // Total height cleared by all workers combined
    let totalHeightCleared: number = 0

    // Process each worker
    for (const workerTime of workerTimes) {
      // Initial estimate using quadratic formula: h = (sqrt(1 + 8t/T) - 1) / 2
      // where T is workerTime and t is targetSeconds
      let maxHeightThisWorkerCanClear: number = Math.floor(
        (Math.sqrt(1 + 8 * (targetSeconds / workerTime)) - 1) / 2
      )

      // Adjust downwards if cost exceeds target seconds
      while (
        (workerTime *
          maxHeightThisWorkerCanClear *
          (maxHeightThisWorkerCanClear + 1)) /
          2 >
        targetSeconds
      )
        maxHeightThisWorkerCanClear--

      // Adjust upwards if can clear more within target seconds
      while (
        (workerTime *
          (maxHeightThisWorkerCanClear + 1) *
          (maxHeightThisWorkerCanClear + 2)) /
          2 <=
        targetSeconds
      )
        maxHeightThisWorkerCanClear++

      // Add this worker's contribution to total
      totalHeightCleared += maxHeightThisWorkerCanClear

      // Early exit if we've already reached target height
      if (totalHeightCleared >= mountainHeight) return true
    }

    // Check if total meets or exceeds target
    return totalHeightCleared >= mountainHeight
  }

  // Binary search lower bound
  let lowSeconds: number = 0
  // Binary search upper bound
  let highSeconds: number = maxSearchSeconds

  // Binary search for minimum time
  while (lowSeconds < highSeconds) {
    // Calculate middle point
    const midSeconds: number =
      lowSeconds + Math.floor((highSeconds - lowSeconds) / 2)

    // If possible in mid seconds, try lower
    if (canClearMountainWithin(midSeconds)) highSeconds = midSeconds
    // If not possible, try higher
    else lowSeconds = midSeconds + 1
  }

  // Return minimum seconds found
  return lowSeconds
}
