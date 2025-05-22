/**
 * Problem: 3362. Zero Array Transformation III
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 140 ms (Beats 100%)
 */

/**
 * Calculates maximum removable queries while maintaining valid operations on the array
 *
 * @param {number[]} nums - Input array
 * @param {number[][]} queries - List of [l, r] operations
 *
 * @returns {number} - Maximum removable queries or -1 if impossible
 */
const maxRemoval = (nums, queries) => {
  // Sort queries by their starting position
  queries.sort((a, b) => a[0] - b[0])

  // Create a max priority queue to track operations
  const operationsQueue = new MaxPriorityQueue()
  // Track cumulative operation effects at each position
  const operationEffects = new Array(nums.length + 1).fill(0)

  // Track current active operations count
  let currentOperations = 0

  for (let position = 0, queryIndex = 0; position < nums.length; position++) {
    // Apply operations effect at current position
    currentOperations += operationEffects[position]

    // Process queries starting at current position
    while (queryIndex < queries.length && queries[queryIndex][0] === position) {
      operationsQueue.push(queries[queryIndex][1])
      queryIndex++
    }

    // If operations insufficient, use stored operations to increase count
    while (
      currentOperations < nums[position] &&
      !operationsQueue.isEmpty() &&
      operationsQueue.front() >= position
    ) {
      currentOperations += 1
      // Mark the operation effect end point
      operationEffects[operationsQueue.pop() + 1] -= 1
    }

    // Return -1 if unable to meet requirements at current position
    if (currentOperations < nums[position]) return -1
  }

  // Return number of removable queries
  return operationsQueue.size()
}
