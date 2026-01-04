/**
 * Problem: 1390. Four Divisors
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 6 ms (Beats 100%)
 */

 func sumFourDivisors(nums []int) int {
    // Initialize variable to store total sum of divisors
    divSum := 0

    // Iterate through each number in the input array
    for _, n := range nums {
        // Counter for number of divisors found
        divCount := 0
        // Sum of all divisors found so far
        inSum := 0

        // Check all possible divisors up to square root of n
        for d := 1; d*d <= n; d++ {
            // Check if d is a divisor of n
            if n%d == 0 {
                // Calculate the paired divisor
                other := n / d

                // Check if divisors are the same (perfect square case)
                if d == other {
                    // Same divisor, count once
                    divCount++
                    // Add divisor only once
                    inSum += d
                } else {
                    // Different divisors, count both
                    divCount += 2
                    // Add both divisors
                    inSum += d + other
                }

                // Early termination if we already have more than 4 divisors
                if divCount > 4 {
                    break
                }
            }
        }

        // Add divisor sum if exactly 4 divisors were found
        if divCount == 4 {
            divSum += inSum
        }
    }

    // Return total sum of divisors for all numbers with exactly 4 divisors
    return divSum
}
