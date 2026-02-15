/**
 * Problem: 67. Add Binary
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Adds two binary strings and returns the result as a binary string
 *
 * @param {string} a - First binary string
 * @param {string} b - Second binary string
 *
 * @return {string} Sum of the two binary strings in binary format
 */
const addBinary = (a, b) => {
    // Convert binary strings to BigInt with '0b' prefix
    let first = BigInt('0b' + a)
    let second = BigInt('0b' + b)

    // Add the two BigInt values
    let sum = first + second

    // Convert result back to binary string
    return sum.toString(2)
}
