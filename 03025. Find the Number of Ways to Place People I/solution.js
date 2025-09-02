/**
 * Problem: 3025. Find the Number of Ways to Place People I
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 2 ms (Beats 100%)
 */

/**
 * Counts valid pairs in an array of [x, y] points
 *
 * @param {number[][]} points - Array of [x, y] coordinates
 *
 * @returns {number} - Number of valid pairs
 */
const numberOfPairs = (points) => {
  // Sort points by x ascending, then by y descending if x is equal
  points.sort((a, b) => (a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]))

  // Store the number of points
  const totalPoints = points.length
  // Initialize the count of valid pairs
  let validPairCount = 0

  // Iterate through each point as the first point in the pair
  for (let i = 0; i < totalPoints; i++) {
    // Get the y-coordinate of the current point (top boundary)
    const topY = points[i][1]
    // Initialize the bottom boundary for y-coordinate
    let bottomY = -Infinity

    // Iterate through subsequent points to find valid pairs
    for (let j = i + 1; j < totalPoints; j++) {
      // Get the y-coordinate of the candidate point
      const candidateY = points[j][1]

      // Check if candidateY is strictly above bottomY and not above topY
      if (bottomY < candidateY && candidateY <= topY) {
        // Valid pair found, increment count
        validPairCount++
        // Update bottomY to the current candidateY
        bottomY = candidateY

        // If bottomY reaches topY, no further valid pairs possible for this i
        if (bottomY === topY) break
      }
    }
  }

  // Return the total number of valid pairs found
  return validPairCount
}
