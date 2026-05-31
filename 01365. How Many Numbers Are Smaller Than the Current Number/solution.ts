/**
 * Problem: 1365. How Many Numbers Are Smaller Than the Current Number
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts how many numbers are smaller than each element
 *
 * @param nums - Input array of integers (0-100)
 *
 * @returns Array containing counts of smaller numbers
 */
const smallerNumbersThanCurrent = (nums: number[]): number[] => {
  // Frequency array for numbers 0-100
  const frequency: number[] = new Array(101).fill(0)

  // Result array to store counts for each position
  const result: number[] = new Array(nums.length).fill(0)

  // Count occurrences of each number
  for (let i: number = 0; i < nums.length; i++) frequency[nums[i]]++
  // Build prefix sum to get count of numbers <= current value
  for (let value: number = 1; value < 101; value++)
    frequency[value] += frequency[value - 1]

  // For each element, count numbers strictly smaller than it
  for (let i: number = 0; i < nums.length; i++) {
    // Get current value at index i
    const currentValue: number = nums[i]

    // If value is 0, no numbers are smaller
    if (currentValue === 0) result[i] = 0
    // Otherwise, get count of numbers <= (currentValue - 1)
    else result[i] = frequency[currentValue - 1]
  }

  // Return the result array with counts of smaller numbers
  return result
}
