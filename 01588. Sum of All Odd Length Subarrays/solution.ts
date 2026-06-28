/**
 * Problem: 1588. Sum of All Odd Length Subarrays
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns sum of all odd-length subarrays
 *
 * @param arr - Input array of integers
 *
 * @returns Sum of all odd-length subarrays
 */
const sumOddLengthSubarrays = (arr: number[]): number => {
  // Initialize result accumulator
  let totalSum: number = 0

  // Get length of input array
  const arrayLength: number = arr.length

  // Iterate through each element in the array
  for (let i: number = 0; i < arrayLength; i++) {
    // Total number of subarrays containing arr[i]
    // Formula: (i+1) choices for start * (n-i) choices for end
    const totalSubarrays: number = (i + 1) * (arrayLength - i)

    // Number of odd-length subarrays containing arr[i]
    // For odd lengths, count = ceil(totalSubarrays / 2)
    const oddSubarrays: number = Math.floor((totalSubarrays + 1) / 2)

    // Add contribution of arr[i] to total sum
    totalSum += arr[i] * oddSubarrays
  }

  // Return the total sum of all odd-length subarrays
  return totalSum
}
