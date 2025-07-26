/**
 * Problem: 3480. Maximize Subarrays After Removing One Conflicting Pair
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 269 ms (Beats 100%)
 */

/**
 * Returns the max number of non-conflicting subarrays
 *
 * @param {number} n - Number of elements (1-based)
 * @param {Array<[number, number]>} conflictingPairs - Pairs of conflicting elements
 *
 * @returns {number} - Max non-conflicting subarrays
 */
const maxSubarrays = (n, conflictingPairs) => {
  // Ensure each conflicting pair is ordered as [smaller, larger]
  for (const pair of conflictingPairs) {
    if (pair[1] < pair[0]) {
      const temp = pair[0]
      pair[0] = pair[1]
      pair[1] = temp
    }
  }

  // Sort conflicting pairs by their end index for efficient processing
  conflictingPairs.sort((a, b) => a[1] - b[1])

  // Store the number of conflicting pairs
  const numPairs = conflictingPairs.length

  // Track the largest and second largest start indices seen so far
  let largestStart = 0,
    secondLargestStart = 0

  // Track the current gain and the maximum gain found
  let currentGain = 0,
    maxGain = 0

  // Track the total number of occupied elements due to conflicts
  let totalOccupied = 0

  // Iterate through each conflicting pair
  for (let i = 0; i < numPairs; i++) {
    const startIdx = conflictingPairs[i][0]

    // Calculate the base value for current pair
    let base = n + 1 - conflictingPairs[i][1]

    // If not the last pair, adjust base to the difference between current and next end index
    if (i < numPairs - 1)
      base = conflictingPairs[i + 1][1] - conflictingPairs[i][1]

    // Update largest and second largest start indices if needed
    if (startIdx > largestStart) {
      secondLargestStart = largestStart
      largestStart = startIdx
      currentGain = 0
    }
    // Otherwise, update second largest start index if needed
    else if (startIdx > secondLargestStart) secondLargestStart = startIdx

    // Update current gain based on the difference between largest and second largest start indices
    currentGain += (largestStart - secondLargestStart) * base

    // Update total occupied elements
    totalOccupied += largestStart * base

    // Update maximum gain if current gain is greater
    if (currentGain > maxGain) maxGain = currentGain
  }

  // Calculate the total number of possible subarrays
  const totalSubarrays = (n * (n + 1)) / 2

  // Return the maximum number of non-conflicting subarrays
  return totalSubarrays - totalOccupied + maxGain
}
