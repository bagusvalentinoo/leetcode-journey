/**
 * Problem: 1111. Maximum Nesting Depth of Two Valid Parentheses Strings
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

/**
 * Returns the depth assignment for each parenthesis in the string
 *
 * @param {string} seq - Parentheses string
 *
 * @returns {number[]} - Depth assignments
 */
const maxDepthAfterSplit = (seq) => {
  // Initialize an array to store the depth assignments for each parenthesis
  const depthAssignments = []
  // Initialize a variable to keep track of the current depth
  let currentDepth = 0

  // Iterate through each character in the input sequence
  for (const parenthesis of seq) {
    if (parenthesis === '(') {
      // Increment depth for an opening parenthesis
      ++currentDepth
      // Assign depth parity (0 or 1) to the current parenthesis and add to the result
      depthAssignments.push(currentDepth & 1)
    } else {
      // Assign depth parity (0 or 1) to the current parenthesis before decrementing
      depthAssignments.push(currentDepth & 1)
      // Decrement depth for a closing parenthesis
      --currentDepth
    }
  }

  // Return the array containing depth assignments for each parenthesis
  return depthAssignments
}
