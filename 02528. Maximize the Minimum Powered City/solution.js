/**
 * Problem: 2528. Maximize the Minimum Powered City
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 73 ms (Beats 100%)
 */

/**
 * Finds the max achievable minimum power by distributing extra power to stations
 *
 * @param {number[]} stations - Power levels of stations
 * @param {number} r - Influence range
 * @param {number} k - Extra power units
 *
 * @returns {number} - Max minimum power
 */
const maxPower = (stations, r, k) => {
  // Get the number of stations
  const n = stations.length

  // Initialize an array to track power distribution changes
  const cnt = new Array(n + 1).fill(0)

  // Distribute the initial power levels across the range of influence
  for (let i = 0; i < n; i++) {
    // Calculate the left and right bounds of the influence range
    const left = Math.max(0, i - r),
      right = Math.min(n, i + r + 1)

    // Update the power distribution at the bounds
    cnt[left] += stations[i]
    cnt[right] -= stations[i]
  }

  // Define a helper function to check if a given power level is achievable
  const check = (val) => {
    // Create a copy of the power distribution array
    const diff = [...cnt]

    // Initialize variables to track the current sum and remaining power
    let sum = 0
    let remaining = k

    // Iterate through each station to validate the power level
    for (let i = 0; i < n; i++) {
      // Update the current sum with the power distribution
      sum += diff[i]

      // If the current sum is less than the target value
      if (sum < val) {
        // Calculate the additional power needed
        const add = val - sum

        // If not enough power remains, return false
        if (remaining < add) return false

        // Deduct the added power from the remaining power
        remaining -= add

        // Update the power distribution beyond the current range
        const end = Math.min(n, i + 2 * r + 1)
        diff[end] -= add

        // Update the current sum with the added power
        sum += add
      }
    }

    // Return true if the target power level is achievable
    return true
  }

  // Initialize the binary search bounds
  let lo = Math.min(...stations) // Minimum power level
  let hi = stations.reduce((a, b) => a + b, 0) + k // Maximum power level
  let res = 0 // Variable to store the result

  // Perform binary search to find the maximum achievable minimum power
  while (lo <= hi) {
    // Calculate the mid-point of the current range
    const mid = Math.floor(lo + (hi - lo) / 2)

    // Check if the mid-point power level is achievable
    if (check(mid)) {
      // Update the result and adjust the lower bound
      res = mid
      lo = mid + 1
    } else {
      // Adjust the upper bound if the mid-point is not achievable
      hi = mid - 1
    }
  }

  // Return the maximum achievable minimum power
  return res
}
