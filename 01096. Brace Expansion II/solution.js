/**
 * Problem: 1096. Brace Expansion II
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 5 ms (Beats 100%)
 */

/**
 * Performs the union of two sets by adding all elements of set b to set a
 *
 * @param {Set<string>} a - The first set
 * @param {Set<string>} b - The second set
 *
 * @returns {Set<string>} - The union of sets a and b
 */
const union = (a, b) => {
  // Iterate over each element in set b and add it to set a to perform union
  b.forEach((val) => a.add(val))

  // Return the resulting set a, which now contains all elements from both sets
  return a
}

/**
 * Computes the Cartesian product of two sets, concatenating their elements
 *
 * @param {Set<string>} a - The first set
 * @param {Set<string>} b - The second set
 *
 * @returns {Set<string>} - The product set containing all concatenations
 */
const product = (a, b) => {
  // Create a new set to store the Cartesian product results
  const newSet = new Set()

  // For each element in set a, concatenate with each element in set b and add to newSet
  a.forEach((valA) => b.forEach((valB) => newSet.add(valA + valB)))

  // Return the set containing all possible concatenations
  return newSet
}

/**
 * Applies a sequence of operations to an array of sets, respecting operation precedence.
 * @param {Set<string>[]} sets - Array of sets to operate on.
 * @param {Function[]} ops - Array of operations (union or product).
 * @returns {Set<string>} The resulting set after all operations.
 */
const createSet = (sets, ops) => {
  // Initialize index for iterating through operations
  let i = 0

  // First pass: resolve all product operations (higher precedence)
  while (i < ops.length) {
    const operation = ops[i] // Get current operation

    // If the operation is product, perform it on adjacent sets
    if (operation === product) {
      const [a, b] = [sets[i], sets[i + 1]] // Get the two sets to operate on
      const newSet = operation(a, b) // Compute the product

      ops.splice(i, 1) // Remove the product operation from ops
      sets.splice(i, 2, newSet) // Replace the two sets with the result
    }
    // If not product, move to next operation
    else i++
  }

  // Reset index for union operations
  i = 0

  // Second pass: resolve all remaining union operations (lower precedence)
  while (ops.length) {
    const operation = ops[i] // Get current operation
    const [a, b] = [sets[i], sets[i + 1]] // Get the two sets to operate on
    const newSet = operation(a, b) // Compute the union

    ops.splice(i, 1) // Remove the union operation from ops
    sets.splice(i, 2, newSet) // Replace the two sets with the result
  }

  // Return the final set after all operations have been applied
  return sets[0]
}

/**
 * Recursively parses an expression and generates the corresponding set
 *
 * @param {string} exp - The expression to parse
 * @param {number} startI - The starting index for parsing
 *
 * @returns {[number, Set<string>]} - The next index and the generated set
 */
const genSet = (exp, startI) => {
  // Initialize an array to hold sets parsed from the expression
  const sets = []
  // Initialize an array to hold operations (union or product) between sets
  const operations = []

  // Iterate through the expression starting from the next character after startI
  for (let i = startI + 1; i < exp.length; i++) {
    const char = exp[i] // Get the current character

    // If the current character is an opening brace, recursively parse the nested expression
    if (char === '{') {
      const [nextI, nextSet] = genSet(exp, i) // Recursively generate set for nested expression

      i = nextI // Update the index to the position after the nested expression
      sets.push(nextSet) // Add the generated set to the sets array
    }
    // If the current character is a comma, it indicates a union operation
    else if (char === ',')
      operations.push(union) // Add union operation to operations array
    // If the current character is a closing brace, return the current index and the combined set
    else if (char === '}') return [i, createSet(sets, operations)]
    // If the current character is a letter, create a set containing the character
    else sets.push(new Set([char])) // Add the single-character set to sets array

    // If there are more sets than operations + 1, add a product operation by default
    if (operations.length < sets.length - 1) operations.push(product)
  }

  // If the end of the expression is reached, return the final combined set
  return [exp.length, createSet(sets, operations)]
}

/**
 * Expands the given brace expression according to brace expansion II rules
 *
 * @param {string} expression - The brace expression to expand
 *
 * @returns {string[]} - The sorted array of expanded strings
 */
const braceExpansionII = (expression) => {
  // Parse the expression and generate the resulting set using genSet
  const [, resultSet] = genSet(expression, -1) // The first element is the next index, second is the set

  // Convert the set to an array, sort it lexicographically, and return
  return Array.from(resultSet).sort()
}
