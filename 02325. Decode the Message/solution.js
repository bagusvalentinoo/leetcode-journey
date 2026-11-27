/**
 * Problem: 2325. Decode the Message
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Decode the message using the substitution table from the key
 *
 * @param {string} key - Cipher key containing every lowercase letter
 * @param {string} message - Encoded message to decode
 *
 * @returns {string} Decoded message
 */
const decodeMessage = (key, message) => {
  // Map each first-seen key letter to its alphabet counterpart
  const substitutions = new Map()
  let letterCode = 'a'.charCodeAt(0)

  // Build the substitution table from the key
  for (const character of key) {
    if (character !== ' ' && !substitutions.has(character))
      substitutions.set(character, String.fromCharCode(letterCode++))
  }

  // Decode letters while preserving spaces
  const decodedMessage = [...message]
    .map((character) => substitutions.get(character) ?? character)
    .join('')

  // Return the decoded message
  return decodedMessage
}
