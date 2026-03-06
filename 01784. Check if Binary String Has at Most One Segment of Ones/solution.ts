/**
 * Problem: 1784. Check if Binary String Has at Most One Segment of Ones
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if all 1's in binary string are grouped in a single contiguous segment
 *
 * @param s - Binary string containing only '0' and '1'
 *
 * @returns True if all 1's are contiguous, false otherwise
 */
const checkOnesSegment = (s: string): boolean => !s.includes('01')
