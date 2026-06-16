/**
 * Problem: 3612. Process String with Special Operations I
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Processes a string with special commands: *, #, %
 *
 * @param {string} s - Input string with commands-+
 *
 * @returns {string} Processed result string
 */
const processStr = (s) => {
  // Initialize empty result string
  let processedResult = ''

  // Process each character in the input string
  for (const currentChar of s) {
    // If character is '*', remove last character from result
    if (currentChar === '*') processedResult = processedResult.slice(0, -1)
    // If character is '#', duplicate the result (append to itself)
    else if (currentChar === '#') processedResult += processedResult
    // If character is '%', reverse the result string
    else if (currentChar === '%')
      processedResult = processedResult.split('').reverse().join('')
    // Otherwise, append the character to result
    else processedResult += currentChar
  }

  // Return the fully processed result string
  return processedResult
}
