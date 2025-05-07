/**
 * Problem: 954. Array of Doubled Pairs
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 12 ms (Beats 100%)
 */

/**
 * Checks if array can be reordered into pairs where one value is double the other
 *
 * @param {number[]} arr - Input array
 *
 * @returns {boolean} - True if possible, false otherwise
 */
const canReorderDoubled = (arr) => {
  // Count frequency of each number in the array
  const count = new Map()
  for (const number of arr) count.set(number, (count.get(number) || 0) + 1)

  // Store all unique numbers from the array
  let keysCount = 0
  const keys = new Int32Array(count.size)
  for (const key of count.keys()) keys[keysCount++] = key

  // Sort by absolute value to handle negative numbers properly
  keys.sort((a, b) => Math.abs(a) - Math.abs(b))

  // Check if each number can be matched with its double
  for (let i = 0; i < keys.length; i++) {
    const numberCount = count.get(keys[i])
    const doubleCount = count.get(keys[i] * 2) || 0

    // If not enough doubles exist, pairing is impossible
    if (doubleCount < numberCount) return false

    // Update the count of doubles (they've been used for pairing)
    count.set(keys[i] * 2, doubleCount - numberCount)
  }

  // All numbers could be paired successfully
  return true
}
