/**
 * Problem: 1310. XOR Queries of a Subarray
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 4 ms (Beats 100%)
 */

/**
 * Processes XOR queries on array subarrays
 *
 * @param arr - Input array of integers
 * @param queries - Array of [left, right] query ranges
 *
 * @returns XOR results for each query
 */
const xorQueries = (arr: number[], queries: number[][]): number[] => {
  // Get array length
  const arrayLength: number = arr.length
  // Build prefix XOR array with extra element at start (index 0 = 0)
  const prefixXors: Int32Array = new Int32Array(arrayLength + 1)

  // Compute prefix XOR where prefixXors[i] = XOR of arr[0..i-1]
  for (let i: number = 0; i < arrayLength; i++)
    prefixXors[i + 1] = prefixXors[i] ^ arr[i]

  // Process each query
  const results: number[] = []

  for (const query of queries) {
    // XOR from left to right = prefix[right+1] ^ prefix[left]
    // Because prefix[right+1] includes arr[0..right]
    // and prefix[left] includes arr[0..left-1]
    results.push(prefixXors[query[1] + 1] ^ prefixXors[query[0]])
  }

  // Return results
  return results
}
