/**
 * Problem: 1224. Maximum Equal Frequency
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 9 ms (Beats 100%)
 */

// Initialize an array 'c' to store the count of each number (frequency of each element)
const c = Array(100001)
// Initialize an array 'f' to store the count of each frequency (how many numbers have a certain frequency)
const f = Array(100001)

/**
 * Returns the longest prefix where frequencies can be equal by removing one element
 *
 * @param {number[]} nums - Input array
 *
 * @returns {number} - Length of the prefix
 */
const maxEqualFreq = (nums) => {
  // Get the length of the input array
  const n = nums.length

  // Reset all counts in 'c' to 0
  c.fill(0)
  // Reset all counts in 'f' to 0, only up to n + 1 for efficiency
  f.fill(0, 0, n + 1)

  // Flag to check if all elements are the same so far
  let same = true,
    // Store the result (maximum prefix length)
    res = 0,
    // Track the minimum frequency among numbers
    min1 = 1,
    // Track the maximum frequency among numbers
    max1 = 1,
    // Secondary minimum frequency (used for edge cases)
    min2,
    // Secondary maximum frequency (used for edge cases)
    max2

  // Set the frequency of the first number to 1
  c[nums[0]] = 1
  // There is one number with frequency 1
  f[1] = 1

  // Iterate through the array starting from the second element
  for (let i = 1; i < n; i++) {
    // Check if the current number is different from the previous one
    if (nums[i] !== nums[i - 1]) same = false

    // Get the current number
    const num = nums[i]
    // Get the current frequency of this number
    const fre = c[num]

    // Increment the frequency of the current number
    c[num]++
    // Decrement the count of numbers with the old frequency
    f[fre]--
    // Increment the count of numbers with the new frequency
    f[fre + 1]++

    // If the old frequency was the current maximum, update max1
    if (fre === max1) {
      max1++

      // If there are still numbers with the old frequency, update max2
      if (f[fre]) max2 = fre
    }
    // If the old frequency was the secondary maximum, update max2
    else if (fre === max2) max2++

    // If the old frequency was zero (first occurrence of this number)
    if (fre === 0) {
      // If max2 is not set, initialize it to 1
      if (max2 === undefined) max2 = 1

      // Update secondary minimum frequency
      min2 = min1
      // Set minimum frequency to 1
      min1 = 1
    }
    // If the old frequency was the minimum frequency
    else if (fre === min1) {
      // If no numbers left with the old minimum frequency, increment min1
      if (f[fre] === 0) min1++
      // If only one number left with the old minimum frequency, update min2
      else if (f[fre] === 1) min2 = fre + 1
    }
    // If the old frequency was the secondary minimum frequency
    else if (fre === min2) {
      // If no numbers left with the old secondary minimum frequency, increment min2
      if (!f[fre]) min2++
    }

    // Check if the current prefix can have equal frequencies by removing one element
    if (
      same || // All elements are the same
      (min1 === 1 && min2 === max1) || // One number with frequency 1, others with max frequency
      (min1 === max2 && max1 === min1 + 1) // Two frequencies differing by 1
    )
      // Update the result to the current index
      res = i
  }

  // Return the length of the longest valid prefix
  return res + 1
}
