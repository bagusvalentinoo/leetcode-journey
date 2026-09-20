/**
 * Problem: 1748. Sum of Unique Elements
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Sum elements that appear exactly once
 *
 * @param nums - Input array of integers
 *
 * @returns Sum of unique elements
 */
const sumOfUnique = (nums: number[]): number => {
  // Initialize frequency array for values 0 to 100
  const frequency: number[] = new Array(101).fill(0)

  // Count occurrences of each number
  for (const num of nums) frequency[num]++

  // Store sum of unique elements
  let answer: number = 0

  // Add values that appear exactly once
  for (let num = 1; num <= 100; num++) {
    // Check if current value is unique
    if (frequency[num] === 1) answer += num
  }

  // Return the sum of all unique elements
  return answer
}
