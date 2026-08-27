/**
 * Problem: 1496. Path Crossing
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if path crosses itself on 2D plane
 *
 * @param path - String of 'N', 'S', 'E', 'W' directions
 *
 * @returns True if path crosses itself
 */
const isPathCrossing = (path: string): boolean => {
  // Start at origin
  let x: number = 0, y: number = 0

  // Track visited positions using hash set
  const visited: Set<string> = new Set()

  // Add origin to visited set
  visited.add('0,0')

  // Process each direction
  for (const dir of path) {
    // Move north: increment y coordinate
    if (dir === 'N') y++
    // Move south: decrement y coordinate
    else if (dir === 'S') y--
    // Move east: increment x coordinate
    else if (dir === 'E') x++
    // Move west: decrement x coordinate
    else x--

    // Create position key
    const pos: string = `${x},${y}`

    // Check if position already visited
    if (visited.has(pos)) return true

    // Mark position as visited
    visited.add(pos)
  }

  // Path doesn't cross itself
  return false
}
