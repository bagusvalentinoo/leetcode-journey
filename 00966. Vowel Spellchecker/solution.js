/**
 * Problem: 966. Vowel Spellchecker
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 17 ms (Beats 100%)
 */

// Regex to match any vowel character globally
const regex = /[aeiou]/g

/**
 * Spellchecker that fixes capitalization and vowel errors
 *
 * @param {string[]} wordlist - Dictionary of correct words
 * @param {string[]} queries - Words to check
 *
 * @returns {string[]} - Corrected words
 */
const spellchecker = (wordlist, queries) => {
  // Store original words for exact matches
  const originalWords = new Set(wordlist)
  // Map lowercase words to their original form
  const lowercaseMap = new Map()
  // Map vowel-masked words to their original form
  const maskedMap = new Map()

  // Process dictionary words into our lookup maps
  for (let i = 0; i < wordlist.length; i++) {
    const word = wordlist[i]
    const lowerWord = word.toLowerCase()
    // Replace vowels with * to handle vowel errors
    const maskedWord = lowerWord.replace(regex, '*')

    // Only keep first occurrence for each pattern
    if (!lowercaseMap.has(lowerWord)) lowercaseMap.set(lowerWord, word)
    if (!maskedMap.has(maskedWord)) maskedMap.set(maskedWord, word)
  }

  // Process each query word
  for (let i = 0; i < queries.length; i++) {
    const query = queries[i]

    // Case 1: Exact match - keep original
    if (originalWords.has(query)) continue

    const lowerQuery = query.toLowerCase()
    const maskedQuery = lowerQuery.replace(regex, '*')

    // Case 2: Capitalization error - use case-correct version
    if (lowercaseMap.has(lowerQuery)) queries[i] = lowercaseMap.get(lowerQuery)
    // Case 3: Vowel error - use vowel-correct version
    else if (maskedMap.has(maskedQuery)) queries[i] = maskedMap.get(maskedQuery)
    // Case 4: No match found - return empty string
    else queries[i] = ''
  }

  return queries
}
