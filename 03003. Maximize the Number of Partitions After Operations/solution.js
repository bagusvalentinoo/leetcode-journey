/**
 * Problem: 3003. Maximize the Number of Partitions After Operations
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 4 ms (Beats 100%)
 */

/**
 * Max partitions of string s with up to k distinct letters per operation
 *
 * @param {string} s - Input string
 * @param {number} k - Max distinct letters per operation
 *
 * @returns {number} - Max partitions
 */
const maxPartitionsAfterOperations = (s, k) => {
  // If k is 26 (all letters in the alphabet), only one partition is needed
  if (k === 26) return 1

  // Get the length of the input string
  const n = s.length

  // Add sentinel |characters to the string for easier boundary handling
  s = '@' + s + '@'

  // Initialize prefix arrays to store partition counts and bit values
  const pref = new Array(n + 2).fill(0),
    pval = new Array(n + 2).fill(0)

  // Initialize variables for prefix partitioning
  let prefix = 0,
    pbit = 0

  // Iterate through the string to calculate prefix partitions
  for (let i = 1; i <= n; i++) {
    // Calculate the bit representation of the current character
    const bit = 1 << (s.charCodeAt(i) - 'a'.charCodeAt(0))

    // Add the current character's bit to the prefix bitmask
    pbit |= bit

    // If the number of distinct letters exceeds k, start a new partition
    if (countBits(pbit) > k) {
      prefix++
      pbit = bit
    }

    // Store the current prefix partition count and bitmask
    pref[i] = prefix
    pval[i] = pbit
  }

  // Initialize suffix arrays to store partition counts and bit values
  const suff = new Array(n + 2).fill(0),
    sval = new Array(n + 2).fill(0)

  // Initialize variables for suffix partitioning
  let suffix = 0,
    sbit = 0

  // Iterate through the string in reverse to calculate suffix partitions
  for (let i = n; i >= 1; i--) {
    // Calculate the bit representation of the current character
    const bit = 1 << (s.charCodeAt(i) - 'a'.charCodeAt(0))

    // Add the current character's bit to the suffix bitmask
    sbit |= bit

    // If the number of distinct letters exceeds k, start a new partition
    if (countBits(sbit) > k) {
      suffix++
      sbit = bit
    }

    // Store the current suffix partition count and bitmask
    suff[i] = suffix
    sval[i] = sbit
  }

  // Initialize the variable to store the maximum number of partitions
  let ans = 0

  // Iterate through the string to calculate the maximum partitions
  for (let i = 1; i <= n; i++) {
    // Calculate the sum of prefix and suffix partitions
    let val = pref[i - 1] + suff[i + 1]

    // Retrieve the prefix and suffix bitmasks
    const p = pval[i - 1],
      s = sval[i + 1]

    // Combine the prefix and suffix bitmasks
    const x = p | s

    // Adjust the partition count based on the combined bitmask
    if (countBits(x) + 1 <= k) val += 1
    else if (countBits(p) === k && countBits(s) === k && countBits(x) < 26)
      val += 3
    else val += 2

    // Update the maximum partition count
    ans = Math.max(val, ans)
  }

  // Return the maximum number of partitions
  return ans
}

/**
 * Count set bits (1s) in a number's binary representation
 *
 * @param {number} n - Input number
 *
 * @returns {number} - Count of set bits
 */
const countBits = (n) => {
  // Initialize a variable to keep track of the count of set bits
  let count = 0

  // Loop until the number becomes 0
  while (n) {
    // Increment count if the least significant bit is 1
    count += n & 1

    // Right shift the number by 1 to process the next bit
    n >>= 1
  }

  // Return the total count of set bits
  return count
}
