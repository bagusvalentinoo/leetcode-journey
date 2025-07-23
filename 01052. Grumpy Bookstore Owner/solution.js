/**
 * Problem: 1052. Grumpy Bookstore Owner
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates the maximum satisfied customers using the technique
 *
 * @param {number[]} customers - Customers per minute
 * @param {number[]} grumpy - 1 if grumpy, 0 otherwise
 * @param {number} minutes - Technique duration
 *
 * @returns {number} - Maximum satisfied customers
 */
const maxSatisfied = (customers, grumpy, minutes) => {
  // Initialize the maximum additional satisfied customers using the technique
  let maxAdditionalSatisfied = 0
  // Initialize the total satisfied customers without using the technique
  let totalSatisfied = 0

  // Calculate initial window (first 'minutes') of additional satisfied customers
  for (let i = 0; i < minutes; i++) {
    // If owner is grumpy, these customers can be satisfied by the technique
    if (grumpy[i] === 1) maxAdditionalSatisfied += customers[i]
    // If owner is not grumpy, these customers are always satisfied
    else totalSatisfied += customers[i]
  }

  // Initialize left pointer for sliding window
  let left = 0
  // Current additional satisfied customers in the window
  let currentAdditionalSatisfied = maxAdditionalSatisfied

  // Slide the window through the rest of the array
  for (let right = minutes; right < customers.length; right++) {
    // Remove the effect of the leftmost minute if owner was grumpy
    if (grumpy[left] === 1) currentAdditionalSatisfied -= customers[left]

    // Move the window forward
    left++

    // Add the effect of the new rightmost minute
    if (grumpy[right] === 1) currentAdditionalSatisfied += customers[right]
    // If owner is not grumpy, these customers are always satisfied
    else totalSatisfied += customers[right]

    // Update the maximum additional satisfied customers
    maxAdditionalSatisfied = Math.max(
      maxAdditionalSatisfied,
      currentAdditionalSatisfied
    )
  }

  // Return the sum of always satisfied and maximum additional satisfied customers
  return totalSatisfied + maxAdditionalSatisfied
}
