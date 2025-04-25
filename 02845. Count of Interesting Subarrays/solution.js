/**
 * Problem: 2845. Count of Interesting Subarrays
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 18 ms (Beats 100%)
 */

/**
 * Counts the number of interesting subarrays in the given array
 *
 * @param {number[]} nums - The input array of integers
 * @param {number} modulo - The modulo value
 * @param {number} k - The target remainder
 *
 * @returns {number} - The count of interesting subarrays
 */
const countInterestingSubarrays = (nums, modulo, k) => {
  // Array to store the prefix sum of subarrays
  const arr = [-1]

  // Result variable to store the count of interesting subarrays
  let res = 0

  // Array to store the prefix sum of subarrays
  let dp
  let isDp = false

  // If modulo is less than the length of the array, initialize the dp array and set isDp to true
  if (modulo < nums.length) {
    dp = new Array(modulo).fill(0)
    isDp = true
  }

  // Iterate over the array
  for (let i = 0; i <= nums.length; i++) {
    // If the current element is the last element or the current element is equal to k
    if (i === nums.length || nums[i] % modulo === k) {
      // Calculate the length of the subarray
      let len
      k === 0 ? (len = modulo) : (len = k)

      /**
       * If the length of the subarray is less than the length of the array
       * and isDp is true, add the count of subarrays with sum equal to i
       */
      if (len < arr.length && isDp)
        res += dp[(arr.length - len - 1) % modulo] * (i - arr[arr.length - 1])
      /**
       * If the length of the subarray is less than the length of the array
       * and isDp is false, add the count of subarrays with sum equal to i
       */ else if (len < arr.length)
        res +=
          (i - arr[arr.length - 1]) *
          (arr[arr.length - len] - arr[arr.length - len - 1])

      // If isDp is true, add the count of subarrays with sum equal to i
      if (isDp) dp[(arr.length - 1) % modulo] += i - arr[arr.length - 1]

      arr.push(i) // Add the current element to the array
    }
    // If k is 0, add the count of subarrays with sum equal to i
    else if (k === 0) res += i - arr[arr.length - 1]
  }

  return res
}
