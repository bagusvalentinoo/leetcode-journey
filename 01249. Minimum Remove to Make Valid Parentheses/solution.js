/**
 * Problem: 1249. Minimum Remove to Make Valid Parentheses
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 7 ms (Beats 100%)
 */

/**
 * Removes invalid parentheses from a string
 *
 * @param {string} s - Input string
 *
 * @returns {string} - Valid string
 */
const minRemoveToMakeValid = (s) => {
  // Convert the input string into an array for easier manipulation
  const charArray = s.split('')

  // Initialize a counter to track the number of unmatched opening parentheses
  let unmatchedOpen = 0

  // Iterate from left to right to remove invalid closing parentheses
  for (let i = 0; i < charArray.length; i++) {
    // If the current character is an opening parenthesis, increment the counter
    if (charArray[i] === '(') unmatchedOpen++
    // If the current character is a closing parenthesis and there is an unmatched opening, decrement the counter
    else if (charArray[i] === ')' && unmatchedOpen > 0) unmatchedOpen--
    // If the current character is a closing parenthesis and there is no unmatched opening, remove it
    else if (charArray[i] === ')') charArray[i] = ''
  }

  // Reset the counter to track unmatched closing parentheses
  unmatchedOpen = 0

  // Iterate from right to left to remove invalid opening parentheses
  for (let i = charArray.length - 1; i >= 0; i--) {
    // If the current character is a closing parenthesis, increment the counter
    if (charArray[i] === ')') unmatchedOpen++
    // If the current character is an opening parenthesis and there is an unmatched closing, decrement the counter
    else if (charArray[i] === '(' && unmatchedOpen > 0) unmatchedOpen--
    // If the current character is an opening parenthesis and there is no unmatched closing, remove it
    else if (charArray[i] === '(') charArray[i] = ''
  }

  // Join the array back into a string and return the result
  return charArray.join('')
}
