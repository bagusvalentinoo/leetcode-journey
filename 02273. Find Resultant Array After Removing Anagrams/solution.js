/**
 * Problem: 2273. Find Resultant Array After Removing Anagrams
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Removes consecutive anagrams from the array
 *
 * @param {string[]} words - Array of words
 *
 * @returns {string[]} - Filtered array without consecutive anagrams
 */
const removeAnagrams = (words) => {
  // List of prime numbers to assign a unique prime per lowercase letter a-z
  const primes = [
    1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
    71, 73, 79, 83, 89, 97
  ]

  // Compute a multiplicative hash for a word by multiplying primes
  // corresponding to each character (a -> primes[0], b -> primes[1], ...)
  const normal = (s) => {
    // Initialize product accumulator to 1 (identity for multiplication)
    let res = 1

    // Multiply the accumulator by the prime for each character in the string
    for (let i = 0; i < s.length; i++) res *= primes[s.charCodeAt(i) - 97]

    // Return the computed multiplicative hash for the string
    return res
  }

  // Initialize result array with the first word from the input array
  const res = [words[0]]
  // Compute hash of the previous word to compare against subsequent words
  let prev = normal(words[0])

  // Iterate through the remaining words starting from index 1
  for (let i = 1; i < words.length; i++) {
    // Compute hash for the current word
    const key = normal(words[i])

    // If current word's hash differs from previous, it is not a consecutive anagram
    if (key !== prev) {
      // Append the current non-anagram word to the result array
      res.push(words[i])
      // Update the previous hash to the current word's hash
      prev = key
    }
  }

  // Return the filtered array with consecutive anagrams removed
  return res
}
