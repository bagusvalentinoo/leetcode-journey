/**
 * Problem: 1300. Sum of Mutated Array Closest to Target
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds value to make array sum closest to target when capping elements
 *
 * @param arr - Input array of integers
 * @param target - Target sum to approach
 *
 * @returns Value that makes array sum closest to target
 */
const findBestValue = (arr: number[], target: number): number => {
  // Get array length
  const arrayLength: number = arr.length

  // Binary search boundaries
  let left: number = 0
  let right: number = Math.max(...arr)

  // Track closest sum and corresponding value
  let smallestDiff: number = Infinity
  let bestValue: number = 0

  // Calculate sum when all values greater than limit are capped
  const calculateSum = (limit: number): number => {
    // Initialize total sum
    let totalSum: number = 0

    // Iterate through array and add capped values to total sum
    for (let i: number = 0; i < arrayLength; i++)
      totalSum += arr[i] > limit ? limit : arr[i]

    // Return total sum
    return totalSum
  }

  // Binary search for best value
  while (left <= right) {
    // Calculate mid value
    const mid: number = (left + right) >> 1
    // Calculate sum with mid value
    const currentSum: number = calculateSum(mid)
    // Calculate difference between current sum and target
    const currentDiff: number = Math.abs(currentSum - target)

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
