/**
 * Problem: 975. Odd Even Jump
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 50 ms (Beats 100%)
 */

/**
 * Counts the number of good starting indices for odd-even jumps
 *
 * @param {number[]} arr - Input array
 *
 * @returns {number} - Number of good starting indices
 */
const oddEvenJumps = (arr) => {
  // Get the length of the input array
  const { length } = arr

  // Track whether we can reach the end starting with odd/even jumps
  const canReachWithOddJump = Array(length).fill(false),
    canReachWithEvenJump = Array(length).fill(false)

  // Last position can always reach itself
  canReachWithOddJump[length - 1] = canReachWithEvenJump[length - 1] = true

  // Arrays to store the next higher/lower positions we can jump to
  const nextHigherPosition = Array(length).fill(-1),
    nextLowerPosition = Array(length).fill(-1)

  // Stack for monotonic processing
  let indexStack = []

  // Create sorted indices array based on values (with tiebreakers)
  const sortedIndices = [...Array(length).keys()].sort(
    (a, b) => arr[a] - arr[b] || a - b
  )

  // Find next higher elements using monotonic stack
  for (const i of sortedIndices) {
    while (indexStack.length && indexStack[indexStack.length - 1] < i)
      nextHigherPosition[indexStack.pop()] = i

    indexStack.push(i)
  }

  // Reset stack for next calculation
  indexStack = []
  // Re-sort indices for descending order (with tiebreakers)
  sortedIndices.sort((a, b) => arr[b] - arr[a] || a - b)

  // Find next lower elements using monotonic stack
  for (const i of sortedIndices) {
    while (indexStack.length && indexStack[indexStack.length - 1] < i)
      nextLowerPosition[indexStack.pop()] = i

    indexStack.push(i)
  }

  // Number of good starting positions (last position is always good)
  let goodPositionsCount = 1

  // Work backwards to determine which positions can reach the end
  for (let i = length - 2; i >= 0; i--) {
    if (nextHigherPosition[i] !== -1)
      canReachWithOddJump[i] = canReachWithEvenJump[nextHigherPosition[i]]
    if (nextLowerPosition[i] !== -1)
      canReachWithEvenJump[i] = canReachWithOddJump[nextLowerPosition[i]]
    if (canReachWithOddJump[i]) goodPositionsCount++
  }

  return goodPositionsCount
}
