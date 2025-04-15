/**
 * Problem: 904. Fruit Into Baskets
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 2 ms (Beats 99.82%)
 */

/**
 * Find maximum fruits with at most two types
 *
 * @param {number[]} fruits - Fruits on trees
 *
 * @returns {number} - Maximum fruits
 */
const totalFruit = (fruits) => {
  // First and second number last index
  let firstNumLastIdx = 0,
    secondNumLastIdx = undefined

  // Find first and second number last index
  for (let i = 1; i < fruits.length; ++i) {
    // If different number found
    if (fruits[i] !== fruits[firstNumLastIdx]) {
      secondNumLastIdx = i
      break
    }

    // Update first number last index
    firstNumLastIdx++
  }

  // Current beginning
  let curBeg = 0
  // Current maximum interval
  let curMaxInterval = secondNumLastIdx ? secondNumLastIdx + 1 : fruits.length

  // Sliding window
  for (let i = secondNumLastIdx + 1; i < fruits.length; ++i) {
    // If same first number
    if (fruits[i] === fruits[firstNumLastIdx]) firstNumLastIdx = i
    // If same second number
    else if (fruits[i] === fruits[secondNumLastIdx]) secondNumLastIdx = i
    // If different number
    else {
      // Update current beginning
      if (firstNumLastIdx < secondNumLastIdx) {
        curBeg = firstNumLastIdx + 1
        firstNumLastIdx = i
      }
      // Update current beginning
      else {
        curBeg = secondNumLastIdx + 1
        secondNumLastIdx = i
      }
    }

    // Update current maximum interval
    curMaxInterval = Math.max(i - curBeg + 1, curMaxInterval)
  }

  return curMaxInterval
}
