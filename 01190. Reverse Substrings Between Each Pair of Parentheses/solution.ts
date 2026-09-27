/**
 * Problem: 1190. Reverse Substrings Between Each Pair of Parentheses
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Reverses substrings between each pair of parentheses innermost first
 *
 * @param s - String with lowercase letters and balanced parentheses
 *
 * @returns Result string with all brackets removed
 */
const reverseParentheses = (s: string): string => {
  // Store matching parenthesis index for each bracket position
  const pair: number[] = new Array<number>(s.length)

  // Stack tracks indices of open parentheses awaiting a match
  const stack: number[] = []

  // Build pair mapping between open and close parentheses
  for (let i = 0; i < s.length; i++) {
    // Push open parenthesis index for later matching
    if (s[i] === '(') stack.push(i)
    // On close parenthesis link both positions together
    else if (s[i] === ')') {
      // Pop matching open index
      const openIndex: number = stack.pop()!

      // Link close to open and open to close
      pair[i] = openIndex
      pair[openIndex] = i
    }
  }

  // Builder holds final result without parentheses
  let result: string = ''

  // Traversal position and direction, flipping at each parenthesis
  let index: number = 0, direction = 1

  // Traverse string, jumping between pairs and reversing direction
  while (index >= 0 && index < s.length) {
    // On parenthesis jump to its pair and reverse traversal direction
    if (s[index] === '(' || s[index] === ')') {
      index = pair[index]
      direction = -direction
    }
    // On letter append it to the result
    else result += s[index]

    // Move to next position in current direction
    index += direction
  }

  // Return the built string with all brackets removed
  return result
}
