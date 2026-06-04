/**
 * Problem: 3751. Total Waviness of Numbers in Range I
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

// Destructure Math methods for convenience
const { floor, max, min } = Math

// Maximum value limit for array size
const MAX = 100005

// DP array to store waviness count for each number
const dp = new Int32Array(MAX)
// Prefix sum array to efficiently calculate range sums
const prefixSum = new Int32Array(MAX)

// Precompute waviness for all numbers from 100 to MAX-1
for (let number = 100; number < MAX; number++) {
  // Extract last digit (units place)
  const lastDigit = number % 10
  // Extract middle digit (tens place)
  const middleDigit = Math.floor(number / 10) % 10
  // Extract first digit (hundreds place)
  const firstDigit = Math.floor(number / 100) % 10

  // Check if middle digit is a wave peak (greater than both neighbors)
  // or a wave valley (less than both neighbors)
  const isWavePoint =
    (middleDigit > Math.max(firstDigit, lastDigit)) |
    (middleDigit < Math.min(firstDigit, lastDigit))

  // DP recurrence: waviness of current number = waviness of number without last digit + wave check
  dp[number] = dp[Math.floor(number / 10)] + isWavePoint
  // Build prefix sum for range queries
  prefixSum[number] = prefixSum[number - 1] + dp[number]
}

/**
 * Calculates total waviness of numbers in range [num1, num2]
 *
 * @param {number} num1 - Start of the range (inclusive)
 * @param {number} num2 - End of the range (inclusive)
 *
 * @returns {number} Total waviness sum for the range
 */
const totalWaviness = (num1, num2) => prefixSum[num2] - prefixSum[num1 - 1]
