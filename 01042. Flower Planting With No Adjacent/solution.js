/**
 * Problem: 1042. Flower Planting With No Adjacent
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 14 ms (Beats 100%)
 */

/**
 * Assign flowers to gardens such that no two adjacent gardens have the same flower
 *
 * @param {number} n - Number of gardens
 * @param {number[][]} paths - Adjacent garden pairs
 *
 * @returns {number[]} - Flower type for each garden
 */
const gardenNoAdj = (n, paths) => {
  // Initialize adjacency list representation of the graph with n vertices
  // Each garden will be represented as a node in the graph
  const adjacencyList = Array(n)

  // Build the adjacency list from the given paths
  paths.forEach(([gardenU, gardenV]) => {
    // Convert from 1-indexed to 0-indexed for array access
    gardenU -= 1
    gardenV -= 1

    // Initialize empty arrays for adjacency lists if they don't exist
    adjacencyList[gardenU] = adjacencyList[gardenU] || []
    adjacencyList[gardenV] = adjacencyList[gardenV] || []

    // Add bidirectional edges since gardens are adjacent both ways
    adjacencyList[gardenU].push(gardenV)
    adjacencyList[gardenV].push(gardenU)
  })

  // Initialize result array with default flower type 1 for all gardens
  const flowerAssignments = Array(n).fill(1)

  // Assign flower types to each garden ensuring no adjacent gardens have same flower
  adjacencyList.forEach((adjacentGardens, currentGarden) => {
    // Find the first flower type (1-4) that is not used by any adjacent garden
    flowerAssignments[currentGarden] = [1, 2, 3, 4].find((flowerType) => {
      // Check if this flower type is different from all adjacent gardens
      return adjacentGardens.every(
        (adjacentGarden) => flowerAssignments[adjacentGarden] !== flowerType
      )
    })
  })

  // Return the array of flower assignments for each garden
  return flowerAssignments
}
