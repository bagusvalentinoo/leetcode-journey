/**
 * Problem: 974. Subarray Sums Divisible by K
 *
 * Difficulty: Medium
 *
 * Language: Go
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

func subarraysDivByK(nums []int, k int) int {
	// frequency map for remainder counts
	remainderFreq := make([]int, k)
	remainderFreq[0] = 1

	// running sum and result counter
	runningSum, count := 0, 0

	for _, num := range nums {
		// calculate remainder of current running sum
		runningSum = (runningSum + num) % k
		
		// convert negative remainder to positive equivalent
		if runningSum < 0 {
			runningSum += k
		}
		
		// add existing subarrays with same remainder to result
		count += remainderFreq[runningSum]
		
		// update frequency of current remainder
		remainderFreq[runningSum]++
	}
	
	return count
}