/**
 * Problem: 2598. Smallest Missing Non-negative Integer After Operations
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 2 ms (Beats 100%)
 */

func findSmallestInteger(nums []int, value int) int {
	// create slice mp to hold counts for each residue class modulo value
	mp := make([]int, value)

	// iterate over nums to populate residue counts in mp
	for _, x := range nums {
		// compute non-negative residue of x modulo value
		v := ((x % value) + value) % value
		// increment count for this residue class
		mp[v]++
	}
	// end of counting loop

	// initialize mex candidate to zero
	mex := 0

	// while there is at least one number matching the residue of mex
	for mp[mex%value] > 0 {
		// consume one occurrence of the current residue to move mex forward
		mp[mex%value]--
		// advance mex to test the next integer
		mex++
	}
	// end of mex advancement loop

	// return the smallest missing non-negative integer found
	return mex
}
