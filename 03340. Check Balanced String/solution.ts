/**
 * Problem: 3340. Check Balanced String
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if sum of digits at even indices equals sum at odd indices
 *
 * @param num - Input string of digits
 *
 * @returns True if sums are equal
 */
const isBalanced = (num: string): boolean => {
  // Array to store sums: index 0 for even positions, index 1 for odd positions
  const digitSums = [0, 0]

  // Iterate through each character in the string
  for (let position = 0; position < num.length; position++)
    // Add digit to appropriate sum based on parity of index
    digitSums[position % 2] += Number(num[position])

  // Return true if sums at even and odd indices are equal
  return digitSums[0] === digitSums[1]
}
