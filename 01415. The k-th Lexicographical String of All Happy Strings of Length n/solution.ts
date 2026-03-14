/**
 * Problem: 1415. The k-th Lexicographical String of All Happy Strings of Length n
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns k-th lexicographically happy string of length n
 *
 * @param n - String length
 * @param k - Position (1-indexed)
 *
 * @returns k-th happy string or empty if insufficient
 */
const getHappyString = (n: number, k: number): string => {
  // Calculate number of happy strings for each starting letter at current position
  // For length n, each starting letter has 2^(n-1) possible combinations
  let groupSize: number = 2 ** (n - 1)

  // If total happy strings (3 * 2^(n-1)) is less than k, return empty string
  if (3 * groupSize < k) return ''

  // Options for next character based on current last character
  // Index 0: last char 'a' -> next can be 'b' or 'c'
  // Index 1: last char 'b' -> next can be 'a' or 'c'
  // Index 2: last char 'c' -> next can be 'a' or 'b'
  const nextOptions: string[] = ['bc', 'ac', 'ab']

  // Result string being built
  let result: string = ''

  // Determine first character based on k
  if (k <= groupSize) {
    // First group starts with 'a'
    result = 'a'
  } else if (k <= 2 * groupSize) {
    // Second group starts with 'b'
    result = 'b'
    k -= groupSize
  } else {
    // Third group starts with 'c'
    result = 'c'
    k -= 2 * groupSize
  }

  // Build remaining characters
  for (let position: number = 1; position < n; position++) {
    // Reduce group size for next level
    groupSize = Math.floor(groupSize / 2)

    // Get options for next character based on current last character
    // Convert last character to index: 'a'->0, 'b'->1, 'c'->2
    const options: string =
      nextOptions[result.charCodeAt(result.length - 1) - 97]

    // Determine which option to use based on k
    if (k <= groupSize) {
      // Use first option
      result += options[0]
    } else {
      // Use second option
      result += options[1]
      k -= groupSize
    }
  }

  return result
}
