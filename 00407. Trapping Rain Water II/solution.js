/**
 * Problem: 407. Trapping Rain Water II
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 16 ms (Beats 100%)
 */

/**
 * Calculates trapped water in a 2D height map
 *
 * @param {number[][]} heightMap - 2D array of heights
 *
 * @returns {number} - Trapped water volume
 */
const trapRainWater = (heightMap) => {
  // Get the number of rows and colums in the height map
  const rowCount = heightMap.length,
    colCount = heightMap[0].length

  // Create a copy of the height map to store water levels
  const waterLevels = Array.from({ length: rowCount }, (_, i) =>
    heightMap[i].slice()
  )

  // Flag to track if any update occurred in the current iteration
  let hasUpdate = true,
    // Flag to indicate the first iteration
    isFirstIteration = true

  // Repeat until no updates are made to water levels
  while (hasUpdate) {
    // Reset update flag for this iteration
    hasUpdate = false

    // Forward pass: update water levels from top-left to bottom-right
    for (let i = 1; i < rowCount - 1; i++) {
      for (let j = 1; j < colCount - 1; j++) {
        // Calculate the minimum water level from top and left neighbors
        const minNeighbor = Math.min(
          waterLevels[i - 1][j],
          waterLevels[i][j - 1]
        )
        // Determine the new water level for the current cell
        const newLevel = Math.max(heightMap[i][j], minNeighbor)

        // Update water level if it's the first iteration or if a lower level is found
        if (isFirstIteration || waterLevels[i][j] > newLevel) {
          waterLevels[i][j] = newLevel
          hasUpdate = true
        }
      }
    }

    // Mark that the first iteration is complete
    isFirstIteration = false

    // Backward pass: update water levels from bottom-right to top-left
    for (let i = rowCount - 2; i >= 1; i--) {
      for (let j = colCount - 2; j >= 1; j--) {
        // Calculate the minimum water level from bottom and right neighbors
        const minNeighbor = Math.min(
          waterLevels[i + 1][j],
          waterLevels[i][j + 1]
        )
        // Determine the new water level for the current cell
        const newLevel = Math.max(heightMap[i][j], minNeighbor)

        // Update water level if a lower level is found
        if (waterLevels[i][j] > newLevel) {
          waterLevels[i][j] = newLevel
          hasUpdate = true
        }
      }
    }
  }

  // Initialize the result to store total trapped water
  let totalWater = 0

  // Iterate through the inner cells to calculate trapped water
  for (let i = 1; i < rowCount - 1; i++) {
    for (let j = 1; j < colCount - 1; j++) {
      // Add the difference between water level and height if water is trapped
      if (waterLevels[i][j] > heightMap[i][j]) {
        totalWater += waterLevels[i][j] - heightMap[i][j]
      }
    }
  }

  // Return the total trapped water
  return totalWater
}
