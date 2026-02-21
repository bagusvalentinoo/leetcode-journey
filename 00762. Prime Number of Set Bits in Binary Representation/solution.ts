/**
 * Problem: 762. Prime Number of Set Bits in Binary Representation
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

/**
 * Counts numbers in the range [left, right] with a prime number of set bits
 *
 * @param left - The start of the range
 * @param right - The end of the range
 *
 * @returns The count of numbers with a prime number of set bits
 */
const countPrimeSetBits = (left: number, right: number): number => {
  // Initialize result counter
  let primeCount: number = 0

  // Iterate through each number in the range
  for (let num: number = left; num <= right; num++) {
    // Count set bits using Brian Kernighan's algorithm
    let currentNum: number = num
    let setBits: number = 0

    // While currentNum is greater than 0
    while (currentNum > 0) {
      // Decrement currentNum by 1
      currentNum &= currentNum - 1
      // Increment setBits by 1
      setBits++
    }

    // Skip numbers with 0 or 1 set bits (not prime)
    if (setBits < 2) continue

    // Check if setBits is prime
    let isPrime: boolean = true

    // Iterate from 2 to square root of setBits
    for (let divisor: number = 2; divisor <= Math.sqrt(setBits); divisor++) {
      // If setBits is divisible by divisor
      if (setBits % divisor === 0) {
        // Set isPrime to false
        isPrime = false

        // Break the loop
        break
      }
    }

    // Increment count if setBits is prime
    if (isPrime) primeCount++
  }

  // Return count
  return primeCount
}
