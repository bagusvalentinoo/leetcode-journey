/**
 * Problem: 3346. Maximum Frequency of an Element After Performing Operations I
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 9 ms (Beats 100%)
 */

func maxFrequency(nums []int, k int, numOperations int) int {
	// Check if the input slice is empty, return 0 if true
	if len(nums) == 0 {
		return 0
	}

	// Initialize the maximum value in the slice as the first element
	mx := nums[0]

	// Iterate through the slice to find the maximum value
	for _, v := range nums {
		if v > mx {
			mx = v
		}
	}

	// Calculate the size of the count array based on the maximum value and k
	size := mx + k + 2

	// Create a count array to store the frequency of each number
	count := make([]int, size)

	// Populate the count array with the frequency of each number in nums
	for _, v := range nums {
		count[v]++
	}

	// Compute the prefix sum of the count array
	for i := 1; i < size; i++ {
		count[i] += count[i-1]
	}

	// Initialize the variable to store the maximum frequency
	ans := 0

	// Iterate through all possible target values (t)
	for t := 0; t < size; t++ {
		// Calculate the left boundary (L) for the range
		L := t - k
		if L < 0 {
			L = 0
		}

		// Calculate the right boundary (R) for the range
		R := t + k
		if R > size-1 {
			R = size - 1
		}

		// Calculate the total frequency within the range [L, R]
		total := count[R]
		if L > 0 {
			total -= count[L-1]
		}

		// Calculate the frequency of the current target value (t)
		freq_t := count[t]
		if t > 0 {
			freq_t -= count[t-1]
		}

		// Calculate the number of elements that can be converted to t
		canConvert := total - freq_t

		// Determine the number of operations to use
		take := numOperations
		if take > canConvert {
			take = canConvert
		}

		// Calculate the potential maximum frequency for the current target
		val := freq_t + take

		// Update the maximum frequency if the current value is greater
		if val > ans {
			ans = val
		}
	}

	// Return the maximum frequency found
	return ans
}
