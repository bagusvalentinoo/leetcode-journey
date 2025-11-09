/**
 * Problem: 1297. Maximum Number of Occurrences of a Substring
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 25 ms (Beats 100%)
 */

/**
 * Finds the max frequency of substrings meeting the criteria
 *
 * @param {string} s - Input string
 * @param {number} maxLetters - Max unique letters in substring
 * @param {number} minSize - Min substring length
 * @param {number} maxSize - Max substring length
 *
 * @returns {number} - Max frequency of valid substrings
 */
const maxFreq = (s, maxLetters, minSize, maxSize) => {
  // Initialize an array to count occurrences of each letter (26 letters in alphabet)
  const cnt = new Array(26).fill(0)

  // Initialize variables to track the number of unique letters and the max frequency
  let uniqueLetterCount = 0,
    maxFrequency = 0

  // Create a map to store the frequency of substrings
  const substringFrequency = new Map()

  // Get the ASCII code of 'a' for character calculations
  const aCharCode = 'a'.charCodeAt(0)

  // Function to add a character to the count and update unique letter count
  const addCharacter = (character) => {
    const index = character.charCodeAt(0) - aCharCode

    // Increment the count for the character and check if it's a new unique letter
    if (cnt[index]++ === 0) uniqueLetterCount++
  }

  // Function to remove a character from the count and update unique letter count
  const removeCharacter = (character) => {
    const index = character.charCodeAt(0) - aCharCode

    // Decrement the count for the character and check if it is no longer unique
    if (--cnt[index] === 0) uniqueLetterCount--
  }

  // Iterate through the input string
  for (let i = 0; i < s.length; i++) {
    // Add the current character to the count
    addCharacter(s[i])

    // Remove the character that is out of the current window (if applicable)
    if (i >= minSize) removeCharacter(s[i - minSize])

    // Check if the current window meets the criteria for a valid substring
    if (i + 1 >= minSize && uniqueLetterCount <= maxLetters) {
      // Extract the current substring
      const substring = s.slice(i - minSize + 1, i + 1)

      // Update the frequency of the substring in the map
      const frequency = (substringFrequency.get(substring) || 0) + 1

      // Set the updated frequency back in the map
      substringFrequency.set(substring, frequency)

      // Update the maximum frequency if the current substring frequency is higher
      if (frequency > maxFrequency) maxFrequency = frequency
    }
  }

  // Return the maximum frequency of valid substrings
  return maxFrequency
}
