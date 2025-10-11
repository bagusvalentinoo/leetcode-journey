/**
 * Problem: 3186. Maximum Total Damage With Spell Casting
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 92 ms (Beats 100%)
 */

// Pair struct holds a value and its corresponding accumulated damage.
type Pair struct {
	first  int   // The spell value.
	second int64 // The accumulated damage for this spell value.
}

// maximumTotalDamage calculates the maximum total damage with spell casting.
func maximumTotalDamage(nums []int) int64 {
	// Sort the spell values in ascending order.
	sort.Ints(nums)

	// dp stores pairs of spell value and their maximum accumulated damage.
	var dp []Pair

	// preMax keeps track of the maximum damage achievable so far.
	var preMax int64 = 0

	// ans stores the final answer for the maximum total damage.
	var ans int64 = 0

	// dpIdx is the index pointer for traversing the dp array.
	dpIdx := 0

	// Iterate through the sorted spell values.
	for i := 0; i < len(nums); {
		// Update preMax for spells that are not adjacent (difference > 2).
		for dpIdx < len(dp) && dp[dpIdx].first+2 < nums[i] {
			preMax = max(preMax, dp[dpIdx].second)
			dpIdx++
		}

		// j is used to group identical spell values.
		j := i

		// cur accumulates the total damage for the current spell value.
		var cur int64 = 0

		// Sum up all identical spell values.
		for j < len(nums) && nums[j] == nums[i] {
			cur += int64(nums[j])
			j++
		}

		// Update the answer with the maximum damage found so far.
		ans = max(ans, cur+preMax)

		// Store the current spell value and its accumulated damage in dp.
		dp = append(dp, Pair{nums[i], cur + preMax})

		// Move to the next group of spell values.
		i = j
	}

	// Return the maximum total damage.
	return ans
}
