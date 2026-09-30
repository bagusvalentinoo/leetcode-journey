/**
 * Problem: 1111. Maximum Nesting Depth of Two Valid Parentheses Strings
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns the depth assignment for each parenthesis in the string
 *
 * @param seq - Parentheses string
 *
 * @returns Depth assignments
 */
const maxDepthAfterSplit = (seq: string): number[] => {
  // Initialize answer array to store depth assignment for each parenthesis
  const answer: number[] = []
  // Track current nesting depth while scanning the sequence
  let depth: number = 0

  // Iterate through each character in the input sequence
  for (const ch of seq) {
    if (ch === '(') {
      // Increment depth for an opening parenthesis
      depth++
      // Assign current depth parity to split nesting evenly
      answer.push(depth % 2)
    } else {
      // Assign current depth parity before closing reduces depth
      answer.push(depth % 2)
      // Decrement depth for a closing parenthesis
      depth--
    }
  }

  // Return the array containing depth assignments for each parenthesis
  return answer
}
