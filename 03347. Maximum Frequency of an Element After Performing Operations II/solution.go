/**
 * Problem: 3347. Maximum Frequency of an Element After Performing Operations II
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 23 ms (Beats 100%)
 */

// maxFrequency calculates the maximum frequency of an element after performing
// operations using the sliding window approach.
func maxFrequency(nums []int, k, numOperations int) (ans int) {
	// Call the sliding window implementation to compute the result.
	ans = maxFrequencySlidingWindow(nums, k, numOperations)

	return ans
}

// maxFrequencyPrefixSum calculates the maximum frequency of an element using
// the prefix sum approach.
func maxFrequencyPrefixSum(nums []int, k, numOperations int) (ans int) {
	// Map to store the count of each element in the array.
	cnt := map[int]int{}
	// Map to store the difference values for prefix sum calculation.
	diff := map[int]int{}

	// Populate the count and difference maps.
	for _, x := range nums {
		cnt[x]++
		diff[x] += 0
		diff[x-k]++
		diff[x+k+1]--
	}

	// Variable to store the cumulative sum of differences.
	sumD := 0

	// Iterate over sorted keys of the difference map.
	for _, x := range slices.Sorted(maps.Keys(diff)) {
		sumD += diff[x]
		// Update the maximum frequency considering the current element.
		ans = max(ans, min(sumD, cnt[x]+numOperations))
	}

	return
}

// maxFrequencySlidingWindow calculates the maximum frequency of an element
// using the sliding window approach.
func maxFrequencySlidingWindow(nums []int, k, numOperations int) (ans int) {
	// Sort the input array to facilitate the sliding window technique.
	slices.Sort(nums)
	n := len(nums)

	// Initialize variables for the sliding window and frequency count.
	var cnt, left, right int

	// Iterate through the array to calculate frequency.
	for i, x := range nums {
		cnt++

		// Skip duplicate elements to avoid redundant calculations.
		if i < n-1 && x == nums[i+1] {
			continue
		}

		// Adjust the left pointer to maintain the sliding window range.
		for nums[left] < x-k {
			left++
		}

		// Adjust the right pointer to include elements within range.
		for right < n && nums[right] <= x+k {
			right++
		}

		// Update the maximum frequency considering the current window.
		ans = max(ans, min(right-left, cnt+numOperations))
		cnt = 0
	}

	// If the result already satisfies the number of operations, return it.
	if ans >= numOperations {
		return ans
	}

	// Reset the left pointer for a second pass.
	left = 0

	// Iterate through the array to calculate frequency with extended range.
	for right, x := range nums {
		for nums[left] < x-k*2 {
			left++
		}

		// Update the maximum frequency considering the extended range.
		ans = max(ans, right-left+1)
	}

	// Return the minimum of the calculated frequency and allowed operations.
	return min(ans, numOperations)
}

// maxFrequencySlidingWindowOptimised calculates the maximum frequency of an
// element using an optimized sliding window approach.
func maxFrequencySlidingWindowOptimised(nums []int, k, numOperations int) (ans int) {
	// Sort the input array to facilitate the sliding window technique.
	slices.Sort(nums)
	n := len(nums)

	// Initialize variables for the sliding window and frequency count.
	var cnt, left, right, left2 int

	// Iterate through the array to calculate frequency.
	for i, x := range nums {
		// Adjust the left2 pointer for extended range calculations.
		for nums[left2] < x-k*2 {
			left2++
		}

		// Update the maximum frequency considering the extended range.
		ans = max(ans, min(i-left2+1, numOperations))
		cnt++

		// Skip duplicate elements to avoid redundant calculations.
		if i < n-1 && x == nums[i+1] {
			continue
		}

		// Adjust the left pointer to maintain the sliding window range.
		for nums[left] < x-k {
			left++
		}
		// Adjust the right pointer to include elements within range.
		for right < n && nums[right] <= x+k {
			right++
		}

		// Update the maximum frequency considering the current window.
		ans = max(ans, min(right-left, cnt+numOperations))
		cnt = 0
	}

	return
}
