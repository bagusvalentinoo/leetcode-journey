/**
 * Problem: 693. Binary Number with Alternating Bits
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if a number has alternating bits (e.g., 101010 or 010101)
 *
 * @param {number} n - Input integer
 *
 * @return {boolean} True if bits alternate, false otherwise
 */
const hasAlternatingBits = n => {
    // XOR n with n shifted right by 1 bit
    // This creates a number where bits are 1 where adjacent bits differ
    const xorResult = n ^ (n >> 1)

    // If bits alternate, xorResult will be all 1's (e.g., 111...)
    // Check if xorResult + 1 is power of two (all 1's & all 1's+1 = 0)
    return (xorResult & (xorResult + 1)) === 0
}
