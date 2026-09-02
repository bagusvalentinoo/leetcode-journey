/**
 * Problem: 1566. Detect Pattern of Length M Repeated K or More Times
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if a pattern of length m repeats k times consecutively
 *
 * @param arr - Input array of positive integers
 * @param m - Length of the pattern
 * @param k - Required number of consecutive repetitions
 *
 * @returns True if pattern exists, false otherwise
 */
const containsPattern = (arr: number[], m: number, k: number): boolean => {
  // Early return if array is too short to contain k repetitions
  if (arr.length < m * k) return false

  // Target consecutive matches needed: (k - 1) * m
  const target: number = (k - 1) * m

  // Counter for consecutive positions where arr[i] == arr[i - m]
  let count: number = 0

  // Scan array starting from index m
  for (let i: number = m; i < arr.length; i++) {
    // Check if current element matches the element m positions before
    if (arr[i] === arr[i - m]) {
      // Increment consecutive match counter
      count++

      // Pattern found when enough consecutive matches accumulated
      if (count === target) return true
    } else
      // Reset counter when the consecutive pattern breaks
      count = 0
  }

  // No valid pattern found after full scan
  return false
}
