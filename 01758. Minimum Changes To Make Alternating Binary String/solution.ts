/**
 * Problem: 1758. Minimum Changes To Make Alternating Binary String
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates minimum operations to make binary string alternating
 *
 * @param s - Binary string containing only '0' and '1'
 *
 * @returns Minimum operations needed
 */
const minOperations = (s: string): number => {
  // Count operations for both possible patterns
  let opsForPattern0 = 0,
    opsForPattern1 = 0

  // Check each character position
  for (let i = 0; i < s.length; i++) {
    // Pattern 0: even positions are '0', odd positions are '1'
    // Pattern 1: even positions are '1', odd positions are '0'
    const expectedForPattern0 = i % 2 === 0 ? '0' : '1',
      expectedForPattern1 = i % 2 === 0 ? '1' : '0'

    // Count differences for pattern 0
    if (s[i] !== expectedForPattern0) opsForPattern0++
    // Count differences for pattern 1
    if (s[i] !== expectedForPattern1) opsForPattern1++
  }

  // Return minimum operations between the two patterns
  return Math.min(opsForPattern0, opsForPattern1)
}
