/**
 * Problem: 3003. Maximize the Number of Partitions After Operations
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

// Data struct represents the state of a segment with its mask, segment count,
// and flags for full prefix and suffix.
type Data struct {
	mask     uint32
	segs     uint16
	fullpref bool
	fullsuff bool
}

// DP array is used to store intermediate results for each index in the string.
var DP [10000]Data

// maxPartitionsAfterOperations calculates the maximum number of partitions
// after performing operations on the string `s` with a limit of `k` unique letters.
func maxPartitionsAfterOperations(s string, k int) int {
	// Get the length of the input string.
	n := len(s)

	// If the string length is 1 or `k` is 26, return 1 as no partitioning is needed.
	if n == 1 || k == 26 {
		return 1
	}

	// Initialize a bitmask to track unique letters in the string.
	var uniqueletters uint32

	// Iterate through the string to populate the unique letters bitmask.
	for i := range s {
		uniqueletters |= 1 << (s[i] - 'a')
	}

	// If the number of unique letters is less than `k`, return 1.
	if bits.OnesCount32(uniqueletters) < k {
		return 1
	}

	// Initialize the first and last elements of the DP array.
	DP[0], DP[n-1] = Data{}, Data{}

	// Variables to track the current mask, segment count, and unique letter count.
	var mask uint32
	var segments uint16
	var count int

	// Iterate through the string to calculate prefix segments.
	for i := range n - 1 {
		// Get the current character's index in the alphabet.
		c := s[i] - 'a'

		// Check if the current character is a new unique letter.
		newbit := 1 &^ int(mask>>c)
		count += newbit

		// Update the mask with the current character.
		bit := uint32(1 << c)
		mask |= bit

		// If the count exceeds `k`, start a new segment.
		if count > k {
			segments++
			count = 1
			mask = bit
		}

		// Update the DP array with the current state.
		DP[i+1] = Data{mask, segments, count == k, false}
	}

	// Reset variables for suffix calculation.
	mask, segments, count = 0, 0, 0

	// Iterate through the string in reverse to calculate suffix segments.
	for i := n - 1; i > 0; i-- {
		// Get the current character's index in the alphabet.
		c := s[i] - 'a'

		// Check if the current character is a new unique letter.
		newbit := 1 &^ int(mask>>c)
		count += newbit

		// Update the mask with the current character.
		bit := uint32(1 << c)
		mask |= bit

		// If the count exceeds `k`, start a new segment.
		if count > k {
			segments++
			count = 1
			mask = bit
		}

		// Update the DP array with the current state.
		DP[i-1].mask |= mask
		DP[i-1].segs += segments
		DP[i-1].fullsuff = count == k
	}

	// Variable to store the maximum number of partitions.
	var result uint16

	// Constant representing the full letter mask (all 26 letters).
	const LETTER_MASK = 1<<26 - 1

	// Iterate through the DP array to calculate the result.
	for i := range n {
		// Check if the current segment has a full prefix and suffix.
		full := DP[i].fullpref && DP[i].fullsuff

		// Get the current mask and segment count.
		mask, seg := DP[i].mask, DP[i].segs

		// Adjust the segment count based on the mask and full flag.
		if full && mask != LETTER_MASK {
			seg += 2
		} else if bits.OnesCount32(mask) >= k {
			seg += 1
		}

		// Update the result with the maximum segment count.
		result = max(result, seg+1)
	}

	// Return the result as an integer.
	return int(result)
}
