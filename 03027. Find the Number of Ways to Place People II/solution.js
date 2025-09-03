/**
 * Problem: 3027. Find the Number of Ways to Place People II
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 113 ms (Beats 100%)
 */

/**
 * Returns the number of valid point pairs
 *
 * @param {number[][]} points - Array of [x, y] coordinates
 *
 * @returns {number} - Number of pairs
 */
const numberOfPairs = (points) => {
  // Sort the points array by x coordinate ascending, and by y coordinate descending if x is equal
  points.sort((a, b) => {
    if (a[0] === b[0]) return b[1] - a[1]

    return a[0] - b[0]
  })

  // Initialize the counter for valid pairs
  let validPairCount = 0
  // Store the total number of points
  const totalPoints = points.length

  // Iterate through each point as the first point in the pair
  for (let i = 0; i < totalPoints; i++) {
    // Get the y-coordinate of the current point (upper bound for the pair)
    const upperY = points[i][1]
    // Initialize the lower y-coordinate limit for valid pairs
    let lowerYLimit = Number.MIN_SAFE_INTEGER

    // Iterate through the remaining points to find valid pairs
    for (let j = i + 1; j < totalPoints; j++) {
      // Get the y-coordinate of the candidate pair point
      const candidateY = points[j][1]

      // Check if the candidate y-coordinate is within the valid range
      if (candidateY <= upperY && candidateY > lowerYLimit) {
        // Increment the valid pair counter
        validPairCount++
        // Update the lower y-coordinate limit to avoid counting duplicate pairs
        lowerYLimit = candidateY

        // If the candidate y-coordinate equals the upper bound, stop searching further
        if (candidateY === upperY) break
      }
    }
  }

  // Return the total number of valid pairs found
  return validPairCount
}
