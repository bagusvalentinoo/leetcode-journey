/**
 * Problem: 869. Reordered Power of 2
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if digits of n can be rearranged to form a power of two
 *
 * @param {number} n - Number to check
 *
 * @returns {boolean} - True if possible, else false
 */
const reorderedPowerOf2 = (n) => {
  // Return true immediately if n is 1, since 1 is 2^0
  if (n === 1) return true

  // Convert n to string, split into digits, sort digits, and join back to form a canonical representation
  const sortedDigitsOfN = n
    .toString()
    .split('')
    .sort((a, b) => a - b)
    .join('')

  // Initialize variable to hold powers of 2
  let powerOfTwo = 1
  // Array to store powers of 2 with the same number of digits as n
  let candidatePowers = []

  // Generate all powers of 2 with digit length less than or equal to n
  while (powerOfTwo.toString().length <= sortedDigitsOfN.length) {
    powerOfTwo *= 2

    // Only consider powers of 2 with the same number of digits as n
    if (powerOfTwo.toString().length === sortedDigitsOfN.length)
      candidatePowers.push(powerOfTwo)
  }

  // Map each candidate power of 2 to its sorted digit string
  candidatePowers = candidatePowers.map((item) =>
    item
      .toString()
      .split('')
      .sort((a, b) => a - b)
      .join('')
  )

  // Check if any sorted digit string of a power of 2 matches that of n
  for (let i = 0; i < candidatePowers.length; i++)
    if (sortedDigitsOfN === candidatePowers[i]) return true

  // Return false if no match is found
  return false
}
