/**
 * Problem: 1865. Finding Pairs With a Certain Sum
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 58 ms (Beats 100%)
 */

// FindSumPairs represents a data structure for finding pairs with a certain sum
type FindSumPairs struct {
	Nums1     []int
	Nums2Dict map[int]int
	Nums2     []int
}

// Constructor initializes a new FindSumPairs instance with sorted nums1 and frequency map for nums2
func Constructor(nums1 []int, nums2 []int) FindSumPairs {
	sort.Ints(nums1)
	
	// Create new instance with proper initialization
	fsp := FindSumPairs{
		Nums2Dict: make(map[int]int),
		Nums2:     nums2,
		Nums1:     nums1,
	}

	// Build frequency map for nums2 elements
	for _, e := range nums2 {
		fsp.Nums2Dict[e]++
	}

	return fsp
}

// Add increases the value at given index in nums2 and updates frequency map
func (fsp *FindSumPairs) Add(index int, val int) {
	fsp.Nums2[index] += val
	fsp.Nums2Dict[fsp.Nums2[index]]++

	// Update frequency map by removing old value count
	if fsp.Nums2Dict[fsp.Nums2[index]-val] > 0 {
		fsp.Nums2Dict[fsp.Nums2[index]-val]--
	} else {
		delete(fsp.Nums2Dict, fsp.Nums2[index]-val)
	}
}

// Count returns the number of pairs (nums1[i], nums2[j]) that sum to tot
func (fsp *FindSumPairs) Count(tot int) int {
	res := 0

	// Iterate through nums1 and find matching pairs in nums2
	for _, num1 := range fsp.Nums1 {
		cand := tot - num1

		if cand < 0 {
			continue
		}
		// Add frequency count if candidate exists in nums2
		if count2, exists := fsp.Nums2Dict[cand]; exists {
			res += count2
		}
	}

	return res
}
