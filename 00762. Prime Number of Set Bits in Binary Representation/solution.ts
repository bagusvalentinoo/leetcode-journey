/**
 * Problem: 762. Prime Number of Set Bits in Binary Representation
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

// Precomputed set of prime numbers up to 19
// Since maximum set bits for numbers up to 1,000,000 is 19 (for 2^19 = 524288)
const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19])

/**
 * Counts the number of set bits in the binary representation of a number
 *
 * @param n - The number to count set bits in
 *
 * @returns The number of set bits in the binary representation of n
 */
const countSetBits = (n: number): number => {
  // Brian Kernighan's algorithm for counting set bits
  let bitCount = 0

  // Continue until all bits are cleared
  while (n > 0) {
    // Add least significant bit
    bitCount += n & 1

    // Shift right to process next bit
    n >>= 1
  }

  return bitCount
}

// Precompute prefix sums for numbers up to 1,000,000
const prefixSums = new Int32Array(1000001)

// Build prefix sum array where each element represents count of numbers
// with prime set bits from 2 up to that index
for (let i = 2; i < prefixSums.length; ++i) {
  // Carry forward previous count
  prefixSums[i] = prefixSums[i - 1]

  // If current number has prime number of set bits, increment count
  if (primes.has(countSetBits(i))) ++prefixSums[i]
}

/**
 * Counts numbers in the range [left, right] with a prime number of set bits
 *
 * @param left - The start of the range
 * @param right - The end of the range
 *
 * @returns The count of numbers with a prime number of set bits
 */
const countPrimeSetBits = (left: number, right: number): number =>
  // Use prefix sums for O(1) range query
  prefixSums[right] - prefixSums[left - 1]
