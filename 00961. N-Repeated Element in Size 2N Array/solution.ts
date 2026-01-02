/**
 * Problem: 961. N-Repeated Element in Size 2N Array
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds the element repeated n times in a 2n-sized array using random sampling
 *
 * @param nums - Input array where exactly one element repeats n times
 *
 * @returns - The element that repeats n times
 */
const repeatedNTimes = (nums: number[]): number => {
  // Continue sampling random indices until a matching pair is found.
  while (true) {
    // Generate two random indices within the array bounds.
    const i = Math.floor(Math.random() * nums.length)
    const j = Math.floor(Math.random() * nums.length)

    // Check if the indices are different and the values at those indices are equal.
    if (i !== j && nums[i] === nums[j]) {
      // Return the value since it's the repeated element.
      return nums[i]
    }
    
    // If condition is not met, continue to next iteration.
  }
}
