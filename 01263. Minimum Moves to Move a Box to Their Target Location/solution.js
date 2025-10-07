/**
 * Problem: 1263. Minimum Moves to Move a Box to Their Target Location
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 57 ms (Beats 100%)
 */

/**
 * Finds the minimum pushes to move the box to the target
 *
 * @param {character[][]} grid - Game grid
 *
 * @returns {number} - Minimum pushes or -1 if impossible
 */
const minPushBox = (grid) => {
  // Initialize positions for box, person, and target
  let box, person, target

  // Get grid dimensions
  const rowCount = grid.length,
    colCount = grid[0].length

  // Define movement directions: up, down, left, right
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ]

  // Locate box, target, and person in the grid
  for (let row = 0; row < rowCount; row++) {
    for (let col = 0; col < colCount; col++) {
      const cell = grid[row][col]

      if (cell === 'B') box = [row, col]
      else if (cell === 'T') target = [row, col]
      else if (cell === 'S') person = [row, col]
    }
  }

  // Check if a position is valid (inside grid and not a wall)
  const isValid = ([row, col]) =>
    row >= 0 &&
    row < rowCount &&
    col >= 0 &&
    col < colCount &&
    grid[row][col] !== '#'

  // Generate a unique key for a position
  const positionKey = ([row, col]) => `${row},${col}`

  // Check if person can reach newPerson position without crossing the box
  const canReach = (personPos, targetPos, boxPos) => {
    // Perform BFS to check if person can reach targetPos without crossing boxPos
    // Track visited positions to avoid cycles
    const visited = new Set()

    // Mark box position as visited (person can't cross box)
    visited.add(positionKey(boxPos))

    // Initialize BFS queue with person's current position
    let queue = [personPos]

    // Continue BFS until queue is empty
    while (queue.length) {
      // Prepare next level queue
      const nextQueue = []
      // Number of positions to process at current level
      const queueSize = queue.length

      // Process all positions in current queue
      for (let i = 0; i < queueSize; i++) {
        // Get current position
        const [curRow, curCol] = queue[i]

        // If person reaches target position, return true
        if (positionKey([curRow, curCol]) === positionKey(targetPos))
          return true

        // Explore all possible movement directions
        for (const [dRow, dCol] of directions) {
          // Calculate new position
          const [newRow, newCol] = [curRow + dRow, curCol + dCol]

          // Check if new position is valid and not visited
          if (
            isValid([newRow, newCol]) &&
            !visited.has(positionKey([newRow, newCol]))
          ) {
            // Mark new position as visited
            visited.add(positionKey([newRow, newCol]))
            // Add new position to next queue
            nextQueue.push([newRow, newCol])
          }
        }
      }

      // Move to next level of BFS
      queue = nextQueue
    }

    // Return false if target position is not reachable
    return false
  }

  // Initialize BFS queue with [pushCount, boxPosition, personPosition]
  let queue = [[0, box, person]]

  // Generate a unique key for box and person positions
  const stateKey = (boxPos, personPos) =>
    `${boxPos[0]},${boxPos[1]}_${personPos[0]},${personPos[1]}`

  // Track visited states to avoid revisiting
  const visitedStates = new Set()
  visitedStates.add(stateKey(box, person))

  // Perform BFS to find minimum pushes
  while (queue.length) {
    const queueSize = queue.length
    const nextQueue = []

    for (let i = 0; i < queueSize; i++) {
      const [pushCount, boxPos, personPos] = queue[i]

      // If box reaches target, return push count
      if (positionKey(boxPos) === positionKey(target)) return pushCount

      // Possible new box positions after push
      const newBoxPositions = [
        [boxPos[0], boxPos[1] + 1],
        [boxPos[0], boxPos[1] - 1],
        [boxPos[0] + 1, boxPos[1]],
        [boxPos[0] - 1, boxPos[1]]
      ]

      // Corresponding person positions to push the box
      const newPersonPositions = [
        [boxPos[0], boxPos[1] - 1],
        [boxPos[0], boxPos[1] + 1],
        [boxPos[0] - 1, boxPos[1]],
        [boxPos[0] + 1, boxPos[1]]
      ]

      // Try all four directions for pushing the box
      for (let dir = 0; dir < 4; dir++) {
        const nextBoxPos = newBoxPositions[dir],
          nextPersonPos = newPersonPositions[dir]

        const nextStateKey = stateKey(nextBoxPos, boxPos)

        // Skip if state already visited
        if (visitedStates.has(nextStateKey)) continue

        // Check if move is valid and person can reach push position
        if (
          isValid(nextBoxPos) &&
          isValid(nextPersonPos) &&
          canReach(personPos, nextPersonPos, boxPos)
        ) {
          nextQueue.push([pushCount + 1, nextBoxPos, boxPos])
          visitedStates.add(nextStateKey)
        }
      }
    }

    queue = nextQueue
  }

  // Return -1 if box cannot reach target
  return -1
}
