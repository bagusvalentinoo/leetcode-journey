/**
 * Problem: 1178. Number of Valid Words for Each Puzzle
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 37 ms (Beats 100%)
 */

/**
 * Returns counts of words valid for each puzzle
 *
 * @param {string[]} words - Words to check
 * @param {string[]} puzzles - Puzzles to match
 *
 * @returns {number[]} - Counts of valid words per puzzle
 */
const findNumOfValidWords = (words, puzzles) => {
  // Map to store bitmask of each word and its frequency
  const wordBitmaskCountMap = new Map()
  // Get char code for 'a' to calculate bitmask offsets
  const baseCharCode = 'a'.charCodeAt(0)

  // Iterate over each word to create bitmask and count frequency
  words.forEach((word) => {
    let wordBitmask = 0

    // Set bits for each unique character in the word
    for (let charIndex = 0; charIndex < word.length; charIndex++)
      wordBitmask |= 1 << (word.charCodeAt(charIndex) - baseCharCode)

    // Update frequency map for the word bitmask
    if (wordBitmaskCountMap.has(wordBitmask))
      wordBitmaskCountMap.set(
        wordBitmask,
        wordBitmaskCountMap.get(wordBitmask) + 1
      )
    else wordBitmaskCountMap.set(wordBitmask, 1)
  })

  // Array to store result counts for each puzzle
  const validWordCounts = []

  // Iterate over each puzzle to count valid words
  for (let puzzleIndex = 0; puzzleIndex < puzzles.length; puzzleIndex++) {
    // Initialize count for current puzzle
    validWordCounts.push(0)

    let puzzleBitmask = 0

    // Create bitmask for current puzzle
    for (
      let charIndex = 0;
      charIndex < puzzles[puzzleIndex].length;
      charIndex++
    )
      puzzleBitmask |=
        1 << (puzzles[puzzleIndex].charCodeAt(charIndex) - baseCharCode)

    // Bitmask for the first letter of the puzzle (must be present in valid word)
    const firstLetterBitmask =
      1 << (puzzles[puzzleIndex].charCodeAt(0) - baseCharCode)

    // Start with the full puzzle bitmask
    let submask = puzzleBitmask

    // Enumerate all submasks of the puzzle bitmask
    while (submask > 0) {
      // Check if submask contains the first letter and exists in word map
      if (
        (submask & firstLetterBitmask) === firstLetterBitmask &&
        wordBitmaskCountMap.has(submask)
      )
        validWordCounts[puzzleIndex] += wordBitmaskCountMap.get(submask)

      // Move to next submask
      submask = (submask - 1) & puzzleBitmask
    }
  }

  // Return array of counts for each puzzle
  return validWordCounts
}
