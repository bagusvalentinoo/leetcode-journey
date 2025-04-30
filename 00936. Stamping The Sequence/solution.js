/**
 * Problem: 936. Stamping The Sequence
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 2 ms (Beats 100%)
 */

/**
 * Returns indices where stamp was applied to create target string
 *
 * @param {string} stamp - The stamp pattern
 * @param {string} target - The target string
 *
 * @returns {number[]} Stamping positions in reverse order, empty if impossible
 */
const movesToStamp = (stamp, target) => {
  // If the stamp is the same as the target, return [0]
  if (stamp === target) return [0]

  const slen = stamp.length, // Length of the stamp
    tlen = target.length - slen + 1, // Length of the target minus stamp length + 1
    ans = [] // Array to store the positions where the stamp was applied

  let tdiff = true, // Flag to track if any characters were stamped
    sdiff, // Flag to track if any characters matched the stamp
    i, // Loop index for the target string
    j // Loop index for the stamp string
    // Convert the stamp string to an array for easier manipulation
  ;(stamp = stamp.split('')), (target = target.split(''))

  // Loop until no more characters can be stamped
  while (tdiff) {
    // Reset the flag for each iteration
    for (i = 0, tdiff = false; i < tlen; i++) {
      // Iterate through the target string
      for (j = 0, sdiff = false; j < slen; j++)
        // If the current character in the target is '*', continue
        if (target[i + j] === '*') continue
        // If the current character in the target doesn't match the stamp
        else if (target[i + j] !== stamp[j]) break
        // If the current character in the target matches the stamp
        else sdiff = true

      // If the entire stamp matches the target
      if (j === slen && sdiff) {
        // Convert matched region to '*' (meaning it's been "unstamped")
        for (j = i, tdiff = true; j < slen + i; j++) target[j] = '*'

        // Add position to result (in reverse order)
        ans.unshift(i)
      }
    }
  }

  /*
   * Verify the entire string has been converted to '*'
   * If not, it's impossible to create the target with the given stamp
   */
  for (i = 0; i < target.length; i++) if (target[i] !== '*') return []

  // Return the result in reverse order
  return ans
}
