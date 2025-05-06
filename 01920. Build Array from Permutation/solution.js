/**
 * Problem: 1920. Build Array from Permutation
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Maps each index i to nums[nums[i]]
 *
 * @param {number[]} nums - Input array
 *
 * @returns {number[]} - Resulting array
 */
const buildArray = (nums) => nums.map((num) => nums[num])
