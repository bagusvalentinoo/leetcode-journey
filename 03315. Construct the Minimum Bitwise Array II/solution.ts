/**
 * Problem: 3315. Construct the Minimum Bitwise Array II
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns array where each element is transformed by clearing its first set bit from LSB
 *
 * @param nums - Original array of numbers to process
 *
 * @returns Modified array with calculated results
 */
const minBitwiseArray = (nums: number[]): number[] => {
    // Iterate through each element in the array
    for (let i = 0; i < nums.length; i++) {
        // Initialize current value, result placeholder, and bit mask
        let x = nums[i], res = -1, d = 1

        // Find first set bit (LSB) and clear it by subtraction
        while ((x & d) !== 0) res = x - d, d <<= 1

        // Replace original value with calculated result
        nums[i] = res
    }

    // Return the modified array
    return nums
}
