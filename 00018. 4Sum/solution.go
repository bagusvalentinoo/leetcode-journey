/**
 * Problem: 18. 4Sum
 *
 * Difficulty: Medium
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

import (
	"sort"
)

func fourSum(nums []int, target int) [][]int {
	// Store result quadruplets
	res := [][]int{}

	// Sort array for easier processing
	sort.Ints(nums)

	length := len(nums)

	// Early return if not enough elements
	if length < 4 {
		return res
	}

	// First pointer loop
	for i := 0; i < length-3; i++ {
		// Skip duplicates for first element
		if i != 0 && nums[i] == nums[i-1] {
			continue
		}
		// Break if smallest possible sum exceeds target
		if nums[i]+nums[i+1]+nums[i+2]+nums[i+3] > target {
			break
		}
		// Skip if largest possible sum is too small
		if nums[i]+nums[length-3]+nums[length-2]+nums[length-1] < target {
			continue
		}

		// Second pointer loop
		for j := i + 1; j < length-2; j++ {
			// Skip duplicates for second element
			if j > i+1 && nums[j] == nums[j-1] {
				continue
			}
			// Break if smallest possible sum exceeds target
			if nums[i]+nums[j]+nums[j+1]+nums[j+2] > target {
				break
			}
			// Skip if largest possible sum is too small
			if nums[i]+nums[j]+nums[length-2]+nums[length-1] < target {
				continue
			}

			// Use two-pointer technique for the remaining elements
			left := j + 1
			right := length - 1

			// Two pointers moving toward each other
			for left < right {
				sum := nums[i] + nums[j] + nums[left] + nums[right]

				if sum == target {
					// Found a valid quadruplet
					res = append(res, []int{nums[i], nums[j], nums[left], nums[right]})

					// Skip duplicates for third element
					for left < right && nums[left] == nums[left+1] {
						left++
					}
					left++

					// Skip duplicates for fourth element
					for left < right && nums[right] == nums[right-1] {
						right--
					}
					right--
				} else if sum < target {
					left++ // Sum too small, increase left
				} else {
					right-- // Sum too large, decrease right
				}
			}
		}
	}

	return res
}