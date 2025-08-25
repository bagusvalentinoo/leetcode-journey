/**
 * Problem: 1175. Prime Arrangements
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns the number of valid prime arrangements for 1 to n
 *
 * @param {number} n - Upper bound
 *
 * @returns {number} - Arrangements modulo 10^9+7
 */
const numPrimeArrangements = (n) => {
  // Array to store all prime numbers between 1 and n.
  const primes = []

  // Loop through numbers from 1 to n and collect primes.
  for (let i = 1; i <= n; i++) if (isPrime(i)) primes.push(i)

  // Calculate factorial of the number of primes.
  const p = factorial(primes.length)
  // Calculate factorial of the number of non-primes.
  const np = factorial(n - primes.length)

  // Return the product of both factorials modulo 10^9+7 as a number.
  return Number((p * np) % 1000000007n)
}

/**
 * Recursively calculates the factorial of a given number using BigInt for large values
 *
 * @param {number} n - The number to calculate the factorial for
 *
 * @returns {bigint} - The factorial of n as a BigInt
 */
const factorial = (n) => {
  // Base case: factorial of 0 or 1 is 1.
  if (n <= 1) return 1n

  // Recursive case: n * factorial of (n - 1).
  return BigInt(n) * factorial(n - 1)
}

/**
 * Determines if a given number is prime
 *
 * @param {number} n - The number to check for primality
 *
 * @returns {boolean} - True if n is prime, false otherwise
 */
const isPrime = (n) => {
  // Numbers less than or equal to 1 are not prime.
  if (n <= 1) return false
  // 2 is the only even prime number.
  if (n === 2) return true
  // Even numbers greater than 2 are not prime.
  if (n % 2 === 0) return false

  // Calculate square root of n for optimization.
  const sqrt = Math.sqrt(n)

  // Check divisibility by odd numbers up to sqrt(n).
  for (let i = 3; i <= sqrt; i += 2) if (n % i === 0) return false

  // If no divisors found, n is prime.
  return true
}
