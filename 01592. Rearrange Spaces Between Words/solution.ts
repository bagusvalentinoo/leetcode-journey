/**
 * Problem: 1592. Rearrange Spaces Between Words
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Redistributes spaces evenly between words, extras at end
 *
 * @param text - Input string with words and spaces
 *
 * @returns String with evenly redistributed spaces
 */
const reorderSpaces = (text: string): string => {
  // Count total spaces in text
  let totalSpaces: number = 0

  // Count each space character
  for (const ch of text) if (ch === ' ') totalSpaces++

  // Split on spaces and drop empty entries to get words
  const words: string[] = text.split(' ').filter((w) => w.length > 0)

  // Handle single word: all spaces go to the end
  if (words.length === 1) return words[0] + ' '.repeat(totalSpaces)

  // Compute number of gaps between adjacent words
  const gaps: number = words.length - 1

  // Compute even spaces per gap
  const perGap: number = Math.floor(totalSpaces / gaps)

  // Compute leftover spaces for the end
  const trailing: number = totalSpaces % gaps

  // Build gap string of even spaces
  const gap: string = ' '.repeat(perGap)

  // Join words with even gaps and append leftover trailing spaces
  return words.join(gap) + ' '.repeat(trailing)
}
