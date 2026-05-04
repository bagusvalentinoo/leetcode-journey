/**
 * Problem: 3545. Minimum Deletions for At Most K Distinct Characters
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Min deletions to keep at most k distinct chars
 *
 * @param s - Input string
 * @param k - Max distinct chars allowed
 *
 * @returns Minimum deletions
 */
const minDeletion = (s: string, k: number): number => {
  // Create a map to store character frequencies
  const frequencyMap = new Map<string, number>()

  // Count occurrences of each character in the string
  for (let i = 0; i < s.length; i++)
    frequencyMap.set(
      s[i],
      frequencyMap.has(s[i]) ? frequencyMap.get(s[i])! + 1 : 1
    )

  // Get frequencies, sort in descending order, drop the largest k frequencies
  // Sum the remaining frequencies (those we need to delete)
  return Array.from(frequencyMap.values())
    .sort((a, b) => b - a)
    .slice(k)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}
