/**
 * Problem: 1300. Sum of Mutated Array Closest to Target
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

/**
 * Finds value to make array sum closest to target when capping elements
 *
 * @param {number[]} arr - Input array of integers
 * @param {number} target - Target sum to approach
 *
 * @return {number} Value that makes array sum closest to target
 */
const findBestValue = (arr, target) => {
  // Get array length
  const arrayLength = arr.length

  // Binary search boundaries
  let left = 0
  let right = Math.max(...arr)

  // Track closest sum and corresponding value
  let smallestDiff = Infinity
  let bestValue = 0

  // Calculate sum when all values greater than limit are capped
  const calculateSum = (limit) => {
    // Initialize total sum
    let totalSum = 0

    // Iterate through array and add capped values to total sum
    for (let i = 0; i < arrayLength; i++)
      totalSum += arr[i] > limit ? limit : arr[i]

    // Return total sum
    return totalSum
  }

  // Binary search for best value
  while (left <= right) {
    // Calculate mid value
    const mid = (left + right) >> 1
    // Calculate sum with mid value
    const currentSum = calculateSum(mid)
    // Calculate difference between current sum and target
    const currentDiff = Math.abs(currentSum - target)

    // Update best result if current is better
    if (
      currentDiff < smallestDiff ||
      (currentDiff === smallestDiff && mid < bestValue)
    ) {
      // Update best value
      bestValue = mid
      // Update smallest difference
      smallestDiff = currentDiff
    }

    // Adjust search range based on sum comparison
    if (currentSum < target) left = mid + 1
    else right = mid - 1
  }

  // Return best value
  return bestValue
}
