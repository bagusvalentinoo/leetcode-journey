/**
 * Problem: 1432. Max Difference You Can Get From Changing an Integer
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculate the maximum difference between a number
 *
 * @param {number} num - The input number to transform
 *
 * @returns {number} - The maximum difference between the maximized and minimized numbers
 */
const maxDiff = (num) => {
  // Convert number to string for digit manipulation
  const numStr = num.toString()

  // Find maximum value by replacing first non-9 digit with 9
  const getMax = () => {
    for (let i = 0; i < numStr.length; i++)
      if (numStr[i] !== '9') return parseInt(numStr.replaceAll(numStr[i], '9'))

    return num
  }

  // Find minimum value by replacing appropriate digit with 0 or 1
  const getMin = () => {
    if (numStr[0] !== '1') return parseInt(numStr.replaceAll(numStr[0], '1'))

    for (let i = 1; i < numStr.length; i++)
      if (numStr[i] !== '0' && numStr[i] !== '1')
        return parseInt(numStr.replaceAll(numStr[i], '0'))

    return num
  }

  // Return the difference between maximum and minimum values
  return getMax() - getMin()
}
