/**
 * Problem: 1790. Check if One String Swap Can Make Strings Equal
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if one swap in exactly one string can make strings equal
 *
 * @param s1 - First string of lowercase letters
 * @param s2 - Second string of equal length
 *
 * @returns True if equal with at most one swap
 */
const areAlmostEqual = (s1: string, s2: string): boolean => {
  // Store indices where the two strings differ
  const diffs: number[] = []

  // Compare each position and collect mismatches
  for (let i = 0; i < s1.length; i++) if (s1[i] !== s2[i]) diffs.push(i)

  // Return true if strings are already equal
  if (diffs.length === 0) return true
  // Return false unless there are exactly two mismatches
  if (diffs.length !== 2) return false

  // Store first and second mismatch positions
  const first: number = diffs[0],
    second: number = diffs[1]

  // Return true if swapping fixes both mismatches
  return s1[first] === s2[second] && s1[second] === s2[first]
}
