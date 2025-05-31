/**
 * Problem: 996. Number of Squareful Arrays
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts squareful permutations of the input array
 *
 * @param {number[]} nums - Input array
 *
 * @returns {number} - Number of squareful permutations
 */
const numSquarefulPerms = (nums) => {
  // Sort array for deduplication of permutations
  nums.sort((a, b) => a - b)

  const { length } = nums
  let permCount = 0

  // Check if number is a perfect square
  const isPerfectSquare = (sum) => {
    const sqrtValue = Math.floor(Math.sqrt(sum))
    return sqrtValue * sqrtValue === sum
  }

  // Recursive backtracking function to find all valid permutations
  const backtrack = (currentPerm, visited) => {
    // If we've built a complete permutation, increment counter
    if (currentPerm.length === length) {
      permCount++
      return
    }

    // Try adding each number to current permutation
    for (let i = 0; i < length; i++) {
      // Skip if number already used or duplicate value we've skipped
      if (visited[i] || (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1]))
        continue

      // Only add if it forms a perfect square with previous number
      if (
        currentPerm.length === 0 ||
        isPerfectSquare(currentPerm[currentPerm.length - 1] + nums[i])
      ) {
        currentPerm.push(nums[i])
        visited[i] = true

        backtrack(currentPerm, visited)

        // Backtrack - remove the number and mark as unvisited
        currentPerm.pop()
        visited[i] = false
      }
    }
  }

  // Start backtracking with empty permutation and all numbers unvisited
  backtrack([], new Array(length).fill(false))

  return permCount
}
