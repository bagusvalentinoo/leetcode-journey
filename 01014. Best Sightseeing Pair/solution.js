/**
 * Problem: 1014. Best Sightseeing Pair
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns the maximum score of a pair of sightseeing spots
 *
 * @param {number[]} values - Array of sightseeing spot values
 *
 * @returns {number} - Maximum possible score
 */
const maxScoreSightseeingPair = (values) => {
  // Initialize max score to track highest score found
  let maxScore = 0
  // Track the max value of (values[i] + i) seen so far
  let bestPreviousSpot = values[0]

  for (let currentIndex = 1; currentIndex < values.length; ++currentIndex) {
    // Calculate score between current spot and best previous spot
    maxScore = Math.max(
      maxScore,
      values[currentIndex] - currentIndex + bestPreviousSpot
    )
    // Update best previous spot if current spot has higher value considering its position
    bestPreviousSpot = Math.max(
      bestPreviousSpot,
      values[currentIndex] + currentIndex
    )
  }

  return maxScore
}
