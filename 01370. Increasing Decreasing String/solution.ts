/**
 * Problem: 1370. Increasing Decreasing String
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Sorts string in increasing-decreasing alternating pattern
 *
 * @param s - Input string
 *
 * @returns Sorted string in alternating order
 */
const sortString = (s: string): string => {
  // Frequency array for 26 lowercase letters
  const charFrequency = Array(26).fill(0)

  // String to build the result
  let result = ''

  // Count frequency of each character in the input string
  for (let i = 0; i < s.length; i++) charFrequency[s.charCodeAt(i) - 97]++

  // Continue until all characters have been used
  while (result.length < s.length) {
    // Forward pass: pick smallest available character (increasing order)
    for (let i = 0; i < 26; i++) {
      if (charFrequency[i]) {
        // Append character to result string
        result += String.fromCharCode(i + 97)
        // Decrease its frequency by 1
        charFrequency[i]--
      }
    }

    // Backward pass: pick largest available character (decreasing order)
    for (let i = 25; i >= 0; i--) {
      if (charFrequency[i]) {
        // Append character to result string
        result += String.fromCharCode(i + 97)
        // Decrease its frequency by 1
        charFrequency[i]--
      }
    }
  }

  // Return the final sorted string in alternating order
  return result
}
