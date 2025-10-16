/**
 * Problem: 2598. Smallest Missing Non-negative Integer After Operations
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 9 ms (Beats 100%)
 */

/**
 * Return the smallest nonnegative integer not present among nums modulo value
 *
 * @param {number[]} nums - Input array
 * @param {number} value - Modulo base
 *
 * @returns {number} - The missing integer
 */
const findSmallestInteger = (nums, value) => {
  // Create an array to count occurrences for each remainder (size value+1).
  const r = new Array(value + 1)

  // Fill the counts array with zeros for reliable numeric increments.
  r.fill(0)

  // Loop over input numbers; 'l' is the current number (prefer 'num').
  for (let l of nums) {
    // Convert negative numbers to their positive equivalent modulo value.
    l < 0 && (l = value - (-l % value))

    // Increment the bucket for the remainder of l modulo value.
    r[l % value]++
  }

  // End of loop over nums.
  // Initialize result variable 'l' to 0 (prefer descriptive name like 'result').
  let l = 0,
    // Initialize n to Infinity to track the smallest bucket count.
    n = Number.POSITIVE_INFINITY

  // Scan each possible remainder index from 0 up to value-1.
  for (let i = 0; i < value; i++) {
    // Read the count for remainder i; 'o' is the count (prefer 'count').
    const o = r[i]

    // If this count is the new minimum, update n and compute l accordingly.
    o < n && ((n = o), (l = o * value + i))
  }

  // End of remainder scan loop.
  // Return the computed smallest missing integer (prefer returning a variable named 'result').
  return l
}
