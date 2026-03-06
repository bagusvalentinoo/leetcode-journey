/**
 * Problem: 1784. Check if Binary String Has at Most One Segment of Ones
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if all 1's in binary string are grouped in a single contiguous segment
 *
 * @param {string} s - Binary string containing only '0' and '1'
 *
 * @returns {boolean} True if all 1's are contiguous, false otherwise
 */
const checkOnesSegment = (s) => !s.includes('01')
