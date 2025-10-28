/**
 * Problem: 1284. Minimum Number of Flips to Convert Binary Matrix to Zero Matrix
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns the minimum flips to convert a binary matrix to a zero matrix
 *
 * @param {number[][]} mat - Binary matrix
 *
 * @returns {number} - Minimum flips
 */
const minFlips = (mat) => {
  // Get the number of rows (m) and columns (n) in the matrix
  const m = mat.length,
    n = mat[0].length

  // Initialize the starting state as 0
  let start = 0

  // Convert the matrix into a bitmask representation for the starting state
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 1) start |= 1 << (i * n + j)
    }
  }

  // If the starting state is already zero, return 0 flips
  if (start === 0) return 0

  // Create a 2D array to store the flip masks for each cell
  const flipMask = Array.from({ length: m }, () => Array(n).fill(0))

  // Define the directions for flipping (current cell and neighbors)
  const dirs = [
    [0, 0],
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ]

  // Calculate the flip mask for each cell in the matrix
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let mask = 0

      // Iterate through all directions to determine the affected cells
      for (const [dx, dy] of dirs) {
        const x = i + dx,
          y = j + dy

        // Ensure the affected cell is within bounds
        if (x >= 0 && x < m && y >= 0 && y < n) mask |= 1 << (x * n + y)
      }

      // Store the calculated mask for the current cell
      flipMask[i][j] = mask
    }
  }

  // Initialize the queue for BFS with the starting state
  const q = [start]

  // Pointer to track the current position in the queue
  let head = 0

  // Set to track visited states to avoid revisiting
  const seen = new Set([start])

  // Variable to count the number of steps (flips)
  let steps = 0

  // Perform BFS to find the minimum number of flips
  while (head < q.length) {
    // Get the number of states at the current BFS level
    const levelSize = q.length - head

    // Process all states at the current BFS level
    for (let t = 0; t < levelSize; t++) {
      // Get the current state from the queue
      const state = q[head++]

      // If the current state is zero, return the number of steps
      if (state === 0) return steps

      // Generate all possible next states by flipping each cell
      for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
          const next = state ^ flipMask[i][j]

          // If the next state has not been visited, add it to the queue
          if (!seen.has(next)) {
            seen.add(next)
            q.push(next)
          }
        }
      }
    }

    // Increment the step count after processing the current level
    steps++
  }

  // If no solution is found, return -1
  return -1
}
