/**
 * Problem: 1093. Statistics from a Large Sample
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns min, max, mean, median, and mode from a pixel count array
 *
 * @param {number[]} count - Histogram of pixel values (0-255)
 *
 * @returns {number[]} - [min, max, mean, median, mode]
 */
const sampleStats = (count) => {
  // Initialize minIndex to Infinity and maxIndex to -Infinity to find min and max pixel values
  let minIndex = Infinity,
    maxIndex = -Infinity
  // meanCount stores total number of pixels, meanSum stores sum of pixel values, mode stores index of mode
  let meanCount = 0,
    meanSum = 0,
    mode = 0

  // Iterate through all possible pixel values (0-255)
  for (let i = 0; i < 256; i++) {
    // If pixel value i occurs at least once
    if (count[i] !== 0) {
      // Update minIndex and maxIndex to track smallest and largest pixel values
      minIndex = Math.min(minIndex, i)
      maxIndex = Math.max(maxIndex, i)

      // Accumulate total pixel count and weighted sum for mean calculation
      meanCount += count[i]
      meanSum += i * count[i]

      // Update mode if current pixel value has higher count than previous mode
      if (count[mode] < count[i]) mode = i
    }
  }

  // Initialize left and right cumulative counts for median calculation
  let nl = 0,
    nr = 0
  // leftIndex and rightIndex track current left and right pixel values for median
  let leftIndex = 0,
    rightIndex = 0
  // l and r are pointers for left and right ends of pixel values
  let l = 0
  let r = 255
  // median will store the computed median value
  let median = 0

  // Find median by moving pointers from both ends towards the center
  while (l <= r) {
    // Move left pointer to next non-zero pixel value
    while (count[l] === 0) l++
    // Move right pointer to previous non-zero pixel value
    while (count[r] === 0) r--

    // Accumulate counts from left or right depending on which side has fewer pixels so far
    if (nl < nr) {
      nl += count[l]
      leftIndex = l
      l++
    } else {
      nr += count[r]
      rightIndex = r
      r--
    }
  }

  // Determine median based on which side accumulated more pixels
  if (nl > nr) median = leftIndex
  else if (nl < nr) median = rightIndex
  else median = (leftIndex + rightIndex) / 2

  // Return array with min, max, mean, median, and mode
  return [minIndex, maxIndex, meanSum / meanCount, median, mode]
}
