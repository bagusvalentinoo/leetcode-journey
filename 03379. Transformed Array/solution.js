/**
 * Problem: 3379. Transformed Array
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Constructs transformed array where each element is nums[(i + nums[i]) % n]
 *
 * @param {number[]} nums - Input array of integers
 *
 * @return {number[]} Transformed array according to the rule
 */
const constructTransformedArray = nums =>
    // Map each element to value at index (i + nums[i]) % array length
    nums.map((value, index) => nums.at((index + value) % nums.length))
