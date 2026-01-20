/**
 * Problem: 3314. Construct the Minimum Bitwise Array I
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Transforms each number to minimum value with same bitwise OR pattern
 *
 * @param {number[]} nums - Input array of integers
 *
 * @returns {number[]} - Transformed array with minimum values
 */
const minBitwiseArray = (nums) => {
    // Initialize result array
    const result = []

    // Process each number: if number is 2 return -1, else apply bitwise transformation
    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i]

        // (n + 1) & (-n - 1) isolates rightmost zero bit pattern, divide by 2 to get subtract value
        if (currentNum !== 2) result[i] = currentNum - ((currentNum + 1) & (-currentNum - 1)) / 2
        else result[i] = -1
    }

    // Return transformed array
    return result
}
