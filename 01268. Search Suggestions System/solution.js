/**
 * Problem: 1268. Search Suggestions System
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 3 ms (Beats 100%)
 */

/**
 * Returns up to 3 suggested products for each prefix of searchWord
 *
 * @param {string[]} products - List of product names
 * @param {string} searchWord - Search query
 *
 * @returns {string[][]} - Suggested products for each prefix
 */
const suggestedProducts = (products, searchWord) => {
  // Initialize the result array to store suggestions for each prefix
  const res = []

  // Sort the products array lexicographically for efficient searching
  products.sort()

  // Set left pointer to the start of the products array
  let left = 0
  // Set right pointer to the end of the products array
  let right = products.length - 1

  // Iterate through each character in the searchWord
  for (let i = 0; i < searchWord.length; i++) {
    // Get the current character from searchWord at position i
    const currentChar = searchWord[i]

    // Move left pointer forward until product at left matches the current prefix
    while (
      left <= right &&
      (products[left].length <= i || products[left][i] !== currentChar)
    )
      left++

    // Move right pointer backward until product at right matches the current prefix
    while (
      left <= right &&
      (products[right].length <= i || products[right][i] !== currentChar)
    )
      right--

    // Initialize an array to store up to 3 suggestions for the current prefix
    const suggestions = []
    // Calculate the number of remaining products matching the current prefix
    const remaining = right - left + 1

    // Add up to 3 products from the current matching range to suggestions
    for (let j = 0; j < Math.min(3, remaining); j++)
      suggestions.push(products[left + j])

    // Add the suggestions for the current prefix to the result array
    res.push(suggestions)
  }

  // Return the array of suggestions for each prefix of searchWord
  return res
}
