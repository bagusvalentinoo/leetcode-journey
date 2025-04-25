/**
 * Problem: 927. Three Equal Parts
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 5 ms (Beats 100%)
 */

/**
 * Divides the binary array into three equal parts
 *
 * @param {number[]} arr - The input binary array
 *
 * @returns {number[]} - Indices [i, j] representing the split points, or [-1, -1] if not possible
 */
const threeEqualParts = (arr) => {
  // Total number of 1s in the array
  const totalOnes = arr.reduce((sum, num) => sum + num, 0)

  // If totalOnes is not divisible by 3, it's impossible to split
  if (totalOnes % 3 !== 0) return [-1, -1]
  // If there are no 1s, any split is valid
  if (totalOnes === 0) return [0, arr.length - 1]

  // Number of 1s per part
  const onesPerPart = totalOnes / 3

  /**
   * Indices of the start of each part of the array
   */
  let firstStart = -1
  let secondStart = -1
  let thirdStart = -1
  let onesCount = 0

  // Find the starting indices of the three parts
  for (let i = 0; i < arr.length; i++) {
    // If a 1 is found
    if (arr[i] === 1) {
      onesCount++ // Increment the count of 1s

      // If this is the first 1, it's the start of the first part
      if (onesCount === 1) firstStart = i
      // If this is the first 1 after the first part, it's the start of the second part
      if (onesCount === onesPerPart + 1) secondStart = i
      // If this is the first 1 after the second part, it's the start of the third part
      if (onesCount === 2 * onesPerPart + 1) thirdStart = i
    }
  }

  // Length of the pattern to be repeated
  const patternLength = arr.length - thirdStart

  // If the pattern is not valid, return [-1, -1]
  if (
    secondStart - firstStart < patternLength ||
    thirdStart - secondStart < patternLength
  )
    return [-1, -1]

  // Iterate over the pattern
  for (let i = 0; i < patternLength; i++)
    // If the pattern is not valid, return [-1, -1]
    if (
      arr[firstStart + i] !== arr[secondStart + i] ||
      arr[firstStart + i] !== arr[thirdStart + i]
    )
      return [-1, -1]

  // Indices of the split points
  const i = firstStart + patternLength - 1
  const j = secondStart + patternLength

  // Return the indices of the split points
  return [i, j]
}
