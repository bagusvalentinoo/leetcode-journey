/**
 * Problem: 16. 3Sum Closest
 *
 * Difficulty: Medium
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

 func threeSumClosest(nums []int, target int) int {
	// Initialize result with maximum possible integer
	res := math.MaxInt32
	// Sort the array to enable two-pointer technique
	sort.Ints(nums)

	for i := 0; i <= len(nums)-3; i++ {
		// Skip duplicates to avoid redundant calculations
		if i > 0 && nums[i] == nums[i-1] {
			continue
		}

		// Initialize two pointers for the remaining two numbers
		left := i + 1
		right := len(nums) - 1

		// Optimization: if smallest possible sum is greater than target
		if nums[i]+nums[left]+nums[left+1] > target {
			// Update result if this sum is closer to target
			if abs(nums[i]+nums[left]+nums[left+1]-target) < abs(res-target) {
				res = nums[i] + nums[left] + nums[left+1]
			}

			break
		}

		// Optimization: if largest possible sum is less than target
		if nums[i]+nums[right]+nums[right-1] < target {
			// Update result if this sum is closer to target
			if abs(nums[i]+nums[right]+nums[right-1]-target) < abs(res-target) {
				res = nums[i] + nums[right] + nums[right-1]
			}

			continue
		}

		// Use two-pointer technique to find closest sum
		for left < right {
			sum := nums[i] + nums[left] + nums[right]

			// Return early if exact match found
			if sum == target {
				return target
			}

			// Update result if current sum is closer to target
			if abs(target-sum) < abs(target-res) {
				res = sum
			}

			// Move pointers based on comparison with target
			if sum < target {
				left++

				// Skip duplicates
				for left < right && nums[left] == nums[left-1] {
					left++
				}
			} else {
				right--

				// Skip duplicates
				for left < right && nums[right] == nums[right+1] {
					right--
				}
			}
		}
	}

	return res
}

// Helper function to calculate absolute value
func abs(x int) int {
	if x < 0 {
		return -x
	}

	return x
}