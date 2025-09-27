/**
 * Problem: 1238. Circular Permutation in Binary Representation
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 13 ms (Beats 100%)
 */
 
func circularPermutation(n int, start int) []int {
	// Generate the Gray code permutation for n bits.
	res := permute(n)
	// Initialize the index of the start value.
	idx := 0

	// Find the index of the start value in the permutation.
	for i := range res {
		if res[i] == start {
			idx = i
			break
		}
	}

	// Rotate the permutation so that it starts from the start value.
	for i := 0; i < idx; i++ {
		res = append(res, res[i])
	}

	// Return the rotated permutation.
	return res[idx:]
}

// permute generates the Gray code sequence for n bits.
func permute(n int) []int {
	// Initialize the result slice with size 2^n.
	res := make([]int, 1<<n)

	// Build the Gray code sequence iteratively.
	for i := 0; i < n; i++ {
		mirror(res, 1<<i)
		flip(res, i)
	}

	// Return the generated Gray code sequence.
	return res
}

// mirror copies the first idx elements in reverse order to the next idx positions.
func mirror(nums []int, idx int) {
	for i := 0; i < idx; i++ {
		nums[idx+i] = nums[idx-i-1]
	}
}

// flip sets the idx-th bit for the second half of the nums slice.
func flip(nums []int, idx int) {
	n := 1 << idx

	for i := 0; i < n; i++ {
		nums[i+n] |= 1 << idx
	}
}
