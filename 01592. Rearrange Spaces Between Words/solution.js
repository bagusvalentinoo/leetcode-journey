/**
 * Problem: 1592. Rearrange Spaces Between Words
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Redistributes spaces evenly between words, extras at end
 *
 * @param {string} text - Input string with words and spaces
 *
 * @returns {string} String with evenly redistributed spaces
 */
const reorderSpaces = (text) => {
  // Count total spaces in text
  let totalSpaces = 0

  // Count each space character
  for (const ch of text) if (ch === ' ') totalSpaces++

  // Split on spaces and drop empty entries to get words
  const words = text.split(' ').filter((w) => w.length > 0)

  // Handle single word: all spaces go to the end
  if (words.length === 1) return words[0] + ' '.repeat(totalSpaces)

  // Compute number of gaps between adjacent words
  const gaps = words.length - 1

  // Compute even spaces per gap
  const perGap = Math.floor(totalSpaces / gaps)

  // Compute leftover spaces for the end
  const trailing = totalSpaces % gaps

  // Build gap string of even spaces
  const gap = ' '.repeat(perGap)

  // Join words with even gaps and append leftover trailing spaces
  return words.join(gap) + ' '.repeat(trailing)
}
