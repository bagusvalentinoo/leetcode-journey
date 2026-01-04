/**
 * Problem: 1390. Four Divisors
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 10 ms (Beats 100%)
 */

/**
 * Calculate the sum of numbers with exactly four divisors
 *
 * @param {number[]} nums - Array of integers to check
 *
 * @returns {number} - Total sum of divisors for numbers with exactly four divisors
 */
const sumFourDivisors = (nums) => {
    // Initialize result variable to store total sum of divisors
    let result = 0

    // Iterate through each number in the input array
    for (let num of nums) {
        // Create array to store divisors of current number
        let divisors = []

        // Find all divisors by iterating up to square root of number
        for (let i = 1; i * i <= num; i++) {
            // Check if i is a divisor
            if (num % i === 0) {
                // Add the divisor i
                divisors.push(i)

                // Add the paired divisor (num/i) if it's different from i
                if (i !== (num / i)) divisors.push(num / i)
            }

            // Early termination if we already have more than 4 divisors
            if (divisors.length > 4) break
        }

        // Check if the number has exactly 4 divisors
        if (divisors.length === 4) {
            // Calculate sum of all 4 divisors using reduce
            const total = divisors.reduce((sum, val) => val + sum, 0)
            // Add to the overall result
            result += total
        }
    }

    // Return the total sum of divisors for all numbers with exactly 4 divisors
    return result
}
