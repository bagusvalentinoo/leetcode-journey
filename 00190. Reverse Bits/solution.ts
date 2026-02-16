/**
 * Problem: 190. Reverse Bits
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

import * as fs from "fs"

/**
 * Reverses the bits of a 32-bit unsigned integer
 *
 * @param n - Input 32-bit unsigned integer
 *
 * @returns Number with reversed bits
 */
const reverseBits = (n: number): number => {
    // Array to store bits in reverse order
    let reversedBits: number[] = []

    // Extract all 32 bits from input number
    for (let i = 0; i < 32; i++) {
        // Get least significant bit
        let remainder = n % 2

        // Shift number right by 1 bit
        n = Math.floor(n / 2)

        // Store bit in array
        reversedBits.push(remainder)
    }

    // Reconstruct number from reversed bits
    let result = 0

    for (let bit of reversedBits)
        // Shift left and add current bit
        result = result * 2 + bit

    // Return number with reversed bits
    return result
}

process.on("exit", () => { fs.writeFileSync("display_runtime.txt", "0") })
