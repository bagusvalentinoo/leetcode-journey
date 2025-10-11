/**
 * Problem: 3186. Maximum Total Damage With Spell Casting
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 306 ms (Beats 100%)
 */

/**
 * Calculates the maximum total damage
 *
 * @param {number[]} power - Array of power values
 *
 * @returns {number} - Maximum total damage
 */
const maximumTotalDamage = (power) => {
  // Return 0 if power array is null or empty
  if (!power || power.length === 0) return 0

  // Create a map to store frequency of each power value
  const frequencyMap = new Map()

  // Count occurrences of each power value
  for (const value of power)
    frequencyMap.set(value, (frequencyMap.get(value) || 0) + 1)

  // Extract unique power values and sort them in ascending order
  const sortedValues = Array.from(frequencyMap.keys()).sort((a, b) => a - b)
  const uniqueCount = sortedValues.length

  // Return 0 if there are no unique power values
  if (uniqueCount === 0) return 0

  // Create an array to store total damage for each unique value
  const totalDamage = new Array(uniqueCount)

  // Calculate total damage for each unique power value
  for (let i = 0; i < uniqueCount; ++i)
    totalDamage[i] = sortedValues[i] * frequencyMap.get(sortedValues[i])

  // Initialize dynamic programming array to store max damage up to each index
  const maxDamageDP = new Array(uniqueCount).fill(0)

  // Set the first value in DP array
  maxDamageDP[0] = totalDamage[0]

  // Iterate through each unique power value to fill DP array
  for (let i = 1; i < uniqueCount; ++i) {
    // Calculate the minimum value that can be taken without conflict
    const minAllowedValue = sortedValues[i] - 3

    // Initialize binary search pointers and result index
    let left = 0,
      right = i - 1,
      validIndex = -1

    // Binary search to find the largest index with value <= minAllowedValue
    while (left <= right) {
      const mid = (left + right) >> 1

      // If mid value is valid, move right to find a larger valid index
      if (sortedValues[mid] <= minAllowedValue) {
        validIndex = mid
        left = mid + 1
      }
      // If mid value is not valid, move left
      else right = mid - 1
    }

    // Calculate damage if current value is taken
    const takeCurrent =
      totalDamage[i] + (validIndex >= 0 ? maxDamageDP[validIndex] : 0)
    // Calculate damage if current value is skipped
    const skipCurrent = maxDamageDP[i - 1]

    // Store the maximum of taking or skipping current value
    maxDamageDP[i] = Math.max(skipCurrent, takeCurrent)
  }

  // Return the maximum total damage possible
  return maxDamageDP[uniqueCount - 1]
}
