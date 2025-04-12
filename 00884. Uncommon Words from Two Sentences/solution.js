/**
 * Problem: 884. Uncommon Words from Two Sentences
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds all uncommon words from two sentences
 *
 * @param {string} s1 - The first sentence
 * @param {string} s2 - The second sentence
 *
 * @returns {string[]} - A list of uncommon words
 */
const uncommonFromSentences = (s1, s2) => {
  // Initialize frequency map and result array
  const freqSet = new Map(),
    res = []

  // Split sentences into words
  s1 = s1.split(' ')
  s2 = s2.split(' ')

  // Count word frequencies
  for (let i = 0; i < s1.length; i++)
    if (freqSet.has(s1[i])) freqSet.set(s1[i], false)
    else freqSet.set(s1[i], true)

  // Count word frequencies in second sentence
  for (let i = 0; i < s2.length; i++)
    if (freqSet.has(s2[i])) freqSet.set(s2[i], false)
    else freqSet.set(s2[i], true)

  // Filter words that appear exactly once
  freqSet.forEach((value, key) => {
    if (value) res.push(key)
  })

  return res
}
