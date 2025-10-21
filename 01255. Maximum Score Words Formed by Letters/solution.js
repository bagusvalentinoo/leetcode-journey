/**
 * Problem: 1255. Maximum Score Words Formed by Letters
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

/**
 * Calculates the maximum score from words using given letters and scores
 *
 * @param {string[]} words - List of words
 * @param {character[]} letters - Available letters
 * @param {number[]} score - Score for each letter
 *
 * @returns {number} - Maximum achievable score
 */
const maxScoreWords = (words, letters, score) => {
  // Create a map to count occurrences of each available letter
  const letterCountMap = {}

  // Populate the letterCountMap with the available letters
  for (const letter of letters) {
    letterCountMap[letter] = letterCountMap[letter] || 0
    letterCountMap[letter]++
  }

  // Store words that can be formed with the available letters
  const validWords = []

  // Check each word to see if it can be formed with the available letters
  for (const word of words) {
    // Make a copy of the letter count map for checking this word
    const availableLetters = { ...letterCountMap }
    let canFormWord = true

    // Check if each character in the word is available
    for (const char of word) {
      if (availableLetters[char] > 0) {
        availableLetters[char]--
      } else {
        canFormWord = false
        break
      }
    }

    // If the word can be formed, add it to the validWords list
    if (canFormWord) validWords.push(word)
  }

  // Initialize the maximum score found so far
  let maximumScore = 0

  // Recursive function to explore all combinations of valid words
  const findMaxScore = (index, currentScore, availableLetters) => {
    // If all words have been considered, update maximumScore if needed
    if (index > validWords.length - 1) {
      if (currentScore > maximumScore) maximumScore = currentScore
      return
    }

    // Explore the case where the current word is not included
    findMaxScore(index + 1, currentScore, availableLetters)

    // Initialize score for including the current word
    let includedScore = 0

    // Make a copy of available letters for this branch
    const lettersCopy = { ...availableLetters }

    // Try to include the current word and calculate its score
    for (const char of validWords[index]) {
      if (lettersCopy[char]--) includedScore += score[getAlphabetIndex(char)]
      else return
    }

    // Explore the case where the current word is included
    findMaxScore(index + 1, currentScore + includedScore, lettersCopy)
  }

  // Start the recursive search with initial values
  findMaxScore(0, 0, { ...letterCountMap })

  // Return the maximum score found
  return maximumScore
}

// Returns the index of a character in the alphabet (0 for 'a', 1 for 'b', etc.)
const getAlphabetIndex = (char) => char.charCodeAt() - 97
