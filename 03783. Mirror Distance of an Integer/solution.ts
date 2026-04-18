/**
 * Problem: 3783. Mirror Distance of an Integer
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates distance between a number and its mirror
 *
 * @param n - Input integer
 *
 * @returns Absolute difference between n and its mirror
 */
const mirrorDistance = (n: number): number => {
  // Reverse the string
  const reversed: number = parseInt(
    String(n)
      // Split the string into an array of characters
      .split('')
      // Reverse the array
      .reverse()
      // Join the array back into a string
      .join('')
  )

  // Return the absolute difference between the original number and its mirror
  return Math.abs(n - reversed)
}
