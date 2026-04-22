/**
 * Problem: 2452. Words Within Two Edits of Dictionary
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds words that can be transformed with at most 2 edits
 *
 * @param {string[]} queries - Array of query strings
 * @param {string[]} dictionary - Array of dictionary strings
 *
 * @returns {string[]} Queries that match dictionary within 2 edits
 */
const twoEditWords = (queries, dictionary) => {
  // Array to store matching queries
  const matchingQueries = []

  // Get length of each query (all strings have same length)
  const stringLength = queries[0].length

  // Iterate through each query
  for (let queryIndex = 0; queryIndex < queries.length; queryIndex++) {
    // Compare with each word in dictionary
    for (let dictIndex = 0; dictIndex < dictionary.length; dictIndex++) {
      // Counter for character differences (edits)
      let editCount = 0

      // Compare characters at each position
      for (let charPosition = 0; charPosition < stringLength; charPosition++) {
        // Increment edit count if characters differ
        if (
          queries[queryIndex][charPosition] !==
          dictionary[dictIndex][charPosition]
        )
          editCount++
        // Early exit if edits exceed 2
        if (editCount > 2) break
      }

      // If edit count is within limit (<=2)
      if (editCount <= 2) {
        // Add query to result
        matchingQueries.push(queries[queryIndex])

        // Stop checking other dictionary words for this query
        break
      }
    }
  }

  // Return array of matching queries
  return matchingQueries
}
