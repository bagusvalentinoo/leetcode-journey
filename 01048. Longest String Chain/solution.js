/**
 * Problem: 1048. Longest String Chain
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 10 ms (Beats 100%)
 */

/**
 * Finds the longest chain where each word is formed by adding one letter
 *
 * @param {string[]} words - List of words
 *
 * @returns {number} Longest chain length
 */
const longestStrChain = (words) => {
  // Map to store arrays of words grouped by their lengths
  const lengthMap = {}
  // Variable to track the minimum word length in the input
  let minLevel = Infinity

  // Populate lengthMap and find the minimum word length
  for (const word of words) {
    const { length } = word

    // Update minLevel if current word is shorter
    minLevel = Math.min(minLevel, length)

    // Add word to the corresponding length group in lengthMap
    if (!lengthMap[length]) lengthMap[length] = [word]
    // If group exists, push the word into the array
    else lengthMap[length].push(word)
  }

  // Variable to keep track of the longest chain found
  let k = 1

  // Helper function to check if 'longer' can be formed by adding one letter to 'shorter'
  const compare = (shorter, longer) => {
    let count = 0

    // Iterate through each character of the shorter word
    for (let i = 0; i < shorter.length; i++) {
      // If more than one mismatch found, return false
      if (count > 1) return false
      // If characters match, continue to next character
      if (longer[i + count] === shorter[i]) continue

      // If mismatch, increment count and retry current character
      count++
      i--
    }

    // Return true if only one or zero mismatches found
    return true
  }

  // Recursive function to search for the longest chain ending with 'word'
  const search = (level, word, chainLength) => {
    // Prune search if current chain cannot be longer than the best found
    if (k >= level + chainLength) return

    // Update the longest chain found so far
    k = Math.max(k, chainLength)

    // Get candidate words of the previous length
    const candidates = lengthMap[level]

    // If no candidates, stop searching
    if (!candidates) return

    // For each candidate, check if it can form a chain and continue searching
    for (const cand of candidates)
      if (compare(cand, word)) search(level - 1, cand, chainLength + 1)
  }

  // Start searching for each word in the input
  for (const word of words) search(word.length - 1, word, 1)

  // Return the length of the longest chain found
  return k
}
