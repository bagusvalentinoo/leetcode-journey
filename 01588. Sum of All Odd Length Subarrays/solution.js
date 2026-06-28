/**
 * Problem: 1588. Sum of All Odd Length Subarrays
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns sum of all odd-length subarrays
 *
 * @param {number[]} arr - Input array of integers
 *
 * @returns {number} Sum of all odd-length subarrays
 */
const sumOddLengthSubarrays = (arr) => {
  // Initialize result accumulator
  let totalSum = 0

  // Get length of input array
  const arrayLength = arr.length

  // Iterate through each element in the array
  for (let i = 0; i < arrayLength; i++) {
    // Total number of subarrays containing arr[i]
    // Formula: (i+1) choices for start * (n-i) choices for end
    const totalSubarrays = (i + 1) * (arrayLength - i)

    // Number of odd-length subarrays containing arr[i]
    // For odd lengths, count = ceil(totalSubarrays / 2)
    const oddSubarrays = Math.floor((totalSubarrays + 1) / 2)

    // Add contribution of arr[i] to total sum
    totalSum += arr[i] * oddSubarrays
  }

  // Return the total sum of all odd-length subarrays
  return totalSum
}
