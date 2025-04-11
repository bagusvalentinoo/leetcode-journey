/**
 * Problem: 874. Walking Robot Simulation
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 14 ms (Beats 100%)
 */

/**
 * Simulates a robot's movement on an infinite XY-plane and returns the maximum squared Euclidean distance
 *
 * @param {number[]} commands - Array of commands for the robot
 * @param {number[][]} obstacles - Array of obstacle coordinates
 *
 * @returns {number} - The maximum squared Euclidean distance from the origin
 */
const robotSim = (commands, obstacles) => {
  // Directions: north, east, south, west
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
  ]

  /**
   * Returns a unique hash for a coordinate
   *
   * @param {number} x - The x-coordinate
   * @param {number} y - The y-coordinate
   *
   * @returns {number} - The unique hash for the coordinate
   */
  const getHash = (x, y) => x + (3 * 10 ** 4 + 1) * y

  // Create a set of obstacles for O(1) lookups
  const obst = new Set(obstacles.map((obstacle) => getHash(...obstacle)))
  let x = 0
  let y = 0
  let currDir = 0
  let maxDist = 0

  // Process each command
  for (const command of commands) {
    // Turn left
    if (command === -2) {
      currDir = (currDir + 3) % 4
      continue
    }

    // Turn right
    if (command === -1) {
      currDir = (currDir + 1) % 4
      continue
    }

    // Move forward
    for (let i = 0; i < command; i++) {
      // Get direction vector
      const [dx, dy] = directions[currDir]
      const nx = x + dx
      const ny = y + dy

      // Check for obstacles
      if (obst.has(getHash(nx, ny))) break

      // Update position and maximum distance
      x = nx
      y = ny
      maxDist = Math.max(maxDist, x * x + y * y)
    }
  }

  return maxDist
}
