/**
 * Problem: 1044. Longest Duplicate Substring
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 53 ms (Beats 100%)
 */

func longestDupSubstring(s string) string {
	// Get the length of the input string
	n := len(s)

	// Create a slice to store the indices of the string
	ord := make([]int, n)

	// Initialize the indices from 0 to n-1
	for i := range n {
		ord[i] = i
	}

	// Sort the indices based on the lexicographical order of the suffixes starting at each index
	sort.Slice(ord, func(i, j int) bool {
		i, j = ord[i], ord[j]
		return s[i:] < s[j:]
	})

	// Create a slice to store the rank of each suffix
	rank := make([]int, n)

	// Assign the rank to each index based on the sorted order
	for sortedIndex, originalIndex := range ord {
		rank[originalIndex] = sortedIndex
	}

	// curr keeps track of the length of the current longest common prefix
	var curr int
	// best stores the longest duplicate substring found so far
	var best string

	// Iterate through each suffix by its rank
	for i, r := range rank {
		// Move to the next suffix in the sorted order
		r++

		// If it's the last suffix, skip
		if r == n {
			continue
		}

		// Get the index of the next suffix in the sorted order
		j := ord[r]

		// Start comparing from the current prefix length
		ii, jj := i+curr, j+curr

		// Compare characters while they match and within bounds
		for ii < n && jj < n && s[ii] == s[jj] {
			ii++
			jj++
			curr++
		}

		// Update the best substring if a longer one is found
		if len(best) < curr {
			best = s[i:ii]
		}

		// Decrease curr for the next iteration to optimize comparison
		if curr > 0 {
			curr--
		}
	}

	// Return the longest duplicate substring found
	return best
}
