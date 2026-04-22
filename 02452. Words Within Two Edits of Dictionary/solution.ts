/**
 * Problem: 2452. Words Within Two Edits of Dictionary
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds words that can be transformed with at most 2 edits
 *
 * @param queries - Array of query strings
 * @param dictionary - Array of dictionary strings
 *
 * @returns Queries that match dictionary within 2 edits
 */
const twoEditWords = (queries: string[], dictionary: string[]): string[] => {
  // Array to store matching queries
  const matchingQueries: string[] = []

  // Get length of each query (all strings have same length)
  const stringLength: number = queries[0].length

  // Iterate through each query
  for (let queryIndex: number = 0; queryIndex < queries.length; queryIndex++) {
    // Compare with each word in dictionary
    for (
      let dictIndex: number = 0;
      dictIndex < dictionary.length;
      dictIndex++
    ) {
      // Counter for character differences (edits)
      let editCount: number = 0

      // Compare characters at each position
      for (
        let charPosition: number = 0;
        charPosition < stringLength;
        charPosition++
      ) {
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
