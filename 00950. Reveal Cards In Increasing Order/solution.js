/**
 * Problem: 950. Reveal Cards In Increasing Order
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 2 ms (Beats 99.13%)
 */

/**
 * Rearranges a deck so cards reveal in increasing order
 *
 * @param {number[]} deck - The deck of cards
 *
 * @returns {number[]} The reordered deck
 */
const deckRevealedIncreasing = (deck) => {
  // Sort the deck in ascending order
  const n = deck.length
  deck.sort((a, b) => a - b)

  // Initialize result array
  const revealed = []

  // Add the largest card as the first element
  revealed.unshift(deck[n - 1])

  // Process remaining cards in descending order
  for (let i = n - 2; i >= 0; i--) {
    // Move the last card to the front (simulates the reveal operation in reverse)
    revealed.unshift(revealed.pop())
    // Add the current card to the front
    revealed.unshift(deck[i])
  }

  // Return the arranged deck
  return revealed
}
