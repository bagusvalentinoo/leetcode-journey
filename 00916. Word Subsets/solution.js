/**
 * Problem: 916. Word Subsets
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 20 ms (Beats 100%)
 */

/**
 * Finds all universal strings in words1 with respect to words2
 *
 * @param {string[]} words1 - The first array of strings
 * @param {string[]} words2 - The second array of strings
 *
 * @returns {string[]} - An array of universal strings
 */
const wordSubsets = (words1, words2) => {
  // Use Int8Array for better memory efficiency
  const requiredFrequencies = new Int8Array(26)
  const tempFrequencies = new Int8Array(26)
  const result = []

  // Track total character count for early termination optimization
  let totalRequiredChars = 0

  // Calculate the maximum frequency required for each character across all words2
  for (const word of words2) {
    // Reset temporary frequency counter for current word
    tempFrequencies.fill(0)

    // Count character frequencies in current word
    for (let i = 0; i < word.length; i++)
      tempFrequencies[word.charCodeAt(i) - 97]++

    // Update the required frequencies if needed
    for (let i = 0; i < 26; i++) {
      // Calculate the difference between current word and required frequencies
      const diff = tempFrequencies[i] - requiredFrequencies[i]

      // Update required frequencies if needed
      if (diff > 0) {
        totalRequiredChars += diff
        requiredFrequencies[i] += diff
      }

      // Early termination: if we need more than 10 characters, no word will be universal
      // This is a heuristic optimization based on problem constraints
      if (totalRequiredChars > 10) return []
    }
  }

  // Check each word in words1 to see if it's universal
  for (let i = 0; i < words1.length; i++) {
    const word = words1[i]

    // Skip words that are too short to contain all required characters
    if (word.length < totalRequiredChars) continue

    // Reset temporary frequency counter
    tempFrequencies.fill(0)

    // Count character frequencies in current word
    for (let j = 0; j < word.length; j++)
      tempFrequencies[word.charCodeAt(j) - 97]++

    let isUniversal = true

    // Check if this word has all required character frequencies
    for (let j = 0; j < 26; j++) {
      if (tempFrequencies[j] < requiredFrequencies[j]) {
        isUniversal = false
        break
      }
    }

    // If this word satisfies the frequency requirement, add it to the result
    if (isUniversal) result.push(word)
  }

  return result
}
