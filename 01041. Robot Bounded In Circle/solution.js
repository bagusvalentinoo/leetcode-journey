/**
 * Problem: 1041. Robot Bounded In Circle
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Determines if a robot executing instructions remains in a bounded area
 *
 * @param {string} instructions - Robot instructions ('G', 'L', 'R')
 *
 * @returns {boolean} - True if robot is bounded, false otherwise
 */
const isRobotBounded = (instructions) => {
  // Initialize robot's starting position at origin (0, 0)
  let robotX = 0,
    robotY = 0,
    // Direction index: 0=North, 1=East, 2=South, 3=West
    currentDirection = 0

  // Define direction vectors for movement in 2D plane
  // Each array represents [x_delta, y_delta] for the respective direction
  const directionVectors = [
    [0, 1], // North: move up (positive Y)
    [1, 0], // East: move right (positive X)
    [0, -1], // South: move down (negative Y)
    [-1, 0] // West: move left (negative X)
  ]

  // Process each instruction in the given sequence
  for (const instruction of instructions) {
    // Handle 'G' instruction: move forward in current direction
    if (instruction === 'G') {
      // Update position by adding current direction's movement vector
      robotX += directionVectors[currentDirection][0]
      robotY += directionVectors[currentDirection][1]
    }
    // Handle 'L' instruction: turn left (counter-clockwise)
    else if (instruction === 'L') {
      // Turn left by subtracting 1 from direction (with wraparound using modulo)
      currentDirection = (currentDirection + 3) % 4
    }
    // Handle 'R' instruction: turn right (clockwise)
    else {
      // Turn right by adding 1 to direction (with wraparound using modulo)
      currentDirection = (currentDirection + 1) % 4
    }
  }

  // Robot is bounded if either:
  // 1. It returns to origin (0, 0), or
  // 2. It's not facing North (direction changed from initial)
  return (robotX === 0 && robotY === 0) || currentDirection !== 0
}
