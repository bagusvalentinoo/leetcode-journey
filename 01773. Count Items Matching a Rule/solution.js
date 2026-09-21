/**
 * Problem: 1773. Count Items Matching a Rule
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts items matching the rule key and value
 *
 * @param {string[][]} items - Array of [type, color, name] items
 * @param {string} ruleKey - Rule key ("type", "color" or "name")
 * @param {string} ruleValue - Rule value to match
 *
 * @returns {number} Number of matching items
 */
const countMatches = (items, ruleKey, ruleValue) => {
  // Map rule key to column index (type = 0, color = 1, name = 2)
  const keyIndex = ruleKey === 'type' ? 0 : ruleKey === 'color' ? 1 : 2

  // Counter for matching items
  let matchesCount = 0

  // Iterate through each item in the array
  for (const item of items) {
    // Check if the ruled column equals the rule value
    if (item[keyIndex] === ruleValue) matchesCount++
  }

  // Return the total number of matching items
  return matchesCount
}
