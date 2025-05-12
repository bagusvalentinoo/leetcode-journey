/**
 * Problem: 961. N-Repeated Element in Size 2N Array
 *
 * Difficulty: Easy
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func repeatedNTimes(nums []int) int {
	// Seed the random number generator to get different results each time
	rand.Seed(time.Now().UnixNano())

	for {
		// Generate two random indices
		i := rand.Intn(len(nums))
		j := rand.Intn(len(nums))

		// If they're different indices but have the same value, return that value
		if i != j && nums[i] == nums[j] {
			return nums[i]
		}
	}
}