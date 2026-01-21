/**
 * Problem: 3315. Construct the Minimum Bitwise Array II
 *
 * Difficulty: Medium
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
 * @returns {number[]} Transformed array with minimum values
 */
const minBitwiseArray = nums => {
    // Initialize empty array for results
    const result = []

    // Loop through all numbers in input
    for (let i = 0; i < nums.length; i++) {
        // Get current number from input
        const currentNum = nums[i]

        // Apply bitwise transformation formula
        if (currentNum !== 2) result[i] = currentNum - ((currentNum + 1) & (-currentNum - 1)) / 2
        // For number 2, set result to -1
        else result[i] = -1
    }

    // Return final transformed array
    return result
}
