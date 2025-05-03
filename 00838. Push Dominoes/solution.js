/**
 * Problem: 838. Push Dominoes
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 26 ms (Beats 100%)
 */

/**
 * Simulates the final state of dominoes after forces have been applied
 *
 * @param {string} dominoes - The initial state of the dominoes
 *
 * @returns {string} - The final state of the dominoes
 */
const pushDominoes = (dominoes) => {
  // Add sentinels to handle edge cases and convert to array
  const n = dominoes.length + 2
  const arr = ('L' + dominoes + 'R').split('')

  // Scan through dominoes, processing each section between forces
  for (let l = 0, r = 1; r < n; r++) {
    // Skip dots (standing dominoes)
    if (arr[r] === '.') continue
    // Handle opposing forces (R...L) - dominoes fall toward middle
    if (arr[r] === 'L' && arr[l] === 'R')
      for (let i = l, j = r; j - i && i < j; i++, j--)
        (arr[i] = 'R'), (arr[j] = 'L')
    // Handle matching forces - all dominoes fall in same direction
    if (arr[l] === arr[r]) for (let i = l; i < r; i++) arr[i] = arr[r]

    // Update left pointer to current position
    l = r
  }

  // Remove sentinels and return final state
  return arr.slice(1, n - 1).join('')
}
