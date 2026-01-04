/**
 * Problem: 1390. Four Divisors
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 8 ms (Beats 100%)
 */

public class Solution {
    public int SumFourDivisors(int[] nums) {
        // Initialize variable to store total sum of divisors
        int totalSum = 0;

        // Iterate through each number in the input array
        foreach (int n in nums) {
            // Counter for number of divisors found
            int count = 0;
            // Sum of all divisors found so far
            int divisorSum = 0;

            // Check all possible divisors up to square root of n
            for (int d = 1; d * d <= n; d++) {
                // Check if d is a divisor of n
                if (n % d == 0) {
                    // Calculate the paired divisor
                    int other = n / d;

                    // Check if divisors are the same (perfect square case)
                    if (d == other) {
                        // Same divisor, count once
                        count++;
                        // Add divisor only once
                        divisorSum += d;
                    } else {
                        // Different divisors, count both
                        count += 2;
                        // Add both divisors
                        divisorSum += d + other;
                    }

                    // Early termination if we already have more than 4 divisors
                    if (count > 4)
                        break;
                }
            }

            // Add divisor sum if exactly 4 divisors were found
            if (count == 4)
                totalSum += divisorSum;
        }

        // Return total sum of divisors for all numbers with exactly 4 divisors
        return totalSum;
    }
}
