/**
 * Problem: 923. 3Sum With Multiplicity
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 3 ms (Beats 100%)
 */

/**
 * Number of unique triplets summing up to target
 *
 * @param {number[]} arr - Input array
 * @param {number} target - Target sum
 *
 * @returns {number} - Number of unique triplets summing up to target
 */
const threeSumMulti = (arr, target) => {
  // Create a frequency map of the array
  const nmap = new Uint16Array(101),
    third = target / 3

  // Initialize the answer
  let ans = 0

  // Create frequency map
  for (const i in arr) nmap[arr[i]]++

  // Iterate over possible values of k
  for (let k = Math.min(target, 100); k >= third; k--) {
    // Calculate remaining sum and half of remaining sum
    const rem = target - k,
      half = rem / 2

    // Iterate over possible values of j
    for (let j = Math.min(rem, k); j >= half; j--) {
      // Calculate remaining sum and frequency of i, j, and k
      const i = rem - j,
        x = nmap[i],
        y = nmap[j],
        z = nmap[k]

      // Initialize result
      let res

      // If i === k
      if (i === k) res = (x * (x - 1) * (x - 2)) / 6
      // If i === j
      else if (i === j) res = ((x * (x - 1)) / 2) * z
      // If j === k
      else if (j === k) res = (x * y * (y - 1)) / 2
      // If i, j, and k are distinct
      else res = x * y * z

      // Add result to answer
      ans = (ans + res) % 1000000007
    }
  }

  return ans
}
