/**
 * Problem: 1018. Binary Prefix Divisible By 5
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Determines if binary prefix numbers are divisible by 5
 *
 * @param {number[]} nums - Binary bits array
 * @param {number} [acc=0] - Accumulator for the current prefix value
 *
 * @returns {boolean[]} - True if prefix divisible by 5
 */
const prefixesDivBy5 = (nums, acc = 0) =>
  nums.map((b) => !(acc = ((acc << 1) | b) % 5))
