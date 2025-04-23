/**
 * Problem: 925. Long Pressed Name
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Check if typed string is a long-pressed version of name string
 *
 * @param {string} name - Original name string
 * @param {string} typed - Typed string
 *
 * @returns {boolean} - True if typed is a long-pressed version of name
 */
const isLongPressedName = (name, typed) => {
  // Initialize pointers for name and typed
  let i = 0
  let j = 0

  // Iterate through typed string
  while (j < typed.length)
    // If current character matches name character
    if (i < name.length && name[i] === typed[j]) i++, j++
    // If current character is a long press
    else if (j > 0 && typed[j] === typed[j - 1]) j++
    // If current character does not match
    else return false

  // Check if all characters in name have been matched
  return i === name.length
}
