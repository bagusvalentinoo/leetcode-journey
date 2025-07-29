/**
 * Problem: 1089. Duplicate Zeros
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Duplicates zeros in-place in the array
 *
 * @param {number[]} arr - Array to modify
 *
 * @returns {void} - Do not return anything, modify arr in-place instead
 */

const duplicateZeros = (arr) => {
  // Get the length of the input array
  const arrayLength = arr.length

  // Initialize a counter for the number of zeros in the array
  let zeroCount = 0

  // Count the total number of zeros in the array
  for (let index = 0; index < arrayLength; index++)
    if (arr[index] === 0) zeroCount++

  // Traverse the array backwards to duplicate zeros in-place
  for (let index = arrayLength - 1; index >= 0; index--) {
    // If the shifted index is within bounds, copy the current element to its new position
    if (index + zeroCount < arrayLength) arr[index + zeroCount] = arr[index]

    // If the current element is zero, duplicate it
    if (arr[index] === 0) {
      // Decrement the zero counter as one zero has been processed
      zeroCount--

      // If the shifted index for the duplicated zero is within bounds, set it to zero
      if (index + zeroCount < arrayLength) arr[index + zeroCount] = 0
    }
  }
}
