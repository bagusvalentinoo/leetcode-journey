/**
 * Problem: 1. Two Sum
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds two indices that sum to target
 *
 * @param nums - Input array
 * @param target - Target sum
 *
 * @returns Indices of the two numbers
 */
const twoSum = (nums: number[], target: number): number[] => {
  // Temporary object to store the values and their indices
  const temp: Record<number, number> = {}

  // Iterate through the array
  for (let i: number = 0; i < nums.length; i += 1) {
    // Current value
    const value: number = nums[i]

    // If the current value is already in the object, return the indices
    if (temp[value] !== undefined) return [temp[value], i]

    // Calculate the pair value
    const pair: number = value > 0 ? target - value : target + Math.abs(value)
    // Store the pair value and its index in the object
    temp[pair] = i
  }

  // Return empty array if no solution found (should not happen per problem constraints)
  return []
}
