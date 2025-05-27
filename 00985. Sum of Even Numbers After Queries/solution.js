/**
 * Problem: 985. Sum of Even Numbers After Queries
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 3 ms (Beats 100%)
 */

/**
 * Returns the sum of even integers in nums after each query is applied
 *
 * @param {number[]} nums - Initial array
 * @param {number[][]} queries - Operations to perform [value, index]
 *
 * @returns {number[]} - Sum of even integers after each query
 */
const sumEvenAfterQueries = (nums, queries) => {
  // Calculate initial sum of all even numbers in the array
  let evenSum = nums.reduce((acc, v) => ((v & 1) === 0 ? acc + v : acc), 0)
  const result = []

  queries.forEach(([val, idx]) => {
    // Store current and new values for clarity
    const currentVal = nums[idx],
      newVal = nums[idx] + val

    // Remove current value from sum if it's even
    if ((currentVal & 1) === 0) evenSum -= currentVal
    // Add new value to sum if it's even
    if ((newVal & 1) === 0) evenSum += newVal

    // Update the array with new value
    nums[idx] = newVal
    // Record current even sum after this query
    result.push(evenSum)
  })

  return result
}
