/**
 * Problem: 1220. Count Vowels Permutation
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns the number of vowel permutations of length n
 *
 * @param {number} n - String length
 *
 * @returns {number} - Total permutations
 */
const countVowelPermutation = (n) => {
  // Define the modulo constant to prevent integer overflow
  const MOD = 1e9 + 7

  // Initialize the count for each vowel for strings of length 1
  let countA = 1, // Number of strings ending with 'a'
    countE = 1, // Number of strings ending with 'e'
    countI = 1, // Number of strings ending with 'i'
    countO = 1, // Number of strings ending with 'o'
    countU = 1 // Number of strings ending with 'u'

  // Iterate from the second character to the nth character
  for (let index = 1; index < n; index++) {
    // Calculate next counts based on vowel transition rules
    const nextA = countE // 'a' follows only 'e'
    const nextE = (countA + countI) % MOD // 'e' follows 'a' and 'i'
    const nextI = (countA + countE + countO + countU) % MOD // 'i' follows all except 'i'
    const nextO = (countI + countU) % MOD // 'o' follows 'i' and 'u'
    const nextU = countA // 'u' follows only 'a'

    // Update counts for the next iteration
    countA = nextA
    countE = nextE
    countI = nextI
    countO = nextO
    countU = nextU
  }

  // Return the total number of valid strings modulo MOD
  return (countA + countE + countI + countO + countU) % MOD
}
