/**
 * Problem: 1030. Matrix Cells in Distance Order
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 2 ms (Beats 100%)
 */

/**
 * Returns matrix cells sorted by Manhattan distance from center
 *
 * @param {number} rows - Matrix rows
 * @param {number} cols - Matrix columns
 * @param {number} rCenter - Center row
 * @param {number} cCenter - Center column
 *
 * @returns {number[][]} - Cell coordinates sorted by distance
 */
const allCellsDistOrder = (rows, cols, rCenter, cCenter) => {
  // Initialize bucket array to group cells by their Manhattan distance
  const buckets = []

  // Initialize result array to store final sorted coordinates
  const result = []

  // Calculate maximum possible Manhattan distance from center to any corner
  // This is the sum of max row distance and max column distance
  const maxDistance =
    Math.max(rCenter, rows - 1 - rCenter) +
    Math.max(cCenter, cols - 1 - cCenter)

  // Create empty buckets for each possible distance (0 to maxDistance)
  for (let distanceIndex = 0; distanceIndex <= maxDistance; distanceIndex++) {
    buckets.push([])
  }

  // Iterate through each cell in the matrix
  for (let currentRow = 0; currentRow < rows; currentRow++) {
    for (let currentCol = 0; currentCol < cols; currentCol++) {
      // Calculate Manhattan distance from current cell to center
      const manhattanDistance =
        Math.abs(currentRow - rCenter) + Math.abs(currentCol - cCenter)

      // Add current cell coordinates to appropriate distance bucket
      buckets[manhattanDistance].push([currentRow, currentCol])
    }
  }

  // Flatten buckets in distance order to create final sorted result
  for (let bucketIndex = 0; bucketIndex <= maxDistance; bucketIndex++)
    result.push(...buckets[bucketIndex])

  // Return coordinates sorted by Manhattan distance from center
  return result
}
