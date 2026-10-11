/**
 * Problem: 2022. Convert 1D Array Into 2D Array
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Builds an m x n matrix from a flat array, or empty array when impossible
 *
 * @param original - Flat input array of integers
 * @param m - Number of rows to construct
 * @param n - Number of columns to construct
 *
 * @returns Constructed 2D array or empty array
 */
const construct2DArray = (
  original: number[],
  m: number,
  n: number
): number[][] => {
  // Return empty array when total cells do not match input length
  if (m * n !== original.length) return []

  // Store constructed rows
  const answer: number[][] = []

  // Iterate start indices in steps of n up to m * n
  for (let i = 0; i < m * n; i += n) answer.push(original.slice(i, i + n))

  // Return the constructed m x n 2D array
  return answer
}
