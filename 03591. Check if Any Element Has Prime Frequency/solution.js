/**
 * Problem: 3591. Check if Any Element Has Prime Frequency
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if a number is prime
 *
 * @param {number} num - Number to check
 *
 * @returns {boolean} True if number is prime
 */
const isPrime = (num) => {
  // 0 and 1 are not prime numbers
  if (num === 0 || num === 1) return false
  // 2 is the only even prime number
  if (num === 2) return true

  // Start checking divisibility from 2
  let divisor = 2

  // Check all potential divisors up to the number itself
  while (num > divisor) {
    // If divisible, number is not prime
    if (num % divisor === 0) return false

    // Move to next divisor
    divisor++
  }

  // No divisors found, number is prime
  return true
}

/**
 * Counts frequency of a specific number in the array
 *
 * @param {number[]} numArr - Array of numbers
 * @param {number} num - Number to count
 *
 * @returns {number} Frequency of the number
 */
const countFrequency = (numArr, num) => {
  // Initialize frequency counter
  let frequency = 0

  // Iterate through array to count occurrences
  numArr.forEach((element) => {
    // Increment count if element matches target number
    if (element === num) frequency++
  })

  // Return total frequency
  return frequency
}

/**
 * Checks if any number appears a prime number of times
 *
 * @param {number[]} nums - Input array of integers
 *
 * @returns {boolean} True if any frequency is prime
 */
const checkPrimeFrequency = (nums) => {
  // Map to store already processed numbers
  const frequencyMap = new Map()

  // Iterate through each element in the array
  for (let index = 0; index < nums.length; index++) {
    // Check if current number has been processed before
    if (frequencyMap.get(nums[index]) === undefined) {
      // Count frequency of current number in the entire array
      const frequencyValue = countFrequency(nums, nums[index])

      // If frequency is prime, return true immediately
      if (isPrime(frequencyValue)) return true

      // Store processed number to avoid re-processing
      frequencyMap.set(nums[index], frequencyValue)
    }
  }

  // No prime frequencies found
  return false
}
