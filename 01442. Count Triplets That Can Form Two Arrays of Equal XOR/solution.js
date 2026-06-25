/**
 * Problem: 1442. Count Triplets That Can Form Two Arrays of Equal XOR
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts number of triplets where XOR of subarray is equal
 *
 * @param {number[]} arr - Input array of integers
 *
 * @returns {number} Number of valid triplets
 */
const countTriplets = (arr) => {
  // Length of the input array
  const arrayLength = arr.length

  // Prefix XOR array where prefix[i] = XOR of arr[0..i-1]
  const prefixXor = new Array(arrayLength + 1).fill(0)

  // Build prefix XOR array
  for (let i = 0; i < arrayLength; i++) prefixXor[i + 1] = prefixXor[i] ^ arr[i]

  // Counter for valid triplets
  let tripletCount = 0

  // Iterate through possible i and k where i < k
  for (let i = 0; i < arrayLength; i++) {
    for (let k = i + 1; k < arrayLength; k++) {
      // If prefix XOR at i equals prefix XOR at k+1,
      // then XOR of subarray from i to k is 0
      // This means any j between i+1 and k forms a valid triplet
      if (prefixXor[i] === prefixXor[k + 1])
        // Number of valid j positions = k - i
        tripletCount += k - i
    }
  }

  // Return the total number of valid triplets found
  return tripletCount
}
