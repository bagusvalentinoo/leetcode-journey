/**
 * Problem: 1032. Stream of Characters
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 72 ms (Beats 100%)
 */

/**
 * @param {string[]} words
 */
const StreamChecker = function (words) {
  // Initialize the root node of the trie data structure
  this.root = {}

  // Process each word in the input array
  for (let word of words) {
    // Reverse the word to enable suffix matching in the trie
    word = word.split('').reverse().join('')

    // Start traversal from the root node
    let currentNode = this.root

    // Build the trie by inserting each character of the reversed word
    for (const character of word) {
      // Create a new node if the character doesn't exist
      if (!currentNode[character]) currentNode[character] = {}

      // Move to the next node in the trie
      currentNode = currentNode[character]
    }

    // Mark the end of a word by setting the word property
    currentNode.word = word
  }

  // Initialize array to store the stream of incoming letters
  this.letters = []
}

/**
 * @param {character} letter
 * @returns {boolean}
 */
StreamChecker.prototype.query = function (letter) {
  // Add the new letter to the end of the letters array to maintain stream order
  this.letters.push(letter)

  // Start searching from the root node of the trie
  let lookingIn = this.root

  // Traverse the letters array backwards to check for suffix matches
  for (let i = this.letters.length - 1; i >= 0; i--) {
    // Check if the current letter exists as a child node in the trie
    if (lookingIn[this.letters[i]]) {
      // Move to the child node corresponding to the current letter
      lookingIn = lookingIn[this.letters[i]]

      // Check if we've reached the end of a valid word in the trie
      if (lookingIn.word) return true
    } else {
      // If the letter doesn't exist in the trie, no suffix match is possible
      return false
    }
  }

  // Return false if no complete word was found during traversal
  return false
}
