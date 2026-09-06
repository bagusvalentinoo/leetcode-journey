/**
 * Problem: 1608. Special Array With X Elements Greater Than or Equal X
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds special x with exactly x numbers greater than or equal to x
 *
 * @param nums - Input array of non-negative integers
 *
 * @returns Special value x, or -1 if none exists
 */
const specialArray = (nums: number[]): number => {
  // Cache array length as upper bound for candidate x
  const arrayLength: number = nums.length

  // Try every candidate x from 1 to n
  for (let candidate: number = 1; candidate <= arrayLength; candidate++) {
    // Count numbers greater than or equal to candidate
    let count: number = 0

    // Scan array and count qualifying elements
    for (const currentNumber of nums) {
      // Increment count when element meets threshold
      if (currentNumber >= candidate) count++
    }

    // Return candidate when count matches exactly
    if (count === candidate) return candidate
  }

  // No candidate matched so array is not special
  return -1
}
