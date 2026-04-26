/**
 * Problem: 1560. Most Visited Sector in a Circular Track
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds sectors most visited in a circular track
 *
 * @param {number} n - Number of sectors (1 to n)
 * @param {number[]} rounds - Sequence of visited sectors
 *
 * @returns {number[]} Sectors visited most frequently
 */
const mostVisited = (n, rounds) => {
  // Get the starting sector of the first round
  const startSector = rounds[0]

  // Get the ending sector of the last round
  const endSector = rounds[rounds.length - 1]

  // Array to store the most visited sectors
  const visitedSectors = []

  // Check each sector from 1 to n
  for (let sector = 1; sector <= n; sector++) {
    // Condition 1: No wrap around (start ≤ end) and sector is between start and end
    // Condition 2: Wrap around (start > end) and sector is either ≥ start or ≤ end
    if (
      (sector >= startSector &&
        sector <= endSector &&
        startSector <= endSector) ||
      (startSector > endSector &&
        (sector >= startSector || sector <= endSector))
    )
      // Add sector to result if it's in the visited range
      visitedSectors.push(sector)
  }

  // Return the array of most visited sectors
  return visitedSectors
}
