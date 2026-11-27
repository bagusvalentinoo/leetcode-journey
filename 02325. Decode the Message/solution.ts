/**
 * Problem: 2325. Decode the Message
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Decode the message using the substitution table from the key
 *
 * @param key - Cipher key containing every lowercase letter
 * @param message - Encoded message to decode
 *
 * @returns Decoded message
 */
const decodeMessage = (key: string, message: string): string => {
  // Store each encoded character and its decoded alphabet character
  const substitutions: Map<string, string> = new Map()

  // Track the next lowercase alphabet character code to assign
  let decodedLetterCode: number = 97
  // Build the decoded message one character at a time
  let decodedMessage: string = ''

  // Process each character in the key to build the substitution table
  for (let i: number = 0; i < key.length; i++) {
    // Ignore spaces because they are not included in the substitution table
    if (key[i] === ' ') continue
    // Map only the first occurrence of each encoded character
    if (!substitutions.has(key[i]))
      substitutions.set(key[i], String.fromCharCode(decodedLetterCode++))
  }

  // Decode each character in the message
  for (let i: number = 0; i < message.length; i++) {
    // Keep spaces unchanged in the decoded message
    if (message[i] === ' ') decodedMessage += ' '
    // Replace each encoded character with its mapped alphabet character
    else decodedMessage += substitutions.get(message[i])!
  }

  // Return the fully decoded message
  return decodedMessage
}
