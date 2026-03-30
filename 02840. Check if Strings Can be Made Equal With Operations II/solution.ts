/**
 * Problem: 2840. Check if Strings Can be Made Equal With Operations II
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

/**
 * Checks if strings can be made equal by swapping within parity groups
 *
 * @param s1 - First string
 * @param s2 - Second string
 *
 * @returns True if strings can be made equal
 */
const checkStrings = (s1: string, s2: string): boolean => {
  // Track XOR and sum differences for even and odd indices
  let evenXor: number = 0,
    oddXor: number = 0,
    evenSumDiff: number = 0,
    oddSumDiff: number = 0

  // Iterate through each character in the strings
  for (let i: number = 0; i < s1.length; i++) {
    // Get character codes for both strings at current index
    const charCode1: number = s1.charCodeAt(i),
      charCode2: number = s2.charCodeAt(i)

    // Calculate XOR difference and squared difference
    const xorDiff: number = charCode1 ^ charCode2,
      squareDiff: number = charCode1 * charCode1 - charCode2 * charCode2

    // Check if current index is odd
    if (i & 1) {
      // Update XOR for odd indices
      oddXor ^= xorDiff
      // Update sum of squares for odd indices
      oddSumDiff += squareDiff
    }
    // Current index is even
    else {
      // Update XOR for even indices
      evenXor ^= xorDiff
      // Update sum of squares for even indices
      evenSumDiff += squareDiff
    }
  }

  // Return true only if all differences are zero
  return !(evenXor | oddXor | evenSumDiff | oddSumDiff)
}
