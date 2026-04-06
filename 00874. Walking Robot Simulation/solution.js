/**
 * Problem: 874. Walking Robot Simulation
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 9 ms (Beats 100%)
 */

/**
 * Simulates robot movement and returns max squared distance
 *
 * @param {number[]} commands - Robot commands
 * @param {number[][]} obstacles - Obstacle coordinates
 *
 * @returns {number} Max squared distance from origin
 */
const robotSim = (commands, obstacles) => {
  // Direction vectors: North, East, South, West
  const directions = [
    [0, 1], // North
    [1, 0], // East
    [0, -1], // South
    [-1, 0] // West
  ]

  // Returns a unique hash for a coordinate to store in Set
  const getHash = (x, y) => x + 30001 * y

  // Convert obstacles to a Set for O(1) lookup
  const obstacleSet = new Set(obstacles.map((obstacle) => getHash(...obstacle)))

  // Robot's current position
  let x = 0,
    y = 0

  // Current direction index (0: North, 1: East, 2: South, 3: West)
  let currentDirection = 0,
    maxDistance = 0

  // Process each command in sequence
  for (const command of commands) {
    // Turn left (-2)
    if (command === -2) {
      // Turning left decreases direction index (with modulo)
      currentDirection = (currentDirection + 3) % 4
      continue
    }

    // Turn right (-1)
    if (command === -1) {
      // Turning right increases direction index (with modulo)
      currentDirection = (currentDirection + 1) % 4
      continue
    }

    // Move forward (1-9 steps)
    for (let step = 0; step < command; step++) {
      // Get current direction vector
      const [dx, dy] = directions[currentDirection]

      // Calculate next position
      const nextX = x + dx,
        nextY = y + dy

      // Stop if next position is blocked by obstacle
      if (obstacleSet.has(getHash(nextX, nextY))) break

      // Update position
      x = nextX
      y = nextY

      // Update maximum squared distance from origin
      maxDistance = Math.max(maxDistance, x * x + y * y)
    }
  }

  // Return the maximum squared distance from the origin
  return maxDistance
}
