/**
 * Problem: 1001. Grid Illumination
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 127 ms (Beats 100%)
 */

/**
 * Checks illumination status for queries and turns off neighboring lamps
 *
 * @param {number} n - Grid size (n x n)
 * @param {number[][]} lamps - Lamp positions
 * @param {number[][]} queries - Query positions
 *
 * @returns {number[]} - Illumination status (1=lit, 0=dark)
 */
const gridIllumination = (n, lamps, queries) => {
  // Directions for adjacent cells (8 directions)
  const adjacentDirections = [
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1]
  ]

  // Maps to track lamp positions and illuminated lines
  const lampPositions = new Map(),
    rowIlluminations = new Map(),
    colIlluminations = new Map(),
    diagonalIlluminations = new Map(),
    antiDiagonalIlluminations = new Map()

  // Process all lamps and update illumination maps
  lamps.forEach(([i, j]) => {
    // Initialize row in lamp positions map if needed
    lampPositions.has(i) || lampPositions.set(i, new Set())

    // Add lamp and update illumination counts if lamp is new
    if (!lampPositions.get(i).has(j)) {
      lampPositions.get(i).add(j)
      rowIlluminations.set(i, -~rowIlluminations.get(i))
      colIlluminations.set(j, -~colIlluminations.get(j))
      diagonalIlluminations.set(i + j, -~diagonalIlluminations.get(i + j))
      antiDiagonalIlluminations.set(
        i - j,
        -~antiDiagonalIlluminations.get(i - j)
      )
    }
  })

  // Decrease illumination count and remove key if count reaches zero
  const decrementIllumination = (map, key) => {
    map.set(key, map.get(key) - 1)

    if (map.get(key) === 0) map.delete(key)
  }

  // Turn off lamp at given position if it exists
  const turnOffLamp = (i, j) => {
    if (
      i >= 0 &&
      i < n &&
      j >= 0 &&
      j < n &&
      lampPositions.has(i) &&
      lampPositions.get(i).has(j)
    ) {
      lampPositions.get(i).delete(j)

      decrementIllumination(rowIlluminations, i)
      decrementIllumination(colIlluminations, j)
      decrementIllumination(diagonalIlluminations, i + j)
      decrementIllumination(antiDiagonalIlluminations, i - j)
    }
  }

  // Process each query and return illumination status
  return queries.map(([i, j]) => {
    // Check if position is illuminated in any direction
    const result =
      rowIlluminations.has(i) ||
      colIlluminations.has(j) ||
      diagonalIlluminations.has(i + j) ||
      antiDiagonalIlluminations.has(i - j)
        ? 1
        : 0

    // Turn off lamp at query position if exists
    turnOffLamp(i, j)

    // Turn off all adjacent lamps
    adjacentDirections.forEach(([di, dj]) => {
      di += i
      dj += j
      turnOffLamp(di, dj)
    })

    return result
  })
}
