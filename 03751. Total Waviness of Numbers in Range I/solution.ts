/**
 * Problem: 3751. Total Waviness of Numbers in Range I
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

// Destructure Math methods for convenience
const { floor, max, min } = Math

// Maximum value limit for array size
const MAX: number = 100005

// DP array to store waviness count for each number
const dp: Int32Array = new Int32Array(MAX)
// Prefix sum array to efficiently calculate range sums
const prefixSum: Int32Array = new Int32Array(MAX)

// Precompute waviness for all numbers from 100 to MAX-1
for (let number: number = 100; number < MAX; number++) {
  // Extract last digit (units place)
  const lastDigit: number = number % 10
  // Extract middle digit (tens place)
  const middleDigit: number = Math.floor(number / 10) % 10
  // Extract first digit (hundreds place)
  const firstDigit: number = Math.floor(number / 100) % 10

  // Check if middle digit is a wave peak (greater than both neighbors)
  // or a wave valley (less than both neighbors)
  const isWavePoint: number =
    middleDigit > Math.max(firstDigit, lastDigit) ||
    middleDigit < Math.min(firstDigit, lastDigit)
      ? 1
      : 0

  // DP recurrence: waviness of current number = waviness of number without last digit + wave check
  dp[number] = dp[Math.floor(number / 10)] + isWavePoint
  // Build prefix sum for range queries
  prefixSum[number] = prefixSum[number - 1] + dp[number]
}

/**
 * Calculates total waviness of numbers in range [num1, num2]
 *
 * @param num1 - Start of the range (inclusive)
 * @param num2 - End of the range (inclusive)
 *
 * @returns Total waviness sum for the range
 */
const totalWaviness = (num1: number, num2: number): number =>
  prefixSum[num2] - prefixSum[num1 - 1]
