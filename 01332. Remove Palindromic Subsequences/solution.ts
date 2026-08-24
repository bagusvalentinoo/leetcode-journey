/**
 * Problem: 1332. Remove Palindromic Subsequences
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds the minimum number of steps to make the string empty
 *
 * @param s - Binary string containing only 'a' and 'b'
 *
 * @returns Minimum steps to remove all palindromic subsequences
 */
const removePalindromeSub = (s: string): number => {
  // Return 0 if the string is empty
  if (!s.length) return 0

  // Two pointers to check if the string is a palindrome
  let left: number = 0,
    right: number = s.length - 1

  // Check if all symmetric characters match
  while (left < right) if (s[left++] !== s[right--]) return 2

  // Return 1 if the string is already a palindrome
  return 1
}
