/**
 * Problem: 1544. Make The String Great
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Removes adjacent same-letter opposite-case pairs from a string
 *
 * @param s - Input string of lower and upper case English letters
 *
 * @returns The string after all adjacent bad pairs are removed
 */
const makeGood = (s: string): string => {
  // Peek helper that returns the top of the stack or an empty string when empty
  const peek = (stack: string[]): string => stack.at(-1) ?? ''

  // Initialize an empty array to use as a stack
  const stack: string[] = []

  // Push the first character onto the stack to seed the comparison loop
  stack.push(s[0])

  // Iterate through the remaining characters of the input string
  for (let i: number = 1; i < s.length; i++) {
    // Get the character at the top of the stack
    const prev: string = peek(stack)
    // Get the current character being processed
    const curr: string = s[i]

    // Lowercase and uppercase forms of the previous character
    const prevLower: string = prev.toLowerCase(),
      prevUpper: string = prev.toUpperCase()

    // A bad pair occurs when one is the lowercase and the other the uppercase of the same letter
    if (
      (prev === prevLower && curr === prevUpper) ||
      (prev === prevUpper && curr === prevLower)
    )
      // Bad pair found, remove the top character
      stack.pop()
    else
      // No conflict, push the current character onto the stack
      stack.push(curr)
  }

  // Join the remaining characters back into a string
  return stack.join('')
}
