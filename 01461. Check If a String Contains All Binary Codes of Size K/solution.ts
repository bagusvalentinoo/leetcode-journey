/**
 * Problem: 1461. Check If a String Contains All Binary Codes of Size K
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 10 ms (Beats 100%)
 */

/**
 * Checks if a binary string contains all possible binary codes of length k
 *
 * @param s - Binary string containing only '0' and '1'
 * @param k - Length of binary codes to check
 *
 * @returns True if all k-length binary codes exist, false otherwise
 */
const hasAllCodes = (s: string, k: number): boolean => {
  // Total number of possible combinations for k bits
  let combinationsNeeded: number = 1 << k

  // Boolean array to track which combinations we've seen
  const seenCombinations: boolean[] = new Array(combinationsNeeded)

  // Rolling hash value for current k-length window
  let currentHash: number = 0

  // Bitmask to keep only the last k bits (k ones)
  const bitmask: number = combinationsNeeded - 1

  // Slide through the string
  for (let i: number = 0; i < s.length; i++) {
    // Update rolling hash: shift left, mask to k bits, add current bit
    currentHash =
      ((currentHash << 1) & bitmask) | (s.charCodeAt(i) - '0'.charCodeAt(0))

    // Once we have a full k-length window
    if (i >= k - 1 && !seenCombinations[currentHash]) {
      // Mark this combination as seen
      seenCombinations[currentHash] = true
      combinationsNeeded--

      // Early return if we've found all combinations
      if (combinationsNeeded === 0) return true
    }
  }

  // If we haven't found all combinations by the end, return false
  return false
}
