/**
 * Problem: 3343. Count Number of Balanced Permutations
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 126 ms (Beats 100%)
 */

// Initializes a constant MOD for modulo operations
const MOD = BigInt(1e9 + 7)

/**
 * Counts balanced permutations of a digit string
 *
 * @param {string} num - Input digit string
 *
 * @returns {number} - Count of balanced permutations (modulo 10^9 + 7)
 */
const countBalancedPermutations = (num) => {
  // Count total sum and occurrences of each digit
  let tot = 0
  const n = num.length
  const cnt = new Array(10).fill(0)

  for (const ch of num) {
    const d = parseInt(ch)
    cnt[d]++
    tot += d
  }

  // If total sum is odd, balanced permutation is impossible
  if (tot % 2 !== 0) return 0

  const target = tot / 2
  const maxOdd = Math.floor((n + 1) / 2)

  // Calculate combinations using Pascal's triangle
  const comb = new Array(maxOdd + 1)

  for (let i = 0; i <= maxOdd; i++) {
    comb[i] = new Array(maxOdd + 1).fill(0n)
    comb[i][i] = comb[i][0] = 1n

    for (let j = 1; j < i; j++)
      comb[i][j] = (comb[i - 1][j] + comb[i - 1][j - 1]) % MOD
  }

  // Initialize DP array: f[sum][odd] represents ways to achieve sum with odd positions
  const f = new Array(Number(target) + 1)

  for (let i = 0; i <= Number(target); i++)
    f[i] = new Array(maxOdd + 1).fill(0n)

  f[0][0] = 1n

  // Track processed digits sum and value sum
  let psum = 0,
    totSum = 0

  // Process each digit from 0 to 9
  for (let i = 0; i <= 9; i++) {
    psum += cnt[i]
    totSum += i * cnt[i]

    // Iterate through possible odd position counts
    for (
      let oddCnt = Math.min(psum, maxOdd);
      oddCnt >= Math.max(0, psum - (n - maxOdd));
      oddCnt--
    ) {
      const evenCnt = psum - oddCnt

      // Iterate through possible current sums
      for (
        let curr = Math.min(totSum, target);
        curr >= Math.max(0, totSum - target);
        curr--
      ) {
        let res = 0n

        // Calculate ways to distribute current digit in odd/even positions
        for (
          let j = Math.max(0, cnt[i] - evenCnt);
          j <= Math.min(cnt[i], oddCnt) && i * j <= curr;
          j++
        ) {
          const ways = (comb[oddCnt][j] * comb[evenCnt][cnt[i] - j]) % MOD
          res = (res + ((ways * f[curr - i * j][oddCnt - j]) % MOD)) % MOD
        }

        f[curr][oddCnt] = res % MOD
      }
    }
  }

  // Return result: ways to get half the total sum using exactly maxOdd positions
  return Number(f[target][maxOdd])
}
