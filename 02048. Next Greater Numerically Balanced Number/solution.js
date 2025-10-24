/**
 * Problem: 2048. Next Greater Numerically Balanced Number
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

// Define an array named 'balance' that contains precomputed beautiful numbers.
// Beautiful numbers are numbers where the count of each digit equals the digit itself.
const balance = [
  1, 22, 122, 212, 221, 333, 1333, 3133, 3313, 3331, 4444, 14444, 22333, 23233,
  23323, 23332, 32233, 32323, 32332, 33223, 33232, 33322, 41444, 44144, 44414,
  44441, 55555, 122333, 123233, 123323, 123332, 132233, 132323, 132332, 133223,
  133232, 133322, 155555, 212333, 213233, 213323, 213332, 221333, 223133,
  223313, 223331, 224444, 231233, 231323, 231332, 232133, 232313, 232331,
  233123, 233132, 233213, 233231, 233312, 233321, 242444, 244244, 244424,
  244442, 312233, 312323, 312332, 313223, 313232, 313322, 321233, 321323,
  321332, 322133, 322313, 322331, 323123, 323132, 323213, 323231, 323312,
  323321, 331223, 331232, 331322, 332123, 332132, 332213, 332231, 332312,
  332321, 333122, 333212, 333221, 422444, 424244, 424424, 424442, 442244,
  442424, 442442, 444224, 444242, 444422, 515555, 551555, 555155, 555515,
  555551, 666666, 1224444
]

/**
 * Finds the next beautiful number greater than n
 *
 * @param {number} n - Input number
 *
 * @returns {number} - Next beautiful number
 */
const nextBeautifulNumber = (n) => {
  // Initialize the left pointer to the start of the balance array
  let left = 0,
    // Initialize the right pointer to the end of the balance array
    right = balance.length - 1

  // Perform binary search to find the next beautiful number
  while (left < right) {
    // Calculate the middle index of the current range
    const mid = (left + right) >> 1

    // If the middle value is less than or equal to n, move the left pointer
    if (balance[mid] <= n) left = mid + 1
    // Otherwise, adjust the right pointer to narrow the range
    else right = mid
  }

  // Return the value at the left pointer as the next beautiful number
  return balance[left]
}
