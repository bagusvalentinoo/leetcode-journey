/**
 * Problem: 30. Substring with Concatenation of All Words
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 6 ms (Beats 99.87%)
 */

/**
 * Finds starting indices where concatenated words from the given list appear in the string
 *
 * @param {string} s - Input string
 * @param {string[]} words - List of words to concatenate and find
 *
 * @returns {number[]} - Starting indices of matching substrings
 */
const findSubstring = (s, words) => {
  // Array to store the result indices
  const result = []
  // Length of each word in the input array
  const wordLength = words[0].length

  // Early return if the total length of all words exceeds string length
  if (words.length * wordLength > s.length) return result

  // Map to track frequency of each word
  const wordFrequencyMap = new Map()

  // Populate the frequency map
  for (const word of words)
    wordFrequencyMap.set(word, (wordFrequencyMap.get(word) || 0) + 1)

  // Memoization array to avoid rechecking positions
  const memo = new Array(s.length).fill(false)

  // Iterate through possible starting positions
  for (let i = 0; i <= s.length - wordLength * words.length; i++) {
    // Skip already processed positions
    if (memo[i]) continue

    // Get the first word at current position
    let currentWord = s.substring(i, i + wordLength)
    // Get expected frequency of this word
    let expectedFrequency = wordFrequencyMap.get(currentWord)

    // Skip if the word isn't in our list
    if (expectedFrequency === undefined) continue

    // Map to track words found in current window
    const windowWordMap = new Map()
    let currentIndex = i,
      startIndex = i,
      wordCount = 0,
      currentFrequency

    do {
      // Update frequency of current word in window
      currentFrequency = (windowWordMap.get(currentWord) || 0) + 1
      memo[currentIndex] = true

      // Handle case when word appears more times than needed
      if (currentFrequency > expectedFrequency) {
        // Slide window until excess occurrence is removed
        for (let j = startIndex; j < currentIndex; j += wordLength) {
          const tempWord = s.substring(j, Math.min(j + wordLength, s.length))

          if (tempWord === currentWord) {
            startIndex = j + wordLength
            break
          } else {
            windowWordMap.set(tempWord, windowWordMap.get(tempWord) - 1)
            wordCount--
          }
        }
      } else {
        // Update window state with current word
        windowWordMap.set(currentWord, currentFrequency)
        wordCount++
      }

      // If found all required words, add start position to result
      if (wordCount === words.length) {
        result.push(startIndex)

        // Remove the first word to slide the window
        const firstWord = s.substring(startIndex, startIndex + wordLength)
        startIndex += wordLength
        windowWordMap.set(firstWord, windowWordMap.get(firstWord) - 1)
        wordCount--
      }

      // Move to next word position
      currentIndex += wordLength
      currentWord = s.substring(
        currentIndex,
        Math.min(currentIndex + wordLength, s.length)
      )
      expectedFrequency = wordFrequencyMap.get(currentWord)
    } while (expectedFrequency !== undefined)
  }

  return result
}
