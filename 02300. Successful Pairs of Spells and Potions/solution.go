/**
 * Problem: 2300. Successful Pairs of Spells and Potions
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func successfulPairs(spells []int, potions []int, success int64) []int {
	// initialize max with the first potion value to find the overall maximum
	max := potions[0]

	// iterate over potions to update the maximum potion value
	for _, potion := range potions {
		// if current potion is larger than max, update max
		if potion > max {
			// assign the new maximum potion value
			max = potion
		}
		// end of if that updates max
	}
	// end of loop that computes the maximum potion value

	// create a frequency suffix array sized by max potion value + 1
	check := make([]int, max+1)

	// prepare the result slice with length equal to number of spells
	res := make([]int, len(spells))

	// count occurrences of each potion strength into the frequency array
	for _, potion := range potions {
		// increment the count for this potion strength
		check[potion]++
		// end of counting for this potion
	}
	// end of loop that populates frequency counts

	// convert frequency counts into suffix sums to get counts >= index
	for i := len(check) - 2; i >= 0; i-- {
		// accumulate counts from higher strengths into current index
		check[i] += check[i+1]
		// end of accumulation for this index
	}
	// end of loop that builds suffix sums

	// iterate over each spell to compute the number of successful potions
	for i := 0; i < len(spells); i++ {
		// declare index as int64 to match success and avoid repeated casts
		var index int64

		// compute the minimum required potion strength as ceil(success / spell)
		if success%int64(spells[i]) != 0 {
			// when division has remainder, add one to represent ceiling
			index = success/int64(spells[i]) + 1
		} else {
			// exact division yields the required potion strength
			index = success / int64(spells[i])
		}
		// end of computing required potion threshold

		// if required strength is beyond our checked range, no successful potions
		if index >= int64(len(check)) {
			// assign zero when no potion meets the requirement
			res[i] = 0
		} else {
			// otherwise use precomputed suffix count for the required index
			res[i] = check[index]
		}
		// end of assigning result for this spell
	}
	// end of loop over spells

	// return the computed results for all spells
	return res
}
