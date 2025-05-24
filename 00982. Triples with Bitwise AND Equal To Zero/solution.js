/**
 * Problem: 982. Triples with Bitwise AND Equal To Zero
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 172 ms (Beats 100%)
 */

/**
 * Counts triplets where (a & b) & c = 0
 *
 * @param {number[]} nums - Input array
 *
 * @returns {number} - Number of valid triplets
 */
const countTriplets = (nums) => {
  // Track total valid triplets
  let count = 0
  // Store frequency of bitwise AND results
  const bitwiseAndFrequency = new Map()

  // Temporary variables for bitwise operations
  let firstNum, secondNum, andResult

  // Calculate bitwise AND for all pairs (a,b)
  for (let i = 0; i < nums.length; i++) {
    firstNum = nums[i]

    for (let j = 0; j < nums.length; j++) {
      secondNum = nums[j]
      andResult = firstNum & secondNum

      // Initialize counter for new AND results
      if (!bitwiseAndFrequency.has(andResult))
        bitwiseAndFrequency.set(andResult, 0)

      bitwiseAndFrequency.set(andResult, bitwiseAndFrequency.get(andResult) + 1)
    }
  }

  // Count triplets where (a & b) & c = 0
  for (const [andValue, frequency] of bitwiseAndFrequency.entries())
    for (let i = 0; i < nums.length; i++)
      if (Number(andValue & nums[i]) === 0) count += frequency

  return count
}
