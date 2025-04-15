/**
 * Problem: 903. Valid Permutations for DI Sequence
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

const MOD = 1000000007 // Modulo constant
let pre = new Uint32Array(201) // Prefix array
let cur = new Uint32Array(201) // Current array

/**
 * Number of valid permutations for a given DI sequence
 *
 * @param {string} s - DI sequence
 *
 * @returns {number} - Number of valid permutations modulo 10^9 + 7
 */
const numPermsDISequence = (s) => {
  const n = s.length // Length of the DI sequence
  cur.fill(0) // Initialize current array
  cur[0] = 1 // Base case

  // Iterate over the DI sequence
  for (let i = 0; i < n; ++i) {
    // Swap pre and cur
    const tem = pre
    pre = cur
    cur = tem

    // If current character is 'I', update prefix sum
    if (s[i] === 'I') {
      let sum = pre[0]
      cur[0] = 0

      // Update prefix sum for 'I'
      for (let j = 1; j <= i + 1; ++j) {
        cur[j] = sum
        sum = (sum + pre[j]) % MOD
      }
    }
    // If current character is 'D', update suffix sum
    else {
      // Initialize suffix sum
      let sum = 0
      cur[i + 1] = 0

      // Update suffix sum for 'D'
      for (let j = i; j >= 0; --j) {
        sum = (sum + pre[j]) % MOD
        cur[j] = sum
      }
    }
  }

  let res = 0

  // Sum up the results
  for (let i = 0; i <= n; ++i) res = (res + cur[i]) % MOD

  return res
}
