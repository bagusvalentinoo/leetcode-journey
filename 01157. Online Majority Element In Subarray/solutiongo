/**
 * Problem: 1157. Online Majority Element In Subarray
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 55 ms (Beats 100%)
 */

// MajorityChecker is a data structure for efficiently querying the majority element in a subarray.
type MajorityChecker struct {
	digits  int            // Number of bits to represent elements (assumes elements fit in 15 bits)
	presum  [][]int        // Prefix sum of bits for each position in the array
	pos     map[int][]int  // Map from element value to its positions in the array
}

// Constructor initializes the MajorityChecker with the given array.
// It precomputes prefix sums for each bit and stores positions of each element.
func Constructor(arr []int) MajorityChecker {
	mc := MajorityChecker{
		digits:  15,                          // Use 15 bits for elements (sufficient for constraints)
		presum:  make([][]int, len(arr)+1),   // Prefix sum array, one extra for easier calculation
		pos:     make(map[int][]int),         // Map to store positions of each element
	}

	// Initialize prefix sum arrays for each bit
	for i := range mc.presum {
		mc.presum[i] = make([]int, mc.digits)
	}

	// Fill prefix sum and position map
	for i := 0; i < len(arr); i++ {
		n := arr[i]
		
		// Initialize position list for new element
		if _, ok := mc.pos[n]; !ok {
			mc.pos[n] = make([]int, 0)
		}

		// Store position of current element
		mc.pos[n] = append(mc.pos[n], i)

		// Update prefix sum for each bit
		for j := 0; j < mc.digits; j++ {
			mc.presum[i+1][j] = mc.presum[i][j] + (n & 1) // Add current bit to prefix sum
			n >>= 1 // Shift to next bit
		}
	}

	return mc
}

// Query returns the majority element in the subarray [left, right] with at least 'threshold' occurrences.
// If no such element exists, returns -1.
func (mc *MajorityChecker) Query(left int, right int, threshold int) int {
	ans := 0 // Variable to store the candidate majority element

	// Reconstruct the candidate majority element bit by bit
	for i := mc.digits - 1; i >= 0; i-- {
		cnt := mc.presum[right+1][i] - mc.presum[left][i] // Count of 1s for current bit in range
		b := 1 // Default bit value

		// Decide bit value based on count and threshold
		if cnt >= threshold {
			b = 1
		} else if right-left+1-cnt >= threshold {
			b = 0
		} else {
			return -1 // No majority element possible
		}

		ans = (ans << 1) + b // Build the candidate element
	}

	list := mc.pos[ans] // Get positions of candidate element

	if list == nil {
		return -1 // Candidate element does not exist
	}

	L := mc.floor(list, left-1) // Find first position >= left
	R := mc.floor(list, right)  // Find first position > right
	
	if R-L >= threshold {
		return ans // Candidate element is majority
	}

	return -1 // No majority element found
}

// floor returns the index of the first element in 'list' greater than 'n'.
// Used to count occurrences of an element in a given range.
func (mc *MajorityChecker) floor(list []int, n int) int {
	return sort.Search(len(list), func(i int) bool {
		return list[i] > n
	})
}
