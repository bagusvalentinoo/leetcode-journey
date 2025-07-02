/**
 * Problem: 3333. Find the Original Typed String II
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 272 ms (Beats 100%)
 */

/**
 * Counts the number of valid strings that can be formed from the input string
 *
 * @param {string} word - Input string of lowercase letters
 * @param {number} k - Minimum length for valid strings
 *
 * @returns {number} - Count of valid strings mod 1e9 + 7
 */
const possibleStringCount = (word, k) => {
  // Define modulo constant for overflow prevention
  const MOD = 1e9 + 7
  const stringLength = word.length
  const consecutiveRuns = []

  // Track consecutive character runs
  let currentChar = word[0],
    runLength = 1

  // Find all consecutive character runs in the string
  for (let i = 1; i < stringLength; i++) {
    if (word[i] === currentChar) runLength++
    else {
      consecutiveRuns.push(runLength)
      currentChar = word[i]
      runLength = 1
    }
  }

  // Add the last run
  consecutiveRuns.push(runLength)

  const numberOfRuns = consecutiveRuns.length

  // If we already have enough runs, return product of all run lengths
  if (numberOfRuns >= k) {
    let product = 1

    for (const runSize of consecutiveRuns) product = (product * runSize) % MOD

    return product
  }

  // Calculate deficit - how many more characters we need
  const deficit = k - numberOfRuns
  let totalCombinations = 1

  // Calculate total possible combinations
  for (const runSize of consecutiveRuns)
    totalCombinations = (totalCombinations * runSize) % MOD

  // Initialize DP array for tracking invalid combinations
  let dpArray = new Array(deficit).fill(0)

  dpArray[0] = 1

  // Process each run to calculate invalid combinations
  for (const runSize of consecutiveRuns) {
    const allowedReductions = runSize - 1

    if (allowedReductions === 0) continue

    // Build prefix sum array for range queries
    const prefixSum = new Array(deficit).fill(0)
    prefixSum[0] = dpArray[0]

    for (let state = 1; state < deficit; state++)
      prefixSum[state] = (prefixSum[state - 1] + dpArray[state]) % MOD

    // Create new DP array for this iteration
    const newDpArray = new Array(deficit).fill(0)

    // Calculate new DP values using sliding window technique
    for (let state = 0; state < deficit; state++) {
      const lowerBound = state - allowedReductions - 1
      newDpArray[state] =
        prefixSum[state] - (lowerBound >= 0 ? prefixSum[lowerBound] : 0)

      if (newDpArray[state] < 0) newDpArray[state] += MOD
    }

    dpArray = newDpArray
  }

  // Sum all invalid combinations
  let invalidCombinations = 0

  for (let state = 0; state < deficit; state++)
    invalidCombinations = (invalidCombinations + dpArray[state]) % MOD

  // Return valid combinations (total - invalid)
  return (totalCombinations - invalidCombinations + MOD) % MOD
}
