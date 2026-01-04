/**
 * Problem: 1390. Four Divisors
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 11 ms (Beats 100%)
 */

/**
 * Calculate the sum of numbers with exactly four divisors
 *
 * @param nums - Array of integers to check
 *
 * @returns - Total sum of divisors for numbers with exactly four divisors
 */
const sumFourDivisors = (nums: number[]): number => {
    // Initialize result variable to store total sum of divisors
    let result = 0

    // Iterate through each number in the input array
    for (const num of nums) {
        // Variable to store the first divisor found (if exists)
        let firstDivisor = 0
        // Start checking from divisor 2
        let divisor = 2

        // Check for divisors up to square root of the number
        while (divisor * divisor <= num) {
            // Check if current divisor divides the number
            if (num % divisor === 0) {
                // If this is the first divisor found, store it
                if (firstDivisor === 0) {
                    firstDivisor = divisor
                } else {
                    // If we find a second divisor, the number has more than 2 divisors
                    // so it cannot be product of two distinct primes
                    firstDivisor = 0
                    break
                }
            }
            // Move to next divisor
            divisor++
        }

        // Check if we found exactly one divisor and it's not the square root
        // This means the number is product of two distinct primes (p*q)
        if (firstDivisor !== 0 && firstDivisor * firstDivisor !== num) {
            // p is the smaller prime divisor
            const p = firstDivisor
            // q is the larger prime divisor
            const q = num / p
            // Add sum of divisors: 1 + p + q + num
            result += 1 + p + q + num
        }
        // Note: This implementation doesn't handle the p^3 case
    }

    // Return the total sum of divisors for numbers with exactly four divisors
    return result
}
