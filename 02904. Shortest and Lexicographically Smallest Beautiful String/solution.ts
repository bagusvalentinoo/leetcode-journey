/**
 * Problem: 2904. Shortest and Lexicographically Smallest Beautiful String
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds the shortest and lexicographically smallest beautiful substring
 *
 * @param s - Binary string containing only '0' and '1'
 * @param k - Required number of '1's in the beautiful substring
 *
 * @returns The shortest lexicographically smallest beautiful substring
 */
const shortestBeautifulSubstring = (s: string, k: number): string => {
  // Early return if total number of '1's is less than k
  if ([...s].filter((c: string) => c === '1').length < k) return ''

  // Initialize answer as the full string
  let ans: string = s
  // Count of '1's in the current window
  let cnt: number = 0
  // Left boundary of the sliding window
  let left: number = 0

  // Expand the window by moving the right pointer
  for (let right: number = 0; right < s.length; right++) {
    // Add current character's value (1 or 0) to counter using charCode
    cnt += s[right].charCodeAt(0) - 48

    // Shrink window from left while count exceeds k or leading char is '0'
    while (cnt > k || s[left] === '0') cnt -= s[left++].charCodeAt(0) - 48

    // If window has exactly k ones, check if it's a better answer
    if (cnt === k) {
      // Extract the current beautiful substring
      const t: string = s.slice(left, right + 1)

      // Update if shorter or same length but lexicographically smaller
      if (t.length < ans.length || (t.length === ans.length && t < ans)) ans = t
    }
  }

  // Return the best beautiful substring found
  return ans
}
