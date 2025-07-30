/**
 * Problem: 1090. Largest Values From Labels
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 10 ms (Beats 100%)
 */

/**
 * Selects up to `numWanted` values, with at most `useLimit` per label, for the largest sum
 *
 * @param {number[]} values - Item values
 * @param {number[]} labels - Labels for each value
 * @param {number} numWanted - Max items to select
 * @param {number} useLimit - Max items per label
 *
 * @returns {number} - Largest sum of selected values
 */
const largestValsFromLabels = (values, labels, numWanted, useLimit) => {
  // Map each value to an object containing its value and corresponding label
  const items = values.map((value, index) => ({ value, label: labels[index] }))

  // Sort items in descending order by value to prioritize larger values
  items.sort((a, b) => b.value - a.value)

  // Create a Map to track how many times each label has been used
  const labelUsageCount = new Map()

  // Initialize total sum and count of chosen items
  let totalSum = 0,
    selectedCount = 0

  // Iterate through sorted items to select values according to constraints
  for (const item of items) {
    // Stop if the required number of items have been selected
    if (selectedCount >= numWanted) break

    // Get current usage count for the item's label, defaulting to 0
    const currentLabelCount = labelUsageCount.get(item.label) || 0

    // If label usage is within the allowed limit, select the item
    if (currentLabelCount < useLimit) {
      totalSum += item.value // Add item's value to total sum
      labelUsageCount.set(item.label, currentLabelCount + 1) // Update label usage count
      selectedCount++ // Increment count of selected items
    }
  }

  // Return the largest sum of selected values
  return totalSum
}
