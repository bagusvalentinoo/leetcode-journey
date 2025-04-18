/**
 * Problem: 917. Reverse Only Letters
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Reverses letters in a string while keeping non-letters in place
 *
 * @param {string} s - Input string
 *
 * @returns {string} - String with letters reversed
 */
const reverseOnlyLetters = (s) => {
  const arr = s.split('') // Convert string to array
  let left = 0 // Left pointer
  let right = arr.length - 1 // Right pointer

  // Helper function to check if a character is a letter
  const isLetter = (char) => /[a-zA-Z]/.test(char)

  // Two-pointer traversal
  while (left < right)
    // Move left pointer if current char is not a letter
    if (!isLetter(arr[left])) left++
    // Move right pointer if current char is not a letter
    else if (!isLetter(arr[right])) right--
    // Swap letters if both are letters
    else {
      // Swap letters
      const temp = arr[left]
      arr[left] = arr[right]
      arr[right] = temp
      left++
      right--
    }

  // Join array back into string
  return arr.join('')
}
