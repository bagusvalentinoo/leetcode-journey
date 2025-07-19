/**
 * Problem: 1040. Moving Stones Until Consecutive II
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 11 ms (Beats 100%)
 */

/**
 * Calculates the minimum and maximum moves required to arrange stones
 *
 * @param {number[]} stones - Stone positions
 *
 * @returns {number[]} - [min moves, max moves] to arrange stones
 */
const numMovesStonesII = (stones) => {
  // Sort stones array in ascending order to work with positions sequentially
  stones.sort((a, b) => a - b)

  // Get the total number of stones
  const n = stones.length

  // Initialize minimum moves to worst case (all stones need to move)
  let minMoves = n

  // Calculate maximum moves using the larger of two scenarios:
  // 1. Move all stones except the first one to fill gap from position 1 to end
  // 2. Move all stones except the last one to fill gap from start to second-to-last
  const maxMoves = Math.max(
    stones[n - 1] - stones[1] - n + 2, // Scenario 1: keep first stone fixed
    stones[n - 2] - stones[0] - n + 2 // Scenario 2: keep last stone fixed
  )

  // Use sliding window approach to find minimum moves
  // i = left pointer, j = right pointer of the window
  for (
    let leftPointer = 0, rightPointer = 0;
    rightPointer < n;
    rightPointer++
  ) {
    // Shrink window from left while window size exceeds n positions
    while (stones[rightPointer] - stones[leftPointer] >= n) leftPointer++

    // Calculate stones already in the current window of size n
    const stonesInWindow = rightPointer - leftPointer + 1

    // Special case: if n-1 stones are consecutive and occupy exactly n-2 positions
    // This requires exactly 2 moves to arrange all stones
    if (
      stonesInWindow === n - 1 &&
      stones[rightPointer] - stones[leftPointer] === n - 2
    )
      minMoves = Math.min(minMoves, 2)
    // General case: moves needed = stones outside the optimal window
    else minMoves = Math.min(minMoves, n - stonesInWindow)
  }

  // Return array with minimum moves and maximum moves
  return [minMoves, maxMoves]
}
