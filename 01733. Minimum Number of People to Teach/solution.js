/**
 * Problem: 1733. Minimum Number of People to Teach
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 21 ms (Beats 100%)
 */

/**
 * Returns the minimum number of people to teach so all friends can communicate
 *
 * @param {number} n - Number of languages
 * @param {number[][]} languages - Languages known per person
 * @param {number[][]} friendships - Friend pairs
 *
 * @returns {number} - Minimum people to teach
 */
const minimumTeachings = (n, languages, friendships) => {
  // Get the number of people
  const numPeople = languages.length

  // Initialize a 2D boolean array to track which person knows which language
  const knowsLanguage = initialize2DArrayNew(numPeople, n)

  // Mark the languages each person knows in the knowsLanguage array
  for (let personIdx = 0; personIdx < numPeople; personIdx++)
    for (const lang of languages[personIdx])
      knowsLanguage[personIdx][lang - 1] = true

  // Create a set to store people who cannot communicate with their friends
  const needTeachingSet = new Set()

  // Iterate through each friendship pair
  for (const friendship of friendships) {
    // Convert to zero-based indices for both friends
    const friendA = friendship[0] - 1,
      friendB = friendship[1] - 1

    // Flag to check if they can communicate
    let canCommunicateFlag = false

    // Check if friendB knows any language that friendA knows
    for (const lang of languages[friendA])
      if (knowsLanguage[friendB][lang - 1]) canCommunicateFlag = true

    // If they can communicate, skip to next friendship
    if (canCommunicateFlag) continue

    // Otherwise, add both friends to the set of people needing teaching
    needTeachingSet.add(friendA)
    needTeachingSet.add(friendB)
  }

  // Initialize result with a large number (maximum safe integer)
  let minTeachCount = Number.MAX_SAFE_INTEGER

  // Try teaching each language and find the minimum number of people to teach
  for (let langIdx = 0; langIdx < n; langIdx++) {
    let teachCount = 0

    // Count how many people in needTeachingSet do not know this language
    for (const userIdx of needTeachingSet)
      if (!knowsLanguage[userIdx][langIdx]) teachCount++

    // Update the minimum teach count if current is lower
    minTeachCount = Math.min(minTeachCount, teachCount)
  }

  // Return the minimum number of people to teach
  return minTeachCount
}

/**
 * Initializes a 2D array of size m x n filled with false values
 *
 * @param {number} m - Number of rows
 * @param {number} n - Number of columns
 *
 * @returns {boolean[][]} - 2D array filled with false
 */
const initialize2DArrayNew = (m, n) => {
  // Initialize an empty array to hold the rows of the 2D array
  const data = []

  // Loop through each row index from 0 to m-1
  for (let rowIndex = 0; rowIndex < m; rowIndex++) {
    // Create a new array of length n, filled with false values for each column
    const row = new Array(n).fill(false)

    // Add the row array to the main data array
    data.push(row)
  }

  // Return the completed 2D array filled with false values
  return data
}
